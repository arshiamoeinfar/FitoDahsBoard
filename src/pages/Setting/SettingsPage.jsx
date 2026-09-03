import { useState } from "react";
import SettingsTabs from "../../Components/SettingsDshBoard/SettingsTabs";
import Navbar from "../../Components/Navbar/Navbar";
import ProfileSettings  from "../../Components/SettingsDshBoard/ProfileSettings";
import NotificationSettings from "../../Components/SettingsDshBoard/NotificationSettings";
import SubscriptionSettings from "../../Components/SettingsDshBoard/SubscriptionSettings";
import PrivacySettings from "../../Components/SettingsDshBoard/PrivacySettings";
import GeneralSettings from "../../Components/SettingsDshBoard/GeneralSettings";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <>
    <div className="min-h-screen bg-[#F5F7FB] flex justify-center">
      <div className="w-full max-w-[1600px] grid grid-cols-[90px_1fr] gap-6 px-8 py-6 bg-[#F5F7FB]">
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
              <div className="mt-7">
                {activeTab === "profile" && (
                  <div>
                  <ProfileSettings/>
                  </div>
                )}

                {activeTab === "subscription" && (
                  <div>
                    <SubscriptionSettings/>
                  </div>
                )}

                {activeTab === "notifications" && (
                  <div>
                      <NotificationSettings/>
                  </div>
                )}

                {activeTab === "privacy" && (
                  <div>
                      <PrivacySettings/>
                  </div>
                )}

                {activeTab === "settings" && (
                  <div>
                   <GeneralSettings/>
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
