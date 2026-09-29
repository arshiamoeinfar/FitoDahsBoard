import React, { useState } from "react";
import {
  User,
  CreditCard,
  Bell,
  ShieldCheck,
  Settings,
  Camera,
  Check,
  Crown,
  CalendarDays,
  Dumbbell,
  Target,
  Activity,
  Mail,
  Phone,
  MapPin,
  LockKeyhole,
  Smartphone,
  Monitor,
  LogOut,
  Eye,
  EyeOff,
  Moon,
  Sun,
  Globe,
  Save,
  ChevronLeft,
  CheckCircle2,
  XCircle,
} from "lucide-react";

/* =========================================================
   TABS
========================================================= */

const tabs = [
  {
    id: "profile",
    title: "پروفایل من",
    icon: User,
  },
  {
    id: "subscription",
    title: "پلن اشتراک",
    icon: CreditCard,
  },
  {
    id: "notifications",
    title: "اعلانات",
    icon: Bell,
  },
  {
    id: "privacy",
    title: "حریم خصوصی",
    icon: ShieldCheck,
  },
  {
    id: "settings",
    title: "تنظیمات",
    icon: Settings,
  },
];

/* =========================================================
   TOGGLE
========================================================= */

function Toggle({ enabled, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-all duration-300 ${
        enabled ? "bg-[#007BFF]" : "bg-gray-200"
      }`}
    >
      <span
        className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-all duration-300 ${
          enabled ? "right-1" : "right-6"
        }`}
      />
    </button>
  );
}

/* =========================================================
   SETTING ROW
========================================================= */

function SettingRow({
  icon: Icon,
  title,
  description,
  children,
}) {
  return (
    <div className="flex items-center justify-between gap-5 rounded-2xl border border-gray-100 bg-white p-5 transition hover:border-blue-100">
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#007BFF]">
          <Icon size={20} />
        </div>

        <div className="min-w-0">
          <h4 className="font-semibold text-[#1F2937]">
            {title}
          </h4>

          {description && (
            <p className="mt-1 text-sm leading-6 text-[#8A919B]">
              {description}
            </p>
          )}
        </div>
      </div>

      {children}
    </div>
  );
}

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#007BFF]">
        <Icon size={20} />
      </div>

      <div>
        <h2 className="text-lg font-bold text-[#1F2937]">
          {title}
        </h2>

        <p className="mt-1 text-sm text-[#8A919B]">
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   INPUT
========================================================= */

function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#4B5563]">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1F2937] outline-none transition placeholder:text-gray-300 focus:border-[#007BFF] focus:ring-4 focus:ring-blue-50"
      />
    </div>
  );
}

/* =========================================================
   DEVICE CARD
========================================================= */

