import React, { useState } from "react";
import Water from "../../../../assets/imges/water.png";

export default function DailyHydrationCard() {
  const [waterAmount, setWaterAmount] = useState(1000);

  const glassAmount = 250;

  const addWater = () => {
    setWaterAmount((prev) => prev + glassAmount);
  };

  const removeWater = () => {
    setWaterAmount((prev) => Math.max(0, prev - glassAmount));
  };

  const glassCount = Math.ceil(waterAmount / glassAmount);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg text-[#6B6F77]">
          آب رسانی روزانه
        </h1>

        <span className="text-sm text-[#6B6F77] font-primary-light">
          {waterAmount >= 1000
            ? `${waterAmount / 1000} لیتر`
            : `${waterAmount} میلی‌لیتر`}{" "}
          / 4 لیتر
        </span>
      </div>

      <div className="flex flex-wrap justify-around items-center gap-4 mt-10">
        {Array.from({ length: Math.max(glassCount, 5) }).map(
          (_, index) => {
            const isFilled = index < glassCount;

            return (
              <button
                key={index}
                onClick={addWater}
                className="relative size-12 transition-transform duration-200 hover:scale-110 active:scale-95"
              >
                <img
                  className={`size-12 object-contain transition-opacity duration-300 ${
                    isFilled ? "opacity-100" : "opacity-20"
                  }`}
                  src={Water}
                  alt="water"
                />

                {!isFilled && (
                  <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-[#007BFF]">
                    +
                  </span>
                )}
              </button>
            );
          }
        )}
      </div>

      <div className="flex items-center justify-center gap-3 mt-6">
        <button
          onClick={removeWater}
          disabled={waterAmount === 0}
          className="flex items-center justify-center w-9 h-9 rounded-xl bg-gray-100 text-[#6B6F77] hover:bg-gray-200 disabled:opacity-40"
        >
          −
        </button>

        <button
          onClick={addWater}
          className="flex items-center justify-center px-4 h-9 rounded-xl bg-[#007BFF] text-white text-sm hover:bg-[#006fe6] transition"
        >
          + افزودن آب
        </button>
      </div>
    </>
  );
}