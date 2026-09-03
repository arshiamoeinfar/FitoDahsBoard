import React, { useEffect, useRef, useState } from "react";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import MonitorWeightOutlinedIcon from "@mui/icons-material/MonitorWeightOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";

// تنظیمات هر دسته: آیکون، رنگ پس‌زمینه و رنگ آیکون
const CATEGORY_CONFIG = {
  nutrition: {
    icon: RestaurantOutlinedIcon,
    bg: "#E9FFD9",
    color: "#4CAF50",
  },
  water: {
    icon: WaterDropOutlinedIcon,
    bg: "#E3F2FD",
    color: "#2196F3",
  },
  workout: {
    icon: FitnessCenterOutlinedIcon,
    bg: "#FFE9E9",
    color: "#FF5C5C",
  },
  sleep: {
    icon: BedtimeOutlinedIcon,
    bg: "#EFE7FF",
    color: "#8B5CF6",
  },
  supplement: {
    icon: MedicationOutlinedIcon,
    bg: "#FFF6E0",
    color: "#F5A623",
  },
  weight: {
    icon: MonitorWeightOutlinedIcon,
    bg: "#E8F1FF",
    color: "#007BFF",
  },
  coach: {
    icon: SupportAgentOutlinedIcon,
    bg: "#E8F1FF",
    color: "#007BFF",
  },
  ai: {
    icon: SmartToyOutlinedIcon,
    bg: "#F0E9FF",
    color: "#8B5CF6",
  },
};

// چندتا اعلان نمونه با جزئیات کامل، هرکدوم مربوط به یه بخش از برنامه
export const defaultNotifications = [
  {
    id: 1,
    category: "nutrition",
    text: "امروز فقط ۶۵٪ از هدف پروتئین روزانه‌ت (۱۴۰ گرم) رو دریافت کردی. یه وعده میان‌وعده با تخم‌مرغ یا ماست یونانی اضافه کن.",
    time: "۱۰ دقیقه پیش",
  },
  {
    id: 2,
    category: "water",
    text: "از صبح فقط ۸۰۰ میلی‌لیتر آب نوشیدی. تا رسیدن به هدف ۲.۵ لیتری امروز، ۱.۷ لیتر باقی مونده.",
    time: "۳۰ دقیقه پیش",
  },
  {
    id: 3,
    category: "workout",
    text: "برنامه امروزت شامل اسکوات با هالتر، ددلیفت رومانیایی و کرانچ کابلیه؛ حدود ۴۵ دقیقه زمان می‌بره.",
    time: "۱ ساعت پیش",
  },
  {
    id: 4,
    category: "sleep",
    text: "دیشب فقط ۵ ساعت و ۲۰ دقیقه خوابیدی، کمتر از حداقل ۷ ساعت توصیه‌شده برای ریکاوری عضلانی.",
    time: "امروز صبح",
  },
  {
    id: 5,
    category: "supplement",
    text: "وقت مصرف کراتینه (۵ گرم پس از تمرین). هنوز تو چک‌لیست مکمل‌های امروز ثبتش نکردی.",
    time: "۲ ساعت پیش",
  },
  {
    id: 6,
    category: "weight",
    text: "وزنت نسبت به هفته قبل ۰.۸ کیلوگرم کاهش داشته و داری به هدف ۷۵ کیلوگرمی نزدیک میشی.",
    time: "دیروز",
  },
];

// چندتا پیام نمونه از مربی و دستیار هوش مصنوعی
export const defaultMessages = [
  {
    id: 1,
    category: "coach",
    text: "برنامه هفته بعدت رو بر اساس پیشرفتت تو اسکوات آپدیت کردم؛ وزنه اسکوات رو از ۸۰ به ۸۵ کیلو رسوندم. یه نگاه بنداز و اگه مشکلی داشت بگو.",
    time: "۲ ساعت پیش",
  },
  {
    id: 2,
    category: "ai",
    text: "بر اساس ثبت خواب هفته اخیرت، الگوی خوابت نامنظمه و همین می‌تونه دلیل کاهش عملکردت تو ست‌های آخر تمرین باشه. می‌خوای یه برنامه ریکاوری پیشنهاد بدم؟",
    time: "۵ ساعت پیش",
  },
  {
    id: 3,
    category: "coach",
    text: "سلام مهدی، فردا جلسه هفتگی چک‌این داریم؛ لطفاً قبلش عکس پیشرفت و وزن امروزت رو تو پروفایل ثبت کن.",
    time: "دیروز",
  },
  {
    id: 4,
    category: "ai",
    text: "تحلیل تغذیه این هفته‌ت نشون میده مصرف کربوهیدرات روزهای تمرین پا کمتر از نیازته. پیشنهاد میدم ۳۰-۴۰ گرم کربوهیدرات قبل از تمرین اضافه کنی.",
    time: "۲ روز پیش",
  },
];

export default function HeadeeMessage({
  img,
  value = 0,
  title = "اعلانات",
  items = defaultNotifications,
  emptyText = "چیزی برای نمایش نیست",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const closeTimer = useRef(null);

  // بستن دراپ‌داون با کلیک بیرون از آن
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-white p-3 rounded-full relative cursor-pointer block"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {value > 0 && (
          <span className="flex items-center justify-center bottom-8 left-8 text-[12px] bg-[#007BFF] w-5.5 h-5.5 text-white rounded-full absolute">
            {value}
          </span>
        )}
        <img src={img} alt="" />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-3 w-96 bg-white rounded-3xl shadow-xl p-4 z-50 text-right">
          <div className="flex items-center justify-between px-2 pb-3 border-b border-[#EEEEEE]">
            <span className="text-xs text-[#A0A4AA]">{items.length} مورد</span>
            <h3 className="text-base font-medium text-[#4F5965]">{title}</h3>
          </div>

          <div className="max-h-96 overflow-y-auto mt-2 flex flex-col">
            {items.length === 0 ? (
              <p className="text-sm text-[#A0A4AA] text-center py-8">
                {emptyText}
              </p>
            ) : (
              items.map((item, index) => {
                const config = CATEGORY_CONFIG[item.category];
                const Icon = config?.icon;

                return (
                  <div
                    key={item.id ?? index}
                    className="flex items-start gap-3 px-2 py-3 rounded-2xl hover:bg-[#F5F7FB] transition cursor-pointer"
                  >
                    {Icon ? (
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: config.bg }}
                      >
                        <Icon style={{ color: config.color, fontSize: 18 }} />
                      </div>
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-[#007BFF] mt-2 shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm text-[#4F5965] leading-6">
                        {item.text}
                      </p>
                      {item.time && (
                        <span className="text-[11px] text-[#A0A4AA]">
                          {item.time}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}