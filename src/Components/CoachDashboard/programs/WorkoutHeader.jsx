import { Search, CalendarDays, UserRound } from "lucide-react";

export default function WorkoutHeader({
  weekdays,
  activeDay,
  onDayChange,
  students,
  selectedStudentId,
  onStudentChange,
  studentSearch,
  onStudentSearchChange,
}) {
  const selectedStudent = students.find((student) => student.id === selectedStudentId);

  return (
    <section className="overflow-hidden rounded-2xl border border-blue-50 bg-white p-3 shadow-sm sm:p-4">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-2 text-xs font-bold text-[#007BFF]">
            <CalendarDays size={14} /> برنامه تمرینی
          </span>
          {weekdays.map((day) => (
            <button
              type="button"
              key={day}
              onClick={() => onDayChange(day)}
              className={`rounded-full border px-3 py-2 text-[11px] transition ${
                activeDay === day
                  ? "border-blue-400 bg-blue-50 font-bold text-[#007BFF]"
                  : "border-transparent bg-slate-50 text-slate-500 hover:border-blue-200 hover:text-blue-600"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 self-start xl:self-auto">
          <span className="hidden text-xs text-slate-400 sm:inline">ساخت برنامه برای شاگرد</span>
          <div className="relative">
            <Search size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={studentSearch}
              onChange={(event) => onStudentSearchChange(event.target.value)}
              placeholder="جست‌وجوی شاگرد..."
              aria-label="جست‌وجوی شاگرد"
              className="w-full rounded-full border border-slate-200 bg-white py-2 pr-9 pl-3 text-xs outline-none transition focus:border-blue-400 sm:w-52"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-primary text-[#6B6F77]">انتخاب شاگرد</h2>
          <p className="mt-1 text-[11px] text-slate-400">برنامه برای شاگرد انتخاب‌شده ساخته می‌شود.</p>
        <div className="flex min-w-0 gap-2 overflow-x-auto pb-1 mt-5">
          {students.map((student) => {
            const selected = student.id === selectedStudentId;
            return (
              <button
                key={student.id}
                type="button"
                onClick={() => onStudentChange(student.id)}
                className={`flex min-w-[145px] items-center gap-2 rounded-full border px-3 py-2 text-right transition ${
                  selected ? "border-blue-400 bg-blue-50/60" : "border-slate-200 bg-white hover:border-blue-200"
                }`}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full bg-blue-100 text-blue-600">
                  {student.avatar ? (
                    <img src={student.avatar} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <UserRound size={16} />
                  )}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[11px] font-semibold text-slate-700">{student.name}</span>
                  <span className="mt-0.5 block truncate text-[9px] text-slate-400">{student.subtitle || "شاگرد فیتو"}</span>
                </span>
              </button>
            );
          })}
          {students.length === 0 && (
            <p className="px-2 py-3 text-xs text-slate-400">شاگردی با این عبارت پیدا نشد.</p>
          )}
        </div>
        </div>
      </div>
      {selectedStudent && (
        <p className="mt-2 text-[10px] text-slate-400">
          شاگرد انتخاب‌شده: <span className="font-semibold text-blue-600">{selectedStudent.name}</span>
        </p>
      )}
    </section>
  );
}
