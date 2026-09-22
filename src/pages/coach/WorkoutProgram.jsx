import React from "react";
import { History } from "lucide-react";

export default function WorkoutProgram({
  onHistoryClick,
}) {
  const exercises = [
    {
      name: "اسکوات با هالتر",
      sets: "۴",
      reps: "۱۲",
      weight: "۳۰ کیلوگرم",
      rest: "۶۰ ثانیه",
      note: "زانو را از نوک پا جلوتر نبر",
    },
    {
      name: "پرس سینه با دمبل",
      sets: "۴",
      reps: "۱۲",
      weight: "۱۲ کیلوگرم",
      rest: "۶۰ ثانیه",
      note: "زانو را از نوک پا جلوتر نبر",
    },
    {
      name: "لانژ راه‌رفتی",
      sets: "۴",
      reps: "۱۲",
      weight: "وزن بدن",
      rest: "۶۰ ثانیه",
      note: "زانو را از نوک پا جلوتر نبر",
    },
    {
      name: "پلانک",
      sets: "۴",
      reps: "۱۲",
      weight: "-----",
      rest: "۶۰ ثانیه",
      note: "زانو را از نوک پا جلوتر نبر",
    },
  ];

  const days = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];

  return (
    <section
      dir="rtl"
      className="
        w-full
        rounded-[24px]
        bg-white
        px-7
        py-6
      "
    >
      {/* Header */}
      <div className="mb-7 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl  text-[#6B6F77] font-primary">
            برنامه تمرینی فعلی
          </h2>

          <button
            type="button"
            onClick={onHistoryClick}
            className="
              group
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-[#E5EAF1]
              bg-white
              px-4
              py-2.5
              text-[12px]
              font-medium
              text-[#7B8491]
              transition-all
              duration-200
              hover:border-[#BFDBFE]
              hover:bg-[#F3F8FF]
              hover:text-[#007BFF]
              active:scale-[0.98]
              active:shadow-[0_0_0_2px_rgba(0,0,0,0.1)]
              cursor-pointer
            "
          >
            <History
              size={16}
              strokeWidth={1.8}
              className="transition-colors"
            />

            <span>تاریخچه تمرینات</span>
          </button>
        </div>

        {/* Days */}
        <div
          className="
            flex
            items-center
            gap-7
            rounded-full
            bg-[#EAF4FF]
            px-5
            py-3
          "
        >
          {days.map((day, index) => {
            const isActive = index === 0;

            return (
              <button
                key={day}
                type="button"
                className={`
                  relative
                  whitespace-nowrap
                  pb-1
                  text-[13px]
                  font-medium
                  transition-colors
                  duration-200
                  cursor-pointer
                  ${
                    isActive
                      ? "text-[#007BFF]"
                      : "text-[#8B929C] hover:text-[#007BFF]"
                  }
                `}
              >
                {day}

                {isActive && (
                  <span
                    className="
                      absolute
                      -bottom-[13px]
                      right-0
                      left-0
                      mx-auto
                      h-[4px]
                      w-10
                      rounded-t-full
                      bg-[#007BFF]
                    "
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[850px] border-collapse text-right">
          <thead>
            <tr className="border-b border-[#EDF0F4]">
              <th className="pb-5 text-[13px] font-medium text-[#858B94] w-1/6">
                حرکت
              </th>

              <th className="pb-5 text-[13px] font-medium text-[#858B94] w-1/6">
                ست
              </th>

              <th className="pb-5 text-[13px] font-medium text-[#858B94] w-1/6">
                تکرار
              </th>

              <th className="pb-5 text-[13px] font-medium text-[#858B94] w-1/6">
                وزنه
              </th>

              <th className="pb-5 text-[13px] font-medium text-[#858B94] w-1/6">
                استراحت
              </th>

              <th className="pb-5 text-[13px] font-medium text-[#858B94] w-1/6">
                توضیحات مربی
              </th>
            </tr>
          </thead>

          <tbody>
            {exercises.map((exercise, index) => (
              <tr
                key={index}
                className="
                  border-b
                  border-[#F0F2F5]
                  last:border-b-0
                "
              >
                <td className="py-6 text-[13px] font-medium text-[#555D68]">
                  {exercise.name}
                </td>

                <td className="py-6 text-[13px] text-[#68717D]">
                  {exercise.sets}
                </td>

                <td className="py-6 text-[13px] text-[#68717D]">
                  {exercise.reps}
                </td>

                <td className="py-6 text-[13px] text-[#68717D]">
                  {exercise.weight}
                </td>

                <td className="py-6 text-[13px] text-[#68717D]">
                  {exercise.rest}
                </td>

                <td className="py-6 text-[13px] text-[#68717D]">
                  {exercise.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}