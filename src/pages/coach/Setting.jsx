import React from "react";
import Navbar from "../../Components/shared/Navbar/Navbar";
import SettingsTabs from "../../Components/shared/SettingsDshBoard/SettingsTabs";
import Settings from "../../Components/CoachDashboard/Settings";

export default function Setting() {
  return (
    <div className="min-h-screen bg-background flex justify-center">
      <div className="w-full max-w-[1600px] grid grid-cols-[90px_1fr]  px-8 py-6 bg-background">
        <div>
            <Navbar/>
        </div>

        <div className="py-3">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
                <Settings/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
