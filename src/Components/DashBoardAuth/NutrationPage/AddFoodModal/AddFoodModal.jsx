import React, { useEffect, useMemo, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import imgLunch from "../../../../assets/imges/lunch.png";
import ImgFood from "../../../../assets/imges/image 17.png";
import ClockCircle from "../../../../assets/imges/Clock Circle.svg";

/* ---------------------------------------------------
   دیتای نمونه. هر غذا مقادیر تغذیه‌ای‌اش بر اساس هر ۱۰۰ گرمه
--------------------------------------------------- */
const oatBanana = {
  id: "oat-banana",
  name: "جوی دوسر با موز",
  desc: "۸۰ گرم جو + ۱ عدد موز متوسط",
  per100g: { calories: 56, protein: 20, carbs: 0, fat: 4.2 },
};

const boiledEgg = {
  id: "egg-boiled",
  name: "تخم‌مرغ آب‌پز",
  desc: "۳ عدد تخم‌مرغ بزرگ",
  per100g: { calories: 155, protein: 13, carbs: 1.1, fat: 11 },
};

const recentFoods = [boiledEgg, oatBanana];

const suggestedFoods = [boiledEgg, boiledEgg, boiledEgg, boiledEgg].map(
  (food, index) => ({ ...food, id: `${food.id}-${index}` }),
);

// گرم معادل هر واحد اندازه‌گیری
const MEASURE_UNITS = {
  گرم: { gramsPerUnit: 1, step: 10 },
  قاشق: { gramsPerUnit: 15, step: 1 },
  واحد: { gramsPerUnit: 100, step: 1 },
};

function round(n) {
  return Math.round(n * 10) / 10;
}

function calcNutrition(per100g, grams) {
  const factor = grams / 100;
  return {
    calories: round(per100g.calories * factor),
    protein: round(per100g.protein * factor),
    carbs: round(per100g.carbs * factor),
    fat: round(per100g.fat * factor),
  };
}

/* کارت کوچک آمار تغذیه‌ای — icon فعلاً یه جای خالیه، بعداً آیکون خودتون رو پاس بدید */
function NutritionStat({ label, value, unit, accent, icon }) {
  return (
    <div className="rounded-2xl px-3 py-2.5 bg-white flex items-center gap-2.5">
      <div className="text-right">
        <p className="text-sm font-semibold text-[#4F5965] leading-tight">
          {value}
          <span className="text-[11px] font-normal text-[#8A8F98]">{unit}</span>
        </p>
        <p className="text-[11px] text-[#8A8F98] mt-0.5">{label}</p>
      </div>

      {/* جای خالی آیکون — بعداً همینجا آیکون واقعی رو بذارید */}
      <div
        className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center"
        style={{ backgroundColor: `${accent}1A` }}
      >
        {icon}
      </div>
    </div>
  );
}

function FoodThumbnail({ size = "w-12 h-12", iconSize = "w-9 h-9" }) {
  return (
    <div
      className={`${size} rounded-2xl bg-[#115DAE] flex items-center justify-center shrink-0`}
    >
      <img className={iconSize} src={ImgFood} alt="" />
    </div>
  );
}

export default function AddFoodModal({ isOpen, onClose, mealName, onAddFood }) {
  const [query, setQuery] = useState("");
  const [selectedFood, setSelectedFood] = useState(oatBanana);
  const [selectedMeasure, setSelectedMeasure] = useState("گرم");
  const [quantity, setQuantity] = useState(100);
  const [addedIds, setAddedIds] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedFood(oatBanana);
      setSelectedMeasure("گرم");
      setQuantity(100);
      setAddedIds([]);
    }
  }, [isOpen]);

  const totalGrams = quantity * MEASURE_UNITS[selectedMeasure].gramsPerUnit;
  const nutrition = useMemo(
    () => calcNutrition(selectedFood.per100g, totalGrams),
    [selectedFood, totalGrams],
  );

  const handleSelectFood = (food) => {
    setSelectedFood(food);
    setSelectedMeasure("گرم");
    setQuantity(100);
  };

  const handleStep = (dir) => {
    const step = MEASURE_UNITS[selectedMeasure].step;
    setQuantity((q) => Math.max(step, round(q + dir * step)));
  };

  const buildFoodPayload = (food, qty, measure) => {
    const grams = qty * MEASURE_UNITS[measure].gramsPerUnit;
    const n = calcNutrition(food.per100g, grams);
    return {
      title: food.name,
      desc: food.desc,
      calories: `${n.calories} kcal`,
    };
  };

  // افزودن سریع از داخل لیست (با مقدار پیش‌فرض ۱۰۰ گرم)
  const handleQuickAdd = (food) => {
    onAddFood?.(buildFoodPayload(food, 100, "گرم"));
    setAddedIds((prev) => [...prev, food.id]);
  };

  // افزودن غذای انتخاب‌شده در پنل چپ با مقدار دقیق تنظیم‌شده
  const handleAddSelected = () => {
    onAddFood?.(buildFoodPayload(selectedFood, quantity, selectedMeasure));
    setAddedIds((prev) => [...prev, selectedFood.id]);
  };

  const filteredSuggested = useMemo(() => {
    if (!query.trim()) return suggestedFoods;
    return suggestedFoods.filter((f) => f.name.includes(query.trim()));
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* هدر */}
        <div className="flex items-start justify-between px-8 pt-8 pb-4 shrink-0">
          <div className="flex items-start gap-4">
            <div className="text-right">
              <h2 className="text-2xl font-semibold text-[#4F5965]">
                افزودن غذا
              </h2>
              <p className="text-sm text-[#A0A4AA] mt-1">
                افزودن غذا به لیست {mealName || "صبحانه"}
              </p>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-[#E9FFDB] flex items-center justify-center shrink-0">
              <img className="w-8 h-8" src={imgLunch} alt="" />
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border-2 border-[#007BFF] flex items-center justify-center text-[#007BFF] hover:bg-[#E8F1FF] transition cursor-pointer"
            aria-label="بستن"
          >
            <CloseIcon fontSize="small" />
          </button>
        </div>

        {/* بدنه دو ستونه */}
        <div className="flex flex-1 min-h-0 px-4 pb-4 gap-4 ">
          {/* ستون راست: جستجو + لیست‌ها */}
          <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-7">
            {/* جستجو */}
            <div className="relative shrink-0 ml-4">
              <SearchIcon className="absolute top-1/2 right-5 -translate-y-1/2 text-[#A0A4AA]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو در غذا ها"
                className="w-full bg-white border border-[#E4E7EC] rounded-full pr-12 pl-5 py-4 text-right text-[#4F5965] outline-none"
              />
            </div>

            {/* اخیرا مصرف شده */}
            <div>
              <h3 className="text-lg font-medium text-[#4F5965] text-right mb-4">
                اخیرا مصرف شده
              </h3>
              <div className="flex items-center gap-3 overflow-x-auto py-2">
                {recentFoods.map((food) => {
                  const isSelected = selectedFood.id === food.id;
                  return (
                    <button
                      key={food.id}
                      onClick={() => handleSelectFood(food)}
                      className={`flex items-center gap-3 rounded-3xl px-4  py-2 whitespace-nowrap shrink-0 transition cursor-pointer ${
                        isSelected
                          ? "bg-[#EAF3FF] ring-2 ring-[#007BFF]"
                          : "bg-white border border-[#E4E7EC] hover:bg-[#F8FAFF]"
                      }`}
                    >
                      <div className="text-right">
                        <p className="text-sm font-medium text-[#4F5965]">
                          {food.name}
                        </p>
                        <div className="flex items-center gap-1 justify-end mt-0.5">
                          <span className="text-xs text-[#A0A4AA]">
                            {food.desc}
                          </span>
                          {/* <img src={ClockCircle} className="size-3" alt="" /> */}
                        </div>
                      </div>
                      <FoodThumbnail />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* پیشنهاد شده برای شما */}
            <div>
              <h3 className="text-lg font-medium text-[#4F5965] text-right mb-4">
                پیشنهاد شده برای شما
              </h3>
              <div className="flex flex-col gap-3">
                {filteredSuggested.map((food, index) => {
                  const isSelected = selectedFood.id === food.id;
                  const isAdded = addedIds.includes(food.id);
                  return (
                    <div
                      key={food.id}
                      onClick={() => handleSelectFood(food)}
                      className={`flex items-center justify-between rounded-3xl ml-4 px-3 py-3 cursor-pointer transition ${
                        isSelected
                          ? "bg-[#EAF3FF] ring-2 ring-[#007BFF]"
                          : "bg-white border border-[#E4E7EC] hover:bg-[#F8FAFF]"
                      }`}
                    >
                      <div className=" flex items-center justify-center gap-2">
                        <FoodThumbnail />

                        <div className="text-right">
                          <p className="text-sm font-medium text-[#4F5965]">
                            {food.name}
                          </p>
                          <div className="flex items-center gap-1 justify-end mt-0.5">
                            <span className="text-xs text-[#A0A4AA]">
                              {food.desc}
                            </span>
                            {/* <img src={ClockCircle} className="size-2" alt="" /> */}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuickAdd(food);
                        }}
                        className={`flex items-center gap-2 ml-3 px-4 py-2.5 rounded-full text-sm font-medium transition cursor-pointer ${
                          isSelected
                            ? "bg-[#007BFF] text-white"
                            : "bg-[#DBECFF] text-[#007BFF] hover:bg-[#c9e0ff]"
                        }`}
                      >
                        {isAdded ? "اضافه شد ✓" : "افزودن"}
                        {!isAdded && <AddIcon fontSize="small" />}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* پنل چپ: جزئیات غذای انتخاب‌شده */}
          <div className="w-90 shrink-0 bg-[#F2F8FD] rounded-3xl p-6 overflow-y-auto">
            <div className="flex flex-col items-center justify-center">
            <div className="relativ w-fit ">
              <FoodThumbnail size="w-20 h-20" iconSize="w-14 h-14" />
              <button
                className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-[#007BFF] flex items-center justify-center text-[#007BFF] hover:bg-[#E8F1FF] transition cursor-pointer"
                aria-label="تغییر عکس"
              >
                <AddPhotoAlternateOutlinedIcon sx={{ fontSize: 16 }} />
              </button>
            </div>

            <h3 className="text-xl font-primary font-medium text-[#4F5965] mt-5">
              {selectedFood.name}
            </h3>
            <p className="text-sm text-[#A0A4AA] mt-1 Modam-Medium">
              ارزش غذایی بر اساس ۱۰۰ گرم
            </p>

            </div>

            {/* روش اندازه‌گیری */}
            <p className="text-sm text-[#8A8F98] mt-6 mb-3">روش اندازه گیری</p>
            <div className="flex items-center justify-center gap-2">
              {Object.keys(MEASURE_UNITS).map((measure) => (
                <button
                  key={measure}
                  onClick={() => {
                    setSelectedMeasure(measure);
                    setQuantity(measure === "گرم" ? 100 : 1);
                  }}
                  className={`px-5 py-2.5 rounded-full text-sm transition cursor-pointer ${
                    selectedMeasure === measure
                      ? "bg-[#007BFF] text-white"
                      : "bg-white text-[#6B6F77] hover:bg-[#E8F1FF]"
                  }`}
                >
                  {measure}
                </button>
              ))}
            </div>

            {/* مقدار مصرف */}
            <p className="text-sm text-[#8A8F98] mt-6 mb-3">مقدار مصرف</p>
            <div className="flex items-center justify-between bg-white rounded-2xl px-3 py-3">
              <button
                onClick={() => handleStep(1)}
                className="w-9 h-9 rounded-full bg-[#E8F1FF] flex items-center justify-center text-[#007BFF] hover:bg-[#d7e9ff] transition cursor-pointer"
              >
                <AddIcon fontSize="small" />
              </button>

              <span className="text-lg font-semibold text-[#4F5965]">
                {quantity}{" "}
                <span className="text-sm font-normal text-[#A0A4AA]">
                  {selectedMeasure}
                </span>
              </span>

              <button
                onClick={() => handleStep(-1)}
                className="w-9 h-9 rounded-full bg-[#F5F7FB] flex items-center justify-center text-[#8A8F98] hover:bg-[#EDEFF3] transition cursor-pointer"
              >
                <RemoveIcon fontSize="small" />
              </button>
            </div>

            {/* ارزش غذایی */}
            <div className="flex items-center justify-between mt-6 mb-3">
              <span className="text-sm text-[#8A8F98]">ارزش غذایی</span>
              <span className="text-xs text-[#A0A4AA]">
                برای {quantity} {selectedMeasure}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <NutritionStat
                label="پروتئین"
                value={nutrition.protein}
                unit="G"
                accent="#41CCD4"
              />
              <NutritionStat
                label="کالری"
                value={nutrition.calories}
                unit="G"
                accent="#6BAF41"
              />
              <NutritionStat
                label="چربی"
                value={nutrition.fat}
                unit="G"
                accent="#C23EA1"
              />
              <NutritionStat
                label="کربوهیدرات"
                value={nutrition.carbs}
                unit="G"
                accent="#6578BC"
              />
            </div>

            <button
              onClick={handleAddSelected}
              className="w-full mt-6 py-3.5 rounded-full bg-[#007BFF] text-white font-medium flex items-center justify-center gap-2 hover:bg-blue-600 transition cursor-pointer"
            >
              <AddIcon fontSize="small" />
              افزودن به وعده
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
