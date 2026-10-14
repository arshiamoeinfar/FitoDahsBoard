import React, { useEffect, useState } from "react";

/* =========================
   Fade In Up
========================= */

function FadeInUp({ children, delay = 0, className = "" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-1000 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* =========================
   Icons
========================= */

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="transition-transform group-hover:-translate-x-1"
    >
      <path
        d="M19 12H5M12 19L5 12L12 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12L10 17L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 12H7L10 4L14 20L17 12H21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DumbbellIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 9V15M18 9V15M3 10V14M21 10V14M6 12H18M8 7V17M16 7V17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22C16.4 22 20 18.7 20 14.5C20 10.8 17.8 8.1 15.3 5.4C14.5 4.5 13.5 3.2 13.1 2C10.7 4.2 9.5 6.3 9.7 9C8.4 8.3 7.5 7.2 7 6C5.4 8 4 10.5 4 13.7C4 18.3 7.5 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WaterIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3C12 3 6 10 6 14.5C6 18.1 8.7 21 12 21C15.3 21 18 18.1 18 14.5C18 10 12 3 12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

/* =========================
   Fito Logo
========================= */

function FitoLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[#007BFF] shadow-[0_0_30px_rgba(0,123,255,0.35)]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 5V19M17 5V19M4 8V16M20 8V16M7 12H17"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <span className="text-xl font-bold tracking-tight text-white">
        Fito
      </span>
    </div>
  );
}

/* =========================
   Circular Progress
========================= */

function CircularProgress({ value }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative h-28 w-28">
      <svg className="h-full w-full -rotate-90">
        <circle
          cx="56"
          cy="56"
          r={radius}
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="8"
          fill="none"
        />

        <circle
          cx="56"
          cy="56"
          r={radius}
          stroke="#007BFF"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-white">{value}%</span>
        <span className="text-[10px] text-white/40">امروز</span>
      </div>
    </div>
  );
}

/* =========================
   Dashboard Preview
========================= */

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#007BFF]/20 blur-[120px]" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#090d13]/95 p-4 shadow-2xl shadow-black">
        {/* Fake browser bar */}
        <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>

          <span className="text-[10px] text-white/20">
            fito.app/dashboard
          </span>
        </div>

        {/* Dashboard */}
        <div className="grid gap-3 md:grid-cols-[1.15fr_0.85fr]">
          {/* Left */}
          <div className="space-y-3">
            {/* Profile */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.035] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#007BFF] to-blue-900 text-sm font-bold">
                    AM
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Arshia Moeinfar
                    </p>
                    <p className="mt-0.5 text-[10px] text-white/35">
                      Athlete
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-[#007BFF]/10 px-2.5 py-1 text-[9px] text-[#4da3ff]">
                  فعال
                </span>
              </div>
            </div>

            {/* Workout */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.035] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-white/35">
                    تمرین امروز
                  </p>
                  <h3 className="mt-1 text-base font-bold text-white">
                    Chest & Triceps
                  </h3>
                </div>

                <div className="rounded-xl bg-[#007BFF]/10 p-2 text-[#007BFF]">
                  <DumbbellIcon />
                </div>
              </div>

              <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-[68%] rounded-full bg-[#007BFF]" />
              </div>

              <div className="flex items-center justify-between text-[10px] text-white/35">
                <span>4 از 6 حرکت</span>
                <span>48 دقیقه</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              <MiniStat
                icon={<FlameIcon />}
                title="کالری"
                value="1,840"
                unit="kcal"
              />

              <MiniStat
                icon={<WaterIcon />}
                title="آب"
                value="2.4"
                unit="L"
              />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-3">
            {/* Goal */}
            <div className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.035] p-5">
              <div className="mb-3 flex w-full items-center justify-between">
                <span className="text-[10px] text-white/35">
                  هدف روزانه
                </span>

                <ActivityIcon />
              </div>

              <CircularProgress value={72} />

              <p className="mt-2 text-xs font-medium text-white">
                عملکرد عالی!
              </p>

              <p className="mt-1 text-[9px] text-white/30">
                3 هدف دیگر تا پایان روز
              </p>
            </div>

            {/* Progress */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.035] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-white/35">
                    پیشرفت بدن
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">
                    +12.8%
                  </p>
                </div>

                <span className="rounded-lg bg-emerald-500/10 px-2 py-1 text-[9px] text-emerald-400">
                  +2.4%
                </span>
              </div>

              {/* Fake chart */}
              <div className="flex h-20 items-end gap-1.5">
                {[35, 42, 39, 50, 47, 63, 58, 72, 67, 82, 78, 92].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-md bg-[#007BFF]/30 transition-all duration-300 hover:bg-[#007BFF]"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating AI card */}
      <div className="absolute -bottom-7 -left-5 hidden w-48 rounded-2xl border border-white/10 bg-[#0b1017]/95 p-3 shadow-2xl backdrop-blur-xl sm:block">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#007BFF] text-xs">
            ✦
          </div>

          <div>
            <p className="text-[10px] font-semibold text-white">
              Fito AI
            </p>
            <p className="text-[8px] text-white/30">
              دستیار هوشمند
            </p>
          </div>
        </div>

        <p className="text-[9px] leading-5 text-white/50">
          بر اساس تمرین امروز، زمان مناسبی برای وعده بعدی شماست.
        </p>
      </div>
    </div>
  );
}

function MiniStat({ icon, title, value, unit }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.035] p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[#007BFF]">{icon}</span>
        <span className="text-[9px] text-white/30">{title}</span>
      </div>

      <div className="flex items-end gap-1">
        <span className="text-base font-bold text-white">{value}</span>
        <span className="mb-0.5 text-[9px] text-white/30">{unit}</span>
      </div>
    </div>
  );
}

