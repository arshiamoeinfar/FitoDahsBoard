import { useState } from "react";

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    workout: true,
    nutrition: true,
    water: false,
    progress: true,
    coach: true,
    ai: true,
  });

  const notificationItems = [
    {
      id: "workout",
      icon: "🏋️",
      title: "یادآوری تمرین",
      description: "قبل از زمان برنامه‌ریزی شده تمرین به شما یادآوری شود",
    },
    {
      id: "nutrition",
      icon: "🥗",
      title: "یادآوری وعده غذایی",
      description: "زمان وعده‌های غذایی به شما اطلاع داده شود",
    },
    {
      id: "water",
      icon: "💧",
      title: "یادآوری نوشیدن آب",
      description: "برای نوشیدن آب در طول روز یادآوری دریافت کنید",
    },
    {
      id: "progress",
      icon: "📊",
      title: "گزارش پیشرفت",
      description: "گزارش دوره‌ای از روند پیشرفت خود دریافت کنید",
    },
    {
      id: "coach",
      icon: "💬",
      title: "پیام‌های مربی",
      description: "هنگام دریافت پیام جدید از مربی اطلاع‌رسانی شود",
    },
    {
      id: "ai",
      icon: "🧠",
      title: "پیشنهادهای هوش مصنوعی",
      description: "پیشنهادها و تحلیل‌های جدید AI را دریافت کنید",
    },
  ];

  const handleToggle = (id) => {
    setNotifications((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-white rounded-4xl p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-2xl">🔔</span>

        <div>
          <h2 className="text-2xl text-[#6B6F77] font-medium">
            تنظیمات اعلان‌ها
          </h2>

          <p className="text-sm text-[#A0A4AA] mt-2">
            مشخص کنید چه اعلان‌هایی را دریافت کنید
          </p>
        </div>
      </div>

      {/* Notifications */}
      <div className="flex flex-col">
        {notificationItems.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center justify-between py-6 ${
              index !== notificationItems.length - 1
                ? "border-b border-[#F0F0F0]"
                : ""
            }`}
          >
            {/* Right */}
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-[#F5F7FA] flex items-center justify-center text-xl">
                {item.icon}
              </div>

              <div>
                <h3 className="text-[#6B6F77] text-base">
                  {item.title}
                </h3>

                <p className="text-sm text-[#A0A4AA] mt-1">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Toggle */}
            <button
              onClick={() => handleToggle(item.id)}
              className={`relative w-14 h-7 rounded-full transition-all duration-300 cursor-pointer ${
                notifications[item.id]
                  ? "bg-[#007BFF]"
                  : "bg-[#E5E7EB]"
              }`}
            >
              <span
                className={`absolute top-1 size-5 bg-white rounded-full shadow-sm transition-all duration-300 ${
                  notifications[item.id]
                    ? "right-8"
                    : "right-1"
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div className="mt-8 flex justify-end">
        <button className="bg-[#007BFF] hover:bg-[#006BE0] text-white px-10 h-14 rounded-full transition-all duration-300 cursor-pointer">
          ذخیره تغییرات
        </button>
      </div>
    </div>
  );
};

export default NotificationSettings;