import React, { memo } from "react";

/* =====================================================
   آیتم لیست گفتگو — memo شده تا با تایپ‌کردن تو اینپوت
   پیام یا آپدیت‌شدن یه گفتگوی دیگه، این آیتم دوباره رندر نشه.
===================================================== */
const ConversationItem = memo(function ConversationItem({
  conversation,
  isActive,
  onSelect,
}) {
  return (
    <button
      onClick={() => onSelect(conversation.id)}
      className={`w-full flex-col justify-center  items-center gap-3 px-4 py-3.5 rounded-3xl text-right transition cursor-pointer ${
        isActive ? "bg-[#EAF3FF]" : "hover:bg-[#F5F7FB]"
      }`}
    >
      <div className="flex-1 flex  min-w-0">
        <div className="flex justify-center items-center gap-2 w-full relative">
          <div className="relative">
            <img
              src={conversation.avatar}
              alt={conversation.name}
              className="w-11 h-11 rounded-full object-cover"
            />
          </div>
          {conversation.online && (
            <span className="absolute left-75 top-1 w-3 h-3 rounded-full bg-[#22C55E] border-2 border-white" />
          )}
          <div className="flex items-center justify-between w-full">
            <p className="text-sm font-medium text-[#4F5965] truncate">
              {conversation.name}
            </p>
            <span className="text-xs text-[#A0A4AA] shrink-0">
              {conversation.time}
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-xs text-[#A0A4AA] truncate mt-1">
          {conversation.lastMessage}
        </p>
      </div>
    </button>
  );
});

/* =====================================================
   لیست گفتگوهای شاگردان (پنل راست)
   props:
   - conversations: آرایه‌ی { id, name, avatar, online, lastMessage, time }
   - activeId: شناسه‌ی گفتگوی انتخاب‌شده
   - onSelect(id): وقتی روی یه شاگرد کلیک میشه
===================================================== */
const StudentsList = memo(function StudentsList({
  conversations,
  activeId,
  onSelect,
}) {
  return (
    <div className=" bg-white rounded-3xl p-5 flex flex-col h-full ">
      <h2 className="text-xl font-primary text-[#4F5965] text-right px-1">
        گفتگوهای شاگردان
      </h2>

      <hr className="my-5 text-gray-100" />

      <div className="flex flex-col h-[calc(100vh-200px)] gap-1 overflow-y-auto ">
        {conversations.map((c) => (
          <ConversationItem
            key={c.id}
            conversation={c}
            isActive={c.id === activeId}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
});

export default StudentsList;
