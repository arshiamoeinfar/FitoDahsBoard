import React from "react";
import imgRectangle from "../../../assets/imges/Rectangle 9.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";



export default function DailyGoalCard() {
  
const navgate = useNavigate();


  return (
    <div className="flex justify-between overflow-hidden">
      <div className="flex *: flex-col items-start justify-center gap-2 text-white absolute top-8 right-8 ">
        <h1 className="text-2xl">تکمیل هدف روزانه</h1>
        <p className="font-primary-light">1 از 7 تمرین تکمیل شده</p>
        <span
          onClick={()=>{
            navgate("/dashboardAthlete/start-training")
          }}
         className="bg-white text-[#007BFF] py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300 cursor-pointer text-sm ">
          شروع تمرین
        </span>
      </div>
      <img className="w-full h-full object-cover" src={imgRectangle} alt="" />
      <div className="w-24 h-24 absolute left-10 top-8">
        <CircularProgressbar
          value={50}
          text=""
          strokeWidth={10}
          styles={buildStyles({
            pathColor: "#FFFFFF",
            trailColor: "#FFFFFF63",
          })}
        />

        <div className="absolute inset-0 flex items-center justify-center text-white">
          50%
        </div>
      </div>
    </div>
  );
}
