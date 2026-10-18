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
    <section className="overflow-hidden rounded-2xl border border-border bg-surface p-3 shadow-sm sm:p-4">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-2 text-xs font-bold text-primary">
            <CalendarDays size={14} /> برنامه تمرینی
          </span>
          {weekdays.map((day) => (
            <button
              type="button"
              key={day}
              onClick={() => onDayChange(day)}
              className={`rounded-full border px-3 py-2 text-[11px] transition ${
                activeDay === day
                  ? "border-primary bg-primary/10 font-bold text-primary"
                  : "border-transparent bg-surface-secondary text-muted hover:border-primary/30 hover:text-primary"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 self-start xl:self-auto">
          <span className="hidden text-xs text-muted sm:inline">ساخت برنامه برای شاگرد</span>
          <div className="relative">
            <Search size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted" />
            <input
              value={studentSearch}
              onChange={(event) => onStudentSearchChange(event.target.value)}
              placeholder="جست‌وجوی شاگرد..."
              aria-label="جست‌وجوی شاگرد"
              className="w-full rounded-full border border-border bg-input py-2 pr-9 pl-3 text-xs outline-none transition focus:border-primary sm:w-52"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-primary text-foreground">انتخاب شاگرد</h2>
          <p className="mt-1 text-[11px] text-muted">برنامه برای شاگرد انتخاب‌شده ساخته می‌شود.</p>
        <div className="flex min-w-0 gap-2 overflow-x-auto pb-1 mt-5">
          {students.map((student) => {
            const selected = student.id === selectedStudentId;
            return (
              <button
                key={student.id}
                type="button"
                onClick={() => onStudentChange(student.id)}
                className={`flex min-w-[145px] items-center gap-2 rounded-full border px-3 py-2 text-right transition ${
                  selected ? "border-primary bg-primary/10" : "border-border bg-surface hover:border-primary/30"
                }`}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full bg-primary/10 text-primary">
                  {student.avatar ? (
                    <img src={student.avatar} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <UserRound size={16} />
                  )}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[11px] font-semibold text-foreground">{student.name}</span>
                  <span className="mt-0.5 block truncate text-[9px] text-muted">{student.subtitle || "شاگرد فیتو"}</span>
                </span>
              </button>
            );
          })}
          {students.length === 0 && (
            <p className="px-2 py-3 text-xs text-muted">شاگردی با این عبارت پیدا نشد.</p>
          )}
        </div>
        </div>
      </div>
      {selectedStudent && (
        <p className="mt-2 text-[10px] text-muted">
          شاگرد انتخاب‌شده: <span className="font-semibold text-primary">{selectedStudent.name}</span>
        </p>
      )}
    </section>
  );
}
