import ImgSetting from "../../assets/Icons/Settings.svg"


const tabs = [
  {
    id: "profile",
    title: "پروفایل من",
    icon: "👤",
  },
  {
    id: "subscription",
    title: "پلن اشتراک",
    icon: "👑",
  },
  {
    id: "notifications",
    title: "اعلانات",
    icon: "🔔",
  },
  {
    id: "privacy",
    title: "حریم خصوصی",
    icon: "🛡️",
  },
  {
    id: "settings",
    title: "تنظیمات",
    icon: "⚙️",
  },
];

const SettingsTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full flex items-center gap-5">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex-1
              h-16
              rounded-full
              flex
              items-center
              justify-center
              gap-3
              transition-all
              duration-300
              cursor-pointer
              ${
                isActive
                  ? "bg-[#007BFF] text-white"
                  : "bg-white text-[#6B6F77] hover:bg-[#F7FAFF]"
              }
            `}
          >
            <span className="text-xl">
              {tab.icon}
            </span>

            <span className="text-[15px]">
              {tab.title}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default SettingsTabs;