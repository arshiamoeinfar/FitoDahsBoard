import React, { useState } from "react";
import WorkoutAIReport from "./WorkoutAIReport";
const DEFAULT_STATS = [
  { label: "نقطه قوت:", value: "بالا تنه +21%" },
  { label: "نیاز به توجه:", value: "بالا تنه +21%" },
  { label: "پیشنهاد:", value: "۹۰ ثانیه استراحت بین ست ها" },
];



export default function SmartAnalysisCard({
  title = "تحلیل هوشمند",
  description = "این هفته عملکردت در تمرینات بالاتنه بهتر شده. قدرت پرس دمبل نسبت به شروع برنامه ۲۰٪ افزایش داشته، اما پیشرفت حرکات پشت بازو کمتر بوده است.",
  stats = DEFAULT_STATS,
})
{
  const [isReportVisible, setIsReportVisible] = useState(false);
  return (
    <div
      dir="rtl"
      className="bg-linear-to-b from-primary to-primary-hover dark:from-surface-secondary dark:to-surface rounded-3xl p-8 flex flex-col gap-6 w-full shadow-lg text-right"
    >
      <h3 className="text-white dark:text-foreground text-3xl">{title}</h3>

      <p className="text-white/85 dark:text-muted text-base leading-8 Modam-Medium">
        {description}
      </p>

      <div className="flex flex-col gap-4">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-primary-hover dark:bg-background rounded-2xl px-6 py-4 flex items-center justify-between"
          >
            <span className="text-white/90 dark:text-muted text-sm">{item.label}</span>
            <span className="text-white dark:text-foreground text-lg Modam-Medium">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          setIsReportVisible(true);
        }}
        className="bg-surface text-primary hover:bg-surface-secondary dark:bg-primary dark:text-white dark:hover:bg-primary-hover cursor-pointer text-base rounded-2xl py-4 transition-colors"
      >
        مشاهده گزارش کامل
      </button>

      {isReportVisible && (
        <WorkoutAIReport onClose={() => setIsReportVisible(false)} />
      )}
    </div>
  );
}
