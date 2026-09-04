import { X, Search, Plus, Minus, Camera, ChevronDown } from "lucide-react";

export default function AddFoodModal({ isOpen, onClose, onAdd }) {
  if (!isOpen) return null;

  return (
    <div
      dir="rtl"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
    >
      <div className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] bg-[#F8FAFC] shadow-2xl">
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-gray-100 bg-white px-6 py-5">
          <div>
            <h2 className="text-xl font-bold text-gray-900">افزودن غذا</h2>
            <p className="mt-1 text-sm text-gray-400">
              غذای خود را به وعده غذایی اضافه کنید
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200 hover:text-gray-800"
          >
            <X size={20} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="grid flex-1 overflow-y-auto lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="space-y-6 border-l border-gray-100 p-6">
            {/* SEARCH */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                انتخاب غذا
              </label>
              <div className="relative">
                <Search
                  size={19}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="جستجوی غذا..."
                  className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pr-11 pl-4 text-sm outline-none transition focus:border-[#007BFF] focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* FOOD LIST */}
            <div className="max-h-[230px] space-y-2 overflow-y-auto pr-1">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-2xl border border-[#007BFF] bg-blue-50 p-3 text-right transition"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-xl">
                    🍗
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">سینه مرغ</p>
                    <p className="mt-1 text-xs text-gray-400">165 کالری در 100 گرم</p>
                  </div>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#007BFF] text-xs text-white">
                  ✓
                </div>
              </button>

              <button
                type="button"
                className="flex w-full items-center justify-between rounded-2xl border border-gray-100 bg-white p-3 text-right transition hover:border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-xl">
                    🍚
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">برنج پخته</p>
                    <p className="mt-1 text-xs text-gray-400">130 کالری در 100 گرم</p>
                  </div>
                </div>
              </button>
            </div>

            {/* QUANTITY */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                مقدار
              </label>
              <div className="flex gap-3">
                <div className="flex flex-1 items-center justify-between rounded-2xl border border-gray-200 bg-white p-2">
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition hover:bg-gray-200"
                  >
                    <Minus size={17} />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={1}
                    className="w-16 bg-transparent text-center font-bold text-gray-900 outline-none"
                  />
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#007BFF] text-white transition hover:bg-blue-600"
                  >
                    <Plus size={17} />
                  </button>
                </div>

                <div className="relative flex-1">
                  <select className="h-full w-full appearance-none rounded-2xl border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none focus:border-[#007BFF]">
                    <option>گرم</option>
                    <option>دانه</option>
                  </select>
                  <ChevronDown
                    size={17}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-400">معادل تقریبی 100.0 گرم</p>
            </div>

            {/* MEAL */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                وعده غذایی
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="rounded-xl border border-[#007BFF] bg-blue-50 px-4 py-3 text-sm font-medium text-[#007BFF] transition"
                >
                  صبحانه
                </button>
                <button
                  type="button"
                  className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm text-gray-500 transition hover:border-gray-200"
                >
                  ناهار
                </button>
                <button
                  type="button"
                  className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm text-gray-500 transition hover:border-gray-200"
                >
                  شام
                </button>
                <button
                  type="button"
                  className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm text-gray-500 transition hover:border-gray-200"
                >
                  میان وعده
                </button>
              </div>
            </div>

            {/* AI FOOD PHOTO */}
            <label className="block cursor-pointer">
              <input type="file" accept="image/*" capture="environment" className="hidden" />
              <div className="flex items-center gap-4 rounded-2xl border border-dashed border-blue-200 bg-blue-50/50 p-4 transition hover:bg-blue-50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#007BFF] shadow-sm">
                  <Camera size={21} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">تشخیص غذا با عکس</p>
                  <p className="mt-1 text-xs text-gray-500">
                    از غذایت عکس بگیر تا مقدار و ارزش غذایی آن تخمین زده شود
                  </p>
                </div>
              </div>
            </label>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-6">
            <div className="h-full rounded-3xl bg-white p-6 shadow-sm">
              {/* EMPTY STATE */}
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-3xl">
                  🍽️
                </div>
                <h3 className="font-bold text-gray-800">هنوز غذایی انتخاب نشده</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-gray-400">
                  یک غذا از لیست انتخاب کن تا اطلاعات تغذیه‌ای آن اینجا نمایش داده شود.
                </p>
              </div>

              {/* NUTRITION - Hidden for UI demo */}
              <div className="hidden space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                    🍗
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">سینه مرغ</p>
                    <p className="mt-1 text-sm text-gray-400">1 عدد • 100.0 گرم</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#007BFF] p-5 text-white">
                  <p className="text-sm text-white/70">کالری این غذا</p>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-4xl font-bold">165</span>
                    <span className="mb-1 text-sm text-white/70">kcal</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <NutritionCard title="پروتئین" value={31} unit="g" icon="🥩" />
                  <NutritionCard title="کربوهیدرات" value={0} unit="g" icon="🍚" />
                  <NutritionCard title="چربی" value={3.6} unit="g" icon="🥑" />
                </div>

                <div className="space-y-5">
                  <MacroBar title="پروتئین" value={31} max={50} />
                  <MacroBar title="کربوهیدرات" value={0} max={100} />
                  <MacroBar title="چربی" value={3.6} max={50} />
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                  <span className="text-sm text-gray-500">وعده غذایی</span>
                  <span className="font-medium text-gray-800">صبحانه</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between gap-4 border-t border-gray-100 bg-white px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl px-5 py-3 text-sm font-medium text-gray-500 transition hover:bg-gray-100"
          >
            انصراف
          </button>
          <button
            type="button"
            disabled
            className="rounded-xl bg-[#007BFF] px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            + افزودن به وعده غذایی
          </button>
        </div>
      </div>
    </div>
  );
}

function NutritionCard({ title, value, unit, icon }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs text-gray-500">{title}</span>
        <span>{icon}</span>
      </div>
      <div className="flex items-end gap-1">
        <span className="text-xl font-bold text-gray-900">
          {Number(value).toFixed(1)}
        </span>
        <span className="mb-0.5 text-xs text-gray-400">{unit}</span>
      </div>
    </div>
  );
}

function MacroBar({ title, value, max }) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">{title}</span>
        <span className="font-medium text-gray-800">
          {Number(value).toFixed(1)}g
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-[#007BFF] transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}