/* =========================
   Feature Card
========================= */

function FeatureCard({ icon, title, description, large = false }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#007BFF]/30 hover:bg-white/[0.045] ${
        large ? "md:p-8" : ""
      }`}
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#007BFF]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#007BFF]/20 bg-[#007BFF]/10 text-[#007BFF]">
          {icon}
        </div>

        <h3 className="mb-3 text-lg font-bold text-white">
          {title}
        </h3>

        <p className="text-sm leading-7 text-white/40">
          {description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-xs text-[#007BFF]">
          <span>بیشتر بدانید</span>
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
}

/* =========================
   Home
========================= */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen overflow-x-hidden bg-black text-white"
    >
      {/* ================= NAVBAR ================= */}

      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/5 bg-black/75 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 lg:px-8">
          <button onClick={() => scrollTo("home")}>
            <FitoLogo />
          </button>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {[
              ["خانه", "home"],
              ["امکانات", "features"],
              ["تمرین", "workout"],
              ["تغذیه", "nutrition"],
              ["مربیان", "coaches"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm text-white/50 transition hover:text-white"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-xl px-4 py-2.5 text-sm text-white/60 transition hover:text-white">
              ورود
            </button>

            <button className="rounded-xl bg-[#007BFF] px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-[#007BFF]/20 transition hover:bg-[#006fe6]">
              شروع رایگان
            </button>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 md:hidden"
          >
            <div className="space-y-1.5">
              <span className="block h-px w-5 bg-white" />
              <span className="block h-px w-5 bg-white" />
              <span className="block h-px w-3 bg-white" />
            </div>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/5 bg-black/95 px-5 py-5 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4">
              {[
                ["خانه", "home"],
                ["امکانات", "features"],
                ["تمرین", "workout"],
                ["تغذیه", "nutrition"],
                ["مربیان", "coaches"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="border-b border-white/5 pb-3 text-right text-sm text-white/60"
                >
                  {label}
                </button>
              ))}

              <button className="mt-2 rounded-xl bg-[#007BFF] py-3 text-sm font-medium">
                شروع رایگان
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}

      <main id="home">
        <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-36 lg:px-8 lg:pt-44">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-200px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#007BFF]/10 blur-[160px]" />

            <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-blue-900/10 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-[1400px]">
            <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Text */}
              <FadeInUp className="order-2 text-center lg:order-1 lg:text-right">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#007BFF]/20 bg-[#007BFF]/5 px-4 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#007BFF] shadow-[0_0_10px_#007BFF]" />

                  <span className="text-xs text-[#4da3ff]">
                    آینده فیتنس از اینجا شروع می‌شود
                  </span>
                </div>

                <h1 className="max-w-2xl text-5xl font-black leading-[1.2] tracking-tight sm:text-6xl lg:text-7xl">
                  بدنت رو بساز.
                  <br />
                  <span className="bg-gradient-to-l from-[#007BFF] to-[#55adff] bg-clip-text text-transparent">
                    پیشرفتت رو هوشمند کن.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-base leading-8 text-white/40 sm:text-lg">
                  فیتو، مسیر تمرین، تغذیه و پیشرفتت رو در یک پلتفرم
                  هوشمند مدیریت می‌کنه؛ چه ورزشکار باشی، چه مربی.
                </p>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                  <button className="group flex items-center justify-center gap-3 rounded-xl bg-[#007BFF] px-7 py-4 text-sm font-bold shadow-[0_10px_40px_rgba(0,123,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#006fe6]">
                    شروع رایگان
                    <ArrowIcon />
                  </button>

                  <button
                    onClick={() => scrollTo("features")}
                    className="group flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white/80 transition hover:bg-white/[0.07]"
                  >
                    <PlayIcon />
                    آشنایی با فیتو
                  </button>
                </div>

                <div className="mt-10 flex items-center justify-center gap-7 text-xs text-white/30 lg:justify-start">
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    بدون نیاز به کارت بانکی
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    شروع رایگان
                  </div>
                </div>
              </FadeInUp>

              {/* Dashboard */}
              <FadeInUp delay={250} className="order-1 lg:order-2">
                <DashboardPreview />
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}

        <section className="border-y border-white/5 bg-white/[0.015]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 divide-x divide-white/5 lg:grid-cols-4">
            {[
              ["10K+", "ورزشکار فعال"],
              ["500+", "مربی"],
              ["50K+", "برنامه تمرینی"],
              ["98%", "رضایت کاربران"],
            ].map(([number, label], index) => (
              <FadeInUp
                key={label}
                delay={index * 100}
                className="px-5 py-10 text-center"
              >
                <div className="text-3xl font-black text-white lg:text-4xl">
                  {number}
                </div>

                <div className="mt-2 text-xs text-white/30">
                  {label}
                </div>
              </FadeInUp>
            ))}
          </div>
        </section>

        {/* ================= FEATURES ================= */}

        <section id="features" className="px-5 py-28 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <FadeInUp className="mb-14 text-center">
              <span className="text-xs font-medium text-[#007BFF]">
                امکانات فیتو
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                همه چیز برای پیشرفت،
                <br />
                <span className="text-white/35">یکجا.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/35">
                از اولین تمرین تا آخرین تغییر بدن، فیتو تمام مسیر
                پیشرفتت رو در یک محیط ساده و هوشمند مدیریت می‌کنه.
              </p>
            </FadeInUp>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <FadeInUp>
                <FeatureCard
                  icon={<DumbbellIcon />}
                  title="برنامه تمرینی"
                  description="برنامه‌های تمرینی اختصاصی، روزهای تمرین و حرکاتت رو به ساده‌ترین شکل مدیریت کن."
                />
              </FadeInUp>

              <FadeInUp delay={100}>
                <FeatureCard
                  icon={<FlameIcon />}
                  title="تغذیه هوشمند"
                  description="کالری، پروتئین، کربوهیدرات، چربی و وعده‌های غذایی رو همیشه تحت کنترل داشته باش."
                />
              </FadeInUp>

              <FadeInUp delay={200}>
                <FeatureCard
                  icon={<ActivityIcon />}
                  title="آنالیز بدن"
                  description="تغییرات بدن، اندازه‌گیری‌ها و وضعیت عضلاتت رو در طول زمان بررسی کن."
                />
              </FadeInUp>

              <FadeInUp delay={300}>
                <FeatureCard
                  icon={
                    <span className="text-xl font-bold">
                      ✦
                    </span>
                  }
                  title="دستیار هوش مصنوعی"
                  description="یک دستیار هوشمند که با توجه به اطلاعات و مسیر پیشرفتت بهت کمک می‌کنه."
                />
              </FadeInUp>

              <FadeInUp delay={400}>
                <FeatureCard
                  icon={
                    <svg width="22" height="22" viewBox="0 0 24 24">
                      <path
                        d="M20 11.5C20 15.64 16.42 19 12 19C10.7 19 9.48 18.7 8.42 18.15L4 20L5.35 16.2C4.5 14.9 4 13.4 4 11.8C4 7.5 7.58 4 12 4C16.42 4 20 7.36 20 11.5Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>
                  }
                  title="ارتباط مربی و ورزشکار"
                  description="مربی و ورزشکار همیشه در ارتباط هستند؛ برنامه‌ها، پیام‌ها و گزارش‌ها یکجا."
                />
              </FadeInUp>

              <FadeInUp delay={500}>
                <FeatureCard
                  icon={<ActivityIcon />}
                  title="گزارش پیشرفت"
                  description="پیشرفتت رو با نمودارها و اطلاعات واقعی ببین و تغییراتت رو دنبال کن."
                />
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* ================= WORKOUT ================= */}

        <section id="workout" className="relative overflow-hidden px-5 py-28 lg:px-8">
          <div className="absolute right-[-200px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#007BFF]/10 blur-[150px]" />

          <div className="relative mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-2">
            <FadeInUp>
              <span className="text-xs text-[#007BFF]">
                تمرین هوشمند
              </span>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                هر تمرین،
                <br />
                <span className="text-white/35">
                  یک قدم به هدف نزدیک‌تر.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-8 text-white/35">
                برنامه تمرینی خودت رو دریافت کن، حرکات رو ببین،
                عملکردت رو ثبت کن و بدون سردرگمی مسیر پیشرفتت رو ادامه بده.
              </p>

              <button className="mt-8 flex items-center gap-3 text-sm font-medium text-[#007BFF]">
                مشاهده برنامه تمرینی
                <ArrowIcon />
              </button>
            </FadeInUp>

            <FadeInUp delay={200}>
              <div className="rounded-[28px] border border-white/8 bg-[#080c12] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/30">
                      برنامه امروز
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                      Chest & Triceps
                    </h3>
                  </div>

                  <span className="rounded-full bg-[#007BFF]/10 px-3 py-1.5 text-[10px] text-[#4da3ff]">
                    68%
                  </span>
                </div>

                <div className="space-y-2">
                  {[
                    ["Bench Press", "4 × 10", true],
                    ["Incline Dumbbell Press", "3 × 12", true],
                    ["Cable Fly", "3 × 15", true],
                    ["Triceps Pushdown", "3 × 12", false],
                    ["Overhead Extension", "3 × 12", false],
                  ].map(([exercise, sets, done], index) => (
                    <div
                      key={exercise}
                      className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.025] p-3.5"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                            done
                              ? "bg-[#007BFF]/10 text-[#007BFF]"
                              : "bg-white/5 text-white/20"
                          }`}
                        >
                          {done ? <CheckIcon /> : index + 1}
                        </div>

                        <div>
                          <p className="text-xs font-medium">
                            {exercise}
                          </p>

                          <p className="mt-1 text-[9px] text-white/25">
                            {sets}
                          </p>
                        </div>
                      </div>

                      <span className="text-[9px] text-white/20">
                        {done ? "کامل شد" : "بعدی"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* ================= NUTRITION ================= */}

        <section id="nutrition" className="border-y border-white/5 bg-white/[0.015] px-5 py-28 lg:px-8">
          <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-2">
            <FadeInUp className="order-2 lg:order-1">
              <div className="rounded-[28px] border border-white/8 bg-[#080c12] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/30">
                      تغذیه امروز
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                      1,840 kcal
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#007BFF]/10 text-[#007BFF]">
                    <FlameIcon />
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-3 gap-3">
                  {[
                    ["پروتئین", "142g", "71%"],
                    ["کربوهیدرات", "188g", "63%"],
                    ["چربی", "54g", "48%"],
                  ].map(([label, value, percent]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/5 bg-white/[0.025] p-3"
                    >
                      <p className="text-[9px] text-white/30">
                        {label}
                      </p>

                      <p className="mt-2 text-sm font-bold">
                        {value}
                      </p>

                      <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/5">
                        <div
                          className="h-full rounded-full bg-[#007BFF]"
                          style={{ width: percent }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 rounded-2xl border border-white/5 bg-white/[0.025] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-blue-500/10 p-2 text-blue-400">
                        <WaterIcon />
                      </div>

                      <div>
                        <p className="text-xs font-medium">
                          آب مصرفی
                        </p>

                        <p className="mt-1 text-[9px] text-white/25">
                          2.4 از 4 لیتر
                        </p>
                      </div>
                    </div>

                    <span className="text-sm font-bold text-[#007BFF]">
                      60%
                    </span>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={200} className="order-1 lg:order-2">
              <span className="text-xs text-[#007BFF]">
                تغذیه
              </span>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                چیزی که می‌خوری،
                <br />
                <span className="text-white/35">
                  بخشی از پیشرفتته.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-8 text-white/35">
                کالری و درشت‌مغذی‌ها رو کنترل کن، آب مصرفی رو ثبت کن
                و بدون پیچیدگی از برنامه غذایی خودت پیروی کن.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* ================= COACHES ================= */}

        <section id="coaches" className="px-5 py-28 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <FadeInUp className="mx-auto max-w-2xl text-center">
              <span className="text-xs text-[#007BFF]">
                برای مربیان
              </span>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                مربیگری،
                <br />
                <span className="text-white/35">
                  حرفه‌ای‌تر از همیشه.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-8 text-white/35">
                تمام شاگردانت رو از یک داشبورد مدیریت کن، برنامه بساز،
                پیشرفت رو بررسی کن و همیشه با ورزشکارت در ارتباط باش.
              </p>
            </FadeInUp>

            <FadeInUp delay={200} className="mt-14">
              <div className="relative overflow-hidden rounded-[32px] border border-white/8 bg-[#080c12] p-5">
                <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-white/30">
                          داشبورد مربی
                        </p>

                        <h3 className="mt-1 text-lg font-bold">
                          شاگردان من
                        </h3>
                      </div>

                      <span className="rounded-lg bg-[#007BFF]/10 px-2 py-1 text-[9px] text-[#4da3ff]">
                        84 شاگرد
                      </span>
                    </div>

                    <div className="space-y-2">
                      {[
                        ["AM", "Arshia Moeinfar", "فعال"],
                        ["MK", "Milad Karimi", "درحال تمرین"],
                        ["SA", "Sina Ahmadi", "استراحت"],
                        ["RS", "Reza Safari", "فعال"],
                      ].map(([avatar, name, status]) => (
                        <div
                          key={name}
                          className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.025] p-3"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#007BFF]/10 text-[9px] font-bold text-[#4da3ff]">
                              {avatar}
                            </div>

                            <span className="text-[10px] font-medium">
                              {name}
                            </span>
                          </div>

                          <span className="text-[8px] text-white/25">
                            {status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      ["برنامه‌های فعال", "38"],
                      ["برنامه تغذیه", "24"],
                      ["پیام‌های جدید", "12"],
                      ["درصد پیشرفت", "87%"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/5 bg-white/[0.025] p-5"
                      >
                        <p className="text-xs text-white/30">
                          {label}
                        </p>

                        <p className="mt-4 text-3xl font-black">
                          {value}
                        </p>

                        <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/5">
                          <div className="h-full w-[72%] rounded-full bg-[#007BFF]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* ================= AI ================= */}

        <section className="relative overflow-hidden border-y border-white/5 bg-[#03070c] px-5 py-28 lg:px-8">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#007BFF]/10 blur-[150px]" />

          <div className="relative mx-auto grid max-w-[1100px] items-center gap-14 lg:grid-cols-2">
            <FadeInUp>
              <span className="text-xs text-[#007BFF]">
                Fito AI
              </span>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                هوش مصنوعی،
                <br />
                <span className="text-white/35">
                  کنار تو در مسیر پیشرفت.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-8 text-white/35">
                اطلاعات تمرین، تغذیه و مسیر پیشرفتت رو کنار هم قرار بده
                و از یک دستیار هوشمند برای تصمیم‌های بهتر استفاده کن.
              </p>
            </FadeInUp>

            <FadeInUp delay={200}>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_0_80px_rgba(0,123,255,0.08)] backdrop-blur-xl">
                <div className="mb-6 flex items-center gap-3 border-b border-white/5 pb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#007BFF] shadow-lg shadow-[#007BFF]/20">
                    ✦
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      Fito AI
                    </p>

                    <p className="text-[9px] text-white/25">
                      دستیار هوشمند فیتو
                    </p>
                  </div>

                  <span className="mr-auto h-2 w-2 rounded-full bg-emerald-400" />
                </div>

                <div className="space-y-4">
                  <div className="mr-auto max-w-[80%] rounded-2xl rounded-tr-md bg-white/5 p-4">
                    <p className="text-xs leading-6 text-white/60">
                      امروز تمرینم رو انجام دادم، برای وعده بعدی
                      چی بخورم؟
                    </p>
                  </div>

                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tl-md bg-[#007BFF]/10 p-4">
                    <p className="text-xs leading-6 text-white/70">
                      با توجه به تمرین امروزت، یک وعده با پروتئین
                      بالا و کربوهیدرات متعادل می‌تونه انتخاب مناسبی
                      باشه.
                    </p>
                  </div>

                  <div className="flex items-center gap-1 px-2 pt-1">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#007BFF]" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#007BFF] [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#007BFF] [animation-delay:300ms]" />
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/5 bg-black/30 px-4 py-3">
                  <span className="flex-1 text-[10px] text-white/20">
                    از فیتو AI سوال بپرس...
                  </span>

                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#007BFF] text-xs">
                    ↑
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="px-5 py-32 lg:px-8">
          <FadeInUp>
            <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[36px] border border-[#007BFF]/20 bg-[#007BFF]/[0.06] px-6 py-20 text-center">
              <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#007BFF]/10 blur-[100px]" />

              <div className="relative">
                <span className="text-xs text-[#4da3ff]">
                  مسیر جدیدت
                </span>

                <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-black leading-tight sm:text-6xl">
                  آماده‌ای نسخه بهتری
                  <br />
                  از خودت بسازی؟
                </h2>

                <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/35">
                  تمرین، تغذیه و پیشرفتت رو با فیتو هوشمندتر مدیریت کن.
                </p>

                <button className="mt-9 rounded-xl bg-[#007BFF] px-8 py-4 text-sm font-bold shadow-[0_15px_50px_rgba(0,123,255,0.3)] transition hover:-translate-y-1 hover:bg-[#006fe6]">
                  شروع رایگان با فیتو
                </button>
              </div>
            </div>
          </FadeInUp>
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/5 px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <FitoLogo />

          <div className="flex flex-wrap gap-6 text-xs text-white/30">
            <button>امکانات</button>
            <button>مربیان</button>
            <button>ورزشکاران</button>
            <button>درباره فیتو</button>
            <button>تماس با ما</button>
          </div>

          <p className="text-[10px] text-white/20">
            © 2026 Fito. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}