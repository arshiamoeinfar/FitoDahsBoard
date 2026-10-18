import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SortIcon from "@mui/icons-material/Sort";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";

/* =====================================================
   دیتای نمونه — با API واقعی جایگزین کن.
   شکل هر آیتم:
   {
     id, name, emoji,   // استیکر/ایموجی حرکت
     sets, reps,
     current,   // رکورد فعلی (کیلوگرم)
     previous,  // رکورد قبلی (کیلوگرم)
     history,   // وزنه‌ی جلسات اخیر برای نمودار کوچیک (قدیمی ← جدید)
   }
   درصد پیشرفت و وضعیت از روی current/previous خودکار حساب میشه.
===================================================== */
const SAMPLE_EXERCISES = [
  { id: "bench", name: "پرس سینه", sets: 3, reps: 8, current: 80, previous: 70, emoji: "🏋️", history: [58, 64, 60, 66, 70, 61, 65, 63, 68, 66, 69, 80] },
  { id: "squat", name: "اسکوات با هالتر", sets: 4, reps: 6, current: 100, previous: 90, emoji: "🦵", history: [70, 78, 74, 82, 88, 80, 84, 90, 86, 88, 87, 100] },
  { id: "rdl", name: "ددلیفت رومانیایی", sets: 3, reps: 10, current: 90, previous: 90, emoji: "🔥", history: [86, 90, 88, 90, 87, 90, 89, 90, 88, 90, 89, 90] },
  { id: "shoulder-press", name: "پرس سرشانه", sets: 3, reps: 10, current: 40, previous: 45, emoji: "💪", history: [38, 42, 45, 41, 44, 43, 45, 42, 44, 43, 41, 40] },
  { id: "lat-pulldown", name: "کشش لت", sets: 4, reps: 10, current: 60, previous: 50, emoji: "🦾", history: [40, 46, 44, 48, 50, 45, 49, 47, 50, 52, 54, 60] },
  { id: "curl", name: "جلو بازو هالتر", sets: 3, reps: 12, current: 30, previous: 27.5, emoji: "💪", history: [22, 25, 24, 26, 27.5, 25, 26, 27, 26, 28, 27, 30] },
  { id: "lateral-raise", name: "نشر جانبی دمبل", sets: 3, reps: 15, current: 12, previous: 12, emoji: "🙌", history: [11, 12, 12, 11, 12, 12, 12, 11, 12, 12, 12, 12] },
  { id: "lunge", name: "لانج با دمبل", sets: 3, reps: 12, current: 24, previous: 28, emoji: "🚶", history: [20, 24, 22, 26, 28, 25, 27, 26, 28, 27, 25, 24] },
  { id: "cable-crunch", name: "کرانچ کابلی", sets: 4, reps: 15, current: 35, previous: 30, emoji: "🎯", history: [24, 27, 26, 29, 30, 27, 29, 28, 30, 31, 32, 35] },
  { id: "hip-thrust", name: "هیپ‌تراست", sets: 4, reps: 10, current: 100, previous: 80, emoji: "🍑", history: [60, 68, 64, 72, 80, 70, 76, 74, 78, 82, 90, 100] },
];

const FILTERS = [
  { id: "all", label: "همه" },
  { id: "progressed", label: "پیشرفت کرده" },
  { id: "attention", label: "نیازمند توجه" },
  { id: "same", label: "بدون تغییر" },
];

const SORTS = [
  { id: "progress-desc", label: "بیشترین پیشرفت", fn: (a, b) => b.percent - a.percent },
  { id: "progress-asc", label: "کمترین پیشرفت", fn: (a, b) => a.percent - b.percent },
  { id: "record-desc", label: "بیشترین رکورد", fn: (a, b) => b.current - a.current },
  { id: "name", label: "نام حرکت", fn: (a, b) => a.name.localeCompare(b.name, "fa") },
];

const STATUS_THEME = {
  progressed: { text: "#2BA84A", stroke: "#6BAF41", fill: "rgba(107,175,65,0.18)" },
  attention: { text: "#E5484D", stroke: "#EF4444", fill: "rgba(239,68,68,0.12)" },
  same: { text: "#8A8F98", stroke: "#9AA1A8", fill: "rgba(154,161,168,0.16)" },
};

const fa = (n) => Number(n).toLocaleString("fa-IR");

/* =====================================================
   نمودار کوچیک (sparkline) با tooltip روی هاور
===================================================== */
const SP_W = 310;
const SP_H = 90;
const SP_PAD_Y = 10;
const SP_PAD_X = 2;

