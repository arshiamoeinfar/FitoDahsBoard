import React from "react";
import "./DashboardAthlete.css";
import Navbar from "../../Components/Navbar/Navbar";
import imgRectangle from "../../assets/imges/Rectangle 9.png";
// import CircularProgress from '@mui/material/CircularProgress';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ElementLeg from "../../assets/imges/elements.png";
import Flesh from "../../assets/imges/flesh.svg";
import ImgSquat from "../../assets/imges/Frame 1261157473.png";
import Dumbel from "../../assets/imges/Dumbbell Large Minimalistic.png";
import Refresh from "../../assets/imges/refresh.svg";
import ClockCircle from "../../assets/imges/Clock Circle.svg";
import BreakFast from "../../assets/imges/break.png";
import imgDinner from "../../assets/imges/dinner.png";
import imgLunch from "../../assets/imges/lunch.png";
import imgFire from "../../assets/imges/Fire.svg";
import Liner from "../../assets/imges/Line 1.png";
import { ChartsContainer } from "@mui/x-charts/ChartsContainer";
import { BarPlot } from "@mui/x-charts/BarChart";

export default function DashboardAthlete() {
  const exercises = [
    {
      id: 1,
      name: "اسکوات",
      sets: 4,
      reps: 10,
      weight: "80kg",
      image: ImgSquat,
    },
  ];
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
  return (
    <div className="grid grid-cols-12 grid-rows-12 h-screen bg-[#F5F7FB] gap-2">
      <div className="col-span-1 mr-2">
        <Navbar />
      </div>
      <div className="col-span-8 border-2 py-3">
        <div className="grid grid-cols-12 gap-6 h-full">
          <div className="col-span-5 row-span-1 w-full max-h-44 bg-[#007BFF]  rounded-4xl flex items-center justify-center relative">
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

          <div className="col-span-6 row-span-2  ml-5 bg-white rounded-2xl p-6 ">
            {/* Header */}
            <div className="flex items-center justify-between px-2">
              <h2 className="text-xl font-medium text-[#6B6F77]">
                تمرینات امروز
              </h2>
              <div className="flex items-end  gap-2 px-4 py-2">
                <img src={ElementLeg} alt="Leg" className="w-4 h-4" />
                <span className="text-sm text-[#6B6F77]">روز پا</span>
              </div>

              <button className="flex items-center gap-2 text-[#6B6F77] text-sm hover:text-[#000000] transition cursor-pointer">
                جزئیات بیشتر
                <img src={Flesh} alt="" className="w-4 h-4" />
              </button>
            </div>

            {/* Exercises */}

            <div className="mt-8 space-y-4">
              {exercises.map(() => (
                <div className="flex flex-col items-start justify-between rounded-2xl gap-3">
                  <div className="flex items-center gap-4">
                    <img
                      src={ImgSquat}
                      className="w-28 h-16 rounded-xl object-cover cursor-pointer"
                      alt=""
                    />

                    <div>
                      <h3 className="font-primary font-medium text-[#6B6F77] mb-2 cursor-pointer">
                        اسکوات با هالتر
                      </h3>
                      <div className="flex gap-3">
                        <div className="flex items-center gap-0.5">
                          <img className="size-3.5" src={Dumbel} alt="" />
                          <p className="text-[12px] text-[#6B6F77] font-primary-ExtraLight font-medium">
                            4 ست{" "}
                          </p>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <img className="size-3.5" src={Refresh} alt="" />
                          <p className="text-[12px] text-[#6B6F77] font-primary-ExtraLight font-medium">
                            8 تکرار{" "}
                          </p>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <img className="size-3.5" src={ClockCircle} alt="" />
                          <p className="text-[12px] text-[#6B6F77] font-primary-ExtraLight font-medium">
                            10 ثانیه استراحت{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src={ImgSquat}
                      className="w-28 h-16 rounded-xl object-cover cursor-pointer"
                      alt=""
                    />

                    <div>
                      <h3 className="font-primary font-medium text-[#6B6F77] mb-2 cursor-pointer">
                        اسکوات با هالتر
                      </h3>
                      <div className="flex gap-3">
                        <div className="flex items-center gap-0.5">
                          <img className="size-3.5" src={Dumbel} alt="" />
                          <p className="text-[12px] text-[#6B6F77] font-primary-ExtraLight font-medium">
                            4 ست{" "}
                          </p>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <img className="size-3.5" src={Refresh} alt="" />
                          <p className="text-[12px] text-[#6B6F77] font-primary-ExtraLight font-medium">
                            8 تکرار{" "}
                          </p>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <img className="size-3.5" src={ClockCircle} alt="" />
                          <p className="text-[12px] text-[#6B6F77] font-primary-ExtraLight font-medium">
                            10 ثانیه استراحت{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src={ImgSquat}
                      className="w-28 h-16 rounded-xl object-cover cursor-pointer"
                      alt=""
                    />

                    <div>
                      <h3 className="font-primary font-medium text-[#6B6F77] mb-2 cursor-pointer">
                        اسکوات با هالتر
                      </h3>
                      <div className="flex gap-3">
                        <div className="flex items-center gap-0.5">
                          <img className="size-3.5" src={Dumbel} alt="" />
                          <p className="text-[12px] text-[#6B6F77] font-primary-ExtraLight font-medium">
                            4 ست{" "}
                          </p>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <img className="size-3.5" src={Refresh} alt="" />
                          <p className="text-[12px] text-[#6B6F77] font-primary-ExtraLight font-medium">
                            8 تکرار{" "}
                          </p>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <img className="size-3.5" src={ClockCircle} alt="" />
                          <p className="text-[12px] text-[#6B6F77] font-primary-ExtraLight font-medium">
                            10 ثانیه استراحت{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src={ImgSquat}
                      className="w-28 h-16 rounded-xl object-cover cursor-pointer"
                      alt=""
                    />

                    <div>
                      <h3 className="font-primary font-medium text-[#6B6F77] mb-2 cursor-pointer">
                        اسکوات با هالتر
                      </h3>
                      <div className="flex gap-3">
                        <div className="flex items-center gap-0.5">
                          <img className="size-3.5 " src={Dumbel} alt="" />
                          <p className="text-[12px] text-[#6B6F77] font-primary-ExtraLight font-medium">
                            4 ست{" "}
                          </p>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <img className="size-3.5" src={Refresh} alt="" />
                          <p className="text-[12px] text-[#6B6F77] font-primary-ExtraLight font-medium">
                            8 تکرار{" "}
                          </p>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <img className="size-3.5" src={ClockCircle} alt="" />
                          <p className="text-[12px] text-[#6B6F77] font-primary-ExtraLight font-medium">
                            10 ثانیه استراحت{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-5">
            <div className="bg-white rounded-4xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl text-[#6B6F77] font-bold font-primary-light ">
                  تغذیه امروز
                </h2>
                <button className="flex items-center gap-2 text-[#6B6F77] text-sm hover:text-[#000000] transition cursor-pointer">
                  جزئیات بیشتر
                  <img src={Flesh} alt="" className="w-4 h-4" />
                </button>
              </div>

              <div className="flex">
                <div className="flex-co w-48">
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
                      <div
                        key={item.name}
                        className="flex flex-col items-center"
                      >
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
          </div>

          <div className="col-span-12">
            <div className="flex justify-between items-end">
                  
            </div>
          </div>

          <div className="col-span-4">Body Analysis</div>

          <div className="col-span-8">Progress Chart</div>

          <div className="col-span-12">Recent Activity</div>
        </div>
      </div>
      <div className="col-span-3 "></div>
    </div>
  );
}
