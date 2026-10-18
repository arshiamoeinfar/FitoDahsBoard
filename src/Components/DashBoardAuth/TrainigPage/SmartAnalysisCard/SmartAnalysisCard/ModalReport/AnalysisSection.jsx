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
    <section className="rounded-[26px] bg-surface p-5 shadow-sm">

      <div className="flex items-center gap-3">

        <div
          className={`
            flex h-10 w-10 items-center justify-center rounded-[13px]
            ${
              success
                ? "bg-green-500/10 text-success"
                : "bg-amber-500/10 text-amber-500"
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

          <h3 className="text-sm font-bold text-foreground">
            {title}
          </h3>

          <p className="mt-1 text-[10px] text-muted">
            {description}
          </p>

        </div>

      </div>

      <div className="mt-5 space-y-2.5">

        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-[16px] bg-surface-secondary p-3.5"
          >

            <span
              className={`
                mt-2 h-2 w-2 shrink-0 rounded-full
                ${
                  success
                    ? "bg-success"
                    : "bg-amber-500"
                }
              `}
            />

            <p className="text-xs leading-7 text-foreground">
              {item}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}