import React from "react";
// import "./Navbar.css"
import HomeIcon from "../../assets/icons/Home Smile.svg";
import HomeIcon1 from "../../assets/icons/Home Smile1.svg";
import DountIcon from "../../assets/icons/Donut Bitten.svg";
import DumbelIcon from "../../assets/icons/Dumbbell Large.svg";
import SettingIcon from "../../assets/icons/settings.svg";
import AnalyzIcon from "../../assets/icons/Pie Chart 3.svg";
import userIcon from "../../assets/icons/User Rounded.svg";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="fixed">
      <div className="w-18 h-160 bg-white flex flex-col shadow-md items-center justify-between rounded-[56px] py-3 mt-3 mr-3">
        <div className="flex flex-col items-center justify-center gap-2  ">
          <NavLink
            to="/dashboardAthlete"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 transition ${isActive ? "text-[#007BFF]" : "text-[#A0A4AA]"
              }`
            }
          >
            <img src={HomeIcon1} alt="" />

            <span className="text-xs">خانه</span>
          </NavLink>
          <div className="flex flex-col items-center justify-center  mt-2">
            <img src={DumbelIcon} alt="Dumbel" />
            <p className="font-primary text-sm text-[#ABAEB2]">ورزش</p>
          </div>
          <NavLink to="/dashboardnutrition"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 transition ${isActive ? "text-[#007BFF]" : "text-[#A0A4AA]"
              }`
            }>
            <img src={DountIcon} alt="Dount" />
            <p className="font-primary text-sm text-[#ABAEB2]">تغذیه</p>
          </NavLink>
          <NavLink to="/AnalysisPage" className="flex flex-col items-center justify-center  mt-2">
            <img src={AnalyzIcon} alt="Analyze" />
            <p className="font-primary text-sm text-[#ABAEB2]">تحلیل</p>
          </NavLink>
          <div className="flex flex-col items-center justify-center  mt-2">
            <img src={SettingIcon} alt="Setting" />
            <p className="font-primary text-sm text-[#ABAEB2]">تنظیمات</p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex flex-col items-center justify-center bg-blue-500 rounded-full w-14 h-14">
            <img src={userIcon} alt="User" />
          </div>
        </div>
      </div>
    </div>
  );
}
