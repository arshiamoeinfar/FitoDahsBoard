import React, { useState } from "react";
import Ranking from "../../../../assets/Icons/Ranking.svg"
const DEFAULT_RECORDS = [
  {
    id: 1,
    exercise: "پرس دمبل",
    value: "24kg × 8",
    isNew: true,
    date: "۲۳ تیر ۱۴۰۵",
    previous: "22kg × 8",
  },
  {
    id: 2,
    exercise: "اسکوات",
    value: "60kg × 6",
    isNew: false,
    date: "۱۸ تیر ۱۴۰۵",
    previous: "55kg × 6",
  },
  {
    id: 3,
    exercise: "ددلیفت",
    value: "80kg × 5",
    isNew: false,
    date: "۱۰ تیر ۱۴۰۵",
    previous: "75kg × 5",
  },
  {
    id: 4,
    exercise: "پرس سینه هالتر",
    value: "50kg × 8",
    isNew: false,
    date: "۲ تیر ۱۴۰۵",
    previous: "45kg × 8",
  },
  {
    id: 5,
    exercise: "زیربغل هالتر",
    value: "40kg × 10",
    isNew: false,
    date: "۲۵ خرداد ۱۴۰۵",
    previous: "37kg × 10",
  },
];

// // Trophy / podium-style icon, matching the reference image
// function RecordIcon({ className = "w-7 h-7 text-blue-500" }) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       className={className}
//       stroke="currentColor"
//       strokeWidth="1.6"
//     >
//       <path d="M12 3l1.2 2.4 2.6.4-1.9 1.9.5 2.6L12 9l-2.4 1.3.5-2.6L8.2 5.8l2.6-.4L12 3z" />
//       <path d="M9 12h6v9H9z" />
//       <path d="M5 15h4v6H5z" />
//       <path d="M15 15h4v6h-4z" />
//     </svg>
//   );
// }

function RecordRow({ record, isOpen, onToggle }) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => onToggle(record.id)}
        className="w-full flex items-center justify-between py-6 text-right"
      >
        <div className="bg-blue-500/10 rounded-2xl w-16 h-16 flex items-center justify-center shrink-0">
          <img className="size-7" src={Ranking} alt="" />
        </div>

        <div className="flex-1 mr-4 text-right">
          <p className="font-primary font-medium text-foreground mb-2">
            {record.exercise}
          </p>
          <p className="text-muted text-sm mt-1">{record.value}</p>
        </div>

        {record.isNew && (
          <span
            className="items-center gap-2 border border-border rounded-full px-2 py-0.5 text-foreground text-sm hover:bg-surface-secondary transition-colors self-start"
          >
            <span>{"رکورد جدید"}</span>
            <span>🔥</span>
          </span>
        )}

        <svg
          className={`w-4 h-4 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="bg-surface-secondary rounded-2xl px-5 py-4 mb-5 flex items-center justify-between text-sm">
          <div className="text-muted">
            رکورد قبلی:{" "}
            <span className="text-muted text-sm mt-1">{record.previous}</span>
          </div>
          <div className="text-muted">{record.date}</div>
        </div>
      )}
    </div>
  );
}

export default function PersonalRecordsCard({
  title = "رکورد های شخصی",
  records = DEFAULT_RECORDS,
}) {
  const [openId, setOpenId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleRecords = showAll ? records : records.slice(0, 3);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleFireClick = () => {
    const newest = records.find((r) => r.isNew);
    if (newest) {
      setShowAll(true);
      setOpenId(newest.id);
    }
  };

  return (
    <div
      dir="rtl"
      className="bg-surface rounded-3xl p-8 w-full max-w-2xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-medium text-foreground">{title}</h3>
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-1 text-sm text-primary transition hover:text-primary-hover"
          >
            {showAll ? "نمایش کمتر" : "مشاهده همه"}

          </button>
      </div>

      {/* List */}
      <div className="mt-4">
        {visibleRecords.map((record) => (
          <RecordRow
            key={record.id}
            record={record}
            isOpen={openId === record.id}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}
