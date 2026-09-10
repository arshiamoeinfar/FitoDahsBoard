import React, { useState } from "react";
import { CalendarDays, X } from "lucide-react";

const WEEK_DAYS = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

const NUTRITION_DATA = {
  title: "گزارش تغذیه",
  date: "۳۱ تیر ۱۴۰۵",
  days: [
    { day: 1, dots: ["yellow", "blue"] },
    { day: 2, dots: ["blue", "green"] },
    { day: 3, dots: ["yellow", "green"] },
    { day: 4, dots: ["blue", "green", "yellow"] },
    { day: 5, dots: ["blue", "green"] },
    { day: 6, dots: ["yellow", "green", "blue"] },
    { day: 7, dots: ["blue", "green", "yellow"] },
    { day: 8, dots: ["blue", "green"] },
    { day: 9, dots: ["blue", "green"] },
    { day: 10, dots: ["yellow", "blue", "green"] },
    { day: 11, dots: ["blue", "green", "yellow"] },
    { day: 12, dots: ["blue", "green"] },
    { day: 13, dots: ["yellow", "green"] },
    { day: 14, dots: ["blue", "green"] },
    { day: 15, dots: ["blue", "green"] },
    { day: 16, dots: ["yellow", "blue"] },
    { day: 17, dots: ["yellow", "green"] },
    { day: 18, dots: ["yellow"] },
    { day: 19, dots: ["blue"] },
    { day: 20, dots: ["yellow", "blue", "green"] },
    { day: 21, dots: ["yellow", "blue"] },
    { day: 22, dots: ["yellow", "green"] },
    { day: 23, dots: ["green"] },
    { day: 24, dots: ["yellow", "blue", "green"] },
    { day: 25, dots: ["yellow", "green"] },
    { day: 26, dots: ["yellow", "blue", "green"] },
    { day: 27, dots: ["blue", "green"] },
    { day: 28, dots: ["yellow", "blue", "green"] },
    { day: 29, dots: ["blue", "green"] },
    { day: 30, dots: ["yellow", "blue", "green"] },
  ],
};

const WATER_DATA = {
  title: "مصرف آب روزانه",
  date: "۳۱ تیر ۱۴۰۵",
  days: [
    { day: 1, dots: ["blue", "blue"] },
    { day: 2, dots: ["blue", "blue", "blue"] },
    { day: 3, dots: ["blue"] },
    { day: 4, dots: ["blue", "blue"] },
    { day: 5, dots: ["blue", "blue", "blue"] },
    { day: 6, dots: ["blue", "blue"] },
    { day: 7, dots: ["blue", "blue"] },
    { day: 8, dots: ["blue", "blue"] },
    { day: 9, dots: ["blue", "blue"] },
    { day: 10, dots: ["blue", "blue"] },
    { day: 11, dots: ["blue", "blue"] },
    { day: 12, dots: ["blue"] },
    { day: 13, dots: ["blue", "blue"] },
    { day: 14, dots: ["blue", "blue"] },
    { day: 15, dots: ["blue", "blue"] },
    { day: 16, dots: ["blue", "blue"] },
    { day: 17, dots: ["blue", "blue"] },
    { day: 18, dots: ["blue"] },
    { day: 19, dots: ["blue"] },
    { day: 20, dots: ["blue", "blue"] },
    { day: 21, dots: ["blue", "blue"] },
    { day: 22, dots: ["blue"] },
    { day: 23, dots: ["blue"] },
    { day: 24, dots: ["blue", "blue"] },
    { day: 25, dots: ["blue", "blue"] },
    { day: 26, dots: ["blue", "blue"] },
    { day: 27, dots: ["blue"] },
    { day: 28, dots: ["blue", "blue"] },
    { day: 29, dots: ["blue", "blue"] },
    { day: 30, dots: ["blue", "blue"] },
  ],
};

