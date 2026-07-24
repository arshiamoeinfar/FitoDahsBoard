import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import imgMove from "../../assets/imges/image 13.png";
import Dumbel from "../../assets/imges/Dumbbell Large Minimalistic.png";
import Refresh from "../../assets/imges/refresh.svg";
import ClockCircle from "../../assets/imges/Clock Circle.svg";
import Dumbel1 from "../../assets/icons/Dumbbell Large Minimalistic.png";
import Refresh2 from "../../assets/icons/refresh.png";
import ClockCircle3 from "../../assets/icons/Clock Circle.png";
export default function StartTrain() {
  const steps = [1, 2, 3, 4, 5];
  const currentStep = 3;
  return (
    <div className="grid grid-cols-12 h-screen px-8 py-6 w-full max-w-[1600px]">
      <div className="col-span-1 ">
        <Navbar />
      </div>
      <div className="col-span-11 py-3  ">
        <div className="bg-white rounded-3xl pb-10">
          <img className="w-full rounded-t-3xl relative" src={imgMove} alt="" />
          <h1 className="absolute top-112.5 text-4xl mr-3 font-primary  text-white">
            اسکوات با هالتر
          </h1>
          <div className="flex gap-3 absolute top-125 mr-3">
            <div className="flex items-center gap-0.5  ">
              <img className=" size-5 ml-1" src={Dumbel1} alt="" />
              <p className="text-[12px] text-white font-primary-ExtraLight font-medium">
                4 ست{" "}
              </p>
            </div>
            <div className="flex items-center gap-0.5">
              <img className=" size-5 ml-1" src={Refresh2} alt="" />
              <p className="text-[12px] text-white font-primary-ExtraLight font-medium">
                8 تکرار{" "}
              </p>
            </div>
            <div className="flex items-center gap-0.5">
              <img className="size-5 ml-1" src={ClockCircle3} alt="" />
              
              <p className="text-[12px] text-white font-primary-ExtraLight font-medium">
                10 ثانیه استراحت{" "}
              </p>
            </div>
          </div>
          <div className="w-full px-6 py-8">
            <div className="flex items-center justify-between relative">
              {/* خط پس‌زمینه */}
              <div className="absolute top-5 left-0 w-full h-2 bg-[#D9E9FF] rounded-full" />

              {/* خط پیشرفت */}
              <div
                className="absolute top-5 right-0 h-2 bg-[#007BFF] rounded-full transition-all duration-500"
                style={{
                  width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                }}
              />

              {steps.map((step) => (
                <div
                  key={step}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div
                    className={`
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              font-semibold
              transition-all
              duration-300

              ${
                step < currentStep
                  ? "bg-[#007BFF] text-white"
                  : step === currentStep
                    ? "bg-[#007BFF] ring-4 ring-[#D9E9FF] text-white"
                    : "bg-[#D9E9FF] text-[#6B6F77]"
              }
            `}
                  >
                    {step}
                  </div>

                  <span className="mt-3 text-sm text-[#6B6F77]">ست {step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end items-end gap-2 ml-7">
            <button className="w-44 py-3 px-5 bg-[#DBECFF] rounded-4xl text-[#6578BC] font-primary-light cursor-pointer">
              پرش به ست بعدی
            </button>
            <button className="w-44 py-3 px-5 bg-[#007BFF] rounded-4xl text-white font-primary-light cursor-pointer">
              پایان ست
            </button>
          </div>
        </div>
        <div className="bg-white mt-5 rounded-3xl p-6">
          <h1 className="text-2xl  text-[#6B6F77] mb-4">حرکات بعدی</h1>
          <div className="flex justify-around">
            <div className="flex items-center">
              <img
                className="w-40 h-20 rounded-2xl object-cover "
                src={imgMove}
                alt=""
              />
              <div className="flex flex-col mr-3">
                <h2>اسکوات با هالتر</h2>
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
            <div className="flex items-center">
              <img
                className="w-40 h-20 rounded-2xl object-cover"
                src={imgMove}
                alt=""
              />
              <div className="flex flex-col mr-3">
                <h2>اسکوات با هالتر</h2>
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
            <div className="flex items-center">
              <img
                className="w-40 h-20 rounded-2xl object-cover"
                src={imgMove}
                alt=""
              />
              <div className="flex flex-col mr-3">
                <h2>اسکوات با هالتر</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
}
