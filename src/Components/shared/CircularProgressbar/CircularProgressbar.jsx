import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

export default function CircularProgressbarChart({ value, title , description }) {
  return (
    <div className="col-span-4 h-full bg-white rounded-3xl p-5">
      <div className="flex justify-between items-center mb-12">
        <h3 className="text-2xl  text-[#6B6F77] text-start">{title || 'میزان پیشرفت'}</h3>
        <p className="text-[#969696] font-primary-light">
            {value <= 40 ? `نیاز به توجه` : value <= 80 ? ' خوب است' : 'عالی'}
          </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-56 flex justify-center items-center relative">
          <CircularProgressbar
            value={value}
            strokeWidth={13}
            styles={buildStyles({
              pathColor: "#6BAF41",
              trailColor: "#6BAF411A",
              strokeLinecap: "round",
            })}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-[#6B6F77] text-5xl">
            {value} <span className="text-sm font-primary-light ">{description || 'از 100'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
