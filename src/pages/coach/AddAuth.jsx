import React, { useState } from "react";
import ImgAuth from "../../assets/Icons/auth.svg";
import AddCircle from "../../assets/Icons/Add Circle.svg";

export default function AddAuth() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState("next");

  const nextStep = () => {
    if (step < 3) {
      setDirection("next");
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setDirection("prev");
      setStep((prev) => prev - 1);
    }
  };

  const closeModal = () => {
    setIsOpen(false);

    setTimeout(() => {
      setStep(1);
      setDirection("next");
    }, 250);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-3 bg-surface py-2 px-3 rounded-full">
        <div className="flex items-center gap-1">
          <img src={ImgAuth} alt="students" className="w-6 h-6" />

          <div>
            <h2 className="text-lg flex flex-row-reverse  text-muted">شاگرد <span>17</span></h2>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex  items-center gap-1 bg-primary/20 py-2 px-3 rounded-full text-sm text-primary font-primary cursor-pointer hover:bg-primary/30 transition-colors"
        >
          <img
            src={AddCircle}
            alt="add student"
            className="w-5 h-5 transition-transform duration-300 hover:rotate-90"
          />
          افزودن شاگرد
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-overlay backdrop-blur-md px-4 animate-[fadeIn_.25s_ease-out]"
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl max-h-[92vh] bg-surface rounded-[28px] shadow-2xl overflow-hidden animate-[modalIn_.35s_cubic-bezier(.16,1,.3,1)]"
          >
            <div className="px-7 pt-6 pb-5 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    افزودن شاگرد جدید
                  </h2>

                  <p className="text-sm text-muted mt-1">
                    اطلاعات شاگرد را مرحله به مرحله وارد کنید
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  className="w-10 h-10 rounded-xl bg-surface-secondary hover:bg-red-500/10 hover:text-danger text-muted text-xl transition-all duration-200 active:scale-90"
                >
                  ×
                </button>
              </div>

              <div className="relative mt-7">
                <div className="absolute top-5 right-[16.66%] left-[16.66%] h-[2px] bg-border" />

                <div
                  className="absolute top-5 right-[16.66%] h-[2px] bg-primary transition-all duration-500 ease-out"
                  style={{
                    width:
                      step === 1
                        ? "0%"
                        : step === 2
                        ? "33.33%"
                        : "66.66%",
                  }}
                />

                <div className="relative grid grid-cols-3">
                  <Step
                    number="1"
                    title="اطلاعات شخصی"
                    active={step >= 1}
                    current={step === 1}
                  />

                  <Step
                    number="2"
                    title="اطلاعات بدنی"
                    active={step >= 2}
                    current={step === 2}
                  />

                  <Step
                    number="3"
                    title="ورزش و هدف"
                    active={step >= 3}
                    current={step === 3}
                  />
                </div>
              </div>
            </div>

            <div className="max-h-[calc(92vh-245px)] overflow-y-auto px-7 py-7">
              <div
                key={step}
                className={
                  direction === "next"
                    ? "animate-[slideNext_.35s_cubic-bezier(.16,1,.3,1)]"
                    : "animate-[slidePrev_.35s_cubic-bezier(.16,1,.3,1)]"
                }
              >
                {step === 1 && <StepOne />}
                {step === 2 && <StepTwo />}
                {step === 3 && <StepThree />}
              </div>
            </div>

            <div className="px-7 pb-4 pt-1 border-t border-border bg-surface-secondary">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={step === 1 ? closeModal : prevStep}
                  className="px-6 py-2 rounded-xl border border-border bg-surface text-foreground font-medium hover:bg-surface-secondary active:scale-95 transition-all duration-200"
                >
                  {step === 1 ? "انصراف" : "مرحله قبل"}
                </button>

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="group px-7 py-2 rounded-xl bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:bg-primary-hover active:scale-95 transition-all duration-200 flex items-center gap-2"
                  >
                    ادامه

                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                      ←
                    </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-8 py-2 rounded-xl bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:bg-primary-hover active:scale-95 transition-all duration-200"
                  >
                    افزودن شاگرد
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes modalIn {
            from {
              opacity: 0;
              transform: translateY(25px) scale(.96);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes slideNext {
            from {
              opacity: 0;
              transform: translateX(35px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slidePrev {
            from {
              opacity: 0;
              transform: translateX(-35px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  );
}

function StepOne() {
  return (
    <div className="space-y-8">
      <SectionTitle
        title="اطلاعات شخصی"
        description="اطلاعات پایه شاگرد را وارد کنید"
      />

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-5 rounded-2xl bg-surface-secondary border border-border">
        <div className="w-24 h-24 shrink-0 rounded-full bg-primary/10 border-2 border-dashed border-primary/30 flex items-center justify-center">
          <span className="text-3xl">👤</span>
        </div>

        <div className="text-center sm:text-right">
          <h3 className="font-bold text-foreground">تصویر پروفایل</h3>

          <p className="text-sm text-muted mt-1">
            یک تصویر مناسب برای پروفایل شاگرد انتخاب کنید
          </p>

          <button
            type="button"
            className="mt-3 px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 active:scale-95 transition-all duration-200"
          >
            انتخاب عکس
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input label="نام" placeholder="مثلاً آرشیا" />
        <Input label="نام خانوادگی" placeholder="مثلاً معین‌فر" />

        <Input
          label="شماره تماس"
          placeholder="09xxxxxxxxx"
          type="tel"
        />

        <Input
          label="ایمیل"
          placeholder="example@email.com"
          type="email"
        />

        <Input label="تاریخ تولد" placeholder="1387/01/01" />

        <Select
          label="جنسیت"
          options={["انتخاب جنسیت", "مرد", "زن"]}
        />
      </div>
    </div>
  );
}

function StepTwo() {
  return (
    <div className="space-y-8">
      <SectionTitle
        title="اطلاعات بدنی"
        description="اطلاعات اولیه وضعیت بدنی شاگرد را وارد کنید"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Input
          label="قد"
          placeholder="180"
          suffix="cm"
          type="number"
        />

        <Input
          label="وزن"
          placeholder="75"
          suffix="kg"
          type="number"
        />

        <Input
          label="درصد چربی"
          placeholder="15"
          suffix="%"
          type="number"
        />

        <Input
          label="دور کمر"
          placeholder="80"
          suffix="cm"
          type="number"
        />

        <Input
          label="دور سینه"
          placeholder="100"
          suffix="cm"
          type="number"
        />

        <Input
          label="دور بازو"
          placeholder="35"
          suffix="cm"
          type="number"
        />

        <Input
          label="دور ران"
          placeholder="55"
          suffix="cm"
          type="number"
        />

        <Input
          label="دور باسن"
          placeholder="95"
          suffix="cm"
          type="number"
        />

        <Input
          label="دور ساق"
          placeholder="38"
          suffix="cm"
          type="number"
        />
      </div>

      <div className="p-5 rounded-2xl bg-primary/10 border border-primary/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center">
            📊
          </div>

          <div>
            <h3 className="font-bold text-foreground">
              ارزیابی اولیه
            </h3>

            <p className="text-sm text-muted mt-1">
              اطلاعات دقیق‌تر بدن را می‌توانید بعداً از بخش Body
              Analysis ثبت کنید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepThree() {
  return (
    <div className="space-y-8">
      <SectionTitle
        title="ورزش و هدف"
        description="هدف و سابقه ورزشی شاگرد را مشخص کنید"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Select
          label="سطح ورزشی"
          options={[
            "انتخاب سطح",
            "مبتدی",
            "متوسط",
            "پیشرفته",
            "حرفه‌ای",
          ]}
        />

        <Select
          label="هدف اصلی"
          options={[
            "انتخاب هدف",
            "عضله‌سازی",
            "چربی‌سوزی",
            "افزایش قدرت",
            "تناسب اندام",
            "افزایش حجم",
            "کاهش وزن",
          ]}
        />

        <Input
          label="سابقه تمرین"
          placeholder="مثلاً 2 سال"
        />

        <Input
          label="تعداد جلسات در هفته"
          placeholder="مثلاً 4"
          type="number"
        />

        <Select
          label="نوع تمرین مورد علاقه"
          options={[
            "انتخاب نوع تمرین",
            "بدنسازی",
            "فیتنس",
            "کراس‌فیت",
            "هوازی",
            "پاورلیفتینگ",
          ]}
        />

        <Select
          label="سطح فعالیت روزانه"
          options={[
            "انتخاب فعالیت",
            "کم",
            "متوسط",
            "زیاد",
            "خیلی زیاد",
          ]}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          آسیب‌دیدگی یا محدودیت تمرینی
        </label>

        <textarea
          rows="3"
          placeholder="مثلاً آسیب زانو، محدودیت شانه و..."
          className="w-full rounded-2xl border border-border px-4 py-3 text-sm outline-none resize-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          یادداشت مربی
        </label>

        <textarea
          rows="4"
          placeholder="اهداف، نقاط ضعف، نقاط قوت و نکات مهم درباره شاگرد..."
          className="w-full rounded-2xl border border-border px-4 py-3 text-sm outline-none resize-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-200"
        />
      </div>
    </div>
  );
}

function Step({ number, title, active, current }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`
          w-10 h-10 rounded-full
          flex items-center justify-center
          font-semibold text-sm
          transition-all duration-500
          ${
            active
              ? "bg-primary text-white shadow-lg shadow-primary/20"
              : "bg-surface-secondary text-muted"
          }
          ${current ? "ring-4 ring-primary/30 scale-110" : ""}
        `}
      >
        {active && !current && number < 3 ? "✓" : number}
      </div>

      <span
        className={`
          text-xs sm:text-sm
          font-medium
          transition-colors duration-300
          ${
            current
              ? "text-primary"
              : active
              ? "text-foreground"
              : "text-muted"
          }
        `}
      >
        {title}
      </span>
    </div>
  );
}

function SectionTitle({ title, description }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>

      <p className="text-sm text-muted mt-1">{description}</p>
    </div>
  );
}

function Input({
  label,
  placeholder,
  type = "text",
  suffix,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">
        {label}
      </label>

      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className={`
            w-full h-12
            rounded-xl
            border border-border
            bg-input
            px-4
            text-sm
            text-foreground
            placeholder:text-muted
            outline-none
            transition-all duration-200
            hover:border-primary/40
            focus:border-primary
            focus:ring-4
            focus:ring-primary/5
            ${suffix ? "pl-14" : ""}
          `}
        />

        {suffix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-muted">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">
        {label}
      </label>

      <select
        className="
          w-full h-12
          rounded-xl
          border border-border
          bg-input
          px-4
          text-sm
          text-foreground
          outline-none
          transition-all duration-200
          hover:border-primary/40
          focus:border-primary
          focus:ring-4
          focus:ring-primary/5
        "
      >
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}