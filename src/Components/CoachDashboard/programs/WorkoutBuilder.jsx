import { useMemo, useState } from "react";
import { Dumbbell, Search, Check, ChevronLeft } from "lucide-react";
import WorkoutHeader from "./WorkoutHeader";
import ExerciseLibrary from "./ExerciseLibrary";
import WorkoutPlanTable from "./WorkoutPlanTable";

const initialStudents = [
  { id: "s1", name: "علی رضایی", subtitle: "برنامه بدنسازی", avatar: "" },
  { id: "s2", name: "محمد احمدی", subtitle: "افزایش حجم", avatar: "" },
  { id: "s3", name: "امیر محمدی", subtitle: "چربی‌سوزی", avatar: "" },
  { id: "s4", name: "پارسا کریمی", subtitle: "برنامه قدرتی", avatar: "" },
  { id: "s5", name: "آرین مرادی", subtitle: "برنامه عمومی", avatar: "" },
];

const initialExercises = [
  { id: "e1", name: "پرس سینه هالتر", muscle: "سینه", equipment: "هالتر", image: "/images/exercises/bench-press.jpg" },
  { id: "e2", name: "بالاسینه دمبل", muscle: "سینه", equipment: "دمبل", image: "/images/exercises/incline-dumbbell.jpg" },
  { id: "e3", name: "قفسه سینه", muscle: "سینه", equipment: "دمبل", image: "/images/exercises/chest-fly.jpg" },
  { id: "e4", name: "لت سیم‌کش", muscle: "پشت", equipment: "دستگاه", image: "/images/exercises/lat-pulldown.jpg" },
  { id: "e5", name: "قایقی سیم‌کش", muscle: "پشت", equipment: "دستگاه", image: "/images/exercises/seated-row.jpg" },
  { id: "e6", name: "جلو بازو دمبل", muscle: "بازو", equipment: "دمبل", image: "/images/exercises/dumbbell-curl.jpg" },
  { id: "e7", name: "پشت بازو سیم‌کش", muscle: "بازو", equipment: "دستگاه", image: "/images/exercises/triceps-pushdown.jpg" },
  { id: "e8", name: "اسکوات", muscle: "پا", equipment: "هالتر", image: "/images/exercises/squat.jpg" },
  { id: "e9", name: "پرس پا", muscle: "پا", equipment: "دستگاه", image: "/images/exercises/leg-press.jpg" },
  { id: "e10", name: "پرس سرشانه دمبل", muscle: "سرشانه", equipment: "دمبل", image: "/images/exercises/shoulder-press.jpg" },
];

const weekdays = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه"];

function makePlanItem(exercise, dayId) {
  return {
    id: `${exercise.id}-${dayId}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    exerciseId: exercise.id,
    name: exercise.name,
    muscle: exercise.muscle,
    sets: 4,
    reps: 12,
    rest: 60,
    weight: "",
    note: "",
    dayId,
  };
}

export default function WorkoutBuilder({
  students = initialStudents,
  exercises = initialExercises,
  onSave,
}) {
  const [studentId, setStudentId] = useState(students[0]?.id ?? "");
  const [activeDay, setActiveDay] = useState("شنبه");
  const [studentSearch, setStudentSearch] = useState("");
  const [exerciseSearch, setExerciseSearch] = useState("");
  const [activeMuscle, setActiveMuscle] = useState("همه");
  const [plan, setPlan] = useState([]);
  const [savedMessage, setSavedMessage] = useState("");

  const filteredStudents = useMemo(() => {
    const q = studentSearch.trim().toLocaleLowerCase("fa");
    if (!q) return students;
    return students.filter((student) =>
      `${student.name} ${student.subtitle ?? ""}`.toLocaleLowerCase("fa").includes(q)
    );
  }, [students, studentSearch]);

  const dayItems = useMemo(
    () => plan.filter((item) => item.dayId === activeDay),
    [plan, activeDay]
  );

  function addExercise(exercise) {
    setPlan((current) => [...current, makePlanItem(exercise, activeDay)]);
    setSavedMessage("");
  }

  function updateItem(id, field, value) {
    setPlan((current) =>
      current.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
    setSavedMessage("");
  }

  function removeItem(id) {
    setPlan((current) => current.filter((item) => item.id !== id));
    setSavedMessage("");
  }

  function savePlan() {
    const payload = {
      studentId,
      day: activeDay,
      plan: plan.map(({ id, ...item }) => item),
    };
    onSave?.(payload);
    setSavedMessage("برنامه تمرینی آماده ذخیره است.");
  }

  return (
    <main dir="rtl" className="min-h-screen bg-[#F3F8FE] p-3 font-[Vazirmatn, sans-serif] text-slate-700 sm:p-5">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-4">
        <WorkoutHeader
          weekdays={weekdays}
          activeDay={activeDay}
          onDayChange={setActiveDay}
          students={filteredStudents}
          selectedStudentId={studentId}
          onStudentChange={setStudentId}
          studentSearch={studentSearch}
          onStudentSearchChange={setStudentSearch}
        />

        <ExerciseLibrary
          exercises={exercises}
          search={exerciseSearch}
          onSearchChange={setExerciseSearch}
          activeMuscle={activeMuscle}
          onMuscleChange={setActiveMuscle}
          onAddExercise={addExercise}
        />

        <WorkoutPlanTable
          day={activeDay}
          items={dayItems}
          onUpdate={updateItem}
          onRemove={removeItem}
        />

        <div className="flex flex-col gap-3 rounded-2xl border border-blue-50 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-slate-500">
            {savedMessage || `روز ${activeDay} · ${dayItems.length} حرکت انتخاب شده`}
          </div>
          <button
            type="button"
            onClick={savePlan}
            disabled={!studentId || plan.length === 0}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#087BFA] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Check size={16} />
            ذخیره برنامه
            <ChevronLeft size={16} />
          </button>
        </div>
      </div>
    </main>
  );
}