function DeviceCard({
  icon: Icon,
  title,
  browser,
  location,
  lastActive,
  current,
  onLogout,
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition hover:border-blue-100 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-[#4B5563]">
          <Icon size={22} />
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-bold text-[#1F2937]">
              {title}
            </h4>

            {current && (
              <span className="rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-medium text-green-600">
                دستگاه فعلی
              </span>
            )}
          </div>

          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-[#8A919B]">
            <span>{browser}</span>
            <span>•</span>
            <span>{location}</span>
          </div>

          <div className="mt-2 flex items-center gap-2 text-xs text-[#9CA3AF]">
            <span
              className={`h-2 w-2 rounded-full ${
                current ? "bg-green-500" : "bg-gray-300"
              }`}
            />

            {lastActive}
          </div>
        </div>
      </div>

      {!current && (
        <button
          type="button"
          onClick={onLogout}
          className="flex items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-2.5 text-xs font-semibold text-red-500 transition hover:bg-red-100"
        >
          <LogOut size={16} />
          خروج از دستگاه
        </button>
      )}
    </div>
  );
}

/* =========================================================
   SUBSCRIPTION CARD
========================================================= */

function SubscriptionCard({
  name,
  price,
  period,
  description,
  features,
  active,
  popular,
  onSelect,
}) {
  return (
    <div
      className={`relative flex flex-col rounded-[24px] border p-6 transition-all duration-300 ${
        active
          ? "border-[#007BFF] bg-blue-50/40 shadow-lg shadow-blue-100"
          : "border-gray-100 bg-white hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-gray-100"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 right-6 rounded-full bg-[#007BFF] px-4 py-1.5 text-[11px] font-bold text-white shadow-md shadow-blue-100">
          محبوب‌ترین پلن
        </div>
      )}

      {active && (
        <div className="absolute left-5 top-5 flex items-center gap-1 rounded-full bg-green-50 px-3 py-1.5 text-[11px] font-medium text-green-600">
          <CheckCircle2 size={13} />
          پلن فعلی
        </div>
      )}

      <div className="mb-5">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#007BFF]">
          <Crown size={22} />
        </div>

        <h3 className="text-xl font-bold text-[#1F2937]">
          {name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[#8A919B]">
          {description}
        </p>
      </div>

      <div className="mb-6">
        <span className="text-3xl font-bold text-[#1F2937]">
          {price}
        </span>

        <span className="mr-1 text-sm text-[#8A919B]">
          {period}
        </span>
      </div>

      <div className="mb-7 space-y-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm text-[#5F6B7A]"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
              <Check size={12} />
            </span>

            {feature}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onSelect}
        disabled={active}
        className={`mt-auto flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
          active
            ? "cursor-default bg-green-50 text-green-600"
            : "bg-[#007BFF] text-white hover:bg-blue-600"
        }`}
      >
        {active ? (
          <>
            <Check size={17} />
            پلن فعلی شما
          </>
        ) : (
          <>
            انتخاب پلن
            <ChevronLeft size={17} />
          </>
        )}
      </button>
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function AthleteSettings() {
  const [activeTab, setActiveTab] = useState("profile");

  /* PROFILE */

  const [profile, setProfile] = useState({
    firstName: "ارشیا",
    lastName: "معین‌فر",
    email: "example@email.com",
    phone: "09123456789",
    city: "سقز",
    goal: "عضله‌سازی",
  });

  /* SUBSCRIPTION */

  const [activePlan, setActivePlan] = useState("pro");

  /* NOTIFICATIONS */

  const [notifications, setNotifications] = useState({
    workout: true,
    nutrition: true,
    coach: true,
    progress: true,
    messages: true,
    reminders: false,
    marketing: false,
  });

  /* PRIVACY */

  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const [devices, setDevices] = useState([
    {
      id: 1,
      title: "Windows PC",
      icon: Monitor,
      browser: "Chrome",
      location: "Germany",
      lastActive: "در حال استفاده",
      current: true,
    },
    {
      id: 2,
      title: "Android",
      icon: Smartphone,
      browser: "Fito App",
      location: "Germany",
      lastActive: "آخرین فعالیت ۲ ساعت پیش",
      current: false,
    },
    {
      id: 3,
      title: "iPhone",
      icon: Smartphone,
      browser: "Safari",
      location: "Iran",
      lastActive: "آخرین فعالیت ۳ روز پیش",
      current: false,
    },
  ]);

  /* SETTINGS */

  const [theme, setTheme] = useState("light");

  const [settings, setSettings] = useState({
    autoPlayVideos: true,
    workoutReminders: true,
    nutritionReminders: true,
    showOnlineStatus: true,
    language: "fa",
  });

  const removeDevice = (id) => {
    setDevices((prev) =>
      prev.filter((device) => device.id !== id)
    );
  };

  /* =========================================================
     PROFILE
  ========================================================= */

  const renderProfile = () => {
    return (
      <>
        <SectionHeader
          icon={User}
          title="پروفایل من"
          description="اطلاعات شخصی و ورزشی خود را مدیریت کنید."
        />

        {/* PROFILE IMAGE */}

        <div className="mb-7 flex flex-col gap-5 rounded-2xl border border-gray-100 bg-gray-50/50 p-5 sm:flex-row sm:items-center">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-[22px] bg-blue-50 text-3xl font-bold text-[#007BFF]">
              ا
            </div>

            <button
              type="button"
              className="absolute -bottom-2 -left-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#007BFF] text-white shadow-lg shadow-blue-100 transition hover:bg-blue-600"
            >
              <Camera size={17} />
            </button>
          </div>

          <div>
            <h3 className="font-bold text-[#1F2937]">
              تصویر پروفایل
            </h3>

            <p className="mt-1 text-sm text-[#8A919B]">
              تصویر پروفایل خود را برای حساب Fito انتخاب کنید.
            </p>

            <button
              type="button"
              className="mt-3 rounded-xl border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-[#4B5563] transition hover:border-blue-200 hover:text-[#007BFF]"
            >
              تغییر تصویر
            </button>
          </div>
        </div>

        {/* PERSONAL INFO */}

        <div className="mb-7">
          <h3 className="mb-4 font-bold text-[#1F2937]">
            اطلاعات شخصی
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <InputField
              label="نام"
              value={profile.firstName}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  firstName: e.target.value,
                })
              }
            />

            <InputField
              label="نام خانوادگی"
              value={profile.lastName}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  lastName: e.target.value,
                })
              }
            />

            <InputField
              label="ایمیل"
              type="email"
              value={profile.email}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  email: e.target.value,
                })
              }
            />

            <InputField
              label="شماره موبایل"
              value={profile.phone}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  phone: e.target.value,
                })
              }
            />

            <InputField
              label="شهر"
              value={profile.city}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  city: e.target.value,
                })
              }
            />

            <InputField
              label="هدف ورزشی"
              value={profile.goal}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  goal: e.target.value,
                })
              }
            />
          </div>
        </div>

        {/* SPORT SUMMARY */}

        <div>
          <h3 className="mb-4 font-bold text-[#1F2937]">
            خلاصه وضعیت
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-5">
              <Dumbbell
                size={21}
                className="mb-4 text-[#007BFF]"
              />

              <p className="text-sm text-[#8A919B]">
                تمرین در هفته
              </p>

              <p className="mt-2 text-xl font-bold text-[#1F2937]">
                ۴ روز
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5">
              <Activity
                size={21}
                className="mb-4 text-[#007BFF]"
              />

              <p className="text-sm text-[#8A919B]">
                وزن فعلی
              </p>

              <p className="mt-2 text-xl font-bold text-[#1F2937]">
                ۷۸ kg
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5">
              <Target
                size={21}
                className="mb-4 text-[#007BFF]"
              />

              <p className="text-sm text-[#8A919B]">
                هدف
              </p>

              <p className="mt-2 text-xl font-bold text-[#1F2937]">
                عضله‌سازی
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  /* =========================================================
     SUBSCRIPTION
  ========================================================= */

  const renderSubscription = () => {
    const plans = [
      {
        id: "free",
        name: "رایگان",
        price: "۰",
        period: "تومان / ماه",
        description:
          "برای شروع و آشنایی با امکانات اصلی Fito.",
        features: [
          "داشبورد شخصی",
          "ثبت تمرینات",
          "پیگیری پیشرفت",
          "گزارش‌های پایه",
        ],
      },
      {
        id: "pro",
        name: "حرفه‌ای",
        price: "۲۹۹,۰۰۰",
        period: "تومان / ماه",
        description:
          "برای ورزشکارانی که می‌خواهند حرفه‌ای‌تر پیش بروند.",
        features: [
          "تمام امکانات پلن رایگان",
          "برنامه تمرینی اختصاصی",
          "برنامه تغذیه",
          "گزارش‌های پیشرفته",
          "دستیار هوش مصنوعی",
        ],
        popular: true,
      },
      {
        id: "premium",
        name: "پریمیوم",
        price: "۵۹۹,۰۰۰",
        period: "تومان / ماه",
        description:
          "تجربه کامل Fito با امکانات پیشرفته‌تر.",
        features: [
          "تمام امکانات حرفه‌ای",
          "تحلیل هوشمند پیشرفته",
          "گزارش‌های کامل بدن",
          "امکانات اختصاصی بیشتر",
          "پشتیبانی ویژه",
        ],
      },
    ];

    return (
      <>
        <SectionHeader
          icon={CreditCard}
          title="پلن اشتراک"
          description="پلن فعلی و امکانات اشتراک خود را مدیریت کنید."
        />

        {/* CURRENT PLAN */}

        <div className="mb-7 overflow-hidden rounded-[24px] border border-blue-100 bg-gradient-to-l from-blue-50 to-white p-6">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#007BFF] text-white shadow-lg shadow-blue-100">
                <Crown size={25} />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-[#1F2937]">
                    پلن حرفه‌ای
                  </h3>

                  <span className="rounded-full bg-green-50 px-3 py-1 text-[11px] font-medium text-green-600">
                    فعال
                  </span>
                </div>

                <p className="mt-1 text-sm text-[#8A919B]">
                  اشتراک شما تا ۳۰ روز دیگر فعال است.
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-[#9CA3AF]">
                تمدید بعدی
              </p>

              <p className="mt-1 font-bold text-[#1F2937]">
                ۳۰ مهر ۱۴۰۵
              </p>
            </div>
          </div>
        </div>

        {/* PLANS */}

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
          {plans.map((plan) => (
            <SubscriptionCard
              key={plan.id}
              {...plan}
              active={activePlan === plan.id}
              onSelect={() => setActivePlan(plan.id)}
            />
          ))}
        </div>
      </>
    );
  };

  /* =========================================================
     NOTIFICATIONS
  ========================================================= */

  const renderNotifications = () => {
    return (
      <>
        <SectionHeader
          icon={Bell}
          title="اعلانات"
          description="نوع اعلان‌هایی که از Fito دریافت می‌کنید را مدیریت کنید."
        />

        <div className="space-y-4">
          <SettingRow
            icon={Dumbbell}
            title="یادآوری تمرین"
            description="قبل از زمان تمرین به شما اطلاع داده شود."
          >
            <Toggle
              enabled={notifications.workout}
              onChange={(value) =>
                setNotifications({
                  ...notifications,
                  workout: value,
                })
              }
            />
          </SettingRow>

          <SettingRow
            icon={Activity}
            title="پیشرفت ورزشی"
            description="گزارش‌ها و تغییرات پیشرفت شما."
          >
            <Toggle
              enabled={notifications.progress}
              onChange={(value) =>
                setNotifications({
                  ...notifications,
                  progress: value,
                })
              }
            />
          </SettingRow>

          <SettingRow
            icon={User}
            title="پیام مربی"
            description="وقتی مربی برای شما پیامی ارسال می‌کند."
          >
            <Toggle
              enabled={notifications.coach}
              onChange={(value) =>
                setNotifications({
                  ...notifications,
                  coach: value,
                })
              }
            />
          </SettingRow>

          <SettingRow
            icon={Mail}
            title="پیام‌ها"
            description="اعلان مربوط به پیام‌های جدید."
          >
            <Toggle
              enabled={notifications.messages}
              onChange={(value) =>
                setNotifications({
                  ...notifications,
                  messages: value,
                })
              }
            />
          </SettingRow>

          <SettingRow
            icon={Target}
            title="یادآوری اهداف"
            description="برای رسیدن به اهداف روزانه خود یادآوری دریافت کنید."
          >
            <Toggle
              enabled={notifications.reminders}
              onChange={(value) =>
                setNotifications({
                  ...notifications,
                  reminders: value,
                })
              }
            />
          </SettingRow>

          <SettingRow
            icon={Bell}
            title="اعلان‌های تبلیغاتی"
            description="پیشنهادها، تخفیف‌ها و اخبار Fito."
          >
            <Toggle
              enabled={notifications.marketing}
              onChange={(value) =>
                setNotifications({
                  ...notifications,
                  marketing: value,
                })
              }
            />
          </SettingRow>
        </div>
      </>
    );
  };

  /* =========================================================
     PRIVACY
  ========================================================= */

  const renderPrivacy = () => {
    return (
      <>
        <SectionHeader
          icon={ShieldCheck}
          title="حریم خصوصی"
          description="امنیت حساب و دستگاه‌های متصل خود را مدیریت کنید."
        />

        {/* PASSWORD */}

        <div className="mb-6 rounded-2xl border border-gray-100 bg-white p-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#007BFF]">
              <LockKeyhole size={19} />
            </div>

            <div>
              <h3 className="font-bold text-[#1F2937]">
                تغییر رمز عبور
              </h3>

              <p className="mt-1 text-xs text-[#9CA3AF]">
                رمز عبور حساب خود را تغییر دهید.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="relative">
              <InputField
                label="رمز عبور فعلی"
                type={showPassword ? "text" : "password"}
                value={password.current}
                onChange={(e) =>
                  setPassword({
                    ...password,
                    current: e.target.value,
                  })
                }
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute left-3 top-[39px] text-gray-400"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>

            <InputField
              label="رمز عبور جدید"
              type="password"
              value={password.newPassword}
              onChange={(e) =>
                setPassword({
                  ...password,
                  newPassword: e.target.value,
                })
              }
            />

            <InputField
              label="تکرار رمز عبور جدید"
              type="password"
              value={password.confirm}
              onChange={(e) =>
                setPassword({
                  ...password,
                  confirm: e.target.value,
                })
              }
            />
          </div>

          <button
            type="button"
            className="mt-5 flex items-center gap-2 rounded-xl bg-[#007BFF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            <LockKeyhole size={17} />
            تغییر رمز عبور
          </button>
        </div>

        {/* ACTIVE DEVICES */}

        <div>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-[#1F2937]">
                دستگاه‌های فعال
              </h3>

              <p className="mt-1 text-sm text-[#8A919B]">
                دستگاه‌هایی که در حال حاضر به حساب شما دسترسی دارند.
              </p>
            </div>

            <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-600">
              {devices.length} دستگاه
            </span>
          </div>

          <div className="space-y-4">
            {devices.map((device) => (
              <DeviceCard
                key={device.id}
                {...device}
                onLogout={() => removeDevice(device.id)}
              />
            ))}
          </div>
        </div>

        {/* PRIVACY OPTIONS */}

        <div className="mt-6 space-y-4">
          <SettingRow
            icon={Eye}
            title="نمایش وضعیت آنلاین"
            description="مربی بتواند وضعیت آنلاین شما را مشاهده کند."
          >
            <Toggle
              enabled={settings.showOnlineStatus}
              onChange={(value) =>
                setSettings({
                  ...settings,
                  showOnlineStatus: value,
                })
              }
            />
          </SettingRow>
        </div>
      </>
    );
  };

  /* =========================================================
     SETTINGS
  ========================================================= */

  const renderSettings = () => {
    return (
      <>
        <SectionHeader
          icon={Settings}
          title="تنظیمات"
          description="تنظیمات عمومی تجربه کاربری Fito."
        />

        {/* THEME */}

        <div className="mb-6">
          <h3 className="mb-4 font-bold text-[#1F2937]">
            ظاهر برنامه
          </h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                id: "light",
                title: "روشن",
                icon: Sun,
              },
              {
                id: "dark",
                title: "تاریک",
                icon: Moon,
              },
              {
                id: "system",
                title: "سیستم",
                icon: Monitor,
              },
            ].map((item) => {
              const Icon = item.icon;
              const active = theme === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTheme(item.id)}
                  className={`relative rounded-2xl border p-5 text-right transition ${
                    active
                      ? "border-[#007BFF] bg-blue-50/50 ring-4 ring-blue-50"
                      : "border-gray-100 bg-white hover:border-blue-100"
                  }`}
                >
                  {active && (
                    <span className="absolute left-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-[#007BFF] text-white">
                      <Check size={14} />
                    </span>
                  )}

                  <div
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${
                      active
                        ? "bg-[#007BFF] text-white"
                        : "bg-gray-50 text-gray-500"
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  <h4 className="font-bold text-[#1F2937]">
                    {item.title}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* GENERAL SETTINGS */}

        <div className="space-y-4">
          <SettingRow
            icon={Dumbbell}
            title="پخش خودکار ویدیوهای تمرین"
            description="ویدیوهای تمرینی هنگام ورود به صفحه پخش شوند."
          >
            <Toggle
              enabled={settings.autoPlayVideos}
              onChange={(value) =>
                setSettings({
                  ...settings,
                  autoPlayVideos: value,
                })
              }
            />
          </SettingRow>

          <SettingRow
            icon={Bell}
            title="یادآوری تمرین"
            description="یادآوری‌های تمرینی داخل برنامه فعال باشد."
          >
            <Toggle
              enabled={settings.workoutReminders}
              onChange={(value) =>
                setSettings({
                  ...settings,
                  workoutReminders: value,
                })
              }
            />
          </SettingRow>

          <SettingRow
            icon={Activity}
            title="یادآوری تغذیه"
            description="یادآوری وعده‌های غذایی در برنامه نمایش داده شود."
          >
            <Toggle
              enabled={settings.nutritionReminders}
              onChange={(value) =>
                setSettings({
                  ...settings,
                  nutritionReminders: value,
                })
              }
            />
          </SettingRow>

          <SettingRow
            icon={Globe}
            title="زبان"
            description="زبان رابط کاربری Fito."
          >
            <select
              value={settings.language}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  language: e.target.value,
                })
              }
              className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#007BFF]"
            >
              <option value="fa">فارسی</option>
              <option value="en">English</option>
            </select>
          </SettingRow>
        </div>
      </>
    );
  };

  /* =========================================================
     CONTENT
  ========================================================= */

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return renderProfile();

      case "subscription":
        return renderSubscription();

      case "notifications":
        return renderNotifications();

      case "privacy":
        return renderPrivacy();

      case "settings":
        return renderSettings();

      default:
        return null;
    }
  };

  /* =========================================================
     UI
  ========================================================= */

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#F5F7FB] px-4 py-6 md:px-8"
    >
      <div className="mx-auto w-full max-w-[1500px]">

        {/* HEADER */}

        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">
              تنظیمات حساب
            </h1>

            <p className="mt-2 text-sm text-[#8A919B]">
              اطلاعات حساب و تجربه استفاده از Fito را مدیریت کنید.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#007BFF] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-600"
          >
            <Save size={18} />
            ذخیره تغییرات
          </button>
        </div>

        {/* TABS */}

        <div className="mb-6 overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
          <div className="scrollbar-hide flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex min-w-[150px] shrink-0 items-center justify-center gap-2.5 px-5 py-5 text-sm font-medium transition-all ${
                    active
                      ? "bg-blue-50/40 text-[#007BFF]"
                      : "text-[#7C8490] hover:bg-gray-50 hover:text-[#1F2937]"
                  }`}
                >
                  <Icon size={18} />

                  <span>{tab.title}</span>

                  {active && (
                    <span className="absolute bottom-0 right-5 left-5 h-[3px] rounded-full bg-[#007BFF]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTENT */}

        <div className="rounded-[28px] border border-gray-100 bg-white p-5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] md:p-8">
          {renderContent()}
        </div>

        {/* SAVE */}

        <div className="mt-5 flex justify-end">
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-[#007BFF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-600"
          >
            <Save size={18} />
            ذخیره تغییرات
          </button>
        </div>
      </div>
    </div>
  );
}