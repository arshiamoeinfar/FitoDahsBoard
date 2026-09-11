import React from "react";
import {
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export default function AnalysisSection({
  type,
  title,
  description,
  items,
}) {
  const success = type === "success";

  return (
    <section className="rounded-[26px] bg-white p-5 shadow-sm">

      <div className="flex items-center gap-3">

        <div
          className={`
            flex h-10 w-10 items-center justify-center rounded-[13px]
            ${
              success
                ? "bg-[#EAF9EF] text-[#4CAF50]"
                : "bg-[#FFF5E8] text-[#F59E0B]"
            }
          `}
        >
          {success ? (
            <CheckCircle2 size={19} />
          ) : (
            <AlertTriangle size={19} />
          )}
        </div>

        <div>

          <h3 className="text-sm font-bold text-[#45474C]">
            {title}
          </h3>

          <p className="mt-1 text-[10px] text-[#8A8D93]">
            {description}
          </p>

        </div>

      </div>

      <div className="mt-5 space-y-2.5">

        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-[16px] bg-[#F7FAFD] p-3.5"
          >

            <span
              className={`
                mt-2 h-2 w-2 shrink-0 rounded-full
                ${
                  success
                    ? "bg-[#4CAF50]"
                    : "bg-[#F59E0B]"
                }
              `}
            />

            <p className="text-xs leading-7 text-[#62666D]">
              {item}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}