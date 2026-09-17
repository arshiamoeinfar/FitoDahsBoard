// src/features/training/CoachTraining.jsx
import { useState } from "react";
import { Plus, Search, Dumbbell } from "lucide-react";

import {
  initialPlans,
  initialStudents,
  initialDays,
} from "../../Components/CoachDashboard/programs/data";
import { PlanCard } from "../../Components/CoachDashboard/programs/ui";
import Builder from "../../Components/CoachDashboard/programs/Builder";
import {
  ExerciseLibraryModal,
  ExerciseSettingsModal,
  PreviewModal,
  ApplyTrainingModal,
} from "../../Components/CoachDashboard/programs/Modals";
import Navbar from "../../Components/shared/Navbar/Navbar";
import HeaderDashBoard from "../../Components/DashBoardAuth/HeaderDashBoard/HeaderDashBoard";

export default function ApplyWorkout() {
  const [plans, setPlans] = useState(initialPlans);
  const [page, setPage] = useState("plans");
  const [builderStep, setBuilderStep] = useState(1);

  const [planInfo, setPlanInfo] = useState({
    title: "",
    description: "",
    goal: "افزایش حجم عضلانی",
    level: "متوسط",
    weeks: 8,
    daysPerWeek: 4,
    startDate: "",
  });

  const [days, setDays] = useState(initialDays);
  const [selectedDayId, setSelectedDayId] = useState(1);

  const [showExerciseModal, setShowExerciseModal] = useState(false);
  const [showExerciseSettings, setShowExerciseSettings] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const [showPreview, setShowPreview] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);

  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("همه");

  const selectedDay = days.find((day) => day.id === selectedDayId);

  const filteredPlans = plans.filter((plan) => {
    if (filter === "همه") return true;
    return plan.status === filter;
  });

  /* =========================================================
     PLAN ACTIONS
  ========================================================= */

  const startNewPlan = () => {
    setPlanInfo({
      title: "",
      description: "",
      goal: "افزایش حجم عضلانی",
      level: "متوسط",
      weeks: 8,
      daysPerWeek: 4,
      startDate: "",
    });
    setDays(initialDays);
    setSelectedDayId(1);
    setBuilderStep(1);
    setPage("builder");
  };

  const savePlan = () => {
    const newPlan = {
      id: Date.now(),
      title: planInfo.title || "برنامه بدون نام",
      description: planInfo.description,
      goal: planInfo.goal,
      level: planInfo.level,
      weeks: Number(planInfo.weeks),
      daysPerWeek: Number(planInfo.daysPerWeek),
      students: 0,
      status: "پیش‌نویس",
      updatedAt: "همین الان",
    };
    setPlans((prev) => [newPlan, ...prev]);
    setPage("plans");
  };

  const addDay = () => {
    const newId = Math.max(...days.map((day) => day.id)) + 1;
    const newDay = {
      id: newId,
      title: `روز ${newId}`,
      shortTitle: `روز ${newId}`,
      exercises: [],
    };
    setDays((prev) => [...prev, newDay]);
    setSelectedDayId(newId);
  };

  const removeDay = (dayId) => {
    if (days.length <= 1) return;
    const newDays = days.filter((day) => day.id !== dayId);
    setDays(newDays);
    if (selectedDayId === dayId) {
      setSelectedDayId(newDays[0].id);
    }
  };

  /* =========================================================
     EXERCISE ACTIONS
  ========================================================= */

  const addExercise = (exercise) => {
    const newExercise = {
      ...exercise,
      uniqueId: `${exercise.id}-${Date.now()}-${Math.random()}`,
      order: selectedDay.exercises.length + 1,
      sets: [
        { id: 1, reps: "10", weight: "60", rest: "90" },
        { id: 2, reps: "10", weight: "60", rest: "90" },
        { id: 3, reps: "8", weight: "65", rest: "120" },
      ],
      rpe: "8",
      tempo: "3-1-1",
      notes: "",
    };

    setDays((prev) =>
      prev.map((day) =>
        day.id === selectedDayId
          ? { ...day, exercises: [...day.exercises, newExercise] }
          : day,
      ),
    );
    setShowExerciseModal(false);
  };

  const deleteExercise = (uniqueId) => {
    setDays((prev) =>
      prev.map((day) =>
        day.id === selectedDayId
          ? {
              ...day,
              exercises: day.exercises.filter(
                (exercise) => exercise.uniqueId !== uniqueId,
              ),
            }
          : day,
      ),
    );
  };

  const openExerciseSettings = (exercise) => {
    setSelectedExercise(exercise);
    setShowExerciseSettings(true);
  };

  const updateExercise = (updatedExercise) => {
    setDays((prev) =>
      prev.map((day) =>
        day.id === selectedDayId
          ? {
              ...day,
              exercises: day.exercises.map((exercise) =>
                exercise.uniqueId === updatedExercise.uniqueId
                  ? updatedExercise
                  : exercise,
              ),
            }
          : day,
      ),
    );
    setShowExerciseSettings(false);
    setSelectedExercise(null);
  };

  const moveExercise = (index, direction) => {
    const exercises = [...selectedDay.exercises];
    const targetIndex = direction === "up" ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= exercises.length) return;

    [exercises[index], exercises[targetIndex]] = [
      exercises[targetIndex],
      exercises[index],
    ];

    setDays((prev) =>
      prev.map((day) =>
        day.id === selectedDayId ? { ...day, exercises } : day,
      ),
    );
  };

  /* =========================================================
     RENDER — BUILDER PAGE
  ========================================================= */

  if (page === "builder") {
    return (
      <>
        <Builder
          builderStep={builderStep}
          setBuilderStep={setBuilderStep}
          planInfo={planInfo}
          setPlanInfo={setPlanInfo}
          days={days}
          selectedDayId={selectedDayId}
          setSelectedDayId={setSelectedDayId}
          selectedDay={selectedDay}
          addDay={addDay}
          removeDay={removeDay}
          onAddExercise={() => setShowExerciseModal(true)}
          onEditExercise={openExerciseSettings}
          onDeleteExercise={deleteExercise}
          onMoveExercise={moveExercise}
          onBack={() => setPage("plans")}
          onPreview={() => setShowPreview(true)}
          onSave={savePlan}
        />

        {showExerciseModal && (
          <ExerciseLibraryModal
            onClose={() => setShowExerciseModal(false)}
            onAdd={addExercise}
          />
        )}

        {showExerciseSettings && selectedExercise && (
          <ExerciseSettingsModal
            exercise={selectedExercise}
            onClose={() => {
              setShowExerciseSettings(false);
              setSelectedExercise(null);
            }}
            onSave={updateExercise}
          />
        )}

        {showPreview && (
          <PreviewModal
            planInfo={planInfo}
            days={days}
            onClose={() => setShowPreview(false)}
            onApply={() => {
              setShowPreview(false);
              setShowApplyModal(true);
            }}
          />
        )}

        {showApplyModal && (
          <ApplyTrainingModal
            planInfo={planInfo}
            students={students}
            setStudents={setStudents}
            onClose={() => setShowApplyModal(false)}
          />
        )}
      </>
    );
  }

  /* =========================================================
     RENDER — PLANS LIST PAGE
  ========================================================= */

  return (
    <div className="min-h-screen bg-[#F5F7FB] flex justify-center">
      <div className="w-full max-w-[1600px] grid grid-cols-[90px_1fr] gap-6 px-8 py-6 bg-[#F5F7FB]">
        <div className="">
          <Navbar />
        </div>
        <div className="py-3  ">
          <div className="grid grid-cols-12 gap-6 ">
            <HeaderDashBoard
              title="برنامه ها"
              description="سلام مهدی، امروز آماده‌ای شاگردانت را بهتر کنی؟"
            />
          </div>
          <div className="col-span-12 mt-5">
            {/* FILTERS */}
            <div className="mb-7 flex items-center justify-between rounded-2xl border border-[#E8EDF3] bg-white p-3">
              <div className="flex gap-2 ">
                {["همه", "فعال", "پیش‌نویس"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setFilter(item)}
                    className={`rounded-xl cursor-pointer px-5 py-2.5 text-sm transition ${
                      filter === item
                        ? "bg-[#E8F3FF] font-semibold text-[#007BFF]"
                        : "text-[#858A91] hover:bg-[#F5F7FA]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
              <button
                onClick={startNewPlan}
                className="flex items-center gap-2 rounded-2xl bg-[#007BFF] px-6 py-3 text-white shadow-lg shadow-blue-100 transition hover:-translate-y-0.4 hover:bg-[#006FE6] cursor-pointer text-sm"
              >
                <Plus size={21} />
                طراحی برنامه جدید
              </button>
              <div className="flex w-[280px] items-center gap-2 rounded-xl bg-[#F7F9FB] px-4 py-3">
                <Search size={18} className="text-[#F5F7FB]" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="جستجوی برنامه..."
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>

              </div>

            </div>
          </div>
          <div className="col-span-12 grid-cols-2 gap2`">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
              {filteredPlans
                .filter((plan) =>
                  plan.title.toLowerCase().includes(search.toLowerCase()),
                )
                .map((plan) => (
                  <PlanCard
                    key={plan.id}
                    plan={plan}
                    onEdit={() => {
                      setPlanInfo({
                        title: plan.title,
                        description: plan.description,
                        goal: plan.goal,
                        level: plan.level,
                        weeks: plan.weeks,
                        daysPerWeek: plan.daysPerWeek,
                        startDate: "",
                      });
                      setBuilderStep(1);
                      setPage("builder");
                    }}
                  />
                ))}
            </div>
          </div>
        </div>

        {/* PLAN CARDS */}

        {filteredPlans.length === 0 && (
          <div className="rounded-3xl border border-dashed border-[#D9E0E8] bg-white py-20 text-center">
            <Dumbbell size={42} className="mx-auto mb-4 text-[#B7C0CA]" />
            <p className="text-lg font-semibold">برنامه‌ای پیدا نشد</p>
          </div>
        )}
      </div>
    </div>
  );
}
