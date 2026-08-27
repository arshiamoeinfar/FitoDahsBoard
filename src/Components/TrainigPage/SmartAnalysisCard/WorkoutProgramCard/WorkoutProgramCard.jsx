import React, { useState } from "react";
import SegmentedControl from "../../../SegmentedControl/SegmentedControl";

const TYPE_STYLES = {
  کششی: {
    bg: "bg-indigo-400",
    border: "border-indigo-400",
    dot: "bg-indigo-400",
    check: true,
  },
  پا: {
    bg: "bg-green-400",
    border: "border-green-400",
    dot: "bg-green-400",
    check: true,
  },
  فشاری: {
    bg: "bg-amber-50",
    border: "border-amber-400",
    dot: "bg-amber-400",
    check: false,
  },
  استراحت: {
    bg: "bg-gray-100",
    border: "border-gray-200",
    dot: "bg-gray-200",
    check: false,
  },
};

const LEGEND_ORDER = ["کششی", "پا", "فشاری", "استراحت"];

const DEFAULT_DAYS = [
  { day: "ش", type: "کششی" },
  { day: "ی", type: "پا" },
  { day: "د", type: "استراحت" },
  { day: "س", type: "کششی" },
  { day: "چ", type: "فشاری" },
  { day: "پ", type: "استراحت" },
  { day: "ج", type: "فشاری" },
];

function DayCircle({ day, type }) {
  const style = TYPE_STYLES[type] || TYPE_STYLES["استراحت"];
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-[#6B6F77] Modam-Medium text-sm">{day}</span>
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${style.bg} ${style.border}`}
      >
        {style.check && (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <span className="text-[#6B6F77] Modam-Medium text-sm ">{type}</span>
    </div>
  );
}

export default function WorkoutProgramCard({
  title = "برنامه تمرینی",
  days = DEFAULT_DAYS,
  coachName = "مهدی خواجه",
  coachInitial = "مخ",
}) {
  const [range, setRange] = useState("7 روز");

  return (
    <div
      className="bg-white rounded-3xl p-8 w-full max-w-3xl flex flex-col gap-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium text-[#6B6F77]">{title}</h3>

        <div className="inline-flex bg-blue-50/60 rounded-full p-1">
          <SegmentedControl />
        </div>
      </div>

      {/* Days row */}
      <div className="flex items-start justify-between px-2">
        {days.map((d, idx) => (
          <DayCircle key={idx} day={d.day} type={d.type} />
        ))}
      </div>

      {/* Legend */}
      <div className="bg-[#F2F8FD] rounded-2xl px-6 py-4 flex items-center justify-center gap-8 flex-wrap">
        {LEGEND_ORDER.map((type) => (
          <div key={type} className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">{type}</span>
            <span className={`w-3 h-3 rounded-full ${TYPE_STYLES[type].dot}`} />
          </div>
        ))}
      </div>

      {/* Footer: coach info */}
      <div className="flex items-center justify-start gap-4">
        <div className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-medium">
          {coachInitial}
        </div>
        <div className="text-start">
          <p className="text-gray-400 text-xs">برنامه از</p>
          <p className="text-gray-800 font-bold">{coachName}</p>
        </div>
      </div>
    </div>
  );
}
