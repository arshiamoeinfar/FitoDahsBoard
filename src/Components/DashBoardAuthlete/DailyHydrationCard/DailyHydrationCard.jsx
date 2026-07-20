import React from "react";
import Water from "../../../assets/imges/water.png";

export default function DailyHydrationCard() {
  return (
    <>
   <div className="flex justify-between items-center mb-4">
                  <h1 className="text-lg text-[#6B6F77]">آب رسانی روزانه</h1>
                  <span className="text-sm text-[#6B6F77] font-primary-light">
                    1لیتر / 4 لیتر
                  </span>
                </div>
                <div className="flex justify-around items-center gap-4 mt-10">
                  <img className="size-12" src={Water} alt="" />
                  <img className="size-12" src={Water} alt="" />
                  <img className="size-12" src={Water} alt="" />
                  <img className="size-12" src={Water} alt="" />
                  <img className="size-12" src={Water} alt="" />
                </div>
    </>
  );
}
