import React, { useEffect, useState } from "react";

const reports = [
  {
    id: "growth",
    label: "رشد تعداد شاگردان",
    percent: 64,
    color: "#5FA83D",
    colorLight: "#8FD16A",
    track: "#E5F6DA",
  },
  {
    id: "adherence",
    label: "پایبندی به تمرین",
    percent: 90,
    color: "#C0289C",
    colorLight: "#E169C4",
    track: "#FBE3F4",
  },
  {
    id: "sleep",
    label: "کیفیت خواب شاگردان",
    percent: 80,
    color: "#5B6FBE",
    colorLight: "#8B9BE0",
    track: "#E4E9FB",
  },
  {
    id: "progress",
    label: "پیشرفت شاگردان",
    percent: 93,
    color: "#C89B1D",
    colorLight: "#E6C158",
    track: "#F7EDD3",
  },
  {
    id: "nutrition",
    label: "کیفیت تغذیه شاگردان",
    percent: 43,
    color: "#17ADC2",
    colorLight: "#5FD3E3",
    track: "#DBF5F8",
  },
];

function ProgressRow({ report, delay }) {
  const [animatedPercent, setAnimatedPercent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedPercent(report.percent), delay);
    return () => clearTimeout(timer);
  }, [report.percent, delay]);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-sm  tabular-nums"
          style={{ color: report.color }}
        >
          {report.percent}%
        </span>
        <p className="text-sm font-primary text-[#4F5965]">{report.label}</p>
      </div>

      <div
        className="w-full h-2.5 rounded-full overflow-hidden"
        style={{ backgroundColor: report.track }}
      >
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${animatedPercent}%`,
            background: `linear-gradient(90deg, ${report.colorLight}, ${report.color})`,
          }}
        />
      </div>
    </div>
  );
}

export default function SupplementaryReports() {
  return (
    <div dir="rtl" className="bg-white rounded-3xl p-8 w-full max-w-xl mx-auto">
      <h2 className="text-2xl  text-[#6B6F77] font-primary text-right mb-10">
        گزارشات تکمیلی
      </h2>

      <div className="flex flex-col gap-9">
        {reports.map((report, index) => (
          <ProgressRow key={report.id} report={report} delay={index * 120} />
        ))}
      </div>
    </div>
  );
}