const REPORTS = {
  nutrition: {
    "1": {
      title: "گزارش تغذیه روز ۱",
      calories: "۲۴۵۰ kcal",
      protein: "۱۸۰ g",
      carbs: "۲۸۰ g",
      fat: "۷۰ g",
      description: "مصرف تغذیه امروز به هدف تعیین‌شده نزدیک بوده است.",
    },
    "2": {
      title: "گزارش تغذیه روز ۲",
      calories: "۲۳۸۰ kcal",
      protein: "۱۷۵ g",
      carbs: "۲۶۵ g",
      fat: "۶۸ g",
      description: "پروتئین مصرفی مناسب بوده و کالری کمی پایین‌تر از هدف بوده است.",
    },
  },

  water: {
    "1": {
      title: "گزارش آب روز ۱",
      amount: "۳.۲ لیتر",
      goal: "۴ لیتر",
      percentage: "۸۰٪",
      description:
        "مصرف آب امروز خوب بوده اما هنوز ۸۰۰ میلی‌لیتر تا هدف باقی مانده است.",
    },
    "2": {
      title: "گزارش آب روز ۲",
      amount: "۴.۲ لیتر",
      goal: "۴ لیتر",
      percentage: "۱۰۵٪",
      description: "هدف مصرف آب امروز به‌طور کامل انجام شده است.",
    },
  },
};

