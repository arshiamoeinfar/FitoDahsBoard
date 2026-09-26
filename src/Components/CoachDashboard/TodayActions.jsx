import React, { useState } from "react";
import {
  ChevronLeft,
  Dumbbell,
  MessageCircle,
  CalendarClock,
} from "lucide-react";

export default function TodayActions() {
    const [showAll , setShowAll] = useState(false);
    
    const handleClick = () => {
        setShowAll(!showAll);
    }
  const actions = [
    {
      id: 1,
      icon: CalendarClock,
      title: "برنامه‌های در حال انقضا",
      description: "برنامه ۳ شاگرد طی ۳ روز آینده منقضی می‌شود.",
      count: "۳ شاگرد",
      type: "warning",
      button: "بررسی برنامه",
    },
    {
      id: 2,
      icon: Dumbbell,
      title: "شاگردان بدون برنامه",
      description: "برای این شاگردان هنوز برنامه فعالی ثبت نشده است.",
      count: "۵ شاگرد",
      type: "blue",
      button: "ساخت برنامه",
    },
    {
      id: 3,
      icon: MessageCircle,
      title: "پیام‌های جدید",
      description: "پیام‌های جدید شاگردان منتظر پاسخ هستند.",
      count: "۱۲ پیام",
      type: "green",
      button: "مشاهده پیام‌ها",
    },
    {
      id: 3,
      icon: MessageCircle,
      title: "پیام‌های جدید",
      description: "پیام‌های جدید شاگردان منتظر پاسخ هستند.",
      count: "۱۲ پیام",
      type: "green",
      button: "مشاهده پیام‌ها",
    },
    {
      id: 3,
      icon: MessageCircle,
      title: "پیام‌های جدید",
      description: "پیام‌های جدید شاگردان منتظر پاسخ هستند.",
      count: "۱۲ پیام",
      type: "green",
      button: "مشاهده پیام‌ها",
    },
    {
      id: 3,
      icon: MessageCircle,
      title: "پیام‌های جدید",
      description: "پیام‌های جدید شاگردان منتظر پاسخ هستند.",
      count: "۱۲ پیام",
      type: "green",
      button: "مشاهده پیام‌ها",
    },
  ];

  const styles = {
    warning: {
      icon: "bg-[#FFF7E6] text-[#E9A820]",
      badge: "bg-[#FFF3CD] text-[#C58A12]",
    },
    blue: {
      icon: "bg-[#EEF6FF] text-[#1683F7]",
      badge: "bg-[#EAF4FF] text-[#007BFF]",
    },
    green: {
      icon: "bg-[#EFFBEA] text-[#68B43F]",
      badge: "bg-[#EFFBEA] text-[#5FA93A]",
    },
  };

  return (
    <section
      dir="rtl"
      className="
        w-full
        h-full
        rounded-[24px]
        bg-white
        p-5
        shadow-[0_2px_12px_rgba(15,23,42,0.02)]
      "
    >
      {/* Header */}
      <div className="mb-5 flex items-start justify-between">
        <div>
          <h2 className="text-xl text-[#6B6F77] font-primary">
            اقدامات امروز
          </h2>

          <p className="mt-1 text-[12px] text-[#9AA1AA]">
            مواردی که نیاز به توجه شما دارند
          </p>
        </div>

        <span
          className="
            rounded-full
            bg-[#FFF4D6]
            px-2.5
            py-1
            text-[11px]
            font-medium
            text-[#C79218]
          "
        >
          ۳ مورد نیازمند توجه
        </span>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2">
        {actions.map((action, index) => {
          const Icon = action.icon;
          const style = styles[action.type];

          return (
            <div
              key={action.id}
              className={`
                group
                flex
                items-center
                gap-3
                py-4
                cursor-pointer
                hover:bg-[#F5F7FB]
                transition-colors
                duration-200
                rounded-md
                px-1
                ${
                  index !== actions.length - 1
                    ? "border-b border-[#F0F2F5]"
                    : ""
                }
              `}
            >
              {/* Icon */}
              <div
                className={`
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  ${style.icon}
                `}
              >
                <Icon size={21} strokeWidth={1.8} />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="text-[13px] font-semibold text-[#4B5563]">
                    {action.title}
                  </h3>

                  <span
                    className={`
                      rounded-full
                      px-2
                      py-[3px]
                      text-[10px]
                      font-medium
                      ${style.badge}
                    `}
                  >
                    {action.count}
                  </span>
                </div>

                <p className="truncate text-[11px] leading-5 text-[#A0A6AE]">
                  {action.description}
                </p>
              </div>

              {/* Action */}
              <button
                type="button"
                className="
                  flex
                  shrink-0
                  items-center
                  gap-1
                  text-[11px]
                  font-medium
                  text-[#1683F7]
                  transition-all
                  duration-200
                  hover:text-[#006FE6]
                  group-hover
                  cursor-pointer
                "
              >
                {action.button}

                <ChevronLeft
                  size={13}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-200
                    group-hover:-translate-x-0.5
                  "
                />
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-3 flex justify-start">
        <button
          onClick={() => {handleClick()}}
          type="button"
          className="
            text-[9px]
            font-medium
            text-[#8B929C]
            transition-colors
            hover:text-[#007BFF]
            cursor-pointer
          "
        >
          مشاهده همه موارد
        </button>
      </div>
    </section>
  );
}