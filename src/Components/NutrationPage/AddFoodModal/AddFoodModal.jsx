import { useEffect, useMemo, useState } from "react";
import {
  X,
  Search,
  Plus,
  Minus,
  ChevronLeft,
  Utensils,
  Clock3,
  Check,
  Sparkles,
} from "lucide-react";

const foods = [
  {
    id: 1,
    name: "سینه مرغ گریل شده",
    category: "پروتئین",
    emoji: "🍗",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
  },
  {
    id: 2,
    name: "برنج سفید پخته شده",
    category: "کربوهیدرات",
    emoji: "🍚",
    calories: 130,
    protein: 2.7,
    carbs: 28,
    fat: 0.3,
  },
  {
    id: 3,
    name: "تخم مرغ آب پز",
    category: "پروتئین",
    emoji: "🥚",
    calories: 155,
    protein: 13,
    carbs: 1.1,
    fat: 11,
  },
  {
    id: 4,
    name: "جو دوسر پرک",
    category: "کربوهیدرات",
    emoji: "🥣",
    calories: 389,
    protein: 16.9,
    carbs: 66,
    fat: 6.9,
  },
  {
    id: 5,
    name: "موز",
    category: "میوه",
    emoji: "🍌",
    calories: 89,
    protein: 1.1,
    carbs: 22.8,
    fat: 0.3,
  },
  {
    id: 6,
    name: "شیر کم چرب",
    category: "لبنیات",
    emoji: "🥛",
    calories: 42,
    protein: 3.4,
    carbs: 5,
    fat: 1,
  },
  {
    id: 7,
    name: "سیب",
    category: "میوه",
    emoji: "🍎",
    calories: 52,
    protein: 0.3,
    carbs: 14,
    fat: 0.2,
  },
  {
    id: 8,
    name: "سیب زمینی آب پز",
    category: "کربوهیدرات",
    emoji: "🥔",
    calories: 87,
    protein: 1.9,
    carbs: 20,
    fat: 0.1,
  },
];

const recentFoods = [3, 1, 2];