export default function DailyReportCalendar({
  type = "nutrition",
  title,
  date = "۳۱ تیر ۱۴۰۵",
  data,
}) {
  const [selectedDay, setSelectedDay] = useState(null);

  const isNutrition = type === "nutrition";
  const config = isNutrition ? NUTRITION_DATA : WATER_DATA;
  const calendarData = data || config.days;

  const report =
    selectedDay &&
    REPORTS[type]?.[String(selectedDay.day)]
      ? REPORTS[type][String(selectedDay.day)]
      : null;

  return (
    <>
      <div
        dir="rtl"
        className="w-full rounded-[28px] bg-white p-6 shadow-sm"
      >
        {/* Header */}
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-2xl  text-[#6B6F77] font-primary">
            {title || config.title}
          </h2>

          <div className="flex items-center gap-2">
            <span className="text-sm font-primary-light text-[#6B6F77]">
              {date}
            </span>

            <CalendarDays
              size={20}
              strokeWidth={1.8}
              className="text-[#007BFF]"
            />
          </div>
        </div>

        {/* Week Days */}
        <div className="grid grid-cols-7 gap-2">
          {WEEK_DAYS.map((day) => (
            <div
              key={day}
              className="flex h-7 items-center justify-center text-xs text-[#6B6F77]"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar */}
        <div className="mt-2 grid grid-cols-7 gap-x-2 gap-y-3">
          {calendarData.map((item) => (
            <CalendarDay
              key={item.day}
              day={item.day}
              dots={item.dots}
              onClick={() => setSelectedDay(item)}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center gap-2">
          <div className="h-8 w-1 rounded-full bg-[#007BFF]" />

          <p className="text-xs leading-6 text-[#8A8D93]">
            برای مشاهده جزئیات{" "}
            {isNutrition ? "تغذیه" : "مصرف آب"}، روی روزهای گذشته
            کلیک کنید.
          </p>
        </div>
      </div>

      {/* Report Modal */}
      {selectedDay && (
        <ReportModal
          type={type}
          day={selectedDay}
          report={report}
          onClose={() => setSelectedDay(null)}
        />
      )}
    </>
  );
}

function CalendarDay({ day, dots, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col items-center gap-1 cursor-pointer"
    >
      <span
        className="
          flex h-9 w-9 items-center justify-center
          rounded-full bg-[#F1F7FD]
          text-sm text-[#6B6F77]
          transition-all duration-200
          group-hover:bg-[#E2F0FF]
          group-hover:text-[#007BFF]
          group-active:scale-95
        "
      >
        {day}
      </span>

      <div className="flex h-2 items-center justify-center gap-[2px]">
        {dots?.map((color, index) => (
          <span
            key={index}
            className={`h-[5px] w-[5px] rounded-full ${getDotColor(
              color
            )}`}
          />
        ))}
      </div>
    </button>
  );
}

function getDotColor(color) {
  const colors = {
    blue: "bg-[#007BFF]",
    green: "bg-[#65B741]",
    yellow: "bg-[#D6A91A]",
  };

  return colors[color] || colors.blue;
}

function ReportModal({ type, day, report, onClose }) {
  const isNutrition = type === "nutrition";

  return (
    <div
      dir="rtl"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-[28px] bg-white p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-5">
          <div>
            <p className="text-xs text-[#8A8D93]">گزارش روز</p>

            <h3 className="mt-1 text-xl font-bold text-[#45474C]">
              {report?.title ||
                `${isNutrition ? "گزارش تغذیه" : "گزارش آب"} روز ${
                  day.day
                }`}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-[#6B6F77] transition hover:bg-gray-100"
          >
            <X size={19} />
          </button>
        </div>

        {isNutrition ? (
          <NutritionReport report={report} />
        ) : (
          <WaterReport report={report} />
        )}
      </div>
    </div>
  );
}

function NutritionReport({ report }) {
  const defaultReport = {
    calories: "۲۴۰۰ kcal",
    protein: "۱۷۵ g",
    carbs: "۲۷۰ g",
    fat: "۷۰ g",
    description:
      "اطلاعات تغذیه این روز بر اساس وعده‌های ثبت‌شده محاسبه شده است.",
  };

  const data = report || defaultReport;

  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 gap-3">
        {/* Calories */}
        <ReportItem
          title="کالری"
          value={data.calories}
          icon="🔥"
          color="orange"
          bgColor="bg-orange-50"
          textColor="text-orange-500"
        />

        {/* Protein */}
        <ReportItem
          title="پروتئین"
          value={data.protein}
          icon="🥩"
          color="red"
          bgColor="bg-red-50"
          textColor="text-red-500"
        />

        {/* Carbs */}
        <ReportItem
          title="کربوهیدرات"
          value={data.carbs}
          icon="🌾"
          color="yellow"
          bgColor="bg-yellow-50"
          textColor="text-yellow-600"
        />

        {/* Fat */}
        <ReportItem
          title="چربی"
          value={data.fat}
          icon="🥑"
          color="green"
          bgColor="bg-green-50"
          textColor="text-green-500"
        />
      </div>

      <div className="mt-4 rounded-2xl bg-[#F7FAFD] p-4">
        <p className="text-sm leading-7 text-[#6B6F77]">
          {data.description}
        </p>
      </div>
    </div>
  );
}

function WaterReport({ report }) {
  const defaultReport = {
    amount: "۳.۲ لیتر",
    goal: "۴ لیتر",
    percentage: "۸۰٪",
    description:
      "مصرف آب امروز خوب بوده اما هنوز ۸۰۰ میلی‌لیتر تا هدف باقی مانده است.",
  };

  const data = report || defaultReport;

  // تبدیل درصد فارسی یا انگلیسی به عدد
  const percentage = Math.min(
    parseInt(
      String(data.percentage)
        .replace("٪", "")
        .replace("%", "")
        .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
    ) || 0,
    100
  );

  return (
    <div className="mt-6">
      {/* اطلاعات آب */}
      <div className="grid grid-cols-3 gap-3">
        <ReportItem
          title="مصرف آب"
          value={data.amount}
          icon="💧"
          bgColor="bg-blue-50"
          textColor="text-[#007BFF]"
        />

        <ReportItem
          title="هدف"
          value={data.goal}
          icon="🎯"
          bgColor="bg-purple-50"
          textColor="text-purple-500"
        />

        <ReportItem
          title="پیشرفت"
          value={data.percentage}
          icon="📈"
          bgColor="bg-cyan-50"
          textColor="text-cyan-500"
        />
      </div>

      {/* میزان رسیدن به هدف */}
      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs text-[#8A8D93]">
            میزان رسیدن به هدف
          </span>

          <span className="text-xs font-bold text-[#007BFF]">
            {data.percentage}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="relative h-3 w-full overflow-hidden rounded-full bg-[#EAF2F9]">
          <div
            className="absolute right-0 top-0 h-full rounded-full bg-[#007BFF] transition-all duration-700 ease-out"
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>
      </div>

      {/* توضیحات */}
      <div className="mt-4 rounded-2xl bg-[#F7FAFD] p-4">
        <p className="text-sm leading-7 text-[#6B6F77]">
          {data.description}
        </p>
      </div>
    </div>
  );
}

function ReportItem({
  title,
  value,
  icon,
  bgColor,
  textColor,
}) {
  return (
    <div
      className={`rounded-2xl p-4 ${bgColor}`}
    >
      <div className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>

        <p className={`text-xs ${textColor}`}>
          {title}
        </p>
      </div>

      <p className="mt-2 text-lg font-bold text-[#45474C]">
        {value}
      </p>
    </div>
  );
}

/*
استفاده:

گزارش تغذیه:
<DailyReportCalendar type="nutrition" />

گزارش آب:
<DailyReportCalendar
  type="water"
  title="مصرف آب روزانه"
/>
*/