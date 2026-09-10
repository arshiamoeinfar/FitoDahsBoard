import React from "react";
import {
  CalendarDays,
  Sparkles,
  X,
} from "lucide-react";

export default function ReportHeader({
  athlete,
  period,
  onClose,
}) {
  return (
    <header className="relative shrink-0 overflow-hidden bg-[#007BFF] px-5 py-5 text-white sm:px-7 sm:py-6">

      <div className="absolute -left-16 -top-20 h-48 w-48 rounded-full bg-white/[0.06]" />

      <div className="relative flex items-center justify-between gap-4">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-white/15">
            <Sparkles size={23} />
          </div>

          <div>

            <div className="flex items-center gap-2">

              <h2 className="text-lg font-bold sm:text-xl">
                گزارش هوشمند تمرینات
              </h2>

              <span className="hidden rounded-full bg-white/15 px-2.5 py-1 text-[9px] sm:block">
                AI POWERED
              </span>

            </div>

            <p className="mt-1 text-xs text-white/70">
              تحلیل عملکرد و پیشرفت تمرینی ورزشکار
            </p>

          </div>

        </div>

        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
        >
          <X size={20} />
        </button>

      </div>

      <div className="relative mt-5 flex flex-wrap items-center justify-between gap-4 rounded-[20px] bg-white/[0.09] p-4">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-[#007BFF]">
            {athlete.charAt(0)}
          </div>

          <div>

            <p className="text-[10px] text-white/60">
              ورزشکار
            </p>

            <p className="mt-1 text-sm font-bold">
              {athlete}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-2 text-xs text-white/75">
          <CalendarDays size={15} />
          {period}
        </div>

      </div>

    </header>
  );
}