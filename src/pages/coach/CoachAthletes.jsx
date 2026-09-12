import React from "react";
import Navbar from "../../Components/shared/Navbar/Navbar";
import HeaderDashBoard from "../../Components/DashBoardAuth/HeaderDashBoard/HeaderDashBoard";
import AddAuth from "./AddAuth";
import Authlete from "./Authlete";

export default function CoachAthletes() {
  return (
    <>
      <div className="min-h-screen bg-[#F5F7FB] flex justify-center">
        <div className="w-full max-w-[1600px] grid grid-cols-[90px_1fr] gap-6 px-8 py-6 bg-[#F5F7FB]">
          <div className="">
            <Navbar />
          </div>
          <div className="py-3 ">
            <div className="grid grid-cols-12 gap-6 ">
            <HeaderDashBoard
              title="شاگردان"
              description="مدیریت و پیگیری وضعیت شاگردان"
            />
            <div className="col-span-12">

            <AddAuth/>
            </div>
            <div className="col-span-12">
                <Authlete/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
