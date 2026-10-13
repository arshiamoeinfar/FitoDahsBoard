import { Trash2, ClipboardList } from "lucide-react";

function NumberField({ label, value, min = 0, max = 999, onChange }) {
  return (
    <label className="flex min-w-0 flex-col gap-1 text-[10px] text-slate-400">
      <span>{label}</span>
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(event) => {
          const raw = event.target.value;
          if (raw === "") return onChange("");
          const number = Number(raw);
          if (Number.isFinite(number)) onChange(Math.min(max, Math.max(min, number)));
        }}
        className="w-full min-w-0 rounded-lg border border-slate-200 bg-white px-2 py-2 text-xs text-slate-700 outline-none focus:border-blue-400"
      />
    </label>
  );
}

export default function WorkoutPlanTable({ day, items, onUpdate, onRemove }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-blue-50 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4">
        <div>
          <h2 className="text-sm font-bold text-slate-700">
            برنامه تمرینی <span className="text-[#007BFF]">{day}</span>
          </h2>
          <p className="mt-1 text-[11px] text-slate-400">جزئیات هر حرکت را از همین جدول ویرایش کن.</p>
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-semibold text-[#007BFF]">
          {items.length} حرکت
        </span>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center px-4 py-10 text-center">
          <span className="mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-500">
            <ClipboardList size={21} />
          </span>
          <p className="text-xs font-semibold text-slate-600">هنوز حرکتی برای این روز انتخاب نشده</p>
          <p className="mt-1 text-[11px] text-slate-400">از کتابخانه حرکات، تمرین‌های موردنظرت را اضافه کن.</p>
        </div>
      ) : (
        <>
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[850px] table-fixed text-right">
              <thead className="bg-slate-50/70 text-[10px] font-medium text-slate-400">
                <tr>
                  <th className="w-10 px-3 py-3">#</th>
                  <th className="w-[22%] px-3 py-3">نام حرکت</th>
                  <th className="w-[10%] px-2 py-3">ست</th>
                  <th className="w-[10%] px-2 py-3">تکرار</th>
                  <th className="w-[12%] px-2 py-3">استراحت (ثانیه)</th>
                  <th className="w-[14%] px-2 py-3">سیستم تمرینی</th>
                  <th className="w-[13%] px-2 py-3">وزنه</th>
                  <th className="px-3 py-3">یادداشت مربی</th>
                  <th className="w-12 px-2 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={item.id} className="border-t border-slate-100 align-middle">
                    <td className="px-3 py-3 text-xs text-slate-400">{index + 1}</td>
                    <td className="px-3 py-3">
                      <p className="truncate text-xs font-semibold text-slate-700">{item.name}</p>
                      <p className="mt-1 text-[10px] text-slate-400">{item.muscle}</p>
                    </td>
                    <td className="px-2 py-3"><NumberField label="" value={item.sets} min={1} max={20} onChange={(v) => onUpdate(item.id, "sets", v)} /></td>
                    <td className="px-2 py-3"><NumberField label="" value={item.reps} min={1} max={200} onChange={(v) => onUpdate(item.id, "reps", v)} /></td>
                    <td className="px-2 py-3"><NumberField label="" value={item.rest} min={0} max={900} onChange={(v) => onUpdate(item.id, "rest", v)} /></td>
                    <td className="px-2 py-3">
                      {item.system}
                    </td>
                    <td className="px-3 py-3">
                      <input value={item.note} onChange={(e) => onUpdate(item.id, "note", e.target.value)} placeholder="یادداشت..." className="w-full rounded-lg border border-slate-200 px-2 py-2 text-xs outline-none focus:border-blue-400" />
                    </td>
                    <td className="px-2 py-3">
                      <button type="button" onClick={() => onRemove(item.id)} aria-label={`حذف ${item.name}`} className="rounded-lg p-2 text-rose-400 hover:bg-rose-50 hover:text-rose-600">
                        <Trash2 size={15} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-3 p-3 md:hidden">
            {items.map((item, index) => (
              <article key={item.id} className="rounded-xl border border-slate-200 p-3">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-bold text-slate-700">{index + 1}. {item.name}</p>
                    <p className="mt-1 text-[10px] text-slate-400">{item.muscle}</p>
                  </div>
                  <button type="button" onClick={() => onRemove(item.id)} aria-label={`حذف ${item.name}`} className="rounded-lg p-2 text-rose-400 hover:bg-rose-50">
                    <Trash2 size={15} />
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <NumberField label="ست" value={item.sets} min={1} max={20} onChange={(v) => onUpdate(item.id, "sets", v)} />
                  <NumberField label="تکرار" value={item.reps} min={1} max={200} onChange={(v) => onUpdate(item.id, "reps", v)} />
                  <NumberField label="استراحت (ثانیه)" value={item.rest} min={0} max={900} onChange={(v) => onUpdate(item.id, "rest", v)} />
                </div>
                <div className="mt-3 grid gap-2">
                  <label className="text-[10px] text-slate-400">وزنه
                    <input value={item.weight} onChange={(e) => onUpdate(item.id, "weight", e.target.value)} placeholder="مثلاً ۲۰ کیلو" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-xs outline-none focus:border-blue-400" />
                  </label>
                  <label className="text-[10px] text-slate-400">یادداشت مربی
                    <input value={item.note} onChange={(e) => onUpdate(item.id, "note", e.target.value)} placeholder="یادداشت..." className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-xs outline-none focus:border-blue-400" />
                  </label>
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
