
import { useEffect, useState } from "react";
import {
  X,
  PlusCircle,
  Dumbbell,
  Clock3,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  RotateCcw,
  Activity,
} from "lucide-react";

const defaultInstructions = [
  "وضعیت شروع را با فرم صحیح تنظیم کن.",
  "حرکت را آرام و کنترل‌شده انجام بده.",
  "عضله هدف را در طول حرکت درگیر نگه دار.",
  "به‌آرامی به وضعیت شروع برگرد.",
];

const defaultTips = [
  "از تاب دادن بدن خودداری کن.",
  "وزنه‌ای انتخاب کن که فرم صحیح حرکت حفظ شود.",
  "تنفس را در طول اجرای حرکت کنترل کن.",
];

function AnatomyView({ muscle = "پشت" }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-bold text-slate-700">
          آناتومی عضلات
        </h3>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
          عضله هدف
        </span>
      </div>

      <svg
        viewBox="0 0 240 290"
        className="mx-auto h-56 w-full"
        role="img"
        aria-label={`تصویر شماتیک عضلات هدف: ${muscle}`}
      >
        <defs>
          <linearGradient id="bodyGradient" x1="0" x2="1">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="50%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>
        </defs>

        {/* نمای شماتیک پشت بدن */}
        <circle
          cx="120"
          cy="29"
          r="19"
          fill="url(#bodyGradient)"
          stroke="#94A3B8"
          strokeWidth="1.5"
        />

        <path
          d="M106 48 L101 59 Q82 61 73 77
          L51 119 Q47 131 55 136 Q62 139 68 127
          L86 94 L91 132 L82 175 L94 210
          L98 264 Q98 278 108 278 Q115 278 115 265
          L120 216 L125 265 Q125 278 135 278
          Q144 278 142 264 L146 210 L158 175
          L149 132 L154 94 L172 127 Q178 139 185 136
          Q193 131 189 119 L167 77 Q158 61 139 59
          L134 48 Z"
          fill="url(#bodyGradient)"
          stroke="#94A3B8"
          strokeWidth="1.5"
        />

        {/* عضلات کمکی */}
        <path
          d="M103 65 Q85 70 82 89 L92 119
          L108 139 L116 103 L116 73 Z"
          fill="#93C5FD"
          stroke="#60A5FA"
        />
        <path
          d="M137 65 Q155 70 158 89 L148 119
          L132 139 L124 103 L124 73 Z"
          fill="#93C5FD"
          stroke="#60A5FA"
        />

        {/* عضلات هدف با رنگ متفاوت */}
        <path
          d="M92 91 Q100 94 113 112
          L108 151 Q101 169 93 175 L87 137 Z"
          fill="#EF4444"
          stroke="#B91C1C"
          strokeWidth="1.5"
        />
        <path
          d="M148 91 Q140 94 127 112
          L132 151 Q139 169 147 175 L153 137 Z"
          fill="#EF4444"
          stroke="#B91C1C"
          strokeWidth="1.5"
        />

        <path
          d="M120 60 L120 202"
          stroke="#94A3B8"
          strokeWidth="2"
          strokeDasharray="3 4"
        />

        <path
          d="M107 150 L117 161 L115 192 L103 183 Z"
          fill="#FCA5A5"
          stroke="#F87171"
        />
        <path
          d="M133 150 L123 161 L125 192 L137 183 Z"
          fill="#FCA5A5"
          stroke="#F87171"
        />

        <path
          d="M99 211 L112 211 L109 261 L101 261 Z"
          fill="#CBD5E1"
          stroke="#94A3B8"
        />
        <path
          d="M128 211 L141 211 L139 261 L131 261 Z"
          fill="#CBD5E1"
          stroke="#94A3B8"
        />
      </svg>

      <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-red-500" />
          عضله هدف
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-blue-300" />
          عضلات کمکی
        </span>
      </div>

      <p className="mt-3 text-center text-xs leading-5 text-slate-400">
        تصویر شماتیک آموزشی است. برای نمایش دقیق عضله درگیر هر حرکت،
        از تصاویر آناتومی اختصاصی همان حرکت استفاده کن.
      </p>
    </div>
  );
}

