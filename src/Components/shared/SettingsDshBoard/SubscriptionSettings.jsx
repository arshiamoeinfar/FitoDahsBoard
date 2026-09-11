import { useState } from "react";

const plans = [
  {
    id: "free",
    name: "رایگان",
    price: "0",
    description: "برای شروع مسیر تناسب اندام",
    features: [
      "برنامه تمرینی پایه",
      "ثبت تمرینات",
      "پیگیری پیشرفت",
      "آنالیز اولیه بدن",
    ],
  },
  {
    id: "pro",
    name: "پرو",
    price: "۱۹۹ هزار",
    description: "برای ورزشکارانی که جدی‌تر تمرین می‌کنند",
    popular: true,
    features: [
      "تمام امکانات پلن رایگان",
      "آنالیز پیشرفته بدن",
      "گزارش پیشرفت",
      "دسترسی به AI Coach",
      "برنامه تغذیه",
    ],
  },
  {
    id: "premium",
    name: "پریمیوم",
    price: "۳۹۹ هزار",
    description: "تجربه کامل Fito",
    features: [
      "تمام امکانات پلن پرو",
      "AI Coach پیشرفته",
      "تحلیل کامل پیشرفت",
      "پیشنهادهای شخصی‌سازی شده",
      "گزارش‌های حرفه‌ای",
    ],
  },
];

const SubscriptionSettings = () => {
  const [selectedPlan, setSelectedPlan] = useState("pro");

  return (
    <div className="bg-white rounded-4xl p-8">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <span className="text-2xl">👑</span>

          <h2 className="text-2xl text-[#6B6F77] font-medium">
            پلن اشتراک
          </h2>
        </div>

        <p className="text-[#A0A4AA] text-sm mt-3">
          پلن مناسب خود را انتخاب کنید و امکانات بیشتری دریافت کنید
        </p>
      </div>

      {/* Current Plan */}
      <div className="bg-[#F3F8FF] border border-[#DBECFF] rounded-3xl p-6 mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm text-[#A0A4AA] mb-2">
            پلن فعلی شما
          </p>

          <h3 className="text-xl text-[#007BFF]">
            پلن حرفه‌ای
          </h3>
        </div>

        <div className="text-left">
          <p className="text-sm text-[#A0A4AA]">
            اعتبار تا
          </p>

          <span className="text-[#6B6F77]">
            ۳۰ مهر ۱۴۰۵
          </span>
        </div>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const isSelected = selectedPlan === plan.id;

          return (
            <div
              key={plan.id}
              className={`relative rounded-3xl border-2 p-6 transition-all duration-300 ${
                isSelected
                  ? "border-[#007BFF] bg-[#F8FBFF]"
                  : "border-[#F0F0F0]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-6 bg-[#007BFF] text-white text-xs px-4 py-1 rounded-full">
                  محبوب‌ترین
                </span>
              )}

              <h3 className="text-xl text-[#6B6F77]">
                {plan.name}
              </h3>

              <p className="text-sm text-[#A0A4AA] mt-2">
                {plan.description}
              </p>

              <div className="my-6">
                <span className="text-2xl text-[#007BFF]">
                  {plan.price}
                </span>

                {plan.id !== "free" && (
                  <span className="text-sm text-[#A0A4AA] mr-2">
                    تومان / ماه
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-[#6B6F77]"
                  >
                    <span className="text-[#63AF42]">✓</span>
                    {feature}
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full h-12 rounded-full mt-7 transition cursor-pointer ${
                  isSelected
                    ? "bg-[#007BFF] text-white"
                    : "bg-[#F3F8FF] text-[#007BFF]"
                }`}
              >
                {isSelected ? "پلن انتخاب شده" : "انتخاب پلن"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubscriptionSettings;