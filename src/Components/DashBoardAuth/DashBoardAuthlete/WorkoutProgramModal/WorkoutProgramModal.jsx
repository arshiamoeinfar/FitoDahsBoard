import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";

/* =====================================================
   دیتای نمونه — این بخش رو با پاسخ واقعی API جایگزین کن
===================================================== */
const WEEKDAYS = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

function buildCalendarDays(totalDays, workoutDays) {
  return Array.from({ length: totalDays }, (_, i) => {
    const day = i + 1;
    return { day, hasWorkout: workoutDays.includes(day) };
  });
}

const sampleExercises = [
  { name: "اسکوات با هالتر", sets: 4, reps: 12, weight: "۳۰ کیلوگرم" },
  { name: "اسکوات با هالتر", sets: 4, reps: 12, weight: "۳۰ کیلوگرم" },
  { name: "اسکوات با هالتر", sets: 4, reps: 12, weight: "۳۰ کیلوگرم" },
  { name: "اسکوات با هالتر", sets: 4, reps: 12, weight: "۳۰ کیلوگرم" },
];

const workoutData = [
  {
    id: "tir-1405",
    monthLabel: "تیر ۱۴۰۵",
    programLabel: "تیر",
    days: buildCalendarDays(
      30,
      Array.from({ length: 30 }, (_, i) => i + 1),
    ),
    progress: {
      categories: [
        "اسکوات",
        "پرس سینه",
        "ددلیفت",
        "پرس سرشانه",
        "کشش لت",
        "جلو بازو",
      ],
      lastMonth: [20, 24, 18, 22, 20, 17],
      thisMonth: [29, 26, 34, 29, 26, 25],
    },
    weeks: [
      {
        label: "هفته اول",
        firstDay: 1,
        sessions: [
          {
            id: "w1-s1",
            day: 1,
            dateLabel: "۱ تیر",
            weekday: "شنبه",
            title: "تمرین پایین تنه",
            exercises: sampleExercises,
          },
          {
            id: "w1-s2",
            day: 1,
            dateLabel: "۱ تیر",
            weekday: "شنبه",
            title: "تمرین بالا تنه",
            exercises: sampleExercises,
          },
          {
            id: "w1-s3",
            day: 1,
            dateLabel: "۱ تیر",
            weekday: "شنبه",
            title: "تمرین کل بدن",
            exercises: sampleExercises,
          },
        ],
      },
      {
        label: "هفته دوم",
        firstDay: 8,
        sessions: [
          {
            id: "w2-s1",
            day: 8,
            dateLabel: "۸ تیر",
            weekday: "شنبه",
            title: "تمرین پایین تنه",
            exercises: sampleExercises,
          },
          {
            id: "w2-s2",
            day: 10,
            dateLabel: "۱۰ تیر",
            weekday: "دوشنبه",
            title: "تمرین بالا تنه",
            exercises: sampleExercises,
          },
        ],
      },
      {
        label: "هفته سوم",
        firstDay: 15,
        sessions: [
          {
            id: "w3-s1",
            day: 15,
            dateLabel: "۱۵ تیر",
            weekday: "شنبه",
            title: "تمرین پایین تنه",
            exercises: sampleExercises,
          },
          {
            id: "w3-s2",
            day: 17,
            dateLabel: "۱۷ تیر",
            weekday: "دوشنبه",
            title: "تمرین کل بدن",
            exercises: sampleExercises,
          },
        ],
      },
      {
        label: "هفته چهارم",
        firstDay: 22,
        sessions: [
          {
            id: "w4-s1",
            day: 22,
            dateLabel: "۲۲ تیر",
            weekday: "شنبه",
            title: "تمرین بالا تنه",
            exercises: sampleExercises,
          },
        ],
      },
      {
        label: "هفته پنجم",
        firstDay: 29,
        sessions: [
          {
            id: "w5-s1",
            day: 29,
            dateLabel: "۲۹ تیر",
            weekday: "شنبه",
            title: "تمرین کل بدن",
            exercises: sampleExercises,
          },
        ],
      },
    ],
  },
];

/* پیدا کردن اندیس هفته‌ای که یه روز خاص توشه */
function findWeekIndexForDay(month, day) {
  let idx = 0;
  month.weeks.forEach((week, i) => {
    if (day >= week.firstDay) idx = i;
  });
  return idx;
}

/* =====================================================
   نمودار میله‌ای روند پیشرفت وزنه‌ها
===================================================== */
function ProgressChart({ progress }) {
  const maxValue = 40;
  const ticks = [40, 30, 20, 10];

  return (
    <div className="bg-white rounded-3xl p-7 border border-[#A6A9AD]">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-lg font-semibold text-[#6B6F77]">
          روند پیشرفت وزنه ها
        </h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#007BFF]" />
            <span className="text-xs text-[#6B6F77]">این ماه</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#BFDBFF]" />
            <span className="text-xs text-[#6B6F77]">ماه قبل</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="flex-1 relative h-40">
          <div className="absolute inset-0 flex flex-col justify-between pb-5">
            {ticks.map((t) => (
              <div key={t} className="h-px bg-[#EEF2F8]" />
            ))}
          </div>

          <div className="relative h-full flex items-end justify-between gap-3 pb-5">
            {progress.categories.map((cat, i) => (
              <div
                key={cat}
                className="flex items-end gap-1 flex-1 justify-center group h-full"
              >
                <div
                  className="w-2 rounded-t-md bg-[#007BFF] transition-all"
                  style={{
                    height: `${(progress.thisMonth[i] / maxValue) * 100}%`,
                  }}
                  title={`${cat} — این ماه: ${progress.thisMonth[i]}`}
                />
                <div
                  className="w-2 rounded-t-md bg-[#BFDBFF] transition-all"
                  style={{
                    height: `${(progress.lastMonth[i] / maxValue) * 100}%`,
                  }}
                  title={`${cat} — ماه قبل: ${progress.lastMonth[i]}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between text-xs text-[#C3C7CE] h-40 pb-5">
          {ticks.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
/* =====================================================
   تقویم تمرینات (سمت چپ بصری)
===================================================== */
function WorkoutCalendarCard({
  month,
  selectedDay,
  onSelectDay,
  onPrevMonth,
  onNextMonth,
}) {
  return (
    <div className="bg-[#F2F8FD] rounded-3xl p-7">
      <h3 className="text-xl font-primary text-[#6B6F77] text-right mb-5">
        تقویم تمرینات
      </h3>

      <div className="bg-white rounded-full flex items-center justify-between px-5 py-3 mb-6">
        <button
          onClick={onPrevMonth}
          className="text-[#4F5965] hover:text-[#007BFF] transition cursor-pointer"
          aria-label="ماه قبل"
        >
          <ChevronLeftIcon fontSize="small" />
        </button>
        <span className="text-[#4F5965] font-medium">{month.monthLabel}</span>
        <button
          onClick={onNextMonth}
          className="text-[#4F5965] hover:text-[#007BFF] transition cursor-pointer"
          aria-label="ماه بعد"
        >
          <ChevronRightIcon fontSize="small" />
        </button>
      </div>

      <div className="grid grid-cols-7 text-center mb-4">
        {WEEKDAYS.map((d) => (
          <div key={d} className="text-[#8A93A3] text-sm font-medium">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-5 text-center">
        {month.days.map(({ day, hasWorkout }) => {
          const isSelected = day === selectedDay;
          return (
            <button
              key={day}
              onClick={() => onSelectDay(day)}
              className="flex flex-col items-center gap-1.5 cursor-pointer outline-none"
            >
              <span
                className={`text-lg transition ${
                  isSelected
                    ? "text-[#007BFF] font-bold"
                    : "text-[#4F5965] hover:text-[#007BFF]"
                }`}
              >
                {day}
              </span>
              {hasWorkout && (
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isSelected ? "bg-[#007BFF]" : "bg-[#7FB1FF]"
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* =====================================================
   لیست برنامه‌ی تمرینی (سمت راست بصری)
===================================================== */
function WorkoutSessionCard({ session }) {
  return (
    <div className="bg-[#F2F8FD] rounded-t-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3.5">
        <p className="text-base font-primary text-[#6B6F77]">
          {session.title}
        </p>
        <div className="flex items-center gap-1.5 text-[#007BFF] text-sm font-medium">
          <CalendarTodayOutlinedIcon sx={{ fontSize: 15 }} />
          {session.weekday} - {session.dateLabel}
        </div>
      </div>

      <div className="bg-white border-x border-b border-[#F0F2F5] rounded-b-xl overflow-hidden">
        <div className="grid grid-cols-4 px-5 py-3 text-xs text-[#8A93A3] border-b border-[#F0F2F5]">
          <span className="text-right">وزنه</span>
          <span className="text-center">تکرار</span>
          <span className="text-center">ست</span>
          <span className="text-left">حرکت</span>
        </div>
        {session.exercises.map((ex, i) => (
          <div
            key={i}
            className="grid grid-cols-4 px-5 py-3.5 text-sm text-[#4F5965] border-b border-[#F5F7FA] last:border-0"
          >
            <span className="text-right">{ex.weight}</span>
            <span className="text-center">{ex.reps}</span>
            <span className="text-center">{ex.sets}</span>
            <span className="text-left font-medium">{ex.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkoutProgramCard({
  month,
  selectedWeekIndex,
  onPrevWeek,
  onNextWeek,
}) {
  const week = month.weeks[selectedWeekIndex];

  return (
    <div className="bg-white rounded-3xl p-7 flex flex-col min-h-0 border border-[#A6A9AD]">
      <div className="flex items-center justify-between mb-6 shrink-0">
        <h3 className="text-xl font-primary text-[#6B6F77]">
          برنامه تمرینی ({month.programLabel})
        </h3>

        <div className="bg-[#007BFF] rounded-full flex items-center gap-3 px-5 py-2.5 text-white">
          <button
            onClick={onNextWeek}
            disabled={selectedWeekIndex === month.weeks.length - 1}
            className="hover:opacity-80 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="هفته بعد"
          >
            <ChevronRightIcon fontSize="small" />
          </button>
          <span className="text-sm font-medium whitespace-nowrap">
            {week.label}
          </span>
          <button
            onClick={onPrevWeek}
            disabled={selectedWeekIndex === 0}
            className="hover:opacity-80 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="هفته قبل"
          >
            <ChevronLeftIcon fontSize="small" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-5 overflow-y-auto pr-1 max-h-[620px]">
        {week.sessions.map((session) => (
          <WorkoutSessionCard key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
}

/* =====================================================
   کامپوننت اصلی مودال
===================================================== */
export default function WorkoutProgramModal({ showModal, setShowModal }) {
  const [monthIndex, setMonthIndex] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(workoutData[0]);
  const [selectedDay, setSelectedDay] = useState(workoutData[0].days[0].day);
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(0);

  if (!showModal) return null;

  const changeMonth = (nextIndex) => {
    if (nextIndex < 0 || nextIndex >= workoutData.length) return;
    const month = workoutData[nextIndex];
    setMonthIndex(nextIndex);
    setSelectedMonth(month);
    setSelectedDay(month.days[0].day);
    setSelectedWeekIndex(0);
  };

  const handleSelectDay = (day) => {
    setSelectedDay(day);
    setSelectedWeekIndex(findWeekIndexForDay(selectedMonth, day));
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-[#F8FAFE] rounded-[40px] w-full max-w-6xl max-h-[92vh] overflow-y-auto p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#E8F1FF] flex items-center justify-center shrink-0">
              <FitnessCenterOutlinedIcon className="text-[#007BFF]" />
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold text-[#4F5965]">
                تمامی تمرینات من
              </h2>
              <p className="text-sm text-[#A0A4AA] mt-1">
                برنامه تمرینیت رو که مربی برات تنظیم کرده اینجا میتونی ببینی
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowModal(false)}
            className="w-10 h-10 rounded-full border-2 border-[#007BFF] flex items-center justify-center text-[#007BFF] hover:bg-[#E8F1FF] transition cursor-pointer"
            aria-label="بستن"
          >
            <CloseIcon fontSize="small" />
          </button>
        </div>

        <div className="grid grid-cols-[1fr_380px] gap-6 items-start">
          <WorkoutProgramCard
            month={selectedMonth}
            selectedWeekIndex={selectedWeekIndex}
            onPrevWeek={() => setSelectedWeekIndex((i) => Math.max(0, i - 1))}
            onNextWeek={() =>
              setSelectedWeekIndex((i) =>
                Math.min(selectedMonth.weeks.length - 1, i + 1),
              )
            }
          />

          <div className="flex flex-col gap-6">
            <WorkoutCalendarCard
              month={selectedMonth}
              selectedDay={selectedDay}
              onSelectDay={handleSelectDay}
              onPrevMonth={() => changeMonth(monthIndex - 1)}
              onNextMonth={() => changeMonth(monthIndex + 1)}
            />
            <ProgressChart progress={selectedMonth.progress} />
          </div>
        </div>
      </div>
    </div>
  );
}
