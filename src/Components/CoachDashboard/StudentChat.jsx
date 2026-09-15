import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

/* =====================================================
   حباب پیام — memo شده؛ با اضافه‌شدن پیام جدید، پیام‌های
   قبلی دوباره رندر نمی‌شن.
===================================================== */
const MessageBubble = memo(function MessageBubble({ message }) {
  const isCoach = message.sender === "coach";

  return (
    <div className={`flex flex-col ${isCoach ? "items-end" : "items-start"}`}>
      <div
        className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-7 ${
          isCoach
            ? "bg-[#007BFF] text-white rounded-tl-sm"
            : "bg-[#F1F3F6] text-[#4F5965] rounded-tr-sm"
        }`}
      >
        {message.text}
      </div>
      <span className="text-[11px] text-[#A0A4AA] mt-1 px-1">
        {message.time}
      </span>
    </div>
  );
});

/* =====================================================
   پنل چت با شاگرد انتخاب‌شده (پنل اصلی سمت چپ)
   props:
   - conversation: { id, name, avatar, online } یا null
   - messages: آرایه‌ی { id, sender: 'coach' | 'athlete', text, time }
   - onSendMessage(text): وقتی پیام جدید ارسال میشه
===================================================== */
export default function StudentChat({ conversation, messages, onSendMessage }) {
  const [draft, setDraft] = useState("");
  const scrollRef = useRef(null);

  // اسکرول خودکار به آخرین پیام هر بار که پیام‌ها یا مکالمه عوض میشه
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, conversation?.id]);

  const handleSend = useCallback(() => {
    const text = draft.trim();
    if (!text) return;
    onSendMessage(text);
    setDraft("");
  }, [draft, onSendMessage]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend],
  );

  if (!conversation) {
    return (
      <div className="flex-1 bg-white rounded-3xl flex items-center justify-center">
        <p className="text-[#A0A4AA] text-sm">یک گفتگو را انتخاب کنید</p>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-white rounded-3xl flex flex-col min-h-0 ">
      {/* هدر چت */}
      <div className="flex items-center justify-start gap-3 px-6 py-4 border-b border-[#F0F2F5] shrink-0">
        <div className="text-right">
          <p className="text-sm font-semibold text-[#4F5965]">
            {conversation.name}
          </p>
          <p className="text-xs text-[#22C55E] flex items-center gap-1 justify-end mt-0.5">
            {conversation.online ? "آنلاین" : "آخرین بازدید امروز"}
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                conversation.online ? "bg-[#22C55E]" : "bg-[#D9D9D9]"
              }`}
            />
          </p>
        </div>
        <div className="relative">
          <img
            src={conversation.avatar}
            alt={conversation.name}
            className="w-11 h-11 rounded-full object-cover"
          />
        
        </div>
      </div>

      {/* بدنه پیام‌ها */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-5"
      >
        {messages.length === 0 ? (
          <p className="text-sm text-[#A0A4AA] text-center mt-10">
            هنوز پیامی ثبت نشده — اولین پیام رو بفرست
          </p>
        ) : (
          messages.map((m) => <MessageBubble key={m.id} message={m} />)
        )}
      </div>

      {/* فوتر ورودی پیام */}
      <div className="flex items-center gap-3 px-5 py-4 border-t border-[#F0F2F5] shrink-0">
        <button
          onClick={handleSend}
          disabled={!draft.trim()}
          className="bg-[#007BFF] text-white text-sm font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-600 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
        >
          ارسال پیام
          <SendRoundedIcon sx={{ fontSize: 16 }} />
        </button>

        <div className="flex-1 bg-[#F5F7FB] rounded-full flex items-center px-2 py-1.5">
          <button
            className="w-9 h-9 rounded-full bg-[#007BFF] flex items-center justify-center text-white shrink-0 hover:bg-blue-600 transition cursor-pointer"
            aria-label="پیام صوتی"
          >
            <MicNoneOutlinedIcon sx={{ fontSize: 18 }} />
          </button>
          <button
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#8A93A3] hover:text-[#007BFF] transition cursor-pointer shrink-0"
            aria-label="شکلک"
          >
            <InsertEmoticonOutlinedIcon sx={{ fontSize: 20 }} />
          </button>
          <button
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#8A93A3] hover:text-[#007BFF] transition cursor-pointer shrink-0"
            aria-label="پیوست فایل"
          >
            <AttachFileOutlinedIcon sx={{ fontSize: 18 }} />
          </button>
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="پیام خود را بنویسید..."
            className="flex-1 bg-transparent outline-none text-sm text-[#4F5965] text-right px-2"
          />
        </div>
      </div>
    </div>
  );
}