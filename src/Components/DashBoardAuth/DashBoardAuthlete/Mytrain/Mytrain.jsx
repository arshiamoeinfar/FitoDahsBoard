import React from "react";
import Flesh from "../../../../assets/imges/flesh.svg";
import ImgSquat from "../../../../assets/imges/image 13.png";
import Dumbel from "../../../../assets/imges/Dumbbell Large Minimalistic.png";
import Refresh from "../../../../assets/imges/Refresh.svg";
import ClockCircle from "../../../../assets/imges/Clock Circle.svg";
import ElementLeg from "../../../../assets/imges/elements.png";
import Liner from "../../../../assets/imges/Line 1.png";
import WorkoutProgramModal from "../WorkoutProgramModal/WorkoutProgramModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    const [isProgramModalOpen, setIsProgramModalOpen] = useState(false);

  const navigate = useNavigate()
  return (
    <div className=" bg-surface rounded-3xl p-6 h-fit">
      {/* Header */}
      <div className="flex items-center justify-between px-2">
        <h2 className="text-xl font-medium text-muted">تمرینات امروز</h2>
        <div className="flex items-end  gap-2 px-4 py-2">
          <img src={ElementLeg} alt="Leg" className="w-4 h-4" />
          <span className="text-sm text-muted">روز پا</span>
        </div>

        {startTraining ? (
          <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-hover transition cursor-pointer Modam-Medium" onClick={()=> navigate("/dashboardAthlete/start-training")}>
            شروع تمرین
          </button>
        ) : (
          <button 
          onClick={()=> navigate("/trainingpage")}
          className="flex items-center gap-2 text-muted text-sm hover:text-foreground transition cursor-pointer">
            جزئیات تمرین
            <img src={Flesh} alt="" />
          </button>
        )}
      </div>

      {/* Exercises */}
      <div className="mt-8 space-y-4">
        <hr className="text-border" />
        {exercises.map((exercise) => (
          <div key={exercise.id} className="flex flex-col items-start justify-between rounded-3xl gap-3">
            <div className={`flex  items-center gap-4 ${hrTrue ? " py-4 " : "mt-2"} w-full`}>
              <img
               onClick={() => navigate("/dashboardAthlete/start-training")}
                src={ImgSquat}
                className="w-28 h-16 rounded-xl object-cover cursor-pointer"
                alt=""
              />

              <div className="w-full">
                <h3 onClick={() => navigate("/dashboardAthlete/start-training")} className="font-primary font-medium text-muted mb-2 cursor-pointer">
                  اسکوات با هالتر
                </h3>
                <div className="flex gap-3">
                  <div className="flex items-center gap-0.5">
                    <img className="size-3.5" src={Dumbel} alt="" />
                    <p className="text-[12px] text-muted font-primary-ExtraLight font-medium">
                      4 ست{" "}
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <img className="size-3.5" src={Refresh} alt="" />
                    <p className="text-[12px] text-muted font-primary-ExtraLight font-medium">
                      8 تکرار{" "}
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <img className="size-3.5" src={ClockCircle} alt="" />
                    <p className="text-[12px] text-muted font-primary-ExtraLight font-medium">
                      10 ثانیه استراحت{" "}
                    </p>
                  </div>
                </div>
              </div>
              {showRecord && (
                <div className="flex justify-center items-center bg-surface-secondary w-full gap-8 p-4 rounded-3xl">
                  <div className="flex-col justify-center items-center">
                    <h1 className="text-primary Modam-Medium">رکورد قبلی</h1>
                    <p className="text-muted Modam-Medium text-sm ">30KG</p>
                  </div>
                  <div className="flex-col justify-center items-center ">
                    <h1 className="text-primary Modam-Medium">رکورد فعلی</h1>
                    <p className="text-muted Modam-Medium text-sm">30KG</p>
                  </div>
                  <div className="flex-col justify-center items-center">
                    <h1 className="text-primary Modam-Medium"> پیشرفت</h1>
                    <p className="text-muted Modam-Medium text-sm ">30%</p>
                  </div>
                </div>
              )}
            </div>
            {hrTrue && exercise !== exercises[exercises.length] && (
              <hr className="text-border w-full" />
            )}
            <div className={`flex  items-center gap-4 ${hrTrue ? " py-4 " : "mt-2"} w-full`}>
              <img
                src={ImgSquat}
                className="w-28 h-16 rounded-xl object-cover cursor-pointer"
                alt=""
              />

              <div className="w-full">
                <h3 className="font-primary font-medium text-muted mb-2 cursor-pointer">
                  اسکوات با هالتر
                </h3>
                <div className="flex gap-3">
                  <div className="flex items-center gap-0.5">
                    <img className="size-3.5" src={Dumbel} alt="" />
                    <p className="text-[12px] text-muted font-primary-ExtraLight font-medium">
                      4 ست{" "}
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <img className="size-3.5" src={Refresh} alt="" />
                    <p className="text-[12px] text-muted font-primary-ExtraLight font-medium">
                      8 تکرار{" "}
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <img className="size-3.5" src={ClockCircle} alt="" />
                    <p className="text-[12px] text-muted font-primary-ExtraLight font-medium">
                      10 ثانیه استراحت{" "}
                    </p>
                  </div>
                </div>
              </div>
              {showRecord && (
                <div className="flex justify-center items-center bg-surface-secondary w-full gap-8 p-4 rounded-3xl">
                  <div className="flex-col justify-center items-center">
                    <h1 className="text-primary Modam-Medium">رکورد قبلی</h1>
                    <p className="text-muted Modam-Medium text-sm ">30KG</p>
                  </div>
                  <div className="flex-col justify-center items-center ">
                    <h1 className="text-primary Modam-Medium">رکورد فعلی</h1>
                    <p className="text-muted Modam-Medium text-sm">30KG</p>
                  </div>
                  <div className="flex-col justify-center items-center">
                    <h1 className="text-primary Modam-Medium"> پیشرفت</h1>
                    <p className="text-muted Modam-Medium text-sm ">30%</p>
                  </div>
                </div>
              )}
            </div>
            {hrTrue && exercise !== exercises[exercises.length] && (
              <hr className="text-border w-full" />
            )}
            <div className={`flex  items-center gap-4 ${hrTrue ? " py-4 " : "mt-2"} w-full`}>
              <img
                src={ImgSquat}
                className="w-28 h-16 rounded-xl object-cover cursor-pointer"
                alt=""
              />

              <div className="w-full">
                <h3 className="font-primary font-medium text-muted mb-2 cursor-pointer">
                  اسکوات با هالتر
                </h3>
                <div className="flex gap-3">
                  <div className="flex items-center gap-0.5">
                    <img className="size-3.5" src={Dumbel} alt="" />
                    <p className="text-[12px] text-muted font-primary-ExtraLight font-medium">
                      4 ست{" "}
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <img className="size-3.5" src={Refresh} alt="" />
                    <p className="text-[12px] text-muted font-primary-ExtraLight font-medium">
                      8 تکرار{" "}
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <img className="size-3.5" src={ClockCircle} alt="" />
                    <p className="text-[12px] text-muted font-primary-ExtraLight font-medium">
                      10 ثانیه استراحت{" "}
                    </p>
                  </div>
                </div>
              </div>
              {showRecord && (
                <div className="flex justify-center items-center bg-surface-secondary w-full gap-8 p-4 rounded-3xl">
                  <div className="flex-col justify-center items-center">
                    <h1 className="text-primary Modam-Medium">رکورد قبلی</h1>
                    <p className="text-muted Modam-Medium text-sm ">30KG</p>
                  </div>
                  <div className="flex-col justify-center items-center ">
                    <h1 className="text-primary Modam-Medium">رکورد فعلی</h1>
                    <p className="text-muted Modam-Medium text-sm">30KG</p>
                  </div>
                  <div className="flex-col justify-center items-center">
                    <h1 className="text-primary Modam-Medium"> پیشرفت</h1>
                    <p className="text-muted Modam-Medium text-sm ">30%</p>
                  </div>
                </div>
              )}
            </div>
            {hrTrue && exercise !== exercises[exercises.length] && (
              <hr className="text-border w-full" />
            )}
            <div className={`flex  items-center gap-4 ${hrTrue ? " py-4 " : "mt-2"} w-full`}>
              <img
                src={ImgSquat}
                className="w-28 h-16 rounded-xl object-cover cursor-pointer"
                alt=""
              />

              <div className="w-full">
                <h3 className="font-primary font-medium text-muted mb-2 cursor-pointer">
                  اسکوات با هالتر
                </h3>
                <div className="flex gap-3">
                  <div className="flex items-center gap-0.5">
                    <img className="size-3.5" src={Dumbel} alt="" />
                    <p className="text-[12px] text-muted font-primary-ExtraLight font-medium">
                      4 ست{" "}
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <img className="size-3.5" src={Refresh} alt="" />
                    <p className="text-[12px] text-muted font-primary-ExtraLight font-medium">
                      8 تکرار{" "}
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <img className="size-3.5" src={ClockCircle} alt="" />
                    <p className="text-[12px] text-muted font-primary-ExtraLight font-medium">
                      10 ثانیه استراحت{" "}
                    </p>
                  </div>
                </div>
              </div>
              {showRecord && (
                <div className="flex justify-center items-center bg-surface-secondary w-full gap-8 p-4 rounded-3xl">
                  <div className="flex-col justify-center items-center">
                    <h1 className="text-primary Modam-Medium">رکورد قبلی</h1>
                    <p className="text-muted Modam-Medium text-sm ">30KG</p>
                  </div>
                  <div className="flex-col justify-center items-center ">
                    <h1 className="text-primary Modam-Medium">رکورد فعلی</h1>
                    <p className="text-muted Modam-Medium text-sm">30KG</p>
                  </div>
                  <div className="flex-col justify-center items-center">
                    <h1 className="text-primary Modam-Medium"> پیشرفت</h1>
                    <p className="text-muted Modam-Medium text-sm ">30%</p>
                  </div>
                </div>
              )}
            </div>
            {hrTrue && exercise !== exercises[exercises.length - 1] && (
              <hr className="text-border w-full" />
            )}
          </div>
        ))}
        {showDetail && (
        <span
          onClick={() => setIsProgramModalOpen(true)}
          className="text-muted Modam-Medium cursor-pointer justify-center items-center flex gap-1.5 hover:text-foreground"
        >
          {" "}
          مشاهده همه تمرینات
          <img src={Flesh} alt="" />
        </span>
      )}
 
        <WorkoutProgramModal
          showModal={isProgramModalOpen}
          setShowModal={setIsProgramModalOpen}
          // athleteName={athleteName}
        />
      </div>
    </div>
  );
}
