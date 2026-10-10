import { useState } from "react";

const defaultTests = [
  {
    id: 1,
    title: "آزمایش خون کامل",
    date: "ثبت نشده",
    details: "هنوز نتیجه‌ای برای این آزمایش ثبت نشده است.",
  },
  {
    id: 2,
    title: "ویتامین D",
    date: "ثبت نشده",
    details: "نتیجه و تاریخ آزمایش ویتامین D را وارد کنید.",
  },
  {
    id: 3,
    title: "تست قند خون",
    date: "ثبت نشده",
    details: "نتیجه و تاریخ تست قند خون را وارد کنید.",
  },
  {
    id: 4,
    title: "چربی خون",
    date: "ثبت نشده",
    details: "نتیجه و تاریخ آزمایش چربی خون را وارد کنید.",
  },
];

export default function MedicalTestsCard({
  tests = defaultTests,
  onSelect,
}) {
  const [selectedId, setSelectedId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const [localTests, setLocalTests] = useState(tests);

  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState({
    date: "",
    details: "",
  });

  const visibleTests = showAll
    ? localTests
    : localTests.slice(0, 4);

  function handleSelect(test) {
    setSelectedId((current) =>
      current === test.id ? null : test.id
    );

    onSelect?.(test);
  }

  function startEditing(test) {
    setEditingId(test.id);

    setDraft({
      date: test.date === "ثبت نشده" ? "" : test.date,
      details: test.details,
    });
  }

  function saveTest(testId) {
    setLocalTests((current) =>
      current.map((test) =>
        test.id === testId
          ? {
              ...test,
              date: draft.date || "ثبت نشده",
              details: draft.details,
            }
          : test
      )
    );

    setEditingId(null);
  }

  return (
    <section
      dir="rtl"
      className="min-w-0 rounded-2xl bg-white p-5"
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <h3 className="text-sm font-bold text-gray-600">
          آزمایش‌های پزشکی
        </h3>

        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="shrink-0 text-xs text-blue-600 hover:text-blue-700"
        >
          {showAll ? "نمایش کمتر" : "مشاهده همه"}
        </button>
      </div>

      <div className="space-y-3">
        {visibleTests.map((test) => {
          const isSelected = selectedId === test.id;
          const isEditing = editingId === test.id;

          return (
            <div key={test.id}>
              <button
                type="button"
                onClick={() => handleSelect(test)}
                aria-expanded={isSelected}
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-right text-xs transition ${
                  isSelected
                    ? "bg-blue-100 text-blue-700"
                    : "bg-[#F1F7FC] text-gray-600 hover:bg-blue-50"
                }`}
              >
                <span>{test.title}</span>

                <span className="text-base">
                  {isSelected ? "⌄" : "‹"}
                </span>
              </button>

              {isSelected && (
                <div className="mt-2 rounded-xl border border-gray-100 p-4">
                  {isEditing ? (
                    <div className="space-y-3">
                      <label className="block text-xs text-gray-600">
                        تاریخ آزمایش
                        <input
                          type="date"
                          value={draft.date}
                          onChange={(e) =>
                            setDraft((prev) => ({
                              ...prev,
                              date: e.target.value,
                            }))
                          }
                          className="mt-2 w-full rounded-lg border border-gray-200 p-2 text-xs outline-none focus:border-blue-400"
                        />
                      </label>

                      <label className="block text-xs text-gray-600">
                        توضیحات و نتیجه
                        <textarea
                          value={draft.details}
                          onChange={(e) =>
                            setDraft((prev) => ({
                              ...prev,
                              details: e.target.value,
                            }))
                          }
                          rows={3}
                          className="mt-2 w-full rounded-lg border border-gray-200 p-3 text-xs outline-none focus:border-blue-400"
                        />
                      </label>

                      <button
                        type="button"
                        onClick={() => saveTest(test.id)}
                        className="rounded-lg bg-blue-600 px-4 py-2 text-xs text-white hover:bg-blue-700"
                      >
                        ذخیره
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="text-xs leading-6 text-gray-500">
                        {test.details}
                      </p>

                      <p className="mt-2 text-xs text-gray-400">
                        تاریخ: {test.date}
                      </p>

                      <button
                        type="button"
                        onClick={() => startEditing(test)}
                        className="mt-3 rounded-lg border border-blue-100 px-3 py-2 text-xs text-blue-600 hover:bg-blue-50"
                      >
                        ثبت یا ویرایش نتیجه
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}