const Sparkline = memo(function Sparkline({ data, theme }) {
  const [hover, setHover] = useState(null);

  const { points, linePath, areaPath } = useMemo(() => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min;
    const stepX = (SP_W - SP_PAD_X * 2) / (data.length - 1);

    const pts = data.map((v, i) => ({
      x: SP_PAD_X + i * stepX,
      y:
        range === 0
          ? SP_H / 2
          : SP_PAD_Y + (1 - (v - min) / range) * (SP_H - SP_PAD_Y * 2),
      v,
    }));

    const line = pts
      .map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
      .join(" ");
    const last = pts[pts.length - 1];
    const first = pts[0];
    const area = `${line} L${last.x.toFixed(1)} ${SP_H} L${first.x.toFixed(1)} ${SP_H} Z`;

    return { points: pts, linePath: line, areaPath: area };
  }, [data]);

  const activeIndex = hover ?? points.length - 1;
  const active = points[activeIndex];

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const idx = Math.round(ratio * (points.length - 1));
    setHover(Math.min(points.length - 1, Math.max(0, idx)));
  };

  return (
    <div
      className="relative w-full max-w-[190px] cursor-crosshair"
      onMouseMove={handleMove}
      onMouseLeave={() => setHover(null)}
    >
      <svg
        viewBox={`0 0 ${SP_W} ${SP_H}`}
        className="block h-auto w-full overflow-visible"
        dir="ltr"
      >
        <path d={areaPath} fill={theme.fill} />
        <path
          d={linePath}
          fill="none"
          stroke={theme.stroke}
          strokeWidth="1.8"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {hover !== null && (
          <line
            x1={active.x}
            x2={active.x}
            y1="0"
            y2={SP_H}
            stroke={theme.stroke}
            strokeOpacity="0.35"
            strokeDasharray="3 3"
          />
        )}
        <circle
          cx={active.x}
          cy={active.y}
          r={hover !== null ? 5 : 4}
          fill={theme.stroke}
          stroke="#fff"
          strokeWidth="2"
        />
      </svg>

      {hover !== null && (
        <div
          className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-lg bg-foreground px-2.5 py-1.5 text-center text-[11px] text-background shadow-lg"
          style={{
            left: `${(active.x / SP_W) * 100}%`,
            top: `${(active.y / SP_H) * 100}%`,
            marginTop: -10,
          }}
        >
          <span className="font-semibold">{fa(active.v)} کیلوگرم</span>
          <span className="block text-[10px] opacity-70">
            جلسه {fa(hover + 1)}
          </span>
        </div>
      )}
    </div>
  );
});

/* =====================================================
   سلول آماری هر ردیف (لیبل خاکستری + مقدار)
===================================================== */
function Stat({ label, strong = false, color, children }) {
  return (
    <div>
      <p className="text-xs text-muted">{label}</p>
      <p
        className={`mt-2 text-[15px] ${
          strong ? "font-bold text-foreground" : "font-medium text-muted"
        }`}
        style={color ? { color } : undefined}
      >
        {children}
      </p>
    </div>
  );
}

/* =====================================================
   ردیف هر حرکت — memo شده تا تغییر فیلتر/مرتب‌سازی، ردیف‌های
   بدون تغییر رو دوباره رندر نکنه
===================================================== */
const ExerciseRow = memo(function ExerciseRow({ exercise }) {
  const theme = STATUS_THEME[exercise.status];

  const percentLabel =
    exercise.percent > 0
      ? `+${fa(exercise.percent)}٪`
      : exercise.percent < 0
        ? `−${fa(Math.abs(exercise.percent))}٪`
        : `${fa(0)}٪`;

  return (
    <div className="grid grid-cols-[1.5fr_0.9fr_1fr_1fr_1fr_1.4fr] items-center gap-4 border-b border-border px-2 py-5 transition-colors last:border-b-0 hover:bg-surface-secondary">
      {/* عکس + نام */}
      <div className="flex items-center gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-3xl"
          role="img"
          aria-label={exercise.name}
        >
          {exercise.emoji ?? "💪"}
        </div>
        <p className="text-[15px] font-semibold text-foreground">
          {exercise.name}
        </p>
      </div>

      <Stat label="ست / تکرار">
        <span dir="ltr">
          {fa(exercise.sets)}×{fa(exercise.reps)}
        </span>
      </Stat>

      <Stat label="رکورد فعلی" strong>
        {fa(exercise.current)} کیلوگرم
      </Stat>

      <Stat label="رکورد قبلی">{fa(exercise.previous)} کیلوگرم</Stat>

      <Stat label="درصد پیشرفت" strong color={theme.text}>
        <span dir="ltr">{percentLabel}</span>
      </Stat>

      <Sparkline data={exercise.history} theme={theme} />
    </div>
  );
});

