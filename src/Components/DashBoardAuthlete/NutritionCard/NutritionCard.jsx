import React from "react";
import Flesh from "../../../assets/imges/flesh.svg";
import BreakFast from "../../../assets/imges/break.png";
import imgDinner from "../../../assets/imges/dinner.png";
import imgLunch from "../../../assets/imges/lunch.png";
import imgFire from "../../../assets/imges/Fire.svg";
import Liner from "../../../assets/imges/Line 1.png";
import { useNavigate } from "react-router-dom";

export default function NutritionCard() {

      const nutritionData = [
        {
          name: "کربوهیدرات",
          value: 80,
        },
        {
          name: "پروتئین",
          value: 60,
        },
        {
          name: "چربی",
          value: 45,
        },
      ];

      const navigate = useNavigate()
  return (
    <div className="bg-white rounded-3xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl text-[#6B6F77] font-bold font-primary-light ">
          تغذیه امروز
        </h2>
        <button
        onClick={()=> navigate("/dashboardnutrition")}
        className="flex items-center gap-2 text-[#6B6F77] text-sm hover:text-[#000000] transition cursor-pointer">
          جزئیات بیشتر
          <img src={Flesh} alt="" className="w-4 h-4" />
        </button>
      </div>

      <div className="flex">
        <div className="flex-col w-48">
          <div className="flex justify-start items-center mb-4">
            <img className="size-10" src={BreakFast} alt="" />
            <div className="flex flex-col mr-4">
              <span className="text-[12px] text-[#6B6F77] font-medium">
                صبحانه
              </span>
              <p className="flex text-[12px] text-[#6B6F77] font-primary-ExtraLight font-medium">
                {" "}
                <span>
                  <img className="size-3.5" src={imgFire} alt="" />
                </span>
                400 کالری
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center mb-4">
            <img className="size-10" src={imgLunch} alt="" />
            <div className="flex flex-col mr-4">
              <span className="text-[12px] text-[#6B6F77] font-medium">
                نهار
              </span>
              <p className="flex text-[12px] text-[#6B6F77] font-primary-ExtraLight font-medium">
                {" "}
                <span>
                  <img className="size-3.5" src={imgFire} alt="" />
                </span>
                400 کالری
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center mb-4">
            <img className="size-10" src={imgDinner} alt="" />
            <div className="flex flex-col mr-4">
              <span className="text-[12px] text-[#6B6F77] font-medium">
                شام
              </span>
              <p className="flex text-[12px] text-[#6B6F77] font-primary-ExtraLight font-medium">
                {" "}
                <span>
                  <img className="size-3.5" src={imgFire} alt="" />
                </span>
                400 کالری
              </p>
            </div>
          </div>
        </div>
        <img src={Liner} alt="" />
        <div className="flex items-center justify-center mr-4">
          <div className="flex justify-center gap-5">
            {nutritionData.map((item) => (
              <div key={item.name} className="flex flex-col items-center">
                {/* ستون */}
                <div className="h-30 w-3 bg-[#DBEDFF] rounded-full overflow-hidden flex items-end">
                  <div
                    className="w-full bg-[#007BFF] rounded-full transition-all duration-500"
                    style={{
                      height: `${item.value}%`,
                    }}
                  />
                </div>

                {/* اسم */}
                <p className="mt-3 text-sm font-primary-light  text-[#9AA0A6] whitespace-nowrap">
                  {item.name}
                </p>
                <p className="mt-1 text-[11px] font-primary-ExtraLight text-[#9AA0A6] whitespace-nowrap">
                  190/120
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
