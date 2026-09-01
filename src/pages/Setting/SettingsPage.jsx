import { useState } from "react";
import SettingsTabs from "../../Components/SettingsDshBoard/SettingsTabs";
import Navbar from "../../Components/Navbar/Navbar";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <>
    <div className="min-h-screen bg-[#F5F7FB] flex justify-center">
      <div className="w-full max-w-[1600px] grid grid-cols-[90px_1fr] gap-6 px-12 py-6 bg-[#F5F7FB]">
        <div>
          <Navbar />
        </div>

        <div className="py-3">
          <div className="grid grid-cols-12 gap-6">
            <div className=" col-span-12">
                <SettingsTabs
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              <div className="mt-7 bg-amber-200">
                {activeTab === "profile" && (
                  <div>
                    <h1 className="text-2xl text-[#6B6F77]">پروفایل من</h1>
                  </div>
                )}

                {activeTab === "subscription" && (
                  <div>
                    <h1 className="text-2xl text-[#6B6F77]">پلن اشتراک</h1>
                  </div>
                )}

                {activeTab === "notifications" && (
                  <div>
                    <h1 className="text-2xl text-[#6B6F77]">اعلان‌ها</h1>
                  </div>
                )}

                {activeTab === "privacy" && (
                  <div>
                    <h1 className="text-2xl text-[#6B6F77]">حریم خصوصی</h1>
                  </div>
                )}

                {activeTab === "settings" && (
                  <div>
                    <h1 className="text-2xl text-[#6B6F77]">تنظیمات</h1>
                  </div>
                )}
              </div>
              </div>
              {/* Tabs */}

              {/* Content */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