/* =====================================================
   مودال اصلی
   props: isOpen, onClose, exercises (اختیاری)
===================================================== */
export default function ExerciseProgressModal({
  isOpen,
  onClose,
  exercises = SAMPLE_EXERCISES,
}) {
  const [filter, setFilter] = useState("all");
  const [sortId, setSortId] = useState("progress-desc");
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef(null);

  // درصد پیشرفت و وضعیت هر حرکت از روی رکورد فعلی/قبلی حساب میشه
  const enriched = useMemo(
    () =>
      exercises.map((e) => {
        const percent = e.previous
          ? Math.round(((e.current - e.previous) / e.previous) * 100)
          : 0;
        const status =
          percent > 0 ? "progressed" : percent < 0 ? "attention" : "same";
        return { ...e, percent, status };
      }),
    [exercises],
  );

  const visible = useMemo(() => {
    const sorter = (SORTS.find((s) => s.id === sortId) ?? SORTS[0]).fn;
    return enriched
      .filter((e) => filter === "all" || e.status === filter)
      .sort(sorter);
  }, [enriched, filter, sortId]);

  const activeSort = SORTS.find((s) => s.id === sortId) ?? SORTS[0];

  // ریست فیلتر و مرتب‌سازی هر بار که مودال باز میشه
  useEffect(() => {
    if (isOpen) {
      setFilter("all");
      setSortId("progress-desc");
      setSortOpen(false);
    }
  }, [isOpen]);

  // بستن با Esc (اول منوی مرتب‌سازی، بعد مودال) + قفل اسکرول صفحه
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key !== "Escape") return;
      if (sortOpen) setSortOpen(false);
      else onClose?.();
    };
    document.addEventListener("keydown", handleKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, sortOpen, onClose]);

  // بستن منوی مرتب‌سازی با کلیک بیرون
  useEffect(() => {
    if (!sortOpen) return;
    const handleClickOutside = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sortOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-overlay px-4"
      onClick={onClose}
    >
      <style>{`
        @keyframes progressModalIn {
          from { opacity: 0; transform: translateY(12px) scale(0.98); }
          to { opacity: 1; transform: none; }
        }
        .progress-modal-in { animation: progressModalIn .22s ease-out; }
        .progress-scroll { scrollbar-width: thin; scrollbar-color: var(--primary) var(--surface-secondary); }
        .progress-scroll::-webkit-scrollbar { width: 10px; }
        .progress-scroll::-webkit-scrollbar-track { background: var(--surface-secondary); border-radius: 999px; }
        .progress-scroll::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 999px; }
      `}</style>

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="exercise-progress-title"
        className="progress-modal-in flex max-h-[90vh] min-h-[560px] w-full max-w-5xl flex-col overflow-hidden rounded-[32px] bg-surface"
        onClick={(e) => e.stopPropagation()}
      >
        {/* هدر */}
        <div
          dir="rtl"
          className="flex shrink-0 items-start justify-between px-10 pb-6 pt-9"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-success/10 text-3xl">
              📊
            </div>
            <div>
              <h2
                id="exercise-progress-title"
                className="text-xl font-bold text-foreground"
              >
                پیشرفت حرکات
              </h2>
              <p className="mt-1 text-sm text-muted">
                مرور عملکرد تمام حرکات
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-primary text-primary transition hover:bg-primary/10"
            aria-label="بستن"
          >
            <CloseIcon fontSize="small" />
          </button>
        </div>

        {/* ناحیه اسکرول: نوار فیلتر (sticky) + لیست */}
        <div className="min-h-0 flex-1 pb-4 pr-3">
          <div dir="ltr" className="progress-scroll h-full overflow-y-auto">
            {/* نوار فیلتر */}
            <div
              dir="rtl"
              className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-surface px-10 pb-5 pt-1"
            >
              <div className="flex flex-wrap items-center gap-3">
                {FILTERS.map((f) => {
                  const active = filter === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setFilter(f.id)}
                      className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm transition ${
                        active
                          ? "border-primary bg-primary text-white"
                          : "border-border bg-surface text-muted hover:border-primary hover:text-primary"
                      }`}
                    >
                      {f.label}
                    </button>
                  );
                })}
              </div>

              {/* مرتب‌سازی */}
              <div className="relative" ref={sortRef}>
                <button
                  onClick={() => setSortOpen((o) => !o)}
                  className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm text-muted transition hover:border-primary hover:text-primary"
                  aria-haspopup="listbox"
                  aria-expanded={sortOpen}
                >
                  <SortIcon sx={{ fontSize: 20 }} />
                  {activeSort.label}
                  <KeyboardArrowDownIcon
                    sx={{ fontSize: 18 }}
                    className={`transition-transform ${sortOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {sortOpen && (
                  <div
                    role="listbox"
                    className="absolute left-0 top-full z-20 mt-2 w-48 rounded-2xl border border-border bg-surface p-1.5 shadow-xl"
                  >
                    {SORTS.map((s) => {
                      const active = s.id === sortId;
                      return (
                        <button
                          key={s.id}
                          role="option"
                          aria-selected={active}
                          onClick={() => {
                            setSortId(s.id);
                            setSortOpen(false);
                          }}
                          className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3.5 py-2.5 text-sm transition ${
                            active
                              ? "bg-primary/10 text-primary"
                              : "text-muted hover:bg-surface-secondary"
                          }`}
                        >
                          <span>{s.label}</span>
                          {active && <CheckIcon sx={{ fontSize: 16 }} />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* لیست حرکات */}
            <div dir="rtl" className="px-10">
              {visible.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <p className="text-sm text-muted">
                    حرکتی با این فیلتر پیدا نشد
                  </p>
                  <button
                    onClick={() => setFilter("all")}
                    className="mt-4 cursor-pointer rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
                  >
                    نمایش همه حرکات
                  </button>
                </div>
              ) : (
                visible.map((exercise) => (
                  <ExerciseRow key={exercise.id} exercise={exercise} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}