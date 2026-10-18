import React from "react";
import {
  Sparkles,
} from "lucide-react";

export default function ReportSummary() {
  return (
    <section className="mt-4 rounded-[24px] border border-border bg-primary/10 p-5">

      <div className="flex items-start gap-3">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
          <Sparkles size={18} />
        </div>

        <div>

          <h4 className="text-sm font-bold text-foreground">
            جمع‌بندی نهایی
          </h4>

          <p className="mt-2 text-sm leading-8 text-foreground">
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