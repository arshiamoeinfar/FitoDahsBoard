import React from "react";
import {
  Sparkles,
} from "lucide-react";

export default function ReportSummary() {
  return (
    <section className="mt-4 rounded-[24px] border border-[#DCEEFF] bg-[#F1F8FF] p-5">

      <div className="flex items-start gap-3">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#007BFF] text-white">
          <Sparkles size={18} />
        </div>

        <div>

          <h4 className="text-sm font-bold text-[#45474C]">
            جمع‌بندی نهایی
          </h4>

          <p className="mt-2 text-sm leading-8 text-[#62666D]">
            روند کلی عملکرد ورزشکار مثبت است. افزایش قدرت در
            حرکات اصلی نشان‌دهنده پیشرفت مناسب است. در صورت
            حفظ روند فعلی، افزایش پایبندی به برنامه و بهبود
            ریکاوری، انتظار می‌رود در دوره بعدی عملکرد بهتری
            ثبت شود.
          </p>

        </div>

      </div>

    </section>
  );
}