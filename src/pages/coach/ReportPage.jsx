import React from "react";
import Navbar from "../../Components/shared/Navbar/Navbar";
import HeaderDashBoard from "../../Components/DashBoardAuth/HeaderDashBoard/HeaderDashBoard";
import StatCard from "../../Components/shared/StatCard/StatCard";
import imgWalk from "../../assets/imges/walk.png";
import BodyChangeChart from "../../Components/shared/BodyChangeChart/BodyChangeChart";
import SupplementaryReports from "../../Components/CoachDashboard/Supplementaryreports";
export default function ReportPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FB] flex justify-center">
      <div className="w-full max-w-[1600px] grid grid-cols-[90px_1fr] gap-6 px-8 py-6 bg-[#F5F7FB]">
        <div className="">
          <Navbar />
        </div>
        <div className="py-3 ">
          <div className="grid grid-cols-12 gap-6 ">
            <HeaderDashBoard
              title="گزارش ها"
              description="تحلیل عملکرد کلی شاگردان"
            />
            <div className="col-span-12 grid grid-cols-4 gap-5 mt-1">
              <StatCard title={"قدم امروز"} value={"7234"} img={imgWalk} />
              <StatCard title={"وزن"} value={"7234"} img={imgWalk} />
              <StatCard title={"وزن"} value={"7234"} img={imgWalk} />
              <StatCard title={"وزن"} value={"7234"} img={imgWalk} />
            </div>
            <div className="col-span-8">
              <BodyChangeChart />
            </div>
            <div className="col-span-4">
                <SupplementaryReports />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
