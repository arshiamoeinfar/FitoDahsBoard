import React from "react";
// import "./Navbar.css"
import HomeIcon from "../../assets/icons/Home Smile.svg";
import DountIcon from "../../assets/icons/Donut Bitten.svg";
import DumbelIcon from "../../assets/icons/Dumbbell Large.svg";
import SettingIcon from "../../assets/icons/settings.svg";
import AnalyzIcon from "../../assets/icons/Pie Chart 3.svg";
import userIcon from "../../assets/icons/User Rounded.svg";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="fixed">

    <div className="w-18 h-160 bg-white flex flex-col shadow-md items-center justify-between rounded-[56px] py-3 mt-3 mr-3">
      <div className="flex flex-col items-center justify-center gap-2  ">
        <Link to="/DashboardAthlete" className="flex flex-col items-center justify-center  mt-2">
          <img className="" src={HomeIcon} alt="Home" />
          <p className="font-primary text-sm text-[#ABAEB2]">خانه</p>
        </Link>
        <div className="flex flex-col items-center justify-center  mt-2">
          <img src={DumbelIcon} alt="Dumbel" />
          <p className="font-primary text-sm text-[#ABAEB2]">ورزش</p>
        </div>
        <div className="flex flex-col items-center justify-center  mt-2">
          <img src={DountIcon} alt="Dount" />
          <p className="font-primary text-sm text-[#ABAEB2]">تغذیه</p>
        </div>
        <div className="flex flex-col items-center justify-center  mt-2">
          <img src={AnalyzIcon} alt="Analyze" />
          <p className="font-primary text-sm text-[#ABAEB2]">تحلیل</p>
        </div>
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