export default function ExerciseDetailsModal({
  exercise,
  student,
  onClose,
  onAdd,
}) {
  const [tab, setTab] = useState("instructions");

  const [settings, setSettings] = useState({
    sets: exercise?.sets ?? 3,
    reps: exercise?.reps ?? "10-12",
    rest: exercise?.rest ?? 60,
    weight: exercise?.weight ?? "",
    notes: exercise?.notes ?? "",
  });

  useEffect(() => {
    if (!exercise) return;

    setSettings({
      sets: exercise.sets ?? 3,
      reps: exercise.reps ?? "10-12",
      rest: exercise.rest ?? 60,
      weight: exercise.weight ?? "",
      notes: exercise.notes ?? "",
    });
    setTab("instructions");
  }, [exercise]);

  useEffect(() => {
    if (!exercise) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [exercise, onClose]);

  if (!exercise) return null;

  const instructions = exercise.instructions?.length
    ? exercise.instructions
    : defaultInstructions;

  const tips = exercise.tips?.length
    ? exercise.tips
    : defaultTips;

  const updateSetting = (key, value) => {
    setSettings((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const handleAdd = () => {
    const sets = Number(settings.sets);
    const rest = Number(settings.rest);

    if (!Number.isInteger(sets) || sets < 1 || sets > 20) {
      return;
    }

    if (!Number.isFinite(rest) || rest < 0 || rest > 600) {
      return;
    }

    if (!String(settings.reps).trim()) {
      return;
    }

    onAdd?.({
      ...exercise,
      ...settings,
      sets,
      rest,
      studentId: student?.id ?? null,
      studentName: student?.name ?? null,
    });

    onClose?.();
  };

  const aiDescription =
    exercise.aiExplanation ||
    exercise.description ||
    "برای اجرای این حرکت، فرم صحیح بدن را حفظ کن، عضله هدف را کنترل کن و وزنه را متناسب با توانایی شاگرد انتخاب کن.";

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100";

  return (
    <div
      dir="rtl"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose?.();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="exercise-modal-title"
        className="relative max-h-[94vh] w-full max-w-6xl overflow-y-auto rounded-[26px] bg-white p-4 shadow-2xl sm:p-6 lg:p-7"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="بستن پنجره"
          className="absolute left-4 top-4 z-10 rounded-full border border-slate-200 bg-white p-2 text-slate-500 hover:bg-slate-50"
        >
          <X size={20} />
        </button>

        {/* هدر مخصوص پنل مربی */}
        <div className="mb-6 flex flex-col gap-3 border-b border-slate-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="pr-1">
            <div className="mb-2 flex items-center gap-2 text-sm text-blue-600">
              <Dumbbell size={17} />
              <span>تنظیم برنامه تمرینی</span>
            </div>

            <h2
              id="exercise-modal-title"
              className="text-xl font-bold text-slate-800 sm:text-2xl"
            >
              {exercise.name}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {student?.name
                ? `در حال تنظیم حرکت برای ${student.name}`
                : "جزئیات حرکت و تنظیمات تمرین شاگرد"}
            </p>
          </div>

          <span className="w-fit rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-700">
            {exercise.target || `عضله هدف: ${exercise.muscle || "عمومی"}`}
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* ستون اطلاعات و آناتومی */}
          <div className="min-w-0 space-y-5">
            <div className="overflow-hidden rounded-2xl bg-slate-900">
              <img
                src={exercise.image}
                alt={exercise.name}
                className="aspect-video w-full object-cover"
              />
            </div>

            <AnatomyView muscle={exercise.muscle} />

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-slate-100 p-3">
                <Activity className="mb-2 text-blue-500" size={20} />
                <p className="text-xs text-slate-400">سطح دشواری</p>
                <p className="mt-1 text-sm font-bold text-slate-700">
                  {exercise.difficulty || "متوسط"}
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 p-3">
                <Clock3 className="mb-2 text-blue-500" size={20} />
                <p className="text-xs text-slate-400">زمان استراحت</p>
                <p className="mt-1 text-sm font-bold text-slate-700">
                  {settings.rest} ثانیه
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 p-3">
                <Dumbbell className="mb-2 text-blue-500" size={20} />
                <p className="text-xs text-slate-400">تعداد ست</p>
                <p className="mt-1 text-sm font-bold text-slate-700">
                  {settings.sets} ست
                </p>
              </div>
            </div>
          </div>

          {/* ستون تنظیمات و راهنمای اجرا */}
          <div className="min-w-0 space-y-5">
            <section className="rounded-2xl border border-blue-100 bg-blue-50/50 p-4 sm:p-5">
              <div className="mb-4 flex items-center gap-2">
                <Dumbbell className="text-blue-600" size={20} />
                <h3 className="font-bold text-slate-800">
                  تنظیمات حرکت برای شاگرد
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <label className="text-sm font-medium text-slate-600">
                  تعداد ست
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={settings.sets}
                    onChange={(event) =>
                      updateSetting("sets", event.target.value)
                    }
                    className={inputClass}
                  />
                </label>

                <label className="text-sm font-medium text-slate-600">
                  تعداد تکرار
                  <input
                    type="text"
                    value={settings.reps}
                    onChange={(event) =>
                      updateSetting("reps", event.target.value)
                    }
                    placeholder="مثلاً 10-12"
                    className={inputClass}
                  />
                </label>

                <label className="text-sm font-medium text-slate-600">
                  استراحت (ثانیه)
                  <input
                    type="number"
                    min="0"
                    max="600"
                    step="5"
                    value={settings.rest}
                    onChange={(event) =>
                      updateSetting("rest", event.target.value)
                    }
                    className={inputClass}
                  />
                </label>

                <label className="text-sm font-medium text-slate-600">
                  وزنه (کیلوگرم)
                  <input
                    type="number"
                    min="0"
                    step="0.5"
                    value={settings.weight}
                    onChange={(event) =>
                      updateSetting("weight", event.target.value)
                    }
                    placeholder="اختیاری"
                    className={inputClass}
                  />
                </label>
              </div>

              <label className="mt-4 block text-sm font-medium text-slate-600">
                یادداشت اختصاصی مربی برای این حرکت
                <textarea
                  rows={3}
                  value={settings.notes}
                  onChange={(event) =>
                    updateSetting("notes", event.target.value)
                  }
                  placeholder="مثلاً در ست آخر، اجرای حرکت آهسته‌تر باشد..."
                  className={`${inputClass} resize-y`}
                />
              </label>

              <button
                type="button"
                onClick={() =>
                  setSettings({
                    sets: 3,
                    reps: "10-12",
                    rest: 60,
                    weight: "",
                    notes: "",
                  })
                }
                className="mt-4 inline-flex items-center gap-2 text-xs text-slate-500 hover:text-blue-600"
              >
                <RotateCcw size={14} />
                بازگرداندن مقادیر پیش‌فرض
              </button>
            </section>

            <section className="rounded-2xl border border-blue-100 bg-white p-4 sm:p-5">
              <div className="mb-4 flex items-center gap-2">
                <Sparkles size={20} className="text-blue-600" />
                <h3 className="font-bold text-slate-800">
                  راهنمای هوشمند حرکت
                </h3>
              </div>

              <div className="mb-4 rounded-xl bg-blue-50 p-4">
                <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-xs text-white">
                  <Sparkles size={12} />
                  AI
                </span>

                <p className="text-sm leading-7 text-slate-600">
                  {aiDescription}
                </p>
              </div>

              <div className="mb-4 flex gap-2 border-b border-slate-100 pb-3">
                <button
                  type="button"
                  onClick={() => setTab("instructions")}
                  className={`rounded-full px-4 py-2 text-xs transition ${
                    tab === "instructions"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  نحوه اجرا
                </button>

                <button
                  type="button"
                  onClick={() => setTab("tips")}
                  className={`rounded-full px-4 py-2 text-xs transition ${
                    tab === "tips"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  نکات مربی
                </button>
              </div>

              <ol className="space-y-3">
                {(tab === "instructions" ? instructions : tips).map(
                  (item, index) => (
                    <li
                      key={`${tab}-${index}`}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                        {index + 1}
                      </span>
                      {item}
                    </li>
                  )
                )}
              </ol>

              <div className="mt-5 flex items-start gap-2 rounded-xl bg-amber-50 p-3 text-xs leading-6 text-amber-800">
                <ShieldCheck className="mt-1 shrink-0" size={16} />
                <p>
                  تنظیمات نهایی باید با سطح آمادگی، هدف تمرینی و شرایط شاگرد
                  هماهنگ باشند.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* دکمه‌های عملیاتی مربی */}
        <div className="mt-6 flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 px-6 py-3 text-sm text-slate-600 hover:bg-slate-50"
          >
            انصراف
          </button>

          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white transition hover:bg-blue-700 active:scale-[0.98]"
          >
            <PlusCircle size={19} />
            افزودن حرکت به برنامه شاگرد
          </button>
        </div>
      </section>
    </div>
  );
}
