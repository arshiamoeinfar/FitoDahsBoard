import React from "react";
import {
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function ReportOverview({
  score,
  summary,
}) {
  return (
    <section className="grid gap-4 lg:grid-cols-[250px_1fr]">

      {/* Score */}

      <div className="rounded-[26px] bg-white p-5 shadow-sm">

        <div className="flex h-full flex-col items-center justify-center">

          <p className="text-xs text-[#8A8D93]">
            امتیاز عملکرد
          </p>

          <div className="relative mt-4 h-36 w-36">

            <svg
              viewBox="0 0 120 120"
              className="-rotate-90"
            >

              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="#EAF2F9"
                strokeWidth="9"
              />

              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="#007BFF"
                strokeWidth="9"
                strokeLinecap="round"
                strokeDasharray="314"
                strokeDashoffset={
                  314 - (314 * score) / 100
                }
              />

            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <span className="text-3xl font-black text-[#45474C]">
                {score}
              </span>

              <span className="text-[10px] text-[#8A8D93]">
                از ۱۰۰
              </span>

            </div>

          </div>

          <div className="mt-3 flex items-center gap-1.5 rounded-full bg-[#EAF9EF] px-3 py-1.5 text-[10px] font-medium text-[#4CAF50]">

            <TrendingUp size={13} />

            عملکرد بسیار خوب

          </div>

        </div>

      </div>

      {/* AI Summary */}

      <div className="rounded-[26px] bg-white p-5 shadow-sm sm:p-6">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#EAF4FF] text-[#007BFF]">
            <Sparkles size={19} />
          </div>

          <div>

            <h3 className="text-sm font-bold text-[#45474C] sm:text-base">
              تحلیل کلی هوش مصنوعی
            </h3>

            <p className="mt-1 text-[10px] text-[#8A8D93]">
              ارزیابی عملکرد در این دوره
            </p>

          </div>

        </div>

        <div className="mt-5 rounded-[20px] bg-[#F7FAFD] p-4">

          <p className="text-sm leading-8 text-[#62666D]">
            {summary}
          </p>

        </div>

      </div>

    </section>
  );
}