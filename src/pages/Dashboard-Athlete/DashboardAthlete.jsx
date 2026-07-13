import React from "react";
import "./DashboardAthlete.css";
import Navbar from "../../Components/Navbar/Navbar";
import imgRectangle from "../../assets/imges/Rectangle 9.png";
// import CircularProgress from '@mui/material/CircularProgress';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ElementLeg from "../../assets/imges/elements.png";
import Flesh from "../../assets/imges/flesh.svg";

export default function DashboardAthlete() {
  return (
    <div className="grid grid-cols-12 h-screen bg-[#F5F7FB] gap-2">
      <div className="col-span-1 mr-2">
        <Navbar />
      </div>
      <div className="col-span-8 border-2 py-3">
        <div className="grid grid-cols-12 gap-6 h-full">
          <div className="col-span-5 w-full max-h-44 bg-[#007BFF]  rounded-4xl flex items-center justify-center relative">
            <div className="flex justify-between overflow-hidden">
              <div className="flex *: flex-col items-start justify-center gap-2 text-white absolute top-8 right-8 ">
                <h1 className="text-2xl">تکمیل هدف روزانه</h1>
                <p className="font-primary-light">1 از 7 تمرین تکمیل شده</p>
                <span className="bg-white text-[#007BFF] py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300 cursor-pointer text-sm ">
                  شروع تمرین
                </span>
              </div>
            <img
              className="w-full h-full object-cover"
              src={imgRectangle}
              alt=""
            />
            <div className="w-24 h-32 absolute left-10 top-8">
              <CircularProgressbar
                value={50}
                text="50%"
                strokeWidth={10}
                styles={buildStyles({
                  pathColor: "#FFFFFF",
                  trailColor: "#FFFFFF63",
                  textColor: "#FFFFFF",
                  strokeLinecap: "round",
                  pathTransition: "stroke-dashoffset 0.7s ease",
                  textSize: "16px",
                })}
              />
            </div>
            </div>
          </div>

          <div className="col-span-6 bg-white rounded-4xl flex">
                <div className="flex bg-amber-200 justify-around w-full">
                    <h2>تمرینات امروز</h2>
                    <p>روز پا <span><img src={ElementLeg} alt="" /></span></p>
                    <div className="flex">
                      <p>جزئیات بیشتر <span><img src={Flesh} alt="" /></span></p>
                    </div>
                </div>
          </div>

          <div className="col-span-6">Workout</div>

          <div className="col-span-6">Nutrition</div>

          <div className="col-span-4">Body Analysis</div>

          <div className="col-span-8">Progress Chart</div>

          <div className="col-span-12">Recent Activity</div>
        </div>
      </div>
      <div className="col-span-3 "></div>
    </div>
  );
}
