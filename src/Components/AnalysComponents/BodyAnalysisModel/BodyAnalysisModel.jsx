import React from "react";
import SegmentedControl from "../../SegmentedControl/SegmentedControl";
import BodyAnalysMan from "../../../assets/imges/image 24.svg";
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
