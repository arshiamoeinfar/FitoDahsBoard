import React from "react";

const DEFAULT_STATS = [
  { label: "نقطه قوت:", value: "بالا تنه +21%" },
  { label: "نیاز به توجه:", value: "بالا تنه +21%" },
  { label: "پیشنهاد:", value: "۹۰ ثانیه استراحت بین ست ها" },
];

export default function SmartAnalysisCard({
  title = "تحلیل هوشمند",
  description = "این هفته عملکردت در تمرینات بالاتنه بهتر شده. قدرت پرس دمبل نسبت به شروع برنامه ۲۰٪ افزایش داشته، اما پیشرفت حرکات پشت بازو کمتر بوده است.",
  stats = DEFAULT_STATS,
  onViewReport,
}) {
  return (
    <div
      dir="rtl"
      className="bg-linear-to-b from-blue-500 to-blue-600 rounded-3xl p-8 flex flex-col gap-6 w-full max-w-lg shadow-lg text-right"
    >
      <h3 className="text-white text-3xl ">{title}</h3>

      <p className="text-blue-50 text-base leading-8 Modam-Medium">{description}</p>

      <div className="flex flex-col gap-4">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#006CDF] rounded-2xl px-6 py-4 flex items-center justify-between"
          >
            <span className="text-white/90 text-sm">{item.label}</span>
            <span className="text-white text-lg Modam-Medium">{item.value}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onViewReport}
        className="bg-white text-blue-600 cursor-pointer text-base rounded-2xl py-4 hover:bg-blue-50 transition-colors"
      >
        مشاهده گزارش کامل
      </button>
    </div>
  );
}