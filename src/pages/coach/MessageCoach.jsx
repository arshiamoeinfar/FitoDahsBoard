import React, { useCallback, useMemo, useState } from "react";
import Navbar from "../../Components/shared/Navbar/Navbar";
import HeaderDashBoard from "../../Components/DashBoardAuth/HeaderDashBoard/HeaderDashBoard";
import StudentChat from "../../Components/CoachDashboard/StudentChat";
import avatarPlaceholder from "../../assets/imges/image 12.png";
import StudentsList from "../../Components/CoachDashboard/StudentList";

/* =====================================================
   دیتای نمونه — با API واقعی جایگزین کن.
===================================================== */
const initialConversations = [
  {
    id: "ali",
    name: "علی رضایی",
    avatar: avatarPlaceholder,
    online: true,
    lastMessage: "مربی، برنامه امروز رو تمام کردم. عکس...",
    time: "10:30",
  },
  {
    id: "mahdi",
    name: "مهدی خواجه",
    avatar: avatarPlaceholder,
    online: false,
    lastMessage: "مربی، برنامه امروز رو تمام کردم. عکس...",
    time: "10:30",
  },
  {
    id: "mohammad",
    name: "محمد خزایی",
    avatar: avatarPlaceholder,
    online: false,
    lastMessage: "مربی، برنامه امروز رو تمام کردم. عکس...",
    time: "10:30",
  },
  {
    id: "fatemeh",
    name: "فاطمه نیک‌خواه",
    avatar: avatarPlaceholder,
    online: false,
    lastMessage: "مربی، برنامه امروز رو تمام کردم. عکس...",
    time: "10:30",
  },
];

const initialMessagesByConversation = {
  ali: [
    {
      id: "m1",
      sender: "athlete",
      text: "سلام مربی وقت بخیر، برنامه امروز رو کامل انجام دادم. فقط در حرکت اسکوات احساس کردم کمی فشار روی زانوم هست.",
      time: "10:30",
    },
    {
      id: "m2",
      sender: "coach",
      text: "سلام علی جان، خسته نباشی. عالیه. برای زانو زاویه پنجه‌ها رو کمی به سمت بیرون تمایل بده و وزنه رو ۱۰٪ کم کن تا هفته بعد چک کنیم.",
      time: "10:30",
    },
    {
      id: "m3",
      sender: "athlete",
      text: "متشکرم بابت راهنمایی ❤️",
      time: "10:30",
    },
    { id: "m4", sender: "coach", text: "خواهش می‌کنم 😊", time: "10:30" },
  ],
};

const emptyMessages = [];

function getCurrentTimeLabel() {
  const now = new Date();
  return now.toLocaleTimeString("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function MessageCoach() {
  const [conversations] = useState(initialConversations);
  const [activeId, setActiveId] = useState(initialConversations[0]?.id ?? null);
  const [messagesByConversation, setMessagesByConversation] = useState(
    initialMessagesByConversation,
  );

  const handleSelect = useCallback((id) => {
    setActiveId(id);
  }, []);

  const handleSendMessage = useCallback(
    (text) => {
      if (!activeId) return;
      const newMessage = {
        id: `m-${Date.now()}`,
        sender: "coach",
        text,
        time: getCurrentTimeLabel(),
      };

      setMessagesByConversation((prev) => ({
        ...prev,
        [activeId]: [...(prev[activeId] ?? []), newMessage],
      }));
    },
    [activeId],
  );

  const activeConversation = useMemo(
    () => conversations.find((c) => c.id === activeId) ?? null,
    [conversations, activeId],
  );

  const activeMessages = messagesByConversation[activeId] ?? emptyMessages;

  return (
    <div className="min-h-screen bg-[#F5F7FB] flex justify-center">
      <div className="w-full max-w-[1600px] grid grid-cols-[90px_1fr] gap-6 px-8 py-6 bg-[#F5F7FB]">
        <div className="">
          <Navbar />
        </div>
        <div className="py-3  ">
          <div className="grid grid-cols-12 gap-6 ">
            <HeaderDashBoard title="پیام ها" description="گفنگو با شاگردان" />

            <div className="col-span-4">
              <StudentsList
                conversations={conversations}
                activeId={activeId}
                onSelect={handleSelect}
              />
            </div>
            <div className="col-span-8 ">
              <StudentChat
                conversation={activeConversation}
                messages={activeMessages}
                onSendMessage={handleSendMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
