import React from "react";
import Flesh from "../../../assets/imges/flesh.svg";
import ImgSquat from "../../../assets/imges/image 13.png";
import Dumbel from "../../../assets/imges/Dumbbell Large Minimalistic.png";
import Refresh from "../../../assets/imges/refresh.svg";
import ClockCircle from "../../../assets/imges/Clock Circle.svg";
import ElementLeg from "../../../assets/imges/elements.png";
import Liner from "../../../assets/imges/Line 1.png";

export default function Mytrain({
  showRecord = false,
  startTraining = false,
  showDetail = false,
  hrTrue = false,
}) {
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

  return (
    <div className=" bg-white rounded-3xl p-6 h-fit">
      {/* Header */}
      <div className="flex items-center justify-between px-2">
        <h2 className="text-xl font-medium text-[#6B6F77]">تمرینات امروز</h2>
        <div className="flex items-end  gap-2 px-4 py-2">
          <img src={ElementLeg} alt="Leg" className="w-4 h-4" />
          <span className="text-sm text-[#6B6F77]">روز پا</span>
        </div>

        {startTraining ? (
          <button className="bg-[#007BFF] text-white px-4 py-2 rounded-full hover:bg-[#0056A3] transition cursor-pointer Modam-Medium ">
            شروع تمرین
          </button>
        ) : (
          <button className="flex items-center gap-2 text-[#6B6F77] text-sm hover:text-gray-700 transition cursor-pointer">
            جزئیات تمرین
            <img src={Flesh} alt="" />
          </button>
        )}
      </div>

      {/* Exercises */}
      <div className="mt-8 space-y-4">
        <hr className="text-gray-200" />
        {exercises.map((index) => (
          <div className="flex flex-col items-start justify-between rounded-3xl gap-3">
            <div className={`flex  items-center gap-4 ${hrTrue ? " py-4 " : "mt-2"} w-full`}>
              <img
                src={ImgSquat}
                className="w-28 h-16 rounded-xl object-cover cursor-pointer"
                alt=""
              />

              <div className="w-full">
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
              {showRecord && (
                <div className="flex justify-center items-center bg-[#F2F8FD] w-full gap-8 p-4 rounded-3xl">
                  <div className="flex-col justify-center items-center">
                    <h1 className="text-[#007BFF] Modam-Medium">رکورد قبلی</h1>
                    <p className="text-[#6B6F77] Modam-Medium text-sm ">30KG</p>
                  </div>
                  <div className="flex-col justify-center items-center ">
                    <h1 className="text-[#007BFF] Modam-Medium">رکورد فعلی</h1>
                    <p className="text-[#6B6F77] Modam-Medium text-sm">30KG</p>
                  </div>
                  <div className="flex-col justify-center items-center">
                    <h1 className="text-[#007BFF] Modam-Medium"> پیشرفت</h1>
                    <p className="text-[#6B6F77] Modam-Medium text-sm ">30%</p>
                  </div>
                </div>
              )}
            </div>
            {hrTrue && index !== exercises[exercises.length] && (
              <hr className="text-gray-200 w-full" />
            )}
            <div className={`flex  items-center gap-4 ${hrTrue ? " py-4 " : "mt-2"} w-full`}>
              <img
                src={ImgSquat}
                className="w-28 h-16 rounded-xl object-cover cursor-pointer"
                alt=""
              />

              <div className="w-full">
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
              {showRecord && (
                <div className="flex justify-center items-center bg-[#F2F8FD] w-full gap-8 p-4 rounded-3xl">
                  <div className="flex-col justify-center items-center">
                    <h1 className="text-[#007BFF] Modam-Medium">رکورد قبلی</h1>
                    <p className="text-[#6B6F77] Modam-Medium text-sm ">30KG</p>
                  </div>
                  <div className="flex-col justify-center items-center ">
                    <h1 className="text-[#007BFF] Modam-Medium">رکورد فعلی</h1>
                    <p className="text-[#6B6F77] Modam-Medium text-sm">30KG</p>
                  </div>
                  <div className="flex-col justify-center items-center">
                    <h1 className="text-[#007BFF] Modam-Medium"> پیشرفت</h1>
                    <p className="text-[#6B6F77] Modam-Medium text-sm ">30%</p>
                  </div>
                </div>
              )}
            </div>
            {hrTrue && index !== exercises[exercises.length] && (
              <hr className="text-gray-200 w-full" />
            )}
            <div className={`flex  items-center gap-4 ${hrTrue ? " py-4 " : "mt-2"} w-full`}>
              <img
                src={ImgSquat}
                className="w-28 h-16 rounded-xl object-cover cursor-pointer"
                alt=""
              />

              <div className="w-full">
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
              {showRecord && (
                <div className="flex justify-center items-center bg-[#F2F8FD] w-full gap-8 p-4 rounded-3xl">
                  <div className="flex-col justify-center items-center">
                    <h1 className="text-[#007BFF] Modam-Medium">رکورد قبلی</h1>
                    <p className="text-[#6B6F77] Modam-Medium text-sm ">30KG</p>
                  </div>
                  <div className="flex-col justify-center items-center ">
                    <h1 className="text-[#007BFF] Modam-Medium">رکورد فعلی</h1>
                    <p className="text-[#6B6F77] Modam-Medium text-sm">30KG</p>
                  </div>
                  <div className="flex-col justify-center items-center">
                    <h1 className="text-[#007BFF] Modam-Medium"> پیشرفت</h1>
                    <p className="text-[#6B6F77] Modam-Medium text-sm ">30%</p>
                  </div>
                </div>
              )}
            </div>
            {hrTrue && index !== exercises[exercises.length] && (
              <hr className="text-gray-200 w-full" />
            )}
            <div className={`flex  items-center gap-4 ${hrTrue ? " py-4 " : "mt-2"} w-full`}>
              <img
                src={ImgSquat}
                className="w-28 h-16 rounded-xl object-cover cursor-pointer"
                alt=""
              />

              <div className="w-full">
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
              {showRecord && (
                <div className="flex justify-center items-center bg-[#F2F8FD] w-full gap-8 p-4 rounded-3xl">
                  <div className="flex-col justify-center items-center">
                    <h1 className="text-[#007BFF] Modam-Medium">رکورد قبلی</h1>
                    <p className="text-[#6B6F77] Modam-Medium text-sm ">30KG</p>
                  </div>
                  <div className="flex-col justify-center items-center ">
                    <h1 className="text-[#007BFF] Modam-Medium">رکورد فعلی</h1>
                    <p className="text-[#6B6F77] Modam-Medium text-sm">30KG</p>
                  </div>
                  <div className="flex-col justify-center items-center">
                    <h1 className="text-[#007BFF] Modam-Medium"> پیشرفت</h1>
                    <p className="text-[#6B6F77] Modam-Medium text-sm ">30%</p>
                  </div>
                </div>
              )}
            </div>
            {hrTrue && index !== exercises[exercises.length - 1] && (
              <hr className="text-gray-200 w-full" />
            )}
          </div>
        ))}
        {showDetail && (
          <span className="text-gray-400 Modam-Medium cursor-pointer justify-center items-center flex gap-1.5 hover:text-gray-500">
            {" "}
            مشاهده همه تمرینات
            <img src={Flesh} alt="" />
          </span>
        )}
      </div>
    </div>
  );
}
