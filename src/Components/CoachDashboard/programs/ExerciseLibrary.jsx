import { useMemo, useState } from "react";
import { Search, PlusCircle, Play } from "lucide-react";
import imgExercise from "../../../assets/imges/image 13.png"
import ExerciseDetailsModal from "./ExerciseDetailsModal";
const muscleGroups = ["همه", "زیر بغل", "سینه", "پشت پا", "جلو پا", "سرشانه" ,"بازو" ];

const fallbackExercises = [
  { id: "ex-1", name: "کرانچ جانبی", muscle: "زیر بغل", target: "عضله هدف: زیربغل، دوسر بازو", image: {imgExercise}, description: "برای مبتدیان با وزنه سبک عالی است. حتماً کتف‌ها را جمع نگه دارید." },
  { id: "ex-2", name: "کرانچ جانبی", muscle: "زیر بغل", target: "عضله هدف: زیربغل، دوسر بازو", image: "/images/exercises/side-crunch.jpg", description: "برای مبتدیان با وزنه سبک عالی است. حتماً کتف‌ها را جمع نگه دارید." },
  { id: "ex-3", name: "کرانچ جانبی", muscle: "زیر بغل", target: "عضله هدف: زیربغل، دوسر بازو", image: {imgExercise}, description: "برای مبتدیان با وزنه سبک عالی است. حتماً کتف‌ها را جمع نگه دارید." },
  { id: "ex-4", name: "کرانچ جانبی", muscle: "زیر بغل", target: "عضله هدف: زیربغل، دوسر بازو", image: "/images/exercises/side-crunch.jpg", description: "برای مبتدیان با وزنه سبک عالی است. حتماً کتف‌ها را جمع نگه دارید." },
  { id: "ex-5", name: "کرانچ جانبی", muscle: "زیر بغل", target: "عضله هدف: زیربغل، دوسر بازو", image: "/images/exercises/side-crunch.jpg", description: "برای مبتدیان با وزنه سبک عالی است. حتماً کتف‌ها را جمع نگه دارید." },
  { id: "ex-6", name: "کرانچ جانبی", muscle: "زیر بغل", target: "عضله هدف: زیربغل، دوسر بازو", image: "/images/exercises/side-crunch.jpg", description: "برای مبتدیان با وزنه سبک عالی است. حتماً کتف‌ها را جمع نگه دارید." },
  { id: "ex-7", name: "کرانچ جانبی", muscle: "زیر بغل", target: "عضله هدف: زیربغل، دوسر بازو", image: "/images/exercises/side-crunch.jpg", description: "برای مبتدیان با وزنه سبک عالی است. حتماً کتف‌ها را جمع نگه دارید." },
  { id: "ex-8", name: "کرانچ جانبی", muscle: "زیر بغل", target: "عضله هدف: زیربغل، دوسر بازو", image: "/images/exercises/side-crunch.jpg", description: "برای مبتدیان با وزنه سبک عالی است. حتماً کتف‌ها را جمع نگه دارید." },
  { id: "ex-9", name: "کرانچ جانبی", muscle: "زیر بغل", target: "عضله هدف: زیربغل، دوسر بازو", image: "/images/exercises/side-crunch.jpg", description: "برای مبتدیان با وزنه سبک عالی است. حتماً کتف‌ها را جمع نگه دارید." },
  { id: "ex-10", name: "کرانچ جانبی", muscle: "زیر بغل", target: "عضله هدف: زیربغل، دوسر بازو", image: "/images/exercises/side-crunch.jpg", description: "برای مبتدیان با وزنه سبک عالی است. حتماً کتف‌ها را جمع نگه دارید." },
];

export default function ExerciseLibrary({
  exercises = fallbackExercises,
  search = "",
  onSearchChange = () => {},
  activeMuscle = "زیر بغل",
  onMuscleChange = () => {},
  onAddExercise = () => {},
  onPreviewExercise,
}) {
  const [localSearch, setLocalSearch] = useState("");
  const [localMuscle, setLocalMuscle] = useState("زیر بغل");
  const isControlledSearch = typeof onSearchChange === "function" && search !== undefined;
  const query = search ?? localSearch;
  const selectedMuscle = activeMuscle ?? localMuscle;
  const [selectedExercise, setSelectedExercise] = useState(null);

  const setQuery = (value) => {
    if (isControlledSearch) onSearchChange(value);
    else setLocalSearch(value);
  };

  const setMuscle = (value) => {
    onMuscleChange(value);
    setLocalMuscle(value);
  };

  const filteredExercises = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("fa");
    return exercises.filter((exercise) => {
      const muscle = exercise.muscle ?? exercise.category ?? "";
      const matchesMuscle = selectedMuscle === "همه" || muscle === selectedMuscle;
      const matchesQuery = !normalized ||
        `${exercise.name ?? ""} ${muscle} ${exercise.target ?? ""}`
          .toLocaleLowerCase("fa").includes(normalized);
      return matchesMuscle && matchesQuery;
    });
  }, [exercises, query, selectedMuscle]);


