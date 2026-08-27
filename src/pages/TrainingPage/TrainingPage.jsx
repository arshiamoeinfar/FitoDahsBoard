import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import StatCard from "../../Components/DashBoardAuthlete/StatCard/StatCard";
import Mytrain from "../../Components/DashBoardAuthlete/Mytrain/Mytrain";
import SmartAnalysisCard from "../../Components/TrainigPage/SmartAnalysisCard/SmartAnalysisCard";
import BodyProgressCard from "../../Components/DashBoardAuthlete/BodyProgressCard/BodyProgressCard";

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FB] flex justify-center">
      <div className="w-full max-w-[1600px] grid grid-cols-[90px_1fr] gap-6 px-8 py-6 bg-[#F5F7FB]">
        <div className="">
          <Navbar />
        </div>
        <div className="py-3 ">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <h1 className="text-3xl font-bold text-[#6B6F77]">
                تمرین های من
              </h1>
              <p className="text-[#6B6F77] text-sm mt-2 Modam-Medium">
                برنامه تمرینی و پیشرفت عملکردت را مدیریت کن
              </p>
            </div>
            <div className="col-span-12 grid grid-cols-4 gap-5">
              <StatCard />
              <StatCard />
              <StatCard />
              <StatCard />
            </div>
            <div className="col-span-7">
                <Mytrain showRecord={true} startTraining={true} showDetail={true} />
            </div>
            <div className="col-span-5">
                <SmartAnalysisCard/>
            </div>
            <div className="col-span-7">
              <BodyProgressCard count={[1,2,3,4]} title="پیشرفت حرکات هفته"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
