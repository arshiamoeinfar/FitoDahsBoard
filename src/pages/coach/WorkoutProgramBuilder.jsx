import React from "react";
import Navbar from "../../Components/shared/Navbar/Navbar";
import HeaderDashBoard from "../../Components/DashBoardAuth/HeaderDashBoard/HeaderDashBoard";
import WorkoutHeader from "../../Components/CoachDashboard/programs/WorkoutHeader";
import WorkoutBuilder from "../../Components/CoachDashboard/programs/WorkoutBuilder";

export default function WorkoutProgramBuilder() {
  return (
    <div className="min-h-screen bg-background flex justify-center">
      <div className="w-full max-w-[1600px] grid grid-cols-[90px_1fr] gap-6 px-8 py-6 bg-background">
        <div className="">
          <Navbar />
        </div>
        <div className="py-3 ">
          <div className="grid grid-cols-12 gap-6 ">
            <HeaderDashBoard
              title="ساخت برنامه تمرینی"
              description="برنامه تمرینی و تغذیه‌ای شاگرد را بسازید."
            />
          </div>
          <div className="col-span-12">
            <WorkoutBuilder  />
          </div>
        </div>
      </div>
    </div>
  );
}
