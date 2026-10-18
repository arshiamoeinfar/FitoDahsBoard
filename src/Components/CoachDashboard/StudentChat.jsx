import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const EMOJIS = [
  "😊", "😂", "❤️", "👍", "💪", "🔥", "👏", "🎯",
  "🏆", "⚡", "✅", "🙌", "😎", "🤩", "🙏", "💯",
  "🏋️‍♂️", "🥗", "💧", "⏱️", "🥇", "🚀", "💥", "🤝"
];

/* =====================================================
   حباب پیام — همراه با ریپلای کلیکی، ویرایش، کپی و حذف
===================================================== */
const MessageBubble = memo(function MessageBubble({
  message,
  isHighlighted,
  onReply,
  onEdit,
  onDelete,
  onScrollToMessage,
}) {
  const isCoach = message.sender === "coach";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!message.text) return;
    navigator.clipboard.writeText(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      id={`msg-${message.id}`}
      className={`group flex flex-col transition-all duration-500 rounded-2xl p-1 ${
        isCoach ? "items-end" : "items-start"
      } ${isHighlighted ? "bg-yellow-500/10 ring-2 ring-yellow-500/40" : ""}`}
    >
      <div
        className={`flex items-center gap-1.5 max-w-[88%] sm:max-w-[75%] ${
          isCoach ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* نوار ابزار پیام (ریپلای، ویرایش، کپی، حذف) */}
        <div className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-center gap-0.5 bg-surface shadow-sm border border-border rounded-full px-1.5 py-0.5 shrink-0">
          <button
            type="button"
            onClick={() => onReply(message)}
            className="text-muted hover:text-primary p-1 rounded-full transition cursor-pointer"
            title="پاسخ (Reply)"
          >
            <ReplyRoundedIcon sx={{ fontSize: 16 }} />
          </button>

          {message.text && (
            <button
              type="button"
              onClick={handleCopy}
              className="text-muted hover:text-success p-1 rounded-full transition cursor-pointer"
              title={copied ? "کپی شد!" : "کپی متن"}
            >
              <ContentCopyRoundedIcon sx={{ fontSize: 14 }} />
            </button>
          )}

          {isCoach && message.text && (
            <button
              type="button"
              onClick={() => onEdit(message)}
              className="text-muted hover:text-amber-500 p-1 rounded-full transition cursor-pointer"
              title="ویرایش پیام"
            >
              <EditOutlinedIcon sx={{ fontSize: 15 }} />
            </button>
          )}

          {isCoach && (
            <button
              type="button"
              onClick={() => onDelete(message.id)}
              className="text-muted hover:text-danger p-1 rounded-full transition cursor-pointer"
              title="حذف پیام"
            >
              <DeleteOutlineRoundedIcon sx={{ fontSize: 16 }} />
            </button>
          )}
        </div>

        {/* باکس اصلی حباب */}
        <div
          className={`px-4 py-2.5 rounded-2xl text-sm leading-7 shadow-xs min-w-[110px] ${
            isCoach
              ? "bg-primary text-white rounded-tl-sm"
              : "bg-surface-secondary text-foreground rounded-tr-sm"
          }`}
        >
          {/* باکس ریپلایِ داخل پیام (با کلیک روی آن به پیام مرجع می‌برد) */}
          {message.replyTo && (
            <div
              onClick={() => onScrollToMessage(message.replyTo.id)}
              dir="rtl"
              className={`mb-2 px-3 py-1.5 rounded-lg text-xs border-r-4 cursor-pointer transition hover:opacity-90 text-right ${
                isCoach
                  ? "bg-blue-800/40 border-white text-blue-50"
                  : "bg-border border-primary text-foreground"
              }`}
            >
              <p className="font-bold mb-0.5">
                {message.replyTo.sender === "coach" ? "شما" : "شاگرد"}
              </p>
              <p className="truncate max-w-[220px]">
                {message.replyTo.text ||
                  (message.replyTo.audioUrl ? "🎤 پیام صوتی" : "📎 فایل پیوست")}
              </p>
            </div>
          )}

          {/* تصویر پیوست شده */}
          {message.attachment?.type === "image" && (
            <div className="mb-2 overflow-hidden rounded-xl">
              <img
                src={message.attachment.url}
                alt={message.attachment.name}
                className="max-h-60 w-auto object-cover rounded-xl cursor-pointer hover:opacity-95 transition"
                onClick={() => window.open(message.attachment.url, "_blank")}
              />
            </div>
          )}

          {/* فایل غیر تصویری */}
          {message.attachment?.type === "file" && (
            <a
              href={message.attachment.url}
              download={message.attachment.name}
              className={`flex items-center gap-2.5 p-2.5 rounded-xl mb-2 transition ${
                isCoach
                  ? "bg-primary hover:bg-primary-hover text-white"
                  : "bg-surface hover:bg-surface-secondary text-foreground"
              }`}
            >
              <InsertDriveFileOutlinedIcon />
              <div className="overflow-hidden text-right">
                <p className="text-xs font-medium truncate max-w-[180px]">
                  {message.attachment.name}
                </p>
                {message.attachment.size && (
                  <p className="text-[10px] opacity-75">
                    {message.attachment.size}
                  </p>
                )}
              </div>
            </a>
          )}

          {/* پلیر پیام صوتی */}
          {message.audioUrl && (
            <div className="my-1">
              <audio
                controls
                src={message.audioUrl}
                className="h-9 w-52 sm:w-60 max-w-full"
              />
            </div>
          )}

          {/* متن پیام */}
          {message.text && (
            <p className="whitespace-pre-wrap break-words text-right" dir="rtl">
              {message.text}
            </p>
          )}
        </div>
      </div>

      {/* زمان، تیک خوانده شدن و برچسب ویرایش شده */}
      <div className="flex items-center gap-1 mt-1 px-1">
        {isCoach && (
          <span className="text-primary flex items-center">
            {message.status === "sent" ? (
              <DoneRoundedIcon sx={{ fontSize: 14 }} />
            ) : (
              <DoneAllRoundedIcon sx={{ fontSize: 14 }} />
            )}
          </span>
        )}
        <span className="text-[11px] text-muted">{message.time}</span>
        {message.edited && (
          <span className="text-[10px] text-muted italic">(ویرایش شده)</span>
        )}
      </div>
    </div>
  );
});

/* =====================================================
   کامپوننت اصلی پنل چت با شاگرد
===================================================== */
export default function StudentChat({
  conversation,
  messages = [],
  onSendMessage,
  onDeleteMessage,
}) {
  const [draft, setDraft] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [replyTo, setReplyTo] = useState(null);
  const [editingMessage, setEditingMessage] = useState(null);
  const [attachment, setAttachment] = useState(null);

  // جستجو
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // اسکرول و هایلایت پیام
  const [showScrollBottomBtn, setShowScrollBottomBtn] = useState(false);
  const [highlightedId, setHighlightedId] = useState(null);

  // ضبط صدا
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  // نگهداری پیام‌های محلی، حذف‌شده‌ها و متادیتا (ریپلای/فایل/ویس) تا با رندر پدر نپرند
  const [localAddedMessages, setLocalAddedMessages] = useState([]);
  const [deletedIds, setDeletedIds] = useState(() => new Set());
  const [editedMap, setEditedMap] = useState({});
  const extraDataRef = useRef({}); // ذخیره replyTo, attachment, audioUrl بر اساس id یا متن

  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);
  const emojiContainerRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);

  // ترکیب هوشمند پیام‌های ورودی از پدر با اطلاعات تکمیلی (ریپلای، فایل، ویرایش، حذف)
  const displayMessages = React.useMemo(() => {
    const parentIds = new Set(messages.map((m) => m.id));

    // غنی‌سازی پیام‌های پدر با دیتای ریپلای/فایل ذخیره شده
    const enrichedParentMessages = messages
      .filter((m) => !deletedIds.has(m.id))
      .map((m) => {
        const extra =
          extraDataRef.current[m.id] ||
          extraDataRef.current[`text_${m.text}`] ||
          {};
        const editedText = editedMap[m.id];
        return {
          ...extra,
          ...m,
          text: editedText !== undefined ? editedText : m.text,
          edited: editedText !== undefined || m.edited,
          replyTo: m.replyTo || extra.replyTo || null,
          attachment: m.attachment || extra.attachment || null,
          audioUrl: m.audioUrl || extra.audioUrl || null,
        };
      });

    // اضافه کردن پیام‌هایی که هنوز در استیت پدر ثبت نشده‌اند (مثل ویس یا وقتی پدر استیت را آپدیت نکرده)
    const remainingLocal = localAddedMessages.filter(
      (m) =>
        !deletedIds.has(m.id) &&
        !parentIds.has(m.id) &&
        !messages.some((pm) => pm.text === m.text && pm.time === m.time)
    );

    return [...enrichedParentMessages, ...remainingLocal];
  }, [messages, localAddedMessages, deletedIds, editedMap]);

  // اسکرول به آخرین پیام
  const scrollToBottom = useCallback((smooth = true) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: smooth ? "smooth" : "auto",
      });
    }
  }, []);

  // اسکرول خودکار هنگام تغییر پیام‌ها یا تغییر شاگرد
  useEffect(() => {
    if (!searchQuery) {
      scrollToBottom(true);
    }
  }, [displayMessages.length, conversation?.id, searchQuery, scrollToBottom]);

  // بررسی وضعیت اسکرول برای نمایش دکمه «پرش به پایین»
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 120;
    setShowScrollBottomBtn(!isNearBottom);
  };

  // اسکرول روی پیام ریپلای‌شده و هایلایت کردن آن
  const scrollToMessage = useCallback((targetId) => {
    const el = document.getElementById(`msg-${targetId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setHighlightedId(targetId);
      setTimeout(() => setHighlightedId(null), 1800);
    }
  }, []);

  // بستن منوی اموجی با کلیک بیرون
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        emojiContainerRef.current &&
        !emojiContainerRef.current.contains(e.target)
      ) {
        setShowEmoji(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ریست هنگام عوض شدن مکالمه
  useEffect(() => {
    setDraft("");
    setReplyTo(null);
    setEditingMessage(null);
    setAttachment(null);
    setShowEmoji(false);
    setShowSearch(false);
    setSearchQuery("");
    setLocalAddedMessages([]);
  }, [conversation?.id]);

  // انتخاب پیام برای ریپلای و فوکوس روی اینپوت
  const handleSelectReply = useCallback((msg) => {
    setEditingMessage(null);
    setReplyTo(msg);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  // انتخاب پیام برای ویرایش
  const handleSelectEdit = useCallback((msg) => {
    setReplyTo(null);
    setEditingMessage(msg);
    setDraft(msg.text || "");
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  // ثبت و ارسال پیام جدید
  const dispatchNewMessage = useCallback(
    (payload) => {
      const now = new Date().toLocaleTimeString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
      });

      const id = Date.now();
      const newMsg = {
        id,
        sender: "coach",
        time: now,
        status: "read",
        ...payload,
      };

      // ذخیره در حافظه کمکی تا اگر والد فقط متن را نگه داشت، ریپلای و فایل نپرد
      extraDataRef.current[id] = newMsg;
      if (newMsg.text) {
        extraDataRef.current[`text_${newMsg.text}`] = newMsg;
      }

      setLocalAddedMessages((prev) => [...prev, newMsg]);

      if (onSendMessage) {
        onSendMessage(newMsg.text || "📎 پیام چندرسانه‌ای", newMsg);
      }
    },
    [onSendMessage]
  );

  // دکمه ارسال (یا ذخیره ویرایش)
  const handleSend = useCallback(() => {
    const text = draft.trim();

    // اگر در حالت ویرایش پیام هستیم
    if (editingMessage) {
      if (!text) return;
      setEditedMap((prev) => ({ ...prev, [editingMessage.id]: text }));
      setLocalAddedMessages((prev) =>
        prev.map((m) =>
          m.id === editingMessage.id ? { ...m, text, edited: true } : m
        )
      );
      setEditingMessage(null);
      setDraft("");
      return;
    }

    if (!text && !attachment) return;

    dispatchNewMessage({
      text,
      attachment,
      replyTo,
    });

    setDraft("");
    setAttachment(null);
    setReplyTo(null);
    setShowEmoji(false);
  }, [draft, attachment, replyTo, editingMessage, dispatchNewMessage]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      } else if (e.key === "Escape") {
        setReplyTo(null);
        setEditingMessage(null);
      }
    },
    [handleSend]
  );

  // انتخاب فایل یا عکس
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    const isImage = file.type.startsWith("image/");
    const sizeKB = (file.size / 1024).toFixed(1) + " KB";

    setAttachment({
      file,
      url,
      type: isImage ? "image" : "file",
      name: file.name,
      size: sizeKB,
    });
    e.target.value = null;
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  // شروع ضبط صدا
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const audioUrl = URL.createObjectURL(audioBlob);

        dispatchNewMessage({
          text: "",
          audioUrl,
          replyTo,
        });
        setReplyTo(null);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } catch (err) {
      alert(
        "دسترسی به میکروفون امکان‌پذیر نیست. لطفاً مجوز مرورگر را بررسی کنید."
      );
    }
  };

  // پایان ضبط صدا
  const stopRecording = (shouldSend = true) => {
    if (mediaRecorderRef.current && isRecording) {
      if (!shouldSend) {
        mediaRecorderRef.current.onstop = () => {
          mediaRecorderRef.current.stream
            ?.getTracks()
            .forEach((track) => track.stop());
        };
      }
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      clearInterval(timerRef.current);
    }
  };

  // حذف پیام
  const handleDelete = useCallback(
    (id) => {
      setDeletedIds((prev) => new Set(prev).add(id));
      if (onDeleteMessage) {
        onDeleteMessage(id);
      }
    },
    [onDeleteMessage]
  );

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const filteredMessages = displayMessages.filter((m) =>
    (m.text || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!conversation) {
    return (
      <div className="flex-1 bg-surface rounded-3xl flex flex-col items-center justify-center p-8 select-none h-[calc(100vh-120px)]">
        <div className="w-16 h-16 rounded-full bg-surface-secondary flex items-center justify-center text-muted mb-3">
          <SendRoundedIcon sx={{ fontSize: 28 }} />
        </div>
        <p className="text-foreground font-medium text-sm">
          یک گفتگو را انتخاب کنید
        </p>
        <p className="text-muted text-xs mt-1">
          برای شروع چت با شاگرد، از لیست کناری یک نفر را انتخاب کنید
        </p>
      </div>
    );
  }

  return (
    /* 
      نکته بسیار مهم برای اسکرول: 
      کلاس‌های h-[calc(100vh-120px)] و min-h-0 تضمین می‌کنند که باکس چت از صفحه بیرون نزند 
      و با زیاد شدن پیام‌ها اسکرول داخلی فعال شود.
    */
    <div className="flex-1 bg-surface rounded-3xl flex flex-col h-[calc(100vh-120px)] max-h-[820px] min-h-[500px] overflow-hidden shadow-xs relative">
      {/* ================= هدر چت ================= */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0 bg-surface z-10">
        {/* اطلاعات شاگرد */}
        <div className="flex items-center gap-3">
            <div className="relative">
            <img
              src={conversation.avatar}
              alt={conversation.name}
              className="w-11 h-11 rounded-full object-cover border border-border"
            />
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-foreground">
              {conversation.name}
            </p>
            <p
              className={`text-xs flex items-center gap-1.5 justify-start mt-0.5 ${
                conversation.online ? "text-success" : "text-muted"
              }`}
            >
              {conversation.online ? "آنلاین" : "آخرین بازدید امروز"}
              <span
                className={`w-2 h-2 rounded-full ${
                  conversation.online ? "bg-success" : "bg-surface-secondary"
                }`}
              />
            </p>
          </div>
        
        </div>
        {/* ابزار جستجو */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setShowSearch((prev) => !prev);
              setSearchQuery("");
            }}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition cursor-pointer ${
              showSearch
                ? "bg-primary text-white"
                : "bg-surface-secondary text-muted hover:text-primary"
            }`}
            title="جستجو در پیام‌ها"
          >
            <SearchRoundedIcon sx={{ fontSize: 20 }} />
          </button>

          {showSearch && (
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو در پیام‌ها..."
              dir="rtl"
              autoFocus
              className="bg-surface-secondary text-xs text-foreground rounded-full px-3 py-2 outline-none w-44 sm:w-56 transition-all"
            />
          )}
        </div>
        
      </div>

      {/* ================= بدنه پیام‌ها (با اسکرول فعال و min-h-0) ================= */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 min-h-0 px-6 py-6 flex flex-col gap-4 overflow-y-auto scroll-smooth relative"
      >
        {filteredMessages.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center my-auto">
            <p className="text-sm text-muted">
              {searchQuery
                ? "پیامی با این عبارت پیدا نشد."
                : "هنوز پیامی ثبت نشده — اولین پیام رو بفرست 👋"}
            </p>
          </div>
        ) : (
          filteredMessages.map((m) => (
            <MessageBubble
              key={m.id}
              message={m}
              isHighlighted={highlightedId === m.id}
              onReply={handleSelectReply}
              onEdit={handleSelectEdit}
              onDelete={handleDelete}
              onScrollToMessage={scrollToMessage}
            />
          ))
        )}
      </div>

      {/* دکمه شناور اسکرول به آخرین پیام (وقتی بالا رفته‌اید) */}
      {showScrollBottomBtn && (
        <button
          type="button"
          onClick={() => scrollToBottom(true)}
          className="absolute bottom-24 right-6 z-20 w-10 h-10 rounded-full bg-surface text-primary shadow-lg border border-border flex items-center justify-center hover:bg-primary/10 transition cursor-pointer"
          title="رفتن به آخرین پیام"
        >
          <KeyboardArrowDownRoundedIcon />
        </button>
      )}

      {/* ================= نوار پیش‌نمایش ریپلای، ویرایش یا فایل پیوست ================= */}
      {(replyTo || editingMessage || attachment) && (
        <div className="px-6 py-2.5 bg-surface-secondary border-t border-border flex items-center justify-between gap-4 shrink-0">
          <button
            type="button"
            onClick={() => {
              setReplyTo(null);
              setEditingMessage(null);
              setAttachment(null);
              if (editingMessage) setDraft("");
            }}
            className="text-muted hover:text-danger transition cursor-pointer p-1"
            title="بستن"
          >
            <CloseRoundedIcon sx={{ fontSize: 18 }} />
          </button>

          <div className="flex-1 text-right overflow-hidden" dir="rtl">
            {replyTo && (
              <div className="border-r-3 border-primary pr-2.5">
                <p className="text-xs font-bold text-primary flex items-center gap-1">
                  <ReplyRoundedIcon sx={{ fontSize: 14 }} />
                  پاسخ به{" "}
                  {replyTo.sender === "coach" ? "خودتان" : conversation.name}
                </p>
                <p className="text-xs text-foreground truncate mt-0.5">
                  {replyTo.text ||
                    (replyTo.audioUrl ? "🎤 پیام صوتی" : "📎 فایل پیوست")}
                </p>
              </div>
            )}

            {editingMessage && (
              <div className="border-r-3 border-amber-500 pr-2.5">
                <p className="text-xs font-bold text-amber-600 flex items-center gap-1">
                  <EditOutlinedIcon sx={{ fontSize: 14 }} />
                  در حال ویرایش پیام
                </p>
                <p className="text-xs text-foreground truncate mt-0.5">
                  {editingMessage.text}
                </p>
              </div>
            )}

            {attachment && (
              <div className="flex items-center gap-3 mt-1">
                {attachment.type === "image" ? (
                  <img
                    src={attachment.url}
                    alt="preview"
                    className="w-10 h-10 rounded-lg object-cover border"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <InsertDriveFileOutlinedIcon fontSize="small" />
                  </div>
                )}
                <div className="overflow-hidden">
                  <p className="text-xs font-medium text-foreground truncate">
                    {attachment.name}
                  </p>
                  <p className="text-[10px] text-muted">{attachment.size}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= فوتر ورودی پیام ================= */}
      <div className="flex items-center gap-3 px-5 py-4 border-t border-border bg-surface relative shrink-0">
        {/* دکمه ارسال / ثبت ویرایش */}
        <button
          type="button"
          onClick={handleSend}
          disabled={(!draft.trim() && !attachment) || isRecording}
          className="bg-primary text-white text-sm font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:bg-primary-hover transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
        >
          {editingMessage ? "ذخیره ویرایش" : "ارسال پیام"}
          <SendRoundedIcon sx={{ fontSize: 16 }} />
        </button>

        {/* کادر ورودی یا وضعیت ضبط صدا */}
        <div className="flex-1 bg-surface-secondary rounded-full flex items-center px-2 py-1.5 relative">
          {isRecording ? (
            <div className="flex items-center justify-between w-full px-2 py-0.5">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => stopRecording(true)}
                  className="px-3 py-1 rounded-full bg-primary text-white text-xs font-medium hover:bg-primary-hover transition cursor-pointer flex items-center gap-1"
                >
                  <StopRoundedIcon sx={{ fontSize: 16 }} />
                  ارسال ویس
                </button>
                <button
                  type="button"
                  onClick={() => stopRecording(false)}
                  className="px-2.5 py-1 rounded-full text-xs text-muted hover:text-danger transition cursor-pointer"
                >
                  انصراف
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold text-danger">
                  {formatTime(recordingTime)}
                </span>
                <span className="text-xs text-foreground">در حال ضبط...</span>
                <span className="w-2.5 h-2.5 rounded-full bg-danger animate-ping" />
              </div>
            </div>
          ) : (
            <>
              {/* دکمه ضبط ویس */}
              <button
                type="button"
                onClick={startRecording}
                className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white shrink-0 hover:bg-primary-hover transition cursor-pointer"
                aria-label="پیام صوتی"
                title="ضبط پیام صوتی"
              >
                <MicNoneOutlinedIcon sx={{ fontSize: 18 }} />
              </button>

              {/* دکمه و منوی اموجی */}
              <div className="relative" ref={emojiContainerRef}>
                <button
                  type="button"
                  onClick={() => setShowEmoji((prev) => !prev)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition cursor-pointer shrink-0 ${
                    showEmoji
                      ? "text-primary bg-primary/10"
                      : "text-muted hover:text-primary"
                  }`}
                  aria-label="شکلک"
                  title="افزودن شکلک"
                >
                  <InsertEmoticonOutlinedIcon sx={{ fontSize: 20 }} />
                </button>

                {showEmoji && (
                  <div className="absolute bottom-12 right-0 bg-surface border border-border shadow-xl rounded-2xl p-3 w-64 grid grid-cols-6 gap-1.5 z-30">
                    {EMOJIS.map((emoji) => (
                      <button
                        key={emoji}
                        type="button"
                        onClick={() => {
                          setDraft((prev) => prev + emoji);
                          inputRef.current?.focus();
                        }}
                        className="text-xl hover:bg-surface-secondary rounded-lg p-1.5 transition cursor-pointer flex items-center justify-center"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* دکمه پیوست فایل */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-9 h-9 rounded-full flex items-center justify-center text-muted hover:text-primary transition cursor-pointer shrink-0"
                aria-label="پیوست فایل"
                title="پیوست تصویر یا فایل"
              >
                <AttachFileOutlinedIcon sx={{ fontSize: 18 }} />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />

              {/* اینپوت متن */}
              <input
                ref={inputRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={handleKeyDown}
                type="text"
                dir="rtl"
                placeholder="پیام خود را بنویسید..."
                className="flex-1 bg-transparent outline-none text-sm text-foreground text-right px-2"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
