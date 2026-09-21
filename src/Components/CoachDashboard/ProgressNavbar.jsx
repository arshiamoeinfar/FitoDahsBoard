import React from "react";

const defaultItems = [
  {
    id: "overview",
    label: "نمای کلی",
  },
  {
    id: "body-health",
    label: "بدن و سلامت",
  },
  {
    id: "training",
    label: "تمرین",
  },
  {
    id: "nutrition",
    label: "تغذیه",
  },
  {
    id: "progress",
    label: "پیشرفت",
  },
  {
    id: "activity",
    label: "فعالیت",
  },
  {
    id: "files",
    label: "فایل ها",
  },
  {
    id: "notes",
    label: "یادداشت ها",
  },
];

export default function ProgressNavbar({
  items = defaultItems,
  activeItem = "overview",
  onItemChange,
  className = "",
}) {
  const handleItemClick = (item) => {
    onItemChange?.(item.id);
  };

  return (
    <nav
      dir="rtl"
      className={`
        w-full
        h-[60px]
        px-5
        bg-white
        rounded-[22px]
        border
        border-[#F0F3F8]
        shadow-[0_4px_24px_rgba(15,23,42,0.025)]
        flex
        items-center
        justify-center
        ${className}
      `}
    >
      <div
        className="
          w-full
          h-full
          flex
          items-center
          justify-start
          gap-1
          overflow-x-auto
          scrollbar-none
        "
      >
        {items.map((item) => {
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleItemClick(item)}
              aria-current={isActive ? "page" : undefined}
              className={`
                relative
                h-full
                shrink-0
                px-4
                flex
                items-center
                justify-center
                text-[14px]
                font-medium
                whitespace-nowrap
                transition-all
                duration-200
                cursor-pointer
                ${
                  isActive
                    ? "text-[#007BFF]"
                    : "text-[#9CA3AF] hover:text-[#526174]"
                }
              `}
            >
              <span className="relative flex items-center h-full">
                {item.label}

                {isActive && (
                  <span
                    className="
                      absolute
                      -bottom-[1px]
                      right-0
                      left-0
                      h-[3px]
                      rounded-t-full
                      bg-[#007BFF]
                    "
                  />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}