import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import HomeIcon1 from "../../../assets/Icons/category.svg";
import Home1Img from "../../../assets/Icons/category (1).svg";
import DountIcon from "../../../assets/Icons/CallBell (1).svg";
import NutritionIcon from "../../../assets/Icons/CallBell.svg";
import DumbelIcon from "../../../assets/Icons/Barbell (1).svg";
import TrainingIcon from "../../../assets/Icons/Barbell.svg";
import AnalyzIcon from "../../../assets/Icons/Pie Chart Not 3.svg";
import AnalyzeIcon from "../../../assets/Icons/Pie Chart 3.svg";
import SettingIcon from "../../../assets/Icons/Settings.svg";
import SettingNot from "../../../assets/Icons/SettingsNot.svg";
import userIcon from "../../../assets/Icons/User Rounded.svg";


import CoachHomeActive from "../../../assets/Icons/category.svg";
import CoachHomeInactive from "../../../assets/Icons/category (1).svg";
import CoachAthletesActive from "../../../assets/Icons/profile-2user (1).svg";
import CoachAthletesInactive from "../../../assets/Icons/profile-2user.svg";
import CoachProgramsActive from "../../../assets/Icons/profile-2user (1).svg";
import CoachProgramsInactive from "../../../assets/Icons/menu-board.svg";
import CoachMessagesActive from "../../../assets/Icons/messages (1).svg";
import CoachMessagesInactive from "../../../assets/Icons/messages.svg";
import CoachAnalyzeIcon from "../../../assets/Icons/Pie Chart 3.svg";
import CoachAnalyzIcon from "../../../assets/Icons/Pie Chart Not 3.svg";


const ATHLETE_NAV_ITEMS = [
  { to: "/dashboardAthlete", label: "خانه", active: HomeIcon1, inactive: Home1Img },
  { to: "/trainingpage", label: "ورزش", active: DumbelIcon, inactive: TrainingIcon },
  { to: "/dashboardnutrition", label: "تغذیه", active: DountIcon, inactive: NutritionIcon },
  { to: "/AnalysisPage", label: "تحلیل", active: AnalyzeIcon, inactive: AnalyzIcon },
  { to: "/settings", label: "تنظیمات", active: SettingIcon, inactive: SettingNot },
];

const COACH_NAV_ITEMS = [
  { to: "/coach", label: "داشبورد", active: CoachHomeActive, inactive: CoachHomeInactive },
  { to: "/coach/athletes", label: "شاگردها", active: CoachAthletesActive, inactive: CoachAthletesInactive },
  { to: "/coach/programs", label: "برنامه‌ها", active: CoachProgramsActive, inactive: CoachProgramsInactive },
  { to: "/coach/analysis", label: "گزارش ها", active: CoachAnalyzeIcon, inactive: CoachAnalyzIcon },
  { to: "/coach/messages", label: "پیام‌ها", active: CoachMessagesActive, inactive: CoachMessagesInactive },
  { to: "/coach/settings", label: "تنظیمات", active: SettingIcon, inactive: SettingNot },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isCoachSection = location.pathname.startsWith("/coach");
  const navItems = isCoachSection ? COACH_NAV_ITEMS : ATHLETE_NAV_ITEMS;
  const profileRoute = isCoachSection ? "/coach/settings" : "/settings";

  return (
    <div className="fixed">
      <div className="w-18 h-160 bg-white flex flex-col shadow-md items-center justify-between rounded-[56px] py-3 mt-3 mr-3">
        <div className="flex flex-col items-center justify-center gap-2">
          {navItems.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 transition ${
                  index > 0 ? "mt-2" : ""
                } ${isActive ? "text-[#007BFF]" : "text-[#A0A4AA]"}`
              }
            >
              <img
                src={location.pathname === item.to ? item.active : item.inactive}
                alt={item.label}
              />
              <p className="font-primary text-xs">{item.label}</p>
            </NavLink>
          ))}
        </div>

        <div className="w-full flex justify-center">
          <div className="flex flex-col items-center justify-center bg-blue-500 rounded-full w-14 h-14 cursor-pointer">
            <img onClick={() => navigate(profileRoute)} src={userIcon} alt="User" />
          </div>
        </div>
      </div>
    </div>
  );
}