import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import StatCard from "../../Components/DashBoardAuthlete/StatCard/StatCard";
import Mytrain from "../../Components/DashBoardAuthlete/Mytrain/Mytrain";
import SmartAnalysisCard from "../../Components/TrainigPage/SmartAnalysisCard/SmartAnalysisCard/SmartAnalysisCard";
import BodyProgressCard from "../../Components/DashBoardAuthlete/BodyProgressCard/BodyProgressCard";
import WorkoutProgramCard from "../../Components/TrainigPage/SmartAnalysisCard/WorkoutProgramCard/WorkoutProgramCard";
import WorkoutHistory from "../../Components/TrainigPage/WorkoutHistory/WorkoutHistory";
import WorkoutNotes from "../../Components/TrainigPage/WorkoutNotes/WorkoutNotes";
import PersonalRecordsCard from "../../Components/TrainigPage/PersonalRecordsCard/PersonalRecordsCard";
import HeaderDashBoard from "../../Components/HeaderDashBoard/HeaderDashBoard";
import Walk from "../../assets/imges/walk.png";

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FB] flex justify-center">
      <div className="w-full max-w-[1600px] grid grid-cols-[90px_1fr] gap-6 px-8 py-6 bg-[#F5F7FB]">
        <div className="">
          <Navbar />
        </div>
        <div className="py-3 ">
          <div className="grid grid-cols-12 gap-6">
           <HeaderDashBoard title={"تمرین های من"} description={"سلام مهدی، امروز آماده‌ای؟"} />
            <div className="col-span-12 grid grid-cols-4 gap-5">
              <StatCard title={"وزن"} value={"7234"} img={Walk} type="image" />
              <StatCard title={"وزن"} value={"7234"} img={Walk} type="image"/>
              <StatCard title={"وزن"} value={"7234"} img={Walk} type="image"/>
              <StatCard title={"وزن"} value={"7234"} img={Walk} type="image"/>
            </div>
            <div className="col-span-7 ">
              <div className="col-span-7 mb-5">
                <Mytrain
                  showRecord={true}
                  startTraining={true}
                  showDetail={true}
                  hrTrue={true}
                />
              </div>
              <div className="col-span-7 mb-5">
                <BodyProgressCard
                  count={[1, 2, 3, 4]}
                  title="پیشرفت حرکات هفته"
                />
              </div>
              <div className="grid grid-cols-7 gap-3">
                <div className="col-span-3 mb-5">
                  <WorkoutHistory />
                </div>
                <div className="col-span-4 mb-5">
                  <PersonalRecordsCard />
                </div>
              </div>
            </div>
            <div className="col-span-5">
              <div className="col-span-5 mb-5">
                <SmartAnalysisCard />
              </div>

              <div className="col-span-5 mb-5">
                <WorkoutProgramCard />
              </div>
              <div className="col-span-5">
                <WorkoutNotes />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