function handleAddExercise(exercise) {
  onAddExercise(exercise);
  setSelectedExercise(null);
}
  return (
    <section dir="rtl" className="w-full rounded-[22px] bg-surface px-4 py-5 sm:px-6 sm:py-6">
      <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="order-1 text-right">
          <h2 className="text-2xl font-primary text-foreground">کتابخانه حرکات</h2>
          <p className="mt-2 text-sm text-muted">برای افزودن به جدول، روی حرکت مورد نظر کلیک کنید.</p>
        </div>

        <div className="order-2 flex flex-wrap items-center gap-3">
          {muscleGroups.map((muscle) => (
            <button
              type="button"
              key={muscle}
              onClick={() => setMuscle(muscle)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                selectedMuscle === muscle
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-transparent bg-surface-secondary text-muted hover:border-primary/30"
              }`}
            >
              {muscle}
            </button>
          ))}
          <label className="relative order-first min-w-[190px] flex-1 sm:order-last sm:flex-none">
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="جست‌وجوی حرکت..."
              aria-label="جست‌وجوی حرکت"
              className="w-full rounded-full border border-border bg-input py-2 pr-9 pl-3 text-sm outline-none focus:border-primary"
            />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {filteredExercises.map((exercise) => (
          <article
            key={exercise.id}
            className="group min-w-0 rounded-[27px] border border-border bg-surface p-3 transition hover:border-primary hover:shadow-[0_5px_18px_rgba(20,120,240,0.08)]"
          >
            <button
              type="button"
              onClick={() => onPreviewExercise?.(exercise)}
              aria-label={`پیش‌نمایش ${exercise.name}`}
              className="relative block w-full overflow-hidden rounded-[23px] bg-[#0D3B68] text-white"
            >
              <img
                src={exercise.image || imgExercise}
                alt={exercise.name}
                loading="lazy"
                onError={(event) => {
                  if (!event.currentTarget.dataset.fallback) {
                    event.currentTarget.dataset.fallback = "true";
                    event.currentTarget.src = imgExercise;
                  }
                }}
                className="aspect-[1.72/1] w-full object-cover"
              />
              <span className="absolute inset-0 grid place-items-center bg-blue-950/10 transition group-hover:bg-blue-950/25">
                <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-white/90 bg-black/10">
                  <Play size={19} fill="white" className="translate-x-[-1px]" />
                </span>
              </span>
            </button>

            <div className="px-1 pt-3 text-center">
              <h3 className="truncate text-base font-primary text-foreground" title={exercise.name}>
                {exercise.name}
              </h3>
              <p className="mt-1 truncate text-[13px] font-primary text-muted" title={exercise.target}>
                {exercise.target || `عضله هدف: ${exercise.muscle || "عمومی"}`}
              </p>

              <div className="relative mt-5 rounded-[17px] bg-primary/10 px-3 pb-4 pt-7 text-right">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-1 text-xs font-medium text-white">
                  AI
                </span>
                <p className="line-clamp-2 min-h-[44px] text-xs leading-6 text-muted">
                  {exercise.description || "برای اجرای صحیح حرکت، فرم بدن را کنترل کنید و از وزنه مناسب استفاده کنید."}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onAddExercise(exercise)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-2 py-2.5 text-sm font-primary text-white transition hover:bg-primary-hover active:scale-[0.98] cursor-pointer"
              >
                افزودن به لیست
                <PlusCircle size={21} strokeWidth={2} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {filteredExercises.length === 0 && (
        <div className="rounded-2xl bg-surface-secondary px-4 py-12 text-center text-sm text-muted">
          حرکتی با این جست‌وجو یا دسته‌بندی پیدا نشد.
        </div>
      )}
    </section>
  );
}
