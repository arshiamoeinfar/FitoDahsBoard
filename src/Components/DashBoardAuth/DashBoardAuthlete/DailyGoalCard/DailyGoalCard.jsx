import React from "react";
import imgRectangle from "../../../../assets/imges/Rectangle 9.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";

export default function DailyGoalCard() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between bg-(--bg-theme)">
      <div className="flex *: flex-col items-start justify-center gap-2 text-white absolute top-8 right-8 ">
        <h1 className="text-2xl">تکمیل هدف روزانه</h1>
        <p className="font-primary-light">1 از 7 تمرین تکمیل شده</p>
        <span
          onClick={() => {
            navigate("/dashboardAthlete/start-training");
          }}
          className="bg-(--background) text-(--primary) py-2 px-4 rounded-full hover:bg-(--primary-hover) transition duration-300 cursor-pointer text-sm "
        >
          شروع تمرین
        </span>
      </div>
      <img
        className="min-w-fit h-full dark:blur-[3px]"
        src={imgRectangle}
        alt=""
      />
      <div className="w-35 h-35 absolute left-14 top-5 text-xl overflow-hidden">
        <CircularProgressbar
          value={50}
          text=""
          strokeWidth={14}
          styles={buildStyles({
            pathColor: "var(--circle-color)",
            trailColor: "var(--circle-color-hover)",
            strokeLinecap: "round",
          })}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          50%
        </div>
      </div>
    </div>
  );
}
