import React from "react";
import "./DashboardAthlete.css";
import Navbar from "../../Components/Navbar/Navbar";
import Liner from "../../assets/imges/Line 1.png";
import ProfileCard from "../../Components/DashBoardAuthlete/ProfileDashboard/ProfileDashboard";
import AIChat from "../../Components/DashBoardAuthlete/Aichat/Aichat";
import Mytrain from "../../Components/DashBoardAuthlete/Mytrain/Mytrain";
import DailyGoalCard from "../../Components/DashBoardAuthlete/DailyGoalCard/DailyGoalCard";
import StatCard from "../../Components/DashBoardAuthlete/StatCard/StatCard";
import NutritionCard from "../../Components/DashBoardAuthlete/NutritionCard/NutritionCard";
import DailyHydrationCard from "../../Components/DashBoardAuthlete/DailyHydrationCard/DailyHydrationCard";
import BodyProgressCard from "../../Components/DashBoardAuthlete/BodyProgressCard/BodyProgressCard";
import imgWalk from "../../assets/imges/walk.png";
export default function DashboardAthlete() {
  return (
    <div className="min-h-screen bg-[#F5F7FB] flex justify-center">
      <div className="w-full max-w-[1600px] grid grid-cols-[90px_1fr_330px] gap-6 px-8 py-6 bg-[#F5F7FB]">
        <div className="">
          <Navbar />
        </div>
        <div className="py-3 ">
          <div className="grid grid-cols-12 gap-6 h-full">
            <div className="col-span-6 row-span-1 w-full max-h-44 bg-[#007BFF]  rounded-4xl flex items-center justify-center relative">
              <DailyGoalCard />
            </div>

            <div className="col-span-6 row-span-2">
              <Mytrain />
            </div>

            <div className="col-span-6">
              <NutritionCard />
            </div>

            {/* <div className="col-span-10 bg-amber-200"> */}
            <div className="col-span-12 grid grid-cols-4 gap-5 mt-1">
              <StatCard title={"قدم امروز"} value={"7234"} img={imgWalk} />
              <StatCard title={"وزن"} value={"7234"} img={imgWalk} />
              <StatCard title={"وزن"} value={"7234"} img={imgWalk} />
              <StatCard title={"وزن"} value={"7234"} img={imgWalk} />
            </div>
            {/* </div> */}

            <div className="col-span-6">
              <div className="flex bg-white flex-col p-6 rounded-3xl h-56">
                <DailyHydrationCard />
              </div>
            </div>

            <div className="col-span-6">
              <div className="col-span-5">
                <BodyProgressCard count={[1,2]} title={"پیشرفت بدن"}/>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <ProfileCard />
          <AIChat />
        </div>
      </div>
    </div>
  );
}
