import React from "react";
import {
  BarChart3,
} from "lucide-react";

export default function ExerciseProgress({
  exercises,
}) {
  return (
    <section className="mt-4 rounded-[26px] bg-white p-5 shadow-sm sm:p-6">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#EAF4FF] text-[#007BFF]">
          <BarChart3 size={19} />
        </div>

        <div>

          <h3 className="text-sm font-bold text-[#45474C] sm:text-base">
            پیشرفت حرکات
          </h3>

          <p className="mt-1 text-[10px] text-[#8A8D93]">
            مقایسه رکورد فعلی با دوره قبلی
          </p>

        </div>

      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">

        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.name}
            exercise={exercise}
          />
        ))}

      </div>

    </section>
  );
}

function ExerciseCard({ exercise }) {
  const width = Math.min(exercise.progress * 6, 100);

  return (
    <div className="rounded-[20px] border border-[#EEF2F6] p-4">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-bold text-[#45474C]">
            {exercise.name}
          </p>

          <p className="mt-1 text-[10px] text-[#8A8D93]">
            {exercise.previous}
            <span className="mx-1.5">
              ←
            </span>
            {exercise.current}
          </p>

        </div>

        <span className="text-sm font-black text-[#007BFF]">
          +{exercise.progress}٪
        </span>

      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#EAF2F9]">

        <div
          className="h-full rounded-full bg-[#007BFF] transition-all duration-700"
          style={{
            width: `${width}%`,
          }}
        />

      </div>

    </div>
  );
}