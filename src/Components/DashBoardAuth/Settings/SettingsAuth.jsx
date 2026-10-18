import React, { useState } from "react";
import { ThemeProvider, useTheme } from "../../../context/ThemeContext.jsx";
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
import ThemeSwitcher from "../../shared/ThemeSwitcher/ThemeSwitcher.jsx";

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
        enabled ? "bg-primary" : "bg-muted/30"
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
    <div className="flex items-center justify-between gap-5 rounded-2xl border border-border bg-surface p-5 transition hover:border-primary/40">
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon size={20} />
        </div>

        <div className="min-w-0">
          <h4 className="font-semibold text-foreground">
            {title}
          </h4>

          {description && (
            <p className="mt-1 text-sm leading-6 text-muted">
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
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon size={20} />
      </div>

      <div>
        <h2 className="text-lg font-bold text-foreground">
          {title}
        </h2>

        <p className="mt-1 text-sm text-muted">
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
      <label className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-primary focus:ring-4 focus:ring-primary/20"
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
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5 transition hover:border-primary/40 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-secondary text-foreground">
          <Icon size={22} />
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-bold text-foreground">
              {title}
            </h4>

            {current && (
              <span className="rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-medium text-success">
                دستگاه فعلی
              </span>
            )}
          </div>

          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted">
            <span>{browser}</span>
            <span>•</span>
            <span>{location}</span>
          </div>

          <div className="mt-2 flex items-center gap-2 text-xs text-muted">
            <span
              className={`h-2 w-2 rounded-full ${
                current ? "bg-success" : "bg-muted/40"
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
          className="flex items-center justify-center gap-2 rounded-xl bg-danger/10 px-4 py-2.5 text-xs font-semibold text-danger transition hover:bg-danger/20"
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
          ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
          : "border-border bg-surface hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 right-6 rounded-full bg-primary px-4 py-1.5 text-[11px] font-bold text-white shadow-md shadow-primary/20">
          محبوب‌ترین پلن
        </div>
      )}

      {active && (
        <div className="absolute left-5 top-5 flex items-center gap-1 rounded-full bg-success/10 px-3 py-1.5 text-[11px] font-medium text-success">
          <CheckCircle2 size={13} />
          پلن فعلی
        </div>
      )}

      <div className="mb-5">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Crown size={22} />
        </div>

        <h3 className="text-xl font-bold text-foreground">
          {name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-muted">
          {description}
        </p>
      </div>

      <div className="mb-6">
        <span className="text-3xl font-bold text-foreground">
          {price}
        </span>

        <span className="mr-1 text-sm text-muted">
          {period}
        </span>
      </div>

      <div className="mb-7 space-y-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm text-foreground/80"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
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
            ? "cursor-default bg-success/10 text-success"
            : "bg-primary text-white hover:bg-primary-hover"
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

  const { theme, setTheme } = useTheme();

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

        <div className="mb-7 flex flex-col gap-5 rounded-2xl border border-border  p-5 sm:flex-row sm:items-center">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-[22px] bg-primary/10 text-3xl font-bold text-primary">
              ا
            </div>

            <button
              type="button"
              className="absolute -bottom-2 -left-2 flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 transition hover:bg-primary-hover"
            >
              <Camera size={17} />
            </button>
          </div>

          <div>
            <h3 className="font-bold text-foreground">
              تصویر پروفایل
            </h3>

            <p className="mt-1 text-sm text-muted">
              تصویر پروفایل خود را برای حساب Fito انتخاب کنید.
            </p>

            <button
              type="button"
              className="mt-3 rounded-xl border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              تغییر تصویر
            </button>
          </div>
        </div>

        {/* PERSONAL INFO */}

        <div className="mb-7">
          <h3 className="mb-4 font-bold text-foreground">
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
          <h3 className="mb-4 font-bold text-foreground">
            خلاصه وضعیت
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-5">
              <Dumbbell
                size={21}
                className="mb-4 text-primary"
              />

              <p className="text-sm text-muted">
                تمرین در هفته
              </p>

              <p className="mt-2 text-xl font-bold text-foreground">
                ۴ روز
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-5">
              <Activity
                size={21}
                className="mb-4 text-primary"
              />

              <p className="text-sm text-muted">
                وزن فعلی
              </p>

              <p className="mt-2 text-xl font-bold text-foreground">
                ۷۸ kg
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-5">
              <Target
                size={21}
                className="mb-4 text-primary"
              />

              <p className="text-sm text-muted">
                هدف
              </p>

              <p className="mt-2 text-xl font-bold text-foreground">
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

        <div className="mb-7 overflow-hidden rounded-[24px] border border-primary/30 p-6 bg-surface">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                <Crown size={25} />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-foreground">
                    پلن حرفه‌ای
                  </h3>

                  <span className="rounded-full bg-success/10 px-3 py-1 text-[11px] font-medium text-success">
                    فعال
                  </span>
                </div>

                <p className="mt-1 text-sm text-muted">
                  اشتراک شما تا ۳۰ روز دیگر فعال است.
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-muted">
                تمدید بعدی
              </p>

              <p className="mt-1 font-bold text-foreground">
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

        <div className="mb-6 rounded-2xl border border-border bg-surface p-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <LockKeyhole size={19} />
            </div>

            <div>
              <h3 className="font-bold text-foreground">
                تغییر رمز عبور
              </h3>

              <p className="mt-1 text-xs text-muted">
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
                className="absolute left-3 top-[39px] text-muted"
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
            className="mt-5 flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
          >
            <LockKeyhole size={17} />
            تغییر رمز عبور
          </button>
        </div>

        {/* ACTIVE DEVICES */}

        <div>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-foreground">
                دستگاه‌های فعال
              </h3>

              <p className="mt-1 text-sm text-muted">
                دستگاه‌هایی که در حال حاضر به حساب شما دسترسی دارند.
              </p>
            </div>

            <span className="rounded-full bg-success/10 px-3 py-1.5 text-xs font-medium text-success">
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
          <h3 className="mb-4 font-bold text-foreground">
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
                      ? "border-primary bg-primary/10 "
                      : "border-border bg-surface hover:border-primary/40"
                  }`}
                >
                  {active && (
                    <span className="absolute left-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                      <Check size={14} />
                    </span>
                  )}

                  <div
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${
                      active
                        ? "bg-primary text-white"
                        : "bg-surface-secondary text-muted"
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  <h4 className="font-bold text-foreground">
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
              className="rounded-xl border border-border bg-input px-4 py-2.5 text-sm outline-none focus:border-primary"
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
      className="min-h-screen bg-background px-4 py-6 md:px-8"
    >
      <div className="mx-auto w-full max-w-[1500px]">

        {/* HEADER */}

        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-muted">
              تنظیمات حساب
            </h1>

            <p className="mt-2 text-sm text-muted">
              اطلاعات حساب و تجربه استفاده از Fito را مدیریت کنید.
            </p>
          </div>
          <div className="flex gap-3">

          <ThemeSwitcher/>
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-hover"
            >
            <Save size={18} />
            ذخیره تغییرات
          </button>
          </div>
        </div>

        {/* TABS */}

        <div className="mb-6 overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
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
                      ? "bg-primary/10 text-primary"
                      : "text-muted hover:bg-surface-secondary hover:text-foreground"
                  }`}
                >
                  <Icon size={18} />

                  <span>{tab.title}</span>

                  {active && (
                    <span className="absolute bottom-0 right-5 left-5 h-[3px] rounded-full bg-primary" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTENT */}

        <div className="rounded-3xl border border-border bg-surface p-5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] md:p-8">
          {renderContent()}
        </div>

        {/* SAVE */}

        <div className="mt-5 flex justify-end">
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-hover"
          >
            <Save size={18} />
            ذخیره تغییرات
          </button>
        </div>
      </div>
    </div>
  );
}