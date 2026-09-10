import React from "react";
import {
  Dumbbell,
  Target,
  Clock3,
  Trophy,
} from "lucide-react";

export default function ReportStats({ stats }) {
  return (
    <section className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">

      <StatCard
        icon={<Dumbbell size={19} />}
        title="جلسات انجام شده"
        value={`${stats.completed}/${stats.planned}`}
        label="جلسه"
        bg="bg-[#EAF4FF]"
        color="text-[#007BFF]"
      />

      <StatCard
        icon={<Target size={19} />}
        title="پایبندی به برنامه"
        value={`${stats.adherence}٪`}
        label="پایبندی"
        bg="bg-[#EAF9EF]"
        color="text-[#4CAF50]"
      />

      <StatCard
        icon={<Clock3 size={19} />}
        title="زمان تمرین"
        value={stats.duration}
        label="مجموع"
        bg="bg-[#FFF5E8]"
        color="text-[#F59E0B]"
      />

      <StatCard
        icon={<Trophy size={19} />}
        title="رکوردهای جدید"
        value={`+${stats.records}`}
        label="رکورد"
        bg="bg-[#FCEBFA]"
        color="text-[#D946EF]"
      />

    </section>
  );
}

function StatCard({
  icon,
  title,
  value,
  label,
  bg,
  color,
}) {
  return (
    <div className="rounded-[22px] bg-white p-4 shadow-sm">

      <div
        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-[13px] ${bg} ${color}`}
      >
        {icon}
      </div>

      <p className="text-[10px] text-[#8A8D93]">
        {title}
      </p>

      <div className="mt-1 flex items-end gap-1">

        <span className="text-lg font-black text-[#45474C]">
          {value}
        </span>

        <span className="text-[9px] text-[#8A8D93]">
          {label}
        </span>

      </div>

    </div>
  );
}