import React from "react";
import Flesh from "../../../assets/imges/flesh.svg";
import ImgSquat from "../../../assets/imges/image 13.png";
import Dumbel from "../../../assets/imges/Dumbbell Large Minimalistic.png";
import Refresh from "../../../assets/imges/refresh.svg";
import ClockCircle from "../../../assets/imges/Clock Circle.svg";
import ElementLeg from "../../../assets/imges/elements.png";

export default function Mytrain() {
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
    <div className=" bg-white rounded-3xl p-6 h-[465px]">
      {/* Header */}
      <div className="flex items-center justify-between px-2">
        <h2 className="text-xl font-medium text-[#6B6F77]">تمرینات امروز</h2>
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
          <div className="flex flex-col items-start justify-between rounded-3xl gap-3">
            <div className="flex items-center gap-4 mt-2">
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
            <div className="flex items-center gap-4 mt-2">
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
            <div className="flex items-center gap-4 mt-2">
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
            <div className="flex items-center gap-4 mt-2">
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
  );
}
