import { useState } from "react";

const workoutHistory = [
  {
    id: 1,
    date: "امروز",
    day: "روز پا",
    exercises: 8,
    sets: 4,
    duration: "1 ساعت",
    status: "completed",

    details: [
      {
        id: 1,
        name: "اسکوات با هالتر",
        sets: 4,
        reps: 8,
        weight: "80 KG",
        status: "completed",
      },
      {
        id: 2,
        name: "پرس پا",
        sets: 4,
        reps: 10,
        weight: "140 KG",
        status: "completed",
      },
      {
        id: 3,
        name: "جلو پا دستگاه",
        sets: 4,
        reps: 12,
        weight: "45 KG",
        status: "completed",
      },
      {
        id: 4,
        name: "پشت پا دستگاه",
        sets: 4,
        reps: 10,
        weight: "40 KG",
        status: "completed",
      },
    ],
  },

  {
    id: 2,
    date: "دیروز",
    day: "روز فشاری",
    exercises: 8,
    sets: 4,
    duration: "1 ساعت",
    status: "completed",

    details: [
      {
        id: 1,
        name: "پرس سینه",
        sets: 4,
        reps: 8,
        weight: "70 KG",
        status: "completed",
      },
      {
        id: 2,
        name: "پرس بالا سینه",
        sets: 4,
        reps: 10,
        weight: "50 KG",
        status: "completed",
      },
      {
        id: 3,
        name: "پرس سرشانه",
        sets: 4,
        reps: 10,
        weight: "30 KG",
        status: "completed",
      },
    ],
  },

  {
    id: 3,
    date: "۲۹ مرداد",
    day: "روز فشاری",
    exercises: 8,
    sets: 4,
    duration: "1 ساعت",
    status: "completed",

    details: [
      {
        id: 1,
        name: "پرس سینه",
        sets: 4,
        reps: 8,
        weight: "67.5 KG",
        status: "completed",
      },
      {
        id: 2,
        name: "فلای دستگاه",
        sets: 4,
        reps: 12,
        weight: "45 KG",
        status: "completed",
      },
    ],
  },
];


// ===============================
// Workout Details
// ===============================

function WorkoutDetails({ workout, onClose }) {
  if (!workout) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-overlay backdrop-blur-sm p-5"
      onClick={onClose}
    >
      <div
        dir="rtl"
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-[32px] bg-surface shadow-2xl"
      >

        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-6">

          <div>
            <span className="text-sm text-primary">
              {workout.date}
            </span>

            <h2 className="mt-2 text-2xl text-foreground">
              {workout.day}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="flex size-10 items-center justify-center rounded-full bg-surface-secondary text-xl transition hover:bg-primary/10"
          >
            ✕
          </button>

        </div>


        {/* Summary */}
        <div className="grid grid-cols-3 gap-3 p-6">

          {/* Exercises */}
          <div className="rounded-2xl bg-surface-secondary p-4 text-center">

            <div className="mb-2 text-2xl">
              🏋️
            </div>

            <p className="text-xs text-muted">
              حرکات
            </p>

            <p className="mt-1 text-lg text-foreground">
              {workout.exercises}
            </p>

          </div>


          {/* Sets */}
          <div className="rounded-2xl bg-surface-secondary p-4 text-center">

            <div className="mb-2 text-2xl">
              🔄
            </div>

            <p className="text-xs text-muted">
              ست‌ها
            </p>

            <p className="mt-1 text-lg text-foreground">
              {workout.sets}
            </p>

          </div>


          {/* Duration */}
          <div className="rounded-2xl bg-surface-secondary p-4 text-center">

            <div className="mb-2 text-2xl">
              ⏱️
            </div>

            <p className="text-xs text-muted">
              مدت تمرین
            </p>

            <p className="mt-1 text-lg text-foreground">
              {workout.duration}
            </p>

          </div>

        </div>


        {/* Exercises */}
        <div className="max-h-[45vh] overflow-y-auto px-6 pb-6">

          <h3 className="mb-4 text-lg text-foreground">
            حرکات انجام شده
          </h3>


          <div className="space-y-3">

            {workout.details.map((exercise) => (

              <div
                key={exercise.id}
                className="flex items-center justify-between rounded-2xl border border-border bg-surface p-4 transition hover:border-primary/30 hover:bg-surface-secondary"
              >

                <div className="flex items-center gap-3">

                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-xl">
                    🏋️
                  </div>

                  <div>

                    <p className="text-sm text-foreground">
                      {exercise.name}
                    </p>

                    <p className="mt-1 text-xs text-muted">
                      {exercise.sets} ست × {exercise.reps} تکرار
                    </p>

                  </div>

                </div>


                <div className="text-left">

                  <p className="text-sm text-foreground">
                    {exercise.weight}
                  </p>

                  <div className="mt-1 flex items-center gap-1 text-xs text-[#6BAF41]">
                    <span>✓</span>
                    انجام شده
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </div>
  );
}


// ===============================
// Main Component
// ===============================

export default function WorkoutHistory() {

  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const [showAll, setShowAll] = useState(false);


  const visibleWorkouts = showAll
    ? workoutHistory
    : workoutHistory.slice(0, 3);


  return (
    <>

      <section
        dir="rtl"
        className="h-full rounded-3xl bg-surface p-6"
      >

        {/* Header */}
        <div className="mb-7 flex items-center justify-between">

          <div>

            <h2 className="text-xl text-foreground">
              تاریخچه تمرین‌ها
            </h2>

            <p className=" text-sm text-muted">
              تمرین‌های انجام شده اخیر
            </p>

          </div>


          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-1 text-sm text-primary transition hover:text-primary-hover"
          >
            {showAll ? "نمایش کمتر" : "مشاهده همه"}

          </button>

        </div>


        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute right-[9px] top-4 bottom-4 w-[2px] bg-border" />


          <div className="space-y-7">

            {visibleWorkouts.map((workout, index) => (

              <button
                key={workout.id}
                onClick={() => setSelectedWorkout(workout)}
                className="group relative flex w-full gap-5 text-right"
              >

                {/* Timeline Point */}
                <div className="relative z-10 flex shrink-0 justify-center">

                  <div
                    className={`size-5 rounded-full border-4 border-surface shadow-sm transition ${
                      index === 0
                        ? "bg-primary"
                        : "bg-surface border-border"
                    }`}
                  />

                </div>


                {/* Content */}
                <div className="flex-1 rounded-2xl p-1 transition group-hover:bg-surface-secondary">

                  <div className="flex items-start justify-between">

                    <div>

                      <p className="text-sm text-muted">
                        {workout.date}
                      </p>

                      <h3 className="mt-1 text-lg text-foreground">
                        {workout.day}
                      </h3>

                    </div>


                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary opacity-0 transition group-hover:opacity-100">
                      مشاهده جزئیات
                    </span>

                  </div>


                  {/* Stats */}
                  <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-foreground">

                    <div className="flex items-center gap-2">
                      <span>🏋️</span>
                      <span>
                        {workout.exercises} حرکت
                      </span>
                    </div>


                    <div className="flex items-center gap-2">
                      <span>🔄</span>
                      <span>
                        {workout.sets} ست
                      </span>
                    </div>


                    <div className="flex items-center gap-2">
                      <span>⏱️</span>
                      <span>
                        {workout.duration}
                      </span>
                    </div>

                  </div>

                </div>

              </button>

            ))}

          </div>

        </div>

      </section>


      {/* Details */}
      {selectedWorkout && (
        <WorkoutDetails
          workout={selectedWorkout}
          onClose={() => setSelectedWorkout(null)}
        />
      )}

    </>
  );
}