export default function AddFoodModal({
  isOpen,
  onClose,
  mealName = "صبحانه",
  onAddFood,
}) {
  const [search, setSearch] = useState("");
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState(100);

  useEffect(() => {
    if (!isOpen) {
      setSearch("");
      setSelectedFood(null);
      setQuantity(100);
    }
  }, [isOpen]);

  const filteredFoods = useMemo(() => {
    if (!search.trim()) return foods;

    return foods.filter(
      (food) =>
        food.name.includes(search.trim()) ||
        food.category.includes(search.trim())
    );
  }, [search]);

  const recentFoodList = recentFoods
    .map((id) => foods.find((food) => food.id === id))
    .filter(Boolean);

  const nutrition = selectedFood
    ? {
        calories: Math.round((selectedFood.calories * quantity) / 100),
        protein: Number(
          ((selectedFood.protein * quantity) / 100).toFixed(1)
        ),
        carbs: Number(((selectedFood.carbs * quantity) / 100).toFixed(1)),
        fat: Number(((selectedFood.fat * quantity) / 100).toFixed(1)),
      }
    : null;

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 10);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(10, prev - 10));
  };

  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);

    if (Number.isNaN(value)) {
      setQuantity(0);
      return;
    }

    setQuantity(Math.max(0, value));
  };

  const handleAddFood = () => {
    if (!selectedFood || quantity <= 0) return;

    const foodToAdd = {
      ...selectedFood,
      quantity,
      nutrition,
    };

    onAddFood?.(foodToAdd);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      dir="rtl"
      className="fixed inset-0 z-999 flex items-center justify-center bg-[#17324d]/25 px-5 py-8 backdrop-blur-[4px]"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="flex h-[min(760px,90vh)] w-full max-w-[1050px] flex-col overflow-hidden rounded-[28px] border border-white bg-[#ffffff] shadow-[0_25px_80px_rgba(39,91,135,0.16)]">

        {/* ================= HEADER ================= */}

        <div className="flex shrink-0 items-center justify-between border-b border-[#edf1f5] px-7 py-5">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#eef7e8] text-xl">
              🍽️
            </div>

            <div>
              <h2 className="text-[19px] font-bold text-[#50545a]">
                افزودن غذا
              </h2>

              <p className="mt-0.5 text-[12px] text-[#a1a5aa]">
                افزودن غذا به {mealName}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#a5a9ad] transition-all hover:bg-[#f4f7fa] hover:text-[#555]"
          >
            <X size={21} strokeWidth={1.8} />
          </button>

        </div>

        {/* ================= BODY ================= */}

        <div className="flex min-h-0 flex-1 flex-col lg:flex-row">

          {/* ================= LEFT / FOOD LIST ================= */}

          <div className="flex min-h-0 flex-1 flex-col border-l border-[#edf1f5]">

            {/* Search */}

            <div className="px-7 pt-6">

              <div className="relative">

                <Search
                  size={19}
                  strokeWidth={1.8}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a9afb5]"
                />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="جستجوی غذا..."
                  className="h-[52px] w-full rounded-[16px] border border-[#e8edf2] bg-[#f8fafc] pr-12 pl-12 text-[14px] text-[#555] outline-none transition-all placeholder:text-[#b4b8bd] focus:border-[#65aef0] focus:bg-white focus:ring-4 focus:ring-[#1688ed]/5"
                />

                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute left-4 top-1/2 flex -translate-y-1/2 text-[#aeb3b8] hover:text-[#555]"
                  >
                    <X size={16} />
                  </button>
                )}

              </div>

            </div>

            {/* Recent */}

            {!search && (
              <div className="px-7 pt-6">

                <div className="mb-3 flex items-center gap-2">
                  <Clock3 size={15} className="text-[#a8adb2]" />

                  <span className="text-[13px] font-semibold text-[#777c81]">
                    اخیراً مصرف شده
                  </span>
                </div>

                <div className="flex gap-3 overflow-x-auto pb-1">

                  {recentFoodList.map((food) => (
                    <button
                      key={food.id}
                      onClick={() => {
                        setSelectedFood(food);
                        setQuantity(100);
                      }}
                      className={`group min-w-[115px] rounded-[16px] border p-3 text-right transition-all ${
                        selectedFood?.id === food.id
                          ? "border-[#1688ed] bg-[#f2f8ff]"
                          : "border-[#edf0f3] bg-white hover:border-[#d5e7f8] hover:bg-[#f8fbff]"
                      }`}
                    >

                      <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-[11px] bg-[#eef6fc] text-lg">
                        {food.emoji}
                      </div>

                      <p className="truncate text-[12px] font-semibold text-[#62666a]">
                        {food.name}
                      </p>

                      <p className="mt-1 text-[10px] text-[#a5a9ad]">
                        {food.calories} kcal / 100g
                      </p>

                    </button>
                  ))}

                </div>

              </div>
            )}

            {/* Food list */}

            <div className="min-h-0 flex-1 overflow-y-auto px-7 pb-6 pt-6">

              <div className="mb-3 flex items-center justify-between">

                <span className="text-[13px] font-semibold text-[#777c81]">
                  {search ? "نتایج جستجو" : "پیشنهاد شده برای شما"}
                </span>

                <span className="text-[11px] text-[#b0b4b8]">
                  {filteredFoods.length} غذا
                </span>

              </div>

              <div className="space-y-2">

                {filteredFoods.map((food) => (
                  <button
                    key={food.id}
                    onClick={() => {
                      setSelectedFood(food);
                      setQuantity(100);
                    }}
                    className={`group flex w-full items-center gap-4 rounded-[17px] border p-3 text-right transition-all ${
                      selectedFood?.id === food.id
                        ? "border-[#1688ed] bg-[#f4f9ff]"
                        : "border-[#edf0f3] bg-white hover:border-[#dceaf6] hover:bg-[#fbfdff]"
                    }`}
                  >

                    {/* Food icon */}

                    <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[15px] bg-[#f0f7fc] text-[25px]">
                      {food.emoji}
                    </div>

                    {/* Information */}

                    <div className="min-w-0 flex-1">

                      <div className="flex items-center gap-2">

                        <h3 className="truncate text-[13px] font-semibold text-[#5e6368]">
                          {food.name}
                        </h3>

                        {selectedFood?.id === food.id && (
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1688ed] text-white">
                            <Check size={12} strokeWidth={3} />
                          </span>
                        )}

                      </div>

                      <div className="mt-1 flex items-center gap-2">

                        <span className="text-[10px] text-[#a7acb1]">
                          {food.category}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#d5d9dc]" />

                        <span className="text-[10px] text-[#a7acb1]">
                          {food.calories} kcal / 100g
                        </span>

                      </div>

                    </div>

                    {/* Add icon */}

                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                        selectedFood?.id === food.id
                          ? "bg-[#1688ed] text-white"
                          : "bg-[#edf6fd] text-[#1688ed] group-hover:bg-[#1688ed] group-hover:text-white"
                      }`}
                    >
                      <Plus size={17} strokeWidth={2} />
                    </div>

                  </button>
                ))}

                {filteredFoods.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-16 text-center">

                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#f4f7fa] text-2xl">
                      🔎
                    </div>

                    <p className="text-[13px] font-semibold text-[#70757a]">
                      غذایی پیدا نشد
                    </p>

                    <p className="mt-1 text-[11px] text-[#adb1b5]">
                      نام غذای دیگری را جستجو کنید
                    </p>

                  </div>
                )}

              </div>

              {/* Create food */}

              <button className="mt-4 flex h-[45px] w-full items-center justify-center gap-2 rounded-[14px] border border-dashed border-[#cddfec] text-[12px] font-medium text-[#1688ed] transition-all hover:border-[#1688ed] hover:bg-[#f7fbff]">
                <Plus size={16} />
                ایجاد غذای جدید
              </button>

            </div>

          </div>

          {/* ================= RIGHT / SELECTED FOOD ================= */}

          <div className="flex w-full shrink-0 flex-col bg-[#fbfcfd] lg:w-[390px]">

            {!selectedFood ? (
              <div className="flex flex-1 flex-col items-center justify-center px-10 text-center">

                <div className="mb-5 flex h-[82px] w-[82px] items-center justify-center rounded-[26px] bg-[#edf6fd] text-[36px]">
                  🍽️
                </div>

                <h3 className="text-[15px] font-bold text-[#62676c]">
                  یک غذا انتخاب کنید
                </h3>

                <p className="mt-2 max-w-[230px] text-[11px] leading-6 text-[#a8adb2]">
                  از لیست غذاها یک مورد را انتخاب کنید تا مقدار مصرف و ارزش
                  غذایی آن را مشخص کنید.
                </p>

              </div>
            ) : (
              <div className="flex min-h-0 flex-1 flex-col">

                {/* Selected header */}

                <div className="px-7 pt-7">

                  <button
                    onClick={() => setSelectedFood(null)}
                    className="mb-6 flex items-center gap-1 text-[11px] text-[#92979c] transition-colors hover:text-[#1688ed]"
                  >
                    <ChevronLeft size={15} />
                    انتخاب غذای دیگر
                  </button>

                  <div className="flex flex-col items-center text-center">

                    <div className="flex h-[90px] w-[90px] items-center justify-center rounded-[27px] bg-white text-[45px] shadow-[0_8px_25px_rgba(40,90,130,0.07)]">
                      {selectedFood.emoji}
                    </div>

                    <h3 className="mt-4 text-[16px] font-bold text-[#5c6166]">
                      {selectedFood.name}
                    </h3>

                    <span className="mt-1 text-[10px] text-[#a5aaae]">
                      ارزش غذایی بر اساس 100 گرم
                    </span>

                  </div>

                </div>

                {/* Quantity */}

                <div className="px-7 pt-7">

                  <p className="mb-3 text-[12px] font-semibold text-[#777c81]">
                    مقدار مصرف
                  </p>

                  <div className="flex h-[62px] items-center rounded-[17px] border border-[#e7edf2] bg-white p-2">

                    <button
                      onClick={decreaseQuantity}
                      className="flex h-[44px] w-[44px] items-center justify-center rounded-[13px] bg-[#f2f6f9] text-[#858b90] transition-all hover:bg-[#e9f3fb] hover:text-[#1688ed]"
                    >
                      <Minus size={17} />
                    </button>

                    <div className="flex flex-1 items-center justify-center gap-2">

                      <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="w-[65px] bg-transparent text-center text-[17px] font-bold text-[#555a5f] outline-none"
                      />

                      <span className="text-[12px] text-[#9ca2a7]">
                        گرم
                      </span>

                    </div>

                    <button
                      onClick={increaseQuantity}
                      className="flex h-[44px] w-[44px] items-center justify-center rounded-[13px] bg-[#edf6fd] text-[#1688ed] transition-all hover:bg-[#dff0fc]"
                    >
                      <Plus size={17} />
                    </button>

                  </div>

                </div>

                {/* Nutrition */}

                <div className="px-7 pt-6">

                  <div className="mb-3 flex items-center justify-between">

                    <p className="text-[12px] font-semibold text-[#777c81]">
                      ارزش غذایی
                    </p>

                    <span className="text-[10px] text-[#a4a9ad]">
                      برای {quantity} گرم
                    </span>

                  </div>

                  {/* Calories */}

                  <div className="rounded-[19px] bg-white p-4 shadow-[0_5px_20px_rgba(40,90,130,0.035)]">

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#eff8e9]">
                          🔥
                        </div>

                        <div>
                          <p className="text-[10px] text-[#a1a6ab]">
                            کالری
                          </p>

                          <p className="mt-0.5 text-[18px] font-bold text-[#5d6267]">
                            {nutrition.calories}
                            <span className="mr-1 text-[9px] font-normal text-[#9ea3a8]">
                              kcal
                            </span>
                          </p>
                        </div>

                      </div>

                    </div>

                    {/* Macro grid */}

                    <div className="mt-4 grid grid-cols-3 gap-2">

                      <Macro
                        label="پروتئین"
                        value={nutrition.protein}
                        unit="g"
                        bg="bg-[#eefaff]"
                        valueColor="text-[#45b9c8]"
                      />

                      <Macro
                        label="کربوهیدرات"
                        value={nutrition.carbs}
                        unit="g"
                        bg="bg-[#f9f6ff]"
                        valueColor="text-[#9279d5]"
                      />

                      <Macro
                        label="چربی"
                        value={nutrition.fat}
                        unit="g"
                        bg="bg-[#fff8ed]"
                        valueColor="text-[#e5a848]"
                      />

                    </div>

                  </div>

                </div>

                {/* AI suggestion */}

                <div className="mt-auto px-7 pb-5 pt-5">

                  <div className="mb-4 flex items-center gap-2 rounded-[15px] border border-[#e6f1fb] bg-[#f5faff] p-3">

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#e7f3ff] text-[#1688ed]">
                      <Sparkles size={15} />
                    </div>

                    <p className="text-[10px] leading-5 text-[#8b969f]">
                      مقدار مصرف بر اساس برنامه غذایی شما پیشنهاد شده است.
                    </p>

                  </div>

                  <button
                    onClick={handleAddFood}
                    disabled={!quantity || quantity <= 0}
                    className="flex h-[52px] w-full items-center justify-center gap-2 rounded-[16px] bg-[#1688ed] text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(22,136,237,0.18)] transition-all hover:bg-[#087bdc] hover:shadow-[0_10px_25px_rgba(22,136,237,0.25)] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Plus size={18} strokeWidth={2.3} />
                    افزودن به {mealName}
                  </button>

                </div>

              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}

/* ================= MACRO COMPONENT ================= */

function Macro({
  label,
  value,
  unit,
  bg,
  valueColor,
}) {
  return (
    <div className={`rounded-[13px] ${bg} px-2 py-3 text-center`}>

      <p className="text-[9px] text-[#a1a6aa]">
        {label}
      </p>

      <p className={`mt-1 text-[14px] font-bold ${valueColor}`}>
        {value}
        <span className="mr-0.5 text-[8px] font-normal">
          {unit}
        </span>
      </p>

    </div>
  );
}