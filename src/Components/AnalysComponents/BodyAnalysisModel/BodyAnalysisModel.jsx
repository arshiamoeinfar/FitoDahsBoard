import React from "react";
import SegmentedControl from "../../SegmentedControl/SegmentedControl";
import BodyAnalysMan from "../../../assets/imges/image 24.svg";
import MusclePoint from "../../../assets/imges/Group 20.svg";
export default function BodyAnalysisModel() {
  return (
    <div className="bg-white rounded-3xl p-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl  text-[#6B6F77] font-primary">
          مدل تعاملی بدن
        </div>
        <div className="">
          <SegmentedControl />
        </div>
      </div>
      <div className="flex justify-center items-center mt-9">
        <img className="w-64" src={BodyAnalysMan} alt="" />
        <span className="relative group">
          <img
            className="size-4 translate-x-23 transform hover:scale-110 transition-all"
            src={MusclePoint}
            alt=""
          />
          <div className="w-30 flex flex-col border-gray-300 border-2 py-2 px-5 rounded-3xl absolute bg-white z-40 left-0.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <h2 className="text-[#007BFF]">چهارسر ران</h2>
            <h3 className="text-[#6BAF41]">خوب</h3>
            <span className="text-gray-500 flex justify-end">19%</span>
          </div>
        </span>
      </div>
      <div className="flex justify-center gap-8 text-[#6B6F77] px-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#007BFF]" />
          عالی
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#63AF42]" />
          خوب
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#D5A329]" />
          متوسط
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#F04444]" />
          ضعیف
        </div>
      </div>
    </div>
  );
}
