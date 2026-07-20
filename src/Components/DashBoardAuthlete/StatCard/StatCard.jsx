import React from "react";
import Walk from "../../../assets/imges/walk.png";

export default function StatCard() {
  return (
    <div className="bg-white rounded-[28px] h-23 flex items-center ">
      <div className="flex mr-3">
        <img src={Walk} alt="" />
        <div className="flex flex-col justify-center mr-1">
          <span className="text-lg text-[#6B6F77] font-medium">7234</span>
          <p className="text-sm text-[#6B6F77] font-primary-ExtraLight">
            قدم امروز
          </p>
        </div>
      </div>
    </div>
  );
}
