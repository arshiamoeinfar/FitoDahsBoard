import React from "react";
// import "./Navbar.css"
import HomeIcon from "../../assets/icons/Home Smile.svg";
import HomeIcon1 from "../../assets/icons/Home Smile1.svg";
import DountIcon from "../../assets/icons/Donut Bitten.svg";
import DumbelIcon from "../../assets/icons/Dumbbell Large.svg";
import SettingIcon from "../../assets/icons/settings.svg";
import AnalyzIcon from "../../assets/icons/Pie Chart 3.svg";
import userIcon from "../../assets/icons/User Rounded.svg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Home1Img from "../../assets/Icons/hom1.svg"
import NutritionIcon from "../../assets/Icons/nut.svg"
import AnalyzeIcon from "../../assets/Icons/ana.svg"
import TrainingIcon from "../../assets/Icons/dumBlu.svg"
export default function Navbar() {


  const location = useLocation()
  const navigate = useNavigate()
  // console.log(location);
  
  return (
    <div className="fixed">
      <div className="w-18 h-160 bg-white flex flex-col shadow-md items-center justify-between rounded-[56px] py-3 mt-3 mr-3">
        <div className="flex flex-col items-center justify-center gap-2  ">
          <NavLink
            to="/dashboardAthlete"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 transition ${isActive ? "text-[#007BFF]" : "text-[#A0A4AA]"
              }`
            }>
            {
            location.pathname == "/dashboardAthlete" ?   <img src={HomeIcon1} alt="Dumbel" />:<img src={Home1Img} alt="Dumbel" />  
           }

            <span className="text-xs">خانه</span>
          </NavLink>
          <NavLink to="/trainingpage" className={({ isActive }) =>
              `flex flex-col items-center justify-center  mt-2 transition ${isActive ? "text-[#007BFF]" : "text-[#A0A4AA]"
              }`
            }>
            {
            location.pathname == "/trainingpage" ?<img src={TrainingIcon} alt="Training" />:<img src={DumbelIcon} alt="Training" />  
           }
            <p className="font-primary text-sm">ورزش</p>
          </NavLink>
          <NavLink to="/dashboardnutrition"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center  mt-2 transition ${isActive ? "text-[#007BFF]" : "text-[#A0A4AA]"
              }`
            }>
            {
            location.pathname == "/dashboardnutrition" ?<img src={NutritionIcon} alt="Nutrition" />:<img src={DountIcon} alt="Dount" />  
           }
         
             
            <p className="font-primary text-sm">تغذیه</p>
          </NavLink>
          <NavLink to="/AnalysisPage" className={({ isActive }) =>
              `flex flex-col items-center justify-center  mt-2 transition ${isActive ? "text-[#007BFF]" : "text-[#A0A4AA]"
              }`
            }>
            {
            location.pathname == "/AnalysisPage" ?<img src={AnalyzeIcon} alt="Analyze" />:<img src={AnalyzIcon} alt="Analyze" />  
           }
            <p className="font-primary text-sm">تحلیل</p>
          </NavLink>
          <NavLink to="/settings" className="flex flex-col items-center justify-center  mt-2">
            <img src={SettingIcon} alt="Setting" />
            <p className="font-primary text-sm text-[#ABAEB2]">تنظیمات</p>
          </NavLink>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex flex-col items-center justify-center bg-blue-500 rounded-full w-14 h-14 cursor-pointer">
            <img onClick={()=>navigate("/settings")} src={userIcon} alt="User" />
          </div>
        </div>
      </div>
    </div>
  );
}
