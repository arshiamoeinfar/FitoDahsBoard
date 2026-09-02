import { useState } from "react";

const PrivacySettings = () => {
  const [privacy, setPrivacy] = useState({
    profileVisibility: true,
    bodyDataVisibility: false,
    progressVisibility: true,
    coachAccess: true,
    aiAccess: true,
  });

  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const [devices, setDevices] = useState([
    {
      id: 1,
      name: "Chrome - Windows",
      location: "آلمان",
      lastActive: "فعال اکنون",
      current: true,
      icon: "💻",
    },
    {
      id: 2,
      name: "Safari - iPhone",
      location: "ایران",
      lastActive: "۲ ساعت پیش",
      current: false,
      icon: "📱",
    },
    {
      id: 3,
      name: "Chrome - Android",
      location: "ایران",
      lastActive: "۳ روز پیش",
      current: false,
      icon: "📱",
    },
  ]);

  const privacyItems = [
    {
      id: "profileVisibility",
      icon: "👤",
      title: "نمایش پروفایل",
      description:
        "اجازه دهید سایر کاربران اطلاعات عمومی پروفایل شما را مشاهده کنند",
    },
    {
      id: "bodyDataVisibility",
      icon: "📊",
      title: "اطلاعات بدنی",
      description:
        "اجازه نمایش اطلاعات مربوط به وضعیت بدنی شما",
    },
    {
      id: "progressVisibility",
      icon: "📈",
      title: "نمایش پیشرفت",
      description:
        "اجازه نمایش روند پیشرفت و دستاوردهای ورزشی",
    },
    {
      id: "coachAccess",
      icon: "🏋️",
      title: "دسترسی مربی",
      description:
        "اجازه دسترسی مربی به اطلاعات تمرین و پیشرفت شما",
    },
    {
      id: "aiAccess",
      icon: "🧠",
      title: "دسترسی هوش مصنوعی",
      description:
        "اجازه تحلیل اطلاعات شما توسط دستیار هوشمند Fito",
    },
  ];

  const handleToggle = (id) => {
    setPrivacy((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const removeDevice = (id) => {
    setDevices((prev) =>
      prev.filter((device) => device.id !== id)
    );
  };

  return (
    <div className="flex flex-col gap-6">

      {/* Privacy */}
      <section className="bg-white rounded-4xl p-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">🛡️</span>

          <h2 className="text-2xl text-[#6B6F77] font-medium">
            حریم خصوصی
          </h2>
        </div>

        <p className="text-sm text-[#A0A4AA] mb-8">
          مشخص کنید چه کسانی به اطلاعات شما دسترسی داشته باشند
        </p>

        <div className="flex flex-col">
          {privacyItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center justify-between py-6 ${
                index !== privacyItems.length - 1
                  ? "border-b border-[#F0F0F0]"
                  : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-2xl bg-[#F5F7FA] flex items-center justify-center text-xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-[#6B6F77]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#A0A4AA] mt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              <Toggle
                enabled={privacy[item.id]}
                onClick={() => handleToggle(item.id)}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-8">
          <button className="bg-[#007BFF] hover:bg-[#006BE0] text-white px-10 h-14 rounded-full transition cursor-pointer">
            ذخیره تغییرات
          </button>
        </div>
      </section>


      {/* Security */}
      <section className="bg-white rounded-4xl p-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">🔐</span>

          <div>
            <h2 className="text-2xl text-[#6B6F77] font-medium">
              امنیت حساب
            </h2>

            <p className="text-sm text-[#A0A4AA] mt-2">
              تنظیمات امنیتی حساب کاربری خود را مدیریت کنید
            </p>
          </div>
        </div>


        {/* Change Password */}
        <div className="border border-[#F0F0F0] rounded-3xl p-6">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-[#F3F8FF] flex items-center justify-center text-xl">
                🔑
              </div>

              <div>
                <h3 className="text-[#6B6F77] text-lg">
                  رمز عبور
                </h3>

                <p className="text-sm text-[#A0A4AA] mt-1">
                  برای افزایش امنیت حساب، رمز عبور خود را به صورت دوره‌ای تغییر دهید
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowPasswordForm(!showPasswordForm)}
              className="text-[#007BFF] bg-[#F3F8FF] px-6 h-11 rounded-full hover:bg-[#DBECFF] transition cursor-pointer"
            >
              تغییر رمز
            </button>
          </div>


          {/* Password Form */}
          {showPasswordForm && (
            <div className="mt-8 pt-8 border-t border-[#F0F0F0] grid grid-cols-1 md:grid-cols-3 gap-5">

              <div>
                <label className="block text-sm text-[#6B6F77] mb-3">
                  رمز عبور فعلی
                </label>

                <input
                  type="password"
                  placeholder="رمز فعلی"
                  className="w-full h-14 bg-[#F5F7FA] rounded-2xl px-5 outline-none border border-transparent focus:border-[#007BFF] transition"
                />
              </div>

              <div>
                <label className="block text-sm text-[#6B6F77] mb-3">
                  رمز عبور جدید
                </label>

                <input
                  type="password"
                  placeholder="رمز جدید"
                  className="w-full h-14 bg-[#F5F7FA] rounded-2xl px-5 outline-none border border-transparent focus:border-[#007BFF] transition"
                />
              </div>

              <div>
                <label className="block text-sm text-[#6B6F77] mb-3">
                  تکرار رمز عبور
                </label>

                <input
                  type="password"
                  placeholder="تکرار رمز جدید"
                  className="w-full h-14 bg-[#F5F7FA] rounded-2xl px-5 outline-none border border-transparent focus:border-[#007BFF] transition"
                />
              </div>

              <div className="md:col-span-3 flex justify-end gap-3 mt-2">
                <button
                  onClick={() => setShowPasswordForm(false)}
                  className="px-6 h-12 rounded-full bg-[#F5F7FA] text-[#6B6F77] cursor-pointer"
                >
                  انصراف
                </button>

                <button className="px-7 h-12 rounded-full bg-[#007BFF] text-white hover:bg-[#006BE0] transition cursor-pointer">
                  بروزرسانی رمز
                </button>
              </div>

            </div>
          )}

        </div>
      </section>


      {/* Active Devices */}
      <section className="bg-white rounded-4xl p-8">

        <div className="flex items-center justify-between mb-8">

          <div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📱</span>

              <h2 className="text-2xl text-[#6B6F77] font-medium">
                دستگاه‌های فعال
              </h2>
            </div>

            <p className="text-sm text-[#A0A4AA] mt-2">
              دستگاه‌هایی که در حال حاضر به حساب شما وارد شده‌اند
            </p>
          </div>

          <span className="bg-[#F3F8FF] text-[#007BFF] px-4 py-2 rounded-full text-sm">
            {devices.length} دستگاه
          </span>

        </div>


        <div className="flex flex-col gap-4">

          {devices.map((device) => (
            <div
              key={device.id}
              className="flex items-center justify-between border border-[#F0F0F0] rounded-3xl p-5"
            >

              <div className="flex items-center gap-4">

                <div className="size-14 bg-[#F5F7FA] rounded-2xl flex items-center justify-center text-2xl">
                  {device.icon}
                </div>

                <div>
                  <div className="flex items-center gap-3">

                    <h3 className="text-[#6B6F77]">
                      {device.name}
                    </h3>

                    {device.current && (
                      <span className="text-xs bg-[#EAF8EF] text-[#63AF42] px-3 py-1 rounded-full">
                        دستگاه فعلی
                      </span>
                    )}

                  </div>

                  <div className="flex items-center gap-3 mt-2 text-sm text-[#A0A4AA]">
                    <span>{device.location}</span>

                    <span className="size-1 rounded-full bg-[#D0D0D0]" />

                    <span>{device.lastActive}</span>
                  </div>

                </div>

              </div>


              {!device.current && (
                <button
                  onClick={() => removeDevice(device.id)}
                  className="text-[#F04444] bg-[#FFF2F2] px-5 h-10 rounded-full hover:bg-[#FFE5E5] transition cursor-pointer"
                >
                  خروج از دستگاه
                </button>
              )}

            </div>
          ))}

        </div>


        <button
          onClick={() =>
            setDevices((prev) =>
              prev.filter((device) => device.current)
            )
          }
          className="mt-6 text-[#F04444] hover:bg-[#FFF2F2] px-5 h-11 rounded-full transition cursor-pointer"
        >
          خروج از تمام دستگاه‌های دیگر
        </button>

      </section>

    </div>
  );
};


const Toggle = ({ enabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-14 h-7 rounded-full transition-all duration-300 cursor-pointer ${
        enabled ? "bg-[#007BFF]" : "bg-[#E5E7EB]"
      }`}
    >
      <span
        className={`absolute top-1 size-5 bg-white rounded-full shadow-sm transition-all duration-300 ${
          enabled ? "right-8" : "right-1"
        }`}
      />
    </button>
  );
};


export default PrivacySettings;