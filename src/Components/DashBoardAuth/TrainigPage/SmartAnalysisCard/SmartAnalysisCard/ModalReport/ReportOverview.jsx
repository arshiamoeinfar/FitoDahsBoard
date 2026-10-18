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

      <div className="rounded-[26px] bg-surface p-5 shadow-sm">

        <div className="flex h-full flex-col items-center justify-center">

          <p className="text-xs text-muted">
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
                stroke="var(--surface-secondary)"
                strokeWidth="9"
              />

              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="9"
                strokeLinecap="round"
                strokeDasharray="314"
                strokeDashoffset={
                  314 - (314 * score) / 100
                }
              />

            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <span className="text-3xl font-black text-foreground">
                {score}
              </span>

              <span className="text-[10px] text-muted">
                از ۱۰۰
              </span>

            </div>

          </div>

          <div className="mt-3 flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1.5 text-[10px] font-medium text-success">

            <TrendingUp size={13} />

            عملکرد بسیار خوب

          </div>

        </div>

      </div>

      {/* AI Summary */}

      <div className="rounded-[26px] bg-surface p-5 shadow-sm sm:p-6">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-primary/10 text-primary">
            <Sparkles size={19} />
          </div>

          <div>

            <h3 className="text-sm font-bold text-foreground sm:text-base">
              تحلیل کلی هوش مصنوعی
            </h3>

            <p className="mt-1 text-[10px] text-muted">
              ارزیابی عملکرد در این دوره
            </p>

          </div>

        </div>

        <div className="mt-5 rounded-[20px] bg-surface-secondary p-4">

          <p className="text-sm leading-8 text-foreground">
            {summary}
          </p>

        </div>

      </div>

    </section>
  );
}