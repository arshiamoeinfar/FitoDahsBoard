import React from "react";
import {
  Lightbulb,
} from "lucide-react";

export default function AIRecommendations({
  recommendations,
}) {
  return (
    <section className="mt-4 overflow-hidden rounded-[26px] bg-white shadow-sm">

      <div className="bg-[#007BFF] px-5 py-5 text-white sm:px-6">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white/15">
            <Lightbulb size={21} />
          </div>

          <div>

            <h3 className="text-sm font-bold sm:text-base">
              پیشنهاد هوش مصنوعی
            </h3>

            <p className="mt-1 text-[10px] text-white/70">
              پیشنهادهای شخصی‌سازی‌شده برای دوره بعد
            </p>

          </div>

        </div>

      </div>

      <div className="space-y-3 p-5 sm:p-6">

        {recommendations.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-[18px] bg-[#F7FAFD] p-3.5"
          >

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#007BFF] text-xs font-bold text-white">
              {index + 1}
            </div>

            <p className="text-xs leading-7 text-[#62666D]">
              {item}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}