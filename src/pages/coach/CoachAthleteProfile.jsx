import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/shared/Navbar/Navbar";
import HeaderDashBoard from "../../Components/DashBoardAuth/HeaderDashBoard/HeaderDashBoard";
import UserProfile from "../../Components/DashBoardAuth/HeaderDashBoard/UserProfile/UserProfile";
import AddCircle from "../../assets/Icons/Add Circle.svg";
import ChatIcon from "@mui/icons-material/Chat";
import Chart from "../../Components/shared/Chart/Chart";
export default function CoachAthleteProfile() {
  const { id } = useParams();
  return (
    <div className="min-h-screen bg-[#F5F7FB] flex justify-center">
      <div className="w-full max-w-[1600px] grid grid-cols-[90px_1fr] gap-6 px-8 py-6 bg-[#F5F7FB]">
        <div className="">
          <Navbar />
        </div>
        <div className="py-3 ">
          <div className="grid grid-cols-12 gap-6 ">
            <HeaderDashBoard
              title="پروفایل ورزشکار"
              description="اطلاعات کامل، برنامه‌ها و روند پیشرفت"
            />
          </div>
          <div className="col-span-12">
            <div className="flex justify-between mt-4 bg-white p-4 rounded-3xl">
              <div className="flex justify-center items-center">
                <UserProfile />
                <div className="flex flex-col items-start mr-2 gap-1">
                  <h2 className="text-sm text-[#6B6F77]  font-primary">
                    ارشیا معین فر
                  </h2>
                  <h2 className="text-xs text-[#6B6F77]  Modam-Medium">
                    عضو از دی 1404
                  </h2>
                </div>
              </div>
              <div className="flex gap-2 rounded-full p-2 px-4 py-1.5">
                <button className="bg-[#007BFF] text-white text-sm rounded-full px-4 py-1.5 cursor-pointer gap-1 flex items-center justify-center transition-colors hover:bg-[#007bffee] Modam-Medium">
                  <ChatIcon style={{ fontSize: "18px" }} />
                  شروع گفتگو
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="flex  items-center gap-1 bg-[#007BFF33] py-2 px-3 rounded-full text-sm text-[#007BFF] font-primary cursor-pointer hover:bg-[#007bff5b]  transition-colors"
                >
                  <img
                    src={AddCircle}
                    alt="add student"
                    className="w-5 h-5 transition-transform duration-300 hover:rotate-90"
                  />
                  افزودن شاگرد
                </button>
                <button className="border rounded-full text-sm Modam-Medium text-[#A6A9AD] px-4 bg-transparent cursor-pointer hover:text-[#007BFF] transition-colors">
                  ویرایش اطلاعات
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex justify-around gap-4 mt-7">
            <Chart />
            <Chart />
            <Chart />
            <Chart />
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
}
