import React from "react";

import BeforeImage from "../../../assets/imges/image 22.svg";
import AfterImage from "../../../assets/imges/image 22 (1).svg";
const AppearanceChanges = () => {
  return (
    <div className="w-full bg-white rounded-[32px] p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-[#6B6F77]">
          تغییرات ظاهری
        </h2>
      </div>

      {/* Before / After */}
      <div className="grid grid-cols-2 gap-5">

        {/* Before */}
        <div className="relative h-auto overflow-hidden rounded-[32px] group">

          <img
            src={BeforeImage}
            alt="قبل"
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          {/* Blue Gradient */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-[45%]
              bg-gradient-to-t
              from-[#007BFF]
              via-[#007BFF]/90
              to-transparent
            "
          />

          {/* Text */}
          <div className="absolute bottom-7 left-0 right-0 text-center text-white">
            <h3 className="text-2xl font-bold">
              قبل
            </h3>

            <p className="text-xl mt-1">
              ۱۴ فروردین
            </p>
          </div>
        </div>


        {/* After */}
        <div className="relative h-auto overflow-hidden rounded-[32px] group">

          <img
            src={AfterImage}
            alt="بعد"
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          {/* Blue Gradient */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-[45%]
              bg-gradient-to-t
              from-[#007BFF]
              via-[#007BFF]/90
              to-transparent
            "
          />

          {/* Text */}
          <div className="absolute bottom-7 left-0 right-0 text-center text-white">
            <h3 className="text-2xl font-bold">
              بعد
            </h3>

            <p className="text-xl mt-1">
              امروز
            </p>
          </div>

        </div>

      </div>


      {/* Statistics */}
      <div
        className="
          mt-7
          bg-[#F3F8FE]
          rounded-[32px]
          px-8
          py-7
          grid
          grid-cols-3
          items-center
          text-center
        "
      >

        {/* Weight */}
        <div>
          <span className="block text-2xl text-[#007BFF] font-medium">
            -۵ کیلوگرم
          </span>

          <span className="block text-xl text-[#6B6F77] mt-2">
            کاهش وزن
          </span>
        </div>


        {/* Body Fat */}
        <div>
          <span className="block text-2xl text-[#007BFF] font-medium">
            -۶.۸ کیلوگرم
          </span>

          <span className="block text-xl text-[#6B6F77] mt-2">
            کاهش چربی
          </span>
        </div>


        {/* Days */}
        <div>
          <span className="block text-2xl text-[#007BFF] font-medium">
            ۱۲۰
          </span>

          <span className="block text-xl text-[#6B6F77] mt-2">
            روز گذشته
          </span>
        </div>

      </div>

    </div>
  );
};

export default AppearanceChanges;