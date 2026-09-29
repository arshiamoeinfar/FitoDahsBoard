import React, { useState } from "react";
import {
  User,
  BadgeCheck,
  Users,
  Bell,
  Dumbbell,
  Bot,
  ShieldCheck,
  Save,
  LockKeyhole,
  MessageCircle,
  Utensils,
  Mail,
  Smartphone,
  Camera,
  ChevronLeft,
} from "lucide-react";
import HeaderDashBoard from "../DashBoardAuth/HeaderDashBoard/HeaderDashBoard";

const settingsItems = [
  {
    id: "account",
    title: "حساب کاربری",
    icon: User,
  },
  {
    id: "profile",
    title: "پروفایل مربی",
    icon: BadgeCheck,
  },
  {
    id: "students",
    title: "شاگردان",
    icon: Users,
  },
  {
    id: "notifications",
    title: "اعلان‌ها",
    icon: Bell,
  },
  {
    id: "programs",
    title: "برنامه‌ها",
    icon: Dumbbell,
  },
  {
    id: "ai",
    title: "هوش مصنوعی",
    icon: Bot,
  },
  {
    id: "security",
    title: "امنیت",
    icon: ShieldCheck,
  },
];

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange?.(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-all duration-200 ${
        checked ? "bg-[#007BFF]" : "bg-[#DCE2E9]"
      }`}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all duration-200 ${
          checked ? "right-1" : "right-6"
        }`}
      />
    </button>
  );
}

function SettingRow({
  icon: Icon,
  title,
  description,
  checked,
  onChange,
}) {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-[#F0F2F5] py-5 last:border-b-0">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F3F8FF] text-[#007BFF]">
          <Icon size={18} strokeWidth={1.8} />
        </div>

        <div className="min-w-0">
          <h4 className="text-[12px] font-semibold text-[#454C55]">
            {title}
          </h4>

          <p className="mt-1 text-[10px] leading-5 text-[#9AA1AA]">
            {description}
          </p>
        </div>
      </div>

      <Toggle checked={checked} onChange={onChange} />
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[12px] font-medium text-[#68717D]">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="
          h-11
          w-full
          rounded-xl
          border
          border-[#E7EBF0]
          bg-[#FCFDFE]
          px-4
          text-[12px]
          text-[#454C55]
          outline-none
          transition-all
          placeholder:text-[#B2B8C0]
          focus:border-[#8CC3FF]
          focus:bg-white
          focus:ring-4
          focus:ring-[#007BFF]/5
        "
      />
    </div>
  );
}

function SectionHeader({ title, description }) {
  return (
    <div className="mb-6">
      <h2 className="text-[18px] font-primary text-[#6B6F77]">
        {title}
      </h2>

      <p className="mt-1 text-[10px] text-[#9AA1AA]">
        {description}
      </p>
    </div>
  );
}

function AccountSettings({ form, setForm }) {
  return (
    <>
      <SectionHeader
        title="حساب کاربری"
        description="اطلاعات حساب و روش‌های ارتباطی خود را مدیریت کنید."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <InputField
          label="نام و نام خانوادگی"
          value={form.name}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, name: value }))
          }
        />

        <InputField
          label="ایمیل"
          type="email"
          value={form.email}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, email: value }))
          }
        />

        <InputField
          label="شماره موبایل"
          value={form.phone}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, phone: value }))
          }
        />

        <InputField
          label="نام کاربری"
          value={form.username}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, username: value }))
          }
        />
      </div>

      <div className="mt-6 rounded-2xl border border-[#E8EEF5] bg-[#FAFCFF] p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF6FF] text-[#007BFF]">
              <LockKeyhole size={18} />
            </div>

            <div>
              <h3 className="text-[12px] font-semibold text-[#454C55]">
                رمز عبور
              </h3>

              <p className="mt-1 text-[10px] text-[#9AA1AA]">
                رمز عبور حساب خود را تغییر دهید.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="rounded-xl border border-[#DCE8F5] bg-white px-4 py-2.5 text-[10px] font-medium text-[#007BFF] transition-all hover:bg-[#F3F8FF]"
          >
            تغییر رمز عبور
          </button>
        </div>
      </div>
    </>
  );
}

function CoachProfileSettings({ form, setForm }) {
  return (
    <>
      <SectionHeader
        title="پروفایل مربی"
        description="اطلاعاتی که شاگردان در پروفایل مربی مشاهده می‌کنند."
      />

      <div className="mb-7 flex items-center gap-5">
        <div className="relative">
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-[#EAF4FF] text-[#007BFF] shadow-sm">
            <User size={30} strokeWidth={1.5} />
          </div>

          <button
            type="button"
            className="absolute bottom-0 left-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#007BFF] text-white shadow-sm"
          >
            <Camera size={13} />
          </button>
        </div>

        <div>
          <h3 className="text-[14px] font-bold text-[#343A40]">
            {form.name || "نام مربی"}
          </h3>

          <p className="mt-1 text-[10px] text-[#9AA1AA]">
            تصویر پروفایل مربی
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <InputField
          label="عنوان تخصصی"
          value={form.title}
          placeholder="مثلاً مربی بدنسازی"
          onChange={(value) =>
            setForm((prev) => ({ ...prev, title: value }))
          }
        />

        <InputField
          label="سابقه مربیگری"
          value={form.experience}
          placeholder="مثلاً ۵ سال"
          onChange={(value) =>
            setForm((prev) => ({ ...prev, experience: value }))
          }
        />
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-[11px] font-medium text-[#68717D]">
          درباره من
        </label>

        <textarea
          value={form.bio}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              bio: e.target.value,
            }))
          }
          rows={4}
          placeholder="توضیح کوتاهی درباره خودتان و تخصصتان..."
          className="
            w-full
            resize-none
            rounded-xl
            border
            border-[#E7EBF0]
            bg-[#FCFDFE]
            px-4
            py-3
            text-[11px]
            leading-6
            text-[#454C55]
            outline-none
            transition-all
            placeholder:text-[#B2B8C0]
            focus:border-[#8CC3FF]
            focus:bg-white
            focus:ring-4
            focus:ring-[#007BFF]/5
          "
        />
      </div>
    </>
  );
}

function StudentSettings({ settings, setSettings }) {
  return (
    <>
      <SectionHeader
        title="مدیریت شاگردان"
        description="نحوه مدیریت و ارتباط با شاگردان را تنظیم کنید."
      />

      <div className="rounded-2xl border border-[#E8EDF3] bg-white px-5">
        <SettingRow
          icon={Users}
          title="تأیید خودکار درخواست شاگرد"
          description="درخواست‌های عضویت شاگردان به صورت خودکار تأیید شوند."
          checked={settings.autoAccept}
          onChange={(value) =>
            setSettings((prev) => ({
              ...prev,
              autoAccept: value,
            }))
          }
        />

        <SettingRow
          icon={MessageCircle}
          title="اجازه ارسال پیام"
          description="شاگردان بتوانند مستقیماً برای شما پیام ارسال کنند."
          checked={settings.studentMessages}
          onChange={(value) =>
            setSettings((prev) => ({
              ...prev,
              studentMessages: value,
            }))
          }
        />

        <SettingRow
          icon={Users}
          title="نمایش وضعیت آنلاین"
          description="وضعیت آنلاین بودن شما برای شاگردان نمایش داده شود."
          checked={settings.onlineStatus}
          onChange={(value) =>
            setSettings((prev) => ({
              ...prev,
              onlineStatus: value,
            }))
          }
        />
      </div>

      <div className="mt-5 rounded-2xl bg-[#F7FAFD] p-5">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] text-[#9AA1AA]">
              تعداد شاگردان
            </span>

            <div className="mt-1 text-[20px] font-bold text-[#343A40]">
              42
              <span className="mx-1 text-[12px] font-normal text-[#A5ABB3]">
                /
              </span>

              <span className="text-[13px] font-medium text-[#007BFF]">
                100
              </span>
            </div>
          </div>

          <div className="h-2 w-40 overflow-hidden rounded-full bg-[#E7EEF5]">
            <div className="h-full w-[42%] rounded-full bg-[#007BFF]" />
          </div>
        </div>
      </div>
    </>
  );
}

function NotificationSettings({ settings, setSettings }) {
  return (
    <>
      <SectionHeader
        title="اعلان‌ها"
        description="اعلان‌هایی که می‌خواهید از Fito دریافت کنید."
      />

      <div className="rounded-2xl border border-[#E8EDF3] bg-white px-5">
        <SettingRow
          icon={MessageCircle}
          title="پیام جدید شاگرد"
          description="هنگام دریافت پیام جدید از شاگرد اطلاع داده شود."
          checked={settings.newMessage}
          onChange={(value) =>
            setSettings((prev) => ({
              ...prev,
              newMessage: value,
            }))
          }
        />

        <SettingRow
          icon={Dumbbell}
          title="ثبت تمرین جدید"
          description="وقتی شاگرد یک جلسه تمرینی را ثبت می‌کند."
          checked={settings.workout}
          onChange={(value) =>
            setSettings((prev) => ({
              ...prev,
              workout: value,
            }))
          }
        />

        <SettingRow
          icon={Bell}
          title="منقضی شدن برنامه"
          description="قبل از پایان برنامه شاگرد اطلاع داده شود."
          checked={settings.expiredProgram}
          onChange={(value) =>
            setSettings((prev) => ({
              ...prev,
              expiredProgram: value,
            }))
          }
        />

        <SettingRow
          icon={Mail}
          title="اعلان ایمیلی"
          description="اعلان‌های مهم از طریق ایمیل ارسال شوند."
          checked={settings.emailNotification}
          onChange={(value) =>
            setSettings((prev) => ({
              ...prev,
              emailNotification: value,
            }))
          }
        />
      </div>
    </>
  );
}

function ProgramSettings({ settings, setSettings }) {
  return (
    <>
      <SectionHeader
        title="برنامه‌ها"
        description="تنظیمات پیش‌فرض ساخت برنامه‌های تمرینی و تغذیه."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[#E8EDF3] bg-white p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF6FF] text-[#007BFF]">
              <Dumbbell size={18} />
            </div>

            <div>
              <h3 className="text-[12px] font-bold text-[#454C55]">
                تمرین
              </h3>

              <p className="mt-1 text-[9px] text-[#A0A6AE]">
                تنظیمات Workout Builder
              </p>
            </div>
          </div>

          <SettingRow
            icon={Dumbbell}
            title="ذخیره خودکار برنامه"
            description="برنامه هنگام ساخت به صورت خودکار ذخیره شود."
            checked={settings.autoSaveWorkout}
            onChange={(value) =>
              setSettings((prev) => ({
                ...prev,
                autoSaveWorkout: value,
              }))
            }
          />
        </div>

        <div className="rounded-2xl border border-[#E8EDF3] bg-white p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EFFBEA] text-[#68B43F]">
              <Utensils size={18} />
            </div>

            <div>
              <h3 className="text-[12px] font-bold text-[#454C55]">
                تغذیه
              </h3>

              <p className="mt-1 text-[9px] text-[#A0A6AE]">
                تنظیمات برنامه غذایی
              </p>
            </div>
          </div>

          <SettingRow
            icon={Utensils}
            title="نمایش ارزش غذایی"
            description="پروتئین، کربوهیدرات و چربی نمایش داده شود."
            checked={settings.nutritionValues}
            onChange={(value) =>
              setSettings((prev) => ({
                ...prev,
                nutritionValues: value,
              }))
            }
          />
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-[#E8EDF3] bg-white px-5">
        <SettingRow
          icon={ShieldCheck}
          title="تأیید قبل از انتشار"
          description="قبل از ارسال برنامه برای شاگرد، تأیید مربی درخواست شود."
          checked={settings.confirmBeforePublish}
          onChange={(value) =>
            setSettings((prev) => ({
              ...prev,
              confirmBeforePublish: value,
            }))
          }
        />
      </div>
    </>
  );
}

function AISettings({ settings, setSettings }) {
  return (
    <>
      <SectionHeader
        title="هوش مصنوعی"
        description="نحوه استفاده Fito AI از اطلاعات و داده‌های شاگردان."
      />

      <div className="mb-5 rounded-2xl border border-[#DCEBFF] bg-[#F5FAFF] p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#007BFF] text-white">
            <Bot size={21} />
          </div>

          <div>
            <h3 className="text-[13px] font-bold text-[#343A40]">
              Fito AI
            </h3>

            <p className="mt-1 text-[9px] text-[#7E8995]">
              دستیار هوشمند برای تحلیل و پیشنهاد برنامه
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-[#E8EDF3] bg-white px-5">
        <SettingRow
          icon={Bot}
          title="فعال بودن دستیار AI"
          description="دستیار هوشمند در پنل مربی فعال باشد."
          checked={settings.aiEnabled}
          onChange={(value) =>
            setSettings((prev) => ({
              ...prev,
              aiEnabled: value,
            }))
          }
        />

        <SettingRow
          icon={Users}
          title="استفاده از اطلاعات شاگرد"
          description="AI بتواند از اطلاعات و تحلیل‌های شاگرد استفاده کند."
          checked={settings.useStudentData}
          onChange={(value) =>
            setSettings((prev) => ({
              ...prev,
              useStudentData: value,
            }))
          }
        />

        <SettingRow
          icon={Dumbbell}
          title="پیشنهاد برنامه تمرینی"
          description="AI بتواند برای ساخت برنامه تمرینی پیشنهاد ارائه دهد."
          checked={settings.aiWorkout}
          onChange={(value) =>
            setSettings((prev) => ({
              ...prev,
              aiWorkout: value,
            }))
          }
        />

        <SettingRow
          icon={Utensils}
          title="پیشنهاد برنامه تغذیه"
          description="AI بتواند برای برنامه غذایی پیشنهاد ارائه دهد."
          checked={settings.aiNutrition}
          onChange={(value) =>
            setSettings((prev) => ({
              ...prev,
              aiNutrition: value,
            }))
          }
        />

        <SettingRow
          icon={ShieldCheck}
          title="تأیید مربی قبل از ارسال"
          description="پیشنهادهای AI قبل از ارسال برای شاگرد نیاز به تأیید شما داشته باشند."
          checked={settings.aiApproval}
          onChange={(value) =>
            setSettings((prev) => ({
              ...prev,
              aiApproval: value,
            }))
          }
        />
      </div>
    </>
  );
}

function SecuritySettings() {
  return (
    <>
      <SectionHeader
        title="امنیت"
        description="امنیت حساب و دسترسی‌های فعال خود را مدیریت کنید."
      />

      <div className="rounded-2xl border border-[#E8EDF3] bg-white px-5">
        <div className="flex items-center justify-between gap-5 border-b border-[#F0F2F5] py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF6FF] text-[#007BFF]">
              <ShieldCheck size={18} />
            </div>

            <div>
              <h4 className="text-[12px] font-semibold text-[#454C55]">
                ورود دو مرحله‌ای
              </h4>

              <p className="mt-1 text-[10px] text-[#9AA1AA]">
                یک لایه امنیتی بیشتر برای حساب شما.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="rounded-xl bg-[#EEF6FF] px-4 py-2.5 text-[10px] font-medium text-[#007BFF]"
          >
            فعال‌سازی
          </button>
        </div>

        <div className="flex items-center justify-between gap-5 border-b border-[#F0F2F5] py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F6F8] text-[#737B85]">
              <Smartphone size={18} />
            </div>

            <div>
              <h4 className="text-[12px] font-semibold text-[#454C55]">
                دستگاه‌های فعال
              </h4>

              <p className="mt-1 text-[10px] text-[#9AA1AA]">
                مدیریت دستگاه‌هایی که به حساب شما وارد شده‌اند.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="flex items-center gap-1 text-[10px] font-medium text-[#007BFF]"
          >
            مشاهده
            <ChevronLeft size={13} />
          </button>
        </div>

        <div className="flex items-center justify-between gap-5 py-5">
          <div>
            <h4 className="text-[12px] font-semibold text-[#454C55]">
              نشست‌های فعال
            </h4>

            <p className="mt-1 text-[10px] text-[#9AA1AA]">
              مدیریت دسترسی دستگاه‌های متصل به حساب
            </p>
          </div>

          <button
            type="button"
            className="rounded-xl border border-[#F0D4D4] bg-white px-4 py-2.5 text-[10px] font-medium text-[#D95353]"
          >
            خروج از همه
          </button>
        </div>
      </div>
    </>
  );
}

export default function CoachSettings() {
  const [activeSection, setActiveSection] = useState("account");

  const [form, setForm] = useState({
    name: "علی رضایی",
    email: "ali@example.com",
    phone: "09123456789",
    username: "ali_coach",
    title: "مربی بدنسازی",
    experience: "۵ سال",
    bio: "مربی بدنسازی و متخصص طراحی برنامه تمرینی و تغذیه.",
  });

  const [settings, setSettings] = useState({
    autoAccept: false,
    studentMessages: true,
    onlineStatus: true,

    newMessage: true,
    workout: true,
    expiredProgram: true,
    emailNotification: false,

    autoSaveWorkout: true,
    nutritionValues: true,
    confirmBeforePublish: true,

    aiEnabled: true,
    useStudentData: true,
    aiWorkout: true,
    aiNutrition: true,
    aiApproval: true,
  });

  const renderContent = () => {
    switch (activeSection) {
      case "account":
        return (
          <AccountSettings
            form={form}
            setForm={setForm}
          />
        );

      case "profile":
        return (
          <CoachProfileSettings
            form={form}
            setForm={setForm}
          />
        );

      case "students":
        return (
          <StudentSettings
            settings={settings}
            setSettings={setSettings}
          />
        );

      case "notifications":
        return (
          <NotificationSettings
            settings={settings}
            setSettings={setSettings}
          />
        );

      case "programs":
        return (
          <ProgramSettings
            settings={settings}
            setSettings={setSettings}
          />
        );

      case "ai":
        return (
          <AISettings
            settings={settings}
            setSettings={setSettings}
          />
        );

      case "security":
        return <SecuritySettings />;

      default:
        return null;
    }
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#F5F7FB] flex justify-center"
    >
      <main className="mx-auto w-full px-4 ">
        <div className="mb-6">
            <HeaderDashBoard title="تنظیمات"  description="حساب کاربری و تنظیمات پنل مربی را مدیریت کنید" />
        </div>
        {/* Header */}

        {/* Top Menu */}
        <div className="mb-5 overflow-x-auto rounded-3xl bg-white p-2">
          <div className="flex min-w-max items-center gap-1">
            {settingsItems.map((item) => {
              const Icon = item.icon;
              const active = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    setActiveSection(item.id)
                  }
                  className={`
                    group
                    relative
                    flex
                    items-center
                    gap-2
                    rounded-[15px]
                    px-5
                    py-3.5
                    text-[13px]
                    font-medium
                    transition-all
                    duration-200
                    cursor-pointer
                    ${
                      active
                        ? "bg-[#EEF6FF] text-[#007BFF]"
                        : "text-[#7D858F] hover:bg-[#F8FAFC] hover:text-[#007BFF]"
                    }
                  `}
                >
                  <Icon
                    size={16}
                    strokeWidth={1.8}
                  />

                  {item.title}

                  {active && (
                    <span className="absolute bottom-0 left-1/2 h-[3px] w-7 -translate-x-1/2 rounded-full bg-[#007BFF]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <section className="rounded-3xl bg-white p-7">
          {renderContent()}

          {/* Footer */}
          <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t border-[#F0F2F5] pt-6 sm:flex-row">
            <p className="text-[12px] text-[#d30000]">
              تغییرات شما تا زمان ذخیره شدن اعمال نمی‌شوند.
            </p>

            <button
              type="button"
              onClick={() => {
                console.log("Settings saved", {
                  form,
                  settings,
                });
              }}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-[#007BFF]
                px-6
                py-3
                text-[12px]
                font-medium
                text-white
                shadow-[0_5px_15px_rgba(0,123,255,0.18)]
                transition-all
                duration-200
                hover:bg-[#006FE6]
                hover:shadow-[0_7px_20px_rgba(0,123,255,0.22)]
                active:scale-[0.98]
              "
            >
              <Save size={15} strokeWidth={1.8} />

              ذخیره تغییرات
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}