import { useState } from "react";

const GeneralSettings = () => {
  const [settings, setSettings] = useState({
    theme: "light",
    language: "fa",
    weightUnit: "kg",
    autoSave: true,
    soundEffects: true,
  });

  const handleChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-6">
      {/* General */}
      <div className="bg-white rounded-4xl p-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">⚙️</span>

          <div>
            <h2 className="text-2xl text-[#6B6F77]">
              تنظیمات عمومی
            </h2>

            <p className="text-sm text-[#A0A4AA] mt-2">
              تنظیمات کلی تجربه کاربری خود را مدیریت کنید
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Theme */}
          <div>
            <label className="block text-sm text-[#6B6F77] mb-3">
              حالت نمایش
            </label>

            <select
              value={settings.theme}
              onChange={(e) =>
                handleChange("theme", e.target.value)
              }
              className="w-full h-14 bg-[#F5F7FA] rounded-2xl px-5 outline-none text-[#6B6F77]"
            >
              <option value="light">روشن</option>
              <option value="dark">تیره</option>
              <option value="system">مطابق سیستم</option>
            </select>
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm text-[#6B6F77] mb-3">
              زبان
            </label>

            <select
              value={settings.language}
              onChange={(e) =>
                handleChange("language", e.target.value)
              }
              className="w-full h-14 bg-[#F5F7FA] rounded-2xl px-5 outline-none text-[#6B6F77]"
            >
              <option value="fa">فارسی</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* Weight Unit */}
          <div>
            <label className="block text-sm text-[#6B6F77] mb-3">
              واحد وزن
            </label>

            <select
              value={settings.weightUnit}
              onChange={(e) =>
                handleChange("weightUnit", e.target.value)
              }
              className="w-full h-14 bg-[#F5F7FA] rounded-2xl px-5 outline-none text-[#6B6F77]"
            >
              <option value="kg">کیلوگرم (KG)</option>
              <option value="lb">پوند (LB)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white rounded-4xl p-8">
        <h2 className="text-xl text-[#6B6F77] mb-5">
          ترجیحات
        </h2>

        <div className="flex flex-col">
          <SettingToggle
            title="ذخیره خودکار"
            description="تغییرات به صورت خودکار ذخیره شوند"
            enabled={settings.autoSave}
            onClick={() =>
              handleChange("autoSave", !settings.autoSave)
            }
          />

          <SettingToggle
            title="صداهای سیستم"
            description="صداهای مربوط به تایمر و تعاملات فعال باشند"
            enabled={settings.soundEffects}
            onClick={() =>
              handleChange(
                "soundEffects",
                !settings.soundEffects
              )
            }
            last
          />
        </div>

        <button className="mt-8 bg-[#007BFF] hover:bg-[#006BE0] text-white px-10 h-14 rounded-full transition cursor-pointer">
          ذخیره تنظیمات
        </button>
      </div>
    </div>
  );
};

const SettingToggle = ({
  title,
  description,
  enabled,
  onClick,
  last,
}) => {
  return (
    <div
      className={`flex items-center justify-between py-5 ${
        !last ? "border-b border-[#F0F0F0]" : ""
      }`}
    >
      <div>
        <h3 className="text-[#6B6F77]">{title}</h3>

        <p className="text-sm text-[#A0A4AA] mt-1">
          {description}
        </p>
      </div>

      <button
        onClick={onClick}
        className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
          enabled ? "bg-[#007BFF]" : "bg-[#E5E7EB]"
        }`}
      >
        <span
          className={`absolute top-1 size-5 bg-white rounded-full transition-all duration-300 ${
            enabled ? "right-8" : "right-1"
          }`}
        />
      </button>
    </div>
  );
};

export default GeneralSettings;