import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { useState } from "react";
import AIChat from "../../Components/DashBoardAuthlete/Aichat/Aichat";
import StatCard from "../../Components/DashBoardAuthlete/StatCard/StatCard";
import Navbar from "../../Components/Navbar/Navbar";
import imgLunch from "../../assets/imges/lunch.png";
import ImgFood from "../../assets/imges/image 17.png";
import AddFoodModal from "../../Components/NutrationPage/AddFoodModal/AddFoodModal";
import HeaderDashBoard from "../../Components/HeaderDashBoard/HeaderDashBoard";

function MealCard({ meal, isOpen, onToggle, onAddFood }) {
  return (
    <div className="bg-white rounded-3xl p-6 mt-5">
      <div
        onClick={onToggle}
        className="flex items-center justify-between cursor-pointer"
      >
        {/* سمت راست */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4">
            <img
              src={imgLunch}
              className="w-13 h-13 rounded-2xl bg-[#E9FFD9] flex items-center justify-center text-2xl"
              alt={meal.name}
            />
            <div className="text-right">
              <p className="text-sm text-[#A0A4AA]">
                <span className="text-xl text-[#6B6F77] font-medium block">
                  {meal.name}
                </span>
                {meal.time} خورده شد
              </p>
            </div>
          </div>
        </div>

        {/* سمت چپ */}
        <div className="flex gap-2.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddFood();
            }}
            className="bg-[#E8F1FF] text-[#007BFF] px-5 py-2 rounded-full text-sm cursor-pointer"
          >
            افزودن +
          </button>

          <button className="text-[#6B6F77] text-xl">
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-125 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="h-px bg-[#EEEEEE] mb-6"></div>

        <div className="flex flex-col gap-6">
          {meal.foods.map((food, index) => (
            <div key={index} className="flex items-center justify-between">
              {/* غذا */}
              <div className="flex items-center gap-4 flex-row-reverse">
                <div className="text-right">
                  <h3 className="text-[#6B6F77] font-medium">{food.title}</h3>
                  <p className="text-sm text-[#A0A4AA]">{food.desc}</p>
                </div>

                <div className="w-13 h-13 rounded-2xl bg-[#0065B8] flex items-center justify-center text-2xl">
                  <img className="w-12 h-12" src={ImgFood} alt="" />
                </div>
              </div>

              {/* کالری */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#6B6F77]">{food.calories}</span>
                <div className="w-7 h-7 rounded-xl border-2 border-[#007BFF] flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#007BFF] rounded-md flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DashBoardNutrition() {
  const [meals, setMeals] = useState([
    {
      id: "breakfast",
      name: "صبحانه",
      time: "۷:۳۰",
      isOpen: true,
      foods: [
        {
          title: "جوی دوسر با موز",
          desc: "۵۰ گرم جو + ۱ عدد موز متوسط",
          calories: "340 kcal",
        },
        {
          title: "تخم مرغ آبپز",
          desc: "۳ عدد تخم مرغ بزرگ",
          calories: "340 kcal",
        },
        { title: "شیر کم چرب", desc: "۲۰۰ میلی لیتر", calories: "340 kcal" },
      ],
    },
    {
      id: "lunch",
      name: "ناهار",
      time: "۱۳:۰۰",
      isOpen: false,
      foods: [
        { title: "سینه مرغ گریل", desc: "۱۵۰ گرم", calories: "280 kcal" },
        { title: "برنج قهوه‌ای", desc: "۱۰۰ گرم", calories: "220 kcal" },
      ],
    },
    {
      id: "dinner",
      name: "شام",
      time: "۲۰:۰۰",
      isOpen: false,
      foods: [
        { title: "ماهی سالمون", desc: "۱۲۰ گرم", calories: "250 kcal" },
        { title: "سالاد سبز", desc: "۱ بشقاب", calories: "90 kcal" },
      ],
    },
  ]);

  const [activeMealId, setActiveMealId] = useState(null);

  const supplements = [
    { title: "پروتئین وی", desc: "۳۰ گرم پس از تمرین", emoji: "🥛" },
    { title: "کراتین", desc: "۳۰ گرم پس از تمرین", emoji: "⚪" },
    { title: "ویتامین D3", desc: "۳۰ گرم پس از تمرین", emoji: "💊" },
    { title: "امگا ۳", desc: "۳۰ گرم پس از تمرین", emoji: "🟡" },
  ];

  const toggleMeal = (id) => {
    setMeals((prev) =>
      prev.map((m) => (m.id === id ? { ...m, isOpen: !m.isOpen } : m)),
    );
  };

  const handleAddFood = (mealId, food) => {
    setMeals((prev) =>
      prev.map((m) =>
        m.id === mealId ? { ...m, foods: [...m.foods, food] } : m,
      ),
    );
    setActiveMealId(null);
  };

  const activeMeal = meals.find((m) => m.id === activeMealId);

  return (
    <div className="min-h-screen bg-[#F5F7FB] flex justify-center">
      <div className="w-full max-w-[1600px] grid grid-cols-[90px_1fr] gap-6 px-8 py-6 bg-[#F5F7FB]">
        <div>
          <Navbar />
        </div>

        <div className="py-3">
          <div className="grid grid-cols-12 gap-6">
            <div className=" col-span-12">
              <HeaderDashBoard
                title={"تغذیه من"}
                description={
                  "برنامه تغذیه و موارد دریافتی بدن رو از این قسمت برسی کن"
                }
              />
            </div>

            <div className="col-span-12 grid grid-cols-4 gap-5">
              <StatCard />
              <StatCard />
              <StatCard />
              <StatCard />
            </div>

            <div className="col-span-8 ">
              {meals.map((meal) => (
                <MealCard
                  key={meal.id}
                  meal={meal}
                  isOpen={meal.isOpen}
                  onToggle={() => toggleMeal(meal.id)}
                  onAddFood={() => setActiveMealId(meal.id)}
                />
              ))}
            </div>
            <div className="col-span-4">
              <div className="col-span-4 mt-5">
                <AIChat />
              </div>
              <div className="col-span-4">
                <div className="bg-white rounded-4xl p-7 mt-5">
                  {/* Header */}
                  <h2 className="text-2xl text-[#6B6F77] font-medium text-right">
                    مکمل‌ها
                  </h2>

                  <div className="h-px bg-[#EEEEEE] my-5"></div>

                  {/* List */}
                  <div className="flex flex-col gap-8">
                    {supplements.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        {/* Right side */}
                        <div className="flex items-center gap-5">
                          <div className="w-15 h-15 rounded-3xl bg-[#EAF3FF] flex items-center justify-center text-2xl">
                            {item.emoji}
                          </div>
                          <div className="text-right">
                            <h3 className="text-xl text-[#6B6F77] font-medium">
                              {item.title}
                            </h3>
                            <p className="text-sm text-[#A0A4AA] mt-2">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                        {/* Checkbox */}
                        <div className="w-7 h-7 rounded-xl border-2 border-[#007BFF] flex items-center justify-center">
                          <div className="w-4 h-4 bg-[#007BFF] rounded-md flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
          </div>
        </div>
      </div>

      {activeMeal && (
        <AddFoodModal
          isOpen={!!activeMeal}
          onClose={() => setActiveMealId(null)}
          mealName={activeMeal.name}
          onAddFood={(food) => handleAddFood(activeMeal.id, food)}
        />
      )}
    </div>
  );
}
