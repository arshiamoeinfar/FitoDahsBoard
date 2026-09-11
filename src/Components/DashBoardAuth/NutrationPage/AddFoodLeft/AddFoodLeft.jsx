import React from 'react'

export default function AddFoodLeft({ SelectedFood}) {
  return (
    <div className="p-6">
            <div className="h-full rounded-3xl bg-white p-6 shadow-sm">
              {/* EMPTY STATE */}
              {SelectedFood === null && (
              <div className="flex h-full min-h-100 flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-3xl">
                  🍽️
                </div>
                <h3 className="font-bold text-gray-800">
                  هنوز غذایی انتخاب نشده
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-gray-400">
                  یک غذا از لیست انتخاب کن تا اطلاعات تغذیه‌ای آن اینجا نمایش
                  داده شود.
                </p>
              </div>

              )}

              {/* NUTRITION - Hidden for UI demo */}

              {SelectedFood !== null && (
              <div className={`${SelectedFood ? "block" : "hidden"} space-y-6`}>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                    {SelectedFood.emoji}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">{SelectedFood.name}</p>
                    <p className="mt-1 text-sm text-gray-400">
                      {SelectedFood.calories} کالری در 100 گرم
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#007BFF] p-5 text-white">
                  <p className="text-sm text-white/70">کالری این غذا</p>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-4xl font-bold">{SelectedFood.calories}</span>
                    <span className="mb-1 text-sm text-white/70">kcal</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <NutritionCard
                    title="پروتئین"
                    value={SelectedFood.protein}
                    unit="g"
                    icon="🥩"
                  />
                  <NutritionCard
                    title="کربوهیدرات"
                    value={SelectedFood.carbs}
                    unit="g"
                    icon="🍚"
                  />
                  <NutritionCard title="چربی" value={SelectedFood.fat} unit="g" icon="🥑" />
                </div>

                <div className="space-y-5">
                  <MacroBar title="پروتئین" value={SelectedFood.protein} max={50} />
                  <MacroBar title="کربوهیدرات" value={SelectedFood.carbs} max={100} />
                  <MacroBar title="چربی" value={SelectedFood.fat} max={50} />
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                  <span className="text-sm text-gray-500">وعده غذایی</span>
                  <span className="font-medium text-gray-800">صبحانه</span>
                </div>
              </div>

              )}
            </div>
          </div>
  )
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
