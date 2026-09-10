import { useState } from "react";
import {
  X,
  CalendarDays,
  Dumbbell,
  TrendingUp,
  CheckCircle2,
  Target,
} from "lucide-react";

const workoutData = [
  {
    id: 1,
    month: "تیر ۱۴۰۵",
    coach: "علی رضایی",
    startDate: "۱ تیر ۱۴۰۵",
    endDate: "۳۱ تیر ۱۴۰۵",
    stats: {
      sessions: 18,
      totalSessions: 20,
      adherence: 90,
      volume: "12,450",
      performance: 87,
    },
    days: [
      {
        id: 1,
        day: "شنبه",
        title: "سینه و پشت بازو",
        exercises: [
          {
            name: "پرس سینه هالتر",
            sets: 4,
            reps: "8-10",
            weight: "70 kg",
            rest: "90 ثانیه",
            performance: "72.5 kg × 9",
            progress: "+12%",
          },
          {
            name: "پرس بالا سینه دمبل",
            sets: 3,
            reps: "10-12",
            weight: "24 kg",
            rest: "60 ثانیه",
            performance: "26 kg × 11",
            progress: "+8%",
          },
          {
            name: "فلای دستگاه",
            sets: 3,
            reps: "12-15",
            weight: "40 kg",
            rest: "60 ثانیه",
            performance: "45 kg × 13",
            progress: "+10%",
          },
          {
            name: "پشت بازو سیم‌کش",
            sets: 3,
            reps: "10-12",
            weight: "25 kg",
            rest: "60 ثانیه",
            performance: "30 kg × 12",
            progress: "+15%",
          },
        ],
      },
      {
        id: 2,
        day: "دوشنبه",
        title: "پشت و جلو بازو",
        exercises: [
          {
            name: "لت سیم‌کش",
            sets: 4,
            reps: "8-12",
            weight: "60 kg",
            rest: "90 ثانیه",
            performance: "65 kg × 10",
            progress: "+9%",
          },
          {
            name: "قایقی دستگاه",
            sets: 3,
            reps: "10-12",
            weight: "55 kg",
            rest: "75 ثانیه",
            performance: "60 kg × 11",
            progress: "+7%",
          },
          {
            name: "جلو بازو هالتر",
            sets: 3,
            reps: "8-10",
            weight: "30 kg",
            rest: "60 ثانیه",
            performance: "35 kg × 9",
            progress: "+12%",
          },
        ],
      },
      {
        id: 3,
        day: "چهارشنبه",
        title: "پا",
        exercises: [
          {
            name: "اسکوات",
            sets: 4,
            reps: "8-10",
            weight: "100 kg",
            rest: "120 ثانیه",
            performance: "110 kg × 8",
            progress: "+10%",
          },
          {
            name: "پرس پا",
            sets: 4,
            reps: "10-12",
            weight: "180 kg",
            rest: "90 ثانیه",
            performance: "200 kg × 11",
            progress: "+11%",
          },
          {
            name: "جلو پا دستگاه",
            sets: 3,
            reps: "12-15",
            weight: "50 kg",
            rest: "60 ثانیه",
            performance: "55 kg × 14",
            progress: "+9%",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    month: "خرداد ۱۴۰۵",
    coach: "علی رضایی",
    startDate: "۱ خرداد ۱۴۰۵",
    endDate: "۳۱ خرداد ۱۴۰۵",
    stats: {
      sessions: 16,
      totalSessions: 20,
      adherence: 80,
      volume: "10,850",
      performance: 78,
    },
    days: [
      {
        id: 1,
        day: "شنبه",
        title: "سینه و پشت بازو",
        exercises: [
          {
            name: "پرس سینه هالتر",
            sets: 4,
            reps: "8-10",
            weight: "65 kg",
            rest: "90 ثانیه",
            performance: "65 kg × 8",
            progress: "+5%",
          },
          {
            name: "پرس بالا سینه دمبل",
            sets: 3,
            reps: "10-12",
            weight: "22 kg",
            rest: "60 ثانیه",
            performance: "24 kg × 10",
            progress: "+6%",
          },
        ],
      },
      {
        id: 2,
        day: "چهارشنبه",
        title: "پا",
        exercises: [
          {
            name: "اسکوات",
            sets: 4,
            reps: "8-10",
            weight: "90 kg",
            rest: "120 ثانیه",
            performance: "100 kg × 8",
            progress: "+8%",
          },
        ],
      },
    ],
  },
];

export default function WorkoutProgramModal({
  showModal,
  setShowModal,
}) {
  const [selectedMonth, setSelectedMonth] = useState(workoutData[0]);
  const [selectedDay, setSelectedDay] = useState(
    workoutData[0].days[0]
  );

  if (!showModal) return null;

  const changeMonth = (month) => {
    setSelectedMonth(month);
    setSelectedDay(month.days[0]);
  };

  return (
    <div
      dir="rtl"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
    >
      <div className="flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              برنامه‌های تمرینی من
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              برنامه مربی و عملکرد تمرینی 
            </p>
          </div>
          <button
            onClick={() => setShowModal(false)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-500 transition hover:bg-gray-200"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex min-h-0 flex-1">

          {/* Months */}
          <aside className="w-64 shrink-0 overflow-y-auto border-l border-gray-100 bg-gray-50 p-5">

            <div className="mb-4 flex items-center gap-2">
              <CalendarDays size={18} className="text-blue-600" />

              <h3 className="font-bold text-gray-800">
                ماه‌های برنامه
              </h3>
            </div>

            <div className="space-y-2">
              {workoutData.map((month) => (
                <button
                  key={month.id}
                  onClick={() => changeMonth(month)}
                  className={`w-full rounded-2xl p-4 text-right transition ${
                    selectedMonth.id === month.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">
                      {month.month}
                    </span>

                    {selectedMonth.id === month.id && (
                      <CheckCircle2 size={17} />
                    )}
                  </div>

                  <p
                    className={`mt-2 text-xs ${
                      selectedMonth.id === month.id
                        ? "text-blue-100"
                        : "text-gray-400"
                    }`}
                  >
                    {month.startDate} تا {month.endDate}
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-white p-4">
              <p className="text-xs text-gray-400">
                مربی
              </p>

              <p className="mt-1 font-bold text-gray-800">
                {selectedMonth.coach}
              </p>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 overflow-y-auto p-6">

            {/* Month */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  برنامه {selectedMonth.month}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {selectedMonth.startDate} تا{" "}
                  {selectedMonth.endDate}
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                مربی: {selectedMonth.coach}
              </div>
            </div>

            {/* Stats */}
            <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">

              <StatCard
                icon={<CheckCircle2 size={18} />}
                title="جلسات انجام شده"
                value={`${selectedMonth.stats.sessions}/${selectedMonth.stats.totalSessions}`}
              />

              <StatCard
                icon={<Target size={18} />}
                title="پایبندی"
                value={`${selectedMonth.stats.adherence}%`}
              />

              <StatCard
                icon={<Dumbbell size={18} />}
                title="حجم تمرینی"
                value={`${selectedMonth.stats.volume} kg`}
              />

              <StatCard
                icon={<TrendingUp size={18} />}
                title="عملکرد کلی"
                value={`${selectedMonth.stats.performance}%`}
              />

            </div>

            {/* Performance */}
            <div className="mb-6 rounded-2xl border border-gray-100 bg-gray-50 p-5">

              <div className="mb-3 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">
                    عملکرد در {selectedMonth.month}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    عملکرد شما نسبت به برنامه مربی
                  </p>
                </div>

                <span className="text-2xl font-bold text-blue-600">
                  {selectedMonth.stats.performance}%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all duration-500"
                  style={{
                    width: `${selectedMonth.stats.performance}%`,
                  }}
                />
              </div>
            </div>

            {/* Days */}
            <h3 className="mb-3 font-bold text-gray-900">
              روزهای تمرینی
            </h3>

            <div className="mb-6 flex gap-3 overflow-x-auto pb-2">
              {selectedMonth.days.map((day) => (
                <button
                  key={day.id}
                  onClick={() => setSelectedDay(day)}
                  className={`min-w-[160px] rounded-2xl border p-4 text-right transition ${
                    selectedDay.id === day.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-100 bg-white hover:border-gray-200"
                  }`}
                >
                  <p className="text-xs text-gray-400">
                    {day.day}
                  </p>

                  <p className="mt-1 font-bold text-gray-800">
                    {day.title}
                  </p>

                  <p className="mt-2 text-xs text-gray-500">
                    {day.exercises.length} حرکت
                  </p>
                </button>
              ))}
            </div>

            {/* Exercises */}
            <div className="space-y-3">

              {selectedDay.exercises.map((exercise, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
                >

                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Dumbbell size={20} />
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800">
                          {exercise.name}
                        </h4>

                        <p className="mt-1 text-xs text-gray-400">
                          حرکت {index + 1}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-4">

                      <Info
                        label="ست"
                        value={exercise.sets}
                      />

                      <Info
                        label="تکرار"
                        value={exercise.reps}
                      />

                      <Info
                        label="وزن"
                        value={exercise.weight}
                      />

                      <Info
                        label="استراحت"
                        value={exercise.rest}
                      />

                    </div>
                  </div>

                  {/* Performance */}
                  <div className="mt-4 flex flex-col gap-2 rounded-xl bg-gray-50 p-3 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-2">
                      <TrendingUp
                        size={17}
                        className="text-green-500"
                      />

                      <span className="text-xs text-gray-500">
                        بهترین عملکرد:
                      </span>

                      <span className="text-sm font-bold text-gray-800">
                        {exercise.performance}
                      </span>
                    </div>

                    <span className="w-fit rounded-lg bg-green-50 px-3 py-1 text-xs font-bold text-green-600">
                      {exercise.progress} پیشرفت
                    </span>

                  </div>
                </div>
              ))}

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <p className="text-xs text-gray-400">
        {title}
      </p>

      <p className="mt-1 text-lg font-bold text-gray-900">
        {value}
      </p>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-400">
        {label}
      </p>

      <p className="mt-1 font-bold text-gray-800">
        {value}
      </p>
    </div>
  );
}