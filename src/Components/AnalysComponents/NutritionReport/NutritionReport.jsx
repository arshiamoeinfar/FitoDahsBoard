import React, { useState } from "react";
import ImgCalander from "../../../assets/Icons/Calendar.svg";
export default function NutritionReport() {
  const [selectedDay, setSelectedDay] = useState(null);

  const days = [
    { day: 1, colors: ["yellow", "blue", "green"] },
    { day: 2, colors: ["green"] },
    { day: 3, colors: ["yellow", "blue", "green"] },
    { day: 4, colors: ["yellow", "blue", "green"] },
    { day: 5, colors: ["yellow", "blue", "green"] },
    { day: 6, colors: ["yellow", "blue", "green"] },
    { day: 7, colors: ["yellow", "blue", "green"] },

    { day: 8, colors: ["yellow", "blue", "green"] },
    { day: 9, colors: ["yellow", "blue", "green"] },
    { day: 10, colors: ["yellow", "blue", "green"] },
    { day: 11, colors: ["yellow", "blue", "green"] },
    { day: 12, colors: ["blue", "green"] },
    { day: 13, colors: ["blue", "green"] },
    { day: 14, colors: ["yellow", "green"] },

    { day: 15, colors: ["blue", "green"] },
    { day: 16, colors: ["yellow", "blue", "green"] },
    { day: 17, colors: ["yellow", "blue"] },
    { day: 18, colors: ["yellow"] },
    { day: 19, colors: ["blue"] },
    { day: 20, colors: ["yellow", "green", "blue"] },
    { day: 21, colors: ["yellow", "blue"] },

    { day: 22, colors: ["yellow", "blue", "green"] },
    { day: 23, colors: ["green"] },
    { day: 24, colors: ["yellow", "green"] },
    { day: 25, colors: ["yellow", "blue", "green"] },
    { day: 26, colors: ["yellow", "blue", "green"] },
    { day: 27, colors: ["yellow", "blue", "green"] },
    { day: 28, colors: ["yellow", "blue", "green"] },

    { day: 29, colors: [] },
    { day: 30, colors: ["yellow", "blue", "green"] },
  ];

  const nutritionData = {
    15: {
      date: "شنبه ۱۵ تیر ۱۴۰۵",
      calories: "1850",
      protein: "145",
      carbs: "210",
      fat: "55",
      meals: [
        ["صبحانه", "420 kcal"],
        ["ناهار", "680 kcal"],
        ["شام", "550 kcal"],
        ["میان‌وعده", "200 kcal"],
      ],
    },
    16: {
      date: "یکشنبه ۱۶ تیر ۱۴۰۵",
      calories: "2020",
      protein: "158",
      carbs: "225",
      fat: "61",
      meals: [
        ["صبحانه", "450 kcal"],
        ["ناهار", "720 kcal"],
        ["شام", "610 kcal"],
        ["میان‌وعده", "240 kcal"],
      ],
    },
    17: {
      date: "دوشنبه ۱۷ تیر ۱۴۰۵",
      calories: "1760",
      protein: "132",
      carbs: "195",
      fat: "49",
      meals: [
        ["صبحانه", "390 kcal"],
        ["ناهار", "650 kcal"],
        ["شام", "520 kcal"],
        ["میان‌وعده", "200 kcal"],
      ],
    },
  };

  const getDayData = (day) => {
    return (
      nutritionData[day] || {
        date: `روز ${day} تیر ۱۴۰۵`,
        calories: "1850",
        protein: "140",
        carbs: "210",
        fat: "55",
        meals: [
          ["صبحانه", "420 kcal"],
          ["ناهار", "680 kcal"],
          ["شام", "550 kcal"],
          ["میان‌وعده", "200 kcal"],
        ],
      }
    );
  };

  return (
    <>
      {/* Main Card */}
      <div
        dir="rtl"
        className="bg-white rounded-3xl p-8 w-full "
      >

        {/* Header */}
        <div className="flex items-center justify-between mb-10">

          <h2 className="text-2xl  text-[#6B6F77] font-primary">
            گزارش تغذیه
          </h2>

          <div className="flex items-center gap-3">
            <span className="text-3xl text-[#007BFF]">
              <img src={ImgCalander} alt="" />
            </span>

            <span className="text-lg text-gray-500">
              ۱۴۰۵ تیر
            </span>


          </div>

        </div>

        {/* Week */}
        <div className="grid grid-cols-7 text-center mb-5">

          {["ش", "ی", "د", "س", "چ", "پ", "ج"].map(
            (day, index) => (
              <div
                key={index}
                className="text-[#6B6F77] text-lg font-medium"
              >
                {day}
              </div>
            )
          )}

        </div>

        {/* Calendar */}
        <div className="grid grid-cols-7 gap-y-6 gap-x-4">

          {days.map((item) => (

            <button
              key={item.day}
              onClick={() => setSelectedDay(item.day)}
              className="
                group
                flex
                flex-col
                items-center
                gap-2
                cursor-pointer
                outline-none
              "
            >

              {/* Day */}
              <div
                className="
                  w-9
                  h-9
                  rounded-full
                  bg-[#F1F7FF]
                  flex
                  items-center
                  justify-center
                  text-[#7090BD]
                  text-xl
                  transition-all
                  duration-200
                  group-hover:bg-[#007BFF]
                  group-hover:text-white
                  group-hover:scale-105
                "
              >
                {item.day}
              </div>

              {/* Indicators */}
              <div className="flex items-center gap-1 h-2">

                {item.colors.map((color, index) => (

                  <span
                    key={index}
                    className={`
                      w-1.5
                      h-1.5
                      rounded-full

                      ${
                        color === "blue"
                          ? "bg-[#007BFF]"
                          : color === "green"
                          ? "bg-[#63AF42]"
                          : "bg-[#D4A528]"
                      }
                    `}
                  />

                ))}

              </div>

            </button>

          ))}

        </div>

        {/* Bottom Description */}
        <div className="flex items-center justify-end gap-4 mt-6">

          <div className="w-2 h-12 bg-[#007BFF] rounded-full" />

          <p className=" leading-9 text-[#6B6F77] text-right max-w-[500px]">
            برای مشاهده جزئیات تغذیه، روی روزهای گذشته کلیک کنید.
          </p>

        </div>

      </div>

      {/* Overlay */}
      {selectedDay && (

        <div
          onClick={() => setSelectedDay(null)}
          className="
            fixed
            inset-0
            bg-black/30
            backdrop-blur-sm
            z-50
            flex
            items-center
            justify-center
            p-6
          "
        >

          {/* Modal */}
          <div
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
            className="
              bg-white
              w-full
              max-w-[520px]
              rounded-[32px]
              p-7
              shadow-2xl
              animate-[fadeIn_.25s_ease]
            "
          >

            {/* Modal Header */}
            <div className="flex items-center justify-between mb-3">

              <div>

                <h2 className="text-2xl font-bold text-[#6B6F77]">
                  جزئیات تغذیه
                </h2>

                <p className="text-sm text-[#A0A4AA] mt-1">
                  {getDayData(selectedDay).date}
                </p>

              </div>

              <button
                onClick={() => setSelectedDay(null)}
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#F1F7FF]
                  text-[#6B6F77]
                  text-xl
                  hover:bg-[#E5F0FF]
                  transition
                "
              >
                ×
              </button>

            </div>

            {/* Main Stats */}
            <div className="grid grid-cols-2 gap-3 mb-7">

              <Stat
                title="کالری"
                value={getDayData(selectedDay).calories}
                unit="kcal"
                color="blue"
              />

              <Stat
                title="پروتئین"
                value={getDayData(selectedDay).protein}
                unit="g"
                color="green"
              />

              <Stat
                title="کربوهیدرات"
                value={getDayData(selectedDay).carbs}
                unit="g"
                color="yellow"
              />

              <Stat
                title="چربی"
                value={getDayData(selectedDay).fat}
                unit="g"
                color="red"
              />

            </div>

            {/* Meals */}
            <h3 className="text-lg font-semibold text-[#6B6F77] mb-4">
              وعده‌های غذایی
            </h3>

            <div className="space-y-3">

              {getDayData(selectedDay).meals.map(
                (meal, index) => (

                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      justify-between
                      bg-[#F7F9FC]
                      rounded-2xl
                      px-5
                      py-4
                    "
                  >

                    <span className="text-[#6B6F77]">
                      {meal[0]}
                    </span>

                    <span className="text-[#007BFF] font-medium">
                      {meal[1]}
                    </span>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      )}

    </>
  );
}


/* Stat Component */

function Stat({ title, value, unit, color }) {

  const colors = {
    blue: "bg-[#E8F3FF] text-[#007BFF]",
    green: "bg-[#ECF8E7] text-[#63AF42]",
    yellow: "bg-[#FFF7DE] text-[#D4A528]",
    red: "bg-[#FFF0F0] text-[#F04B4B]",
  };

  return (
    <div
      className={`
        ${colors[color]}
        rounded-2xl
        p-4
      `}
    >

      <p className="text-sm opacity-70">
        {title}
      </p>

      <div className="flex items-end gap-1 mt-2">

        <span className="text-2xl font-bold">
          {value}
        </span>

        <span className="text-sm mb-1">
          {unit}
        </span>

      </div>

    </div>
  );
}