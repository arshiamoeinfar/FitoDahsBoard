import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import AIChat from "../../Components/DashBoardAuthlete/Aichat/Aichat";
import StatCard from "../../Components/DashBoardAuthlete/StatCard/StatCard";

export default function DashBoardNutrition() {
  return (
    <div className="min-h-screen bg-[#F5F7FB] flex justify-center">
      <div className="w-full max-w-[1600px] grid grid-cols-[90px_1fr_330px] gap-6 px-8 py-6 bg-[#F5F7FB]">
        <div className="">
          <Navbar />
        </div>
                <div className="py-3 ">
        <div className="col-span-10 grid grid-cols-4 gap-5 mt-1">
          <StatCard />
          <StatCard />
          <StatCard />
          <StatCard />
        </div>
        </div>
        <div className="">
          <AIChat />
        </div>
      </div>
    </div>
  );
}
