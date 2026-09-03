import React, { useState } from "react";
import ImageAi from "../../assets/imges/image 20.png";
import ImgAiAnswer from "../../assets/imges/Frame 2147223398.png";
import RectangleAnswer from "../../assets/imges/Rectangle 17837.png";

export default function AIAnalysisCard() {
    const [isActive, setIsActive] = useState(false);

    // اطلاعات کامل تحلیل
    const analysisData = {
        summary:
            "روند کلی بدن شما در وضعیت عالی قرار دارد. در ماه گذشته موفق به کاهش ۱.۵ کیلوگرم چربی و افزایش ۰.۵ کیلوگرم توده عضلانی شده‌اید.",
        details: [
            { label: "وزن فعلی", value: "۷۲.۵ کیلوگرم" },
            { label: "درصد چربی بدن", value: "۱۸٪ (کاهش ۱.۲٪)" },
            { label: "توده عضلانی", value: "۳۴.۲ کیلوگرم (افزایش ۰.۵)" },
            { label: "آب بدن", value: "۵۵٪" },
            { label: "BMI", value: "۲۳.۱ - محدوده سالم" },
            { label: "متابولیسم پایه", value: "۱۶۸۰ کالری" },
        ],
        recommendation:
            "پیشنهاد: برای ادامه این روند مثبت، تمرینات مقاومتی را حفظ کنید و مصرف پروتئین روزانه را در حدود ۱.۶ گرم به ازای هر کیلوگرم وزن بدن نگه دارید.",
    };

    return (
        <div className="bg-[#007BFF] rounded-[32px] p-5 h-full relative overflow-hidden">
            <div className="flex">
                <img className="size-60" src={ImageAi} alt="" />

                <div className="flex-col mr-3 mt-8">
                    <h1 className="text-3xl text-white">تحلیل هوشمند</h1>
                    <h3 className="text-white font-primary-light">
                        بر اساس آخرین داده‌های شما
                    </h3>

                    {isActive ? (
                        <>
                            {/* خلاصه تحلیل */}
                            <div className="flex justify-center items-center gap-3">
                                <img className="w-3 h-15" src={RectangleAnswer} alt="" />
                                <p className="text-white font-primary-ExtraLight my-4">
                                    {analysisData.summary}
                                </p>
                            </div>

                            {/* جزئیات کامل */}
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2 my-4">
                                {analysisData.details.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <span className="text-white/70 font-primary-light text-sm">
                                            {item.label}:
                                        </span>
                                        <span className="text-white font-primary-medium text-sm">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* پیشنهاد هوشمند */}
                            <p className="text-white font-primary-ExtraLight text-sm bg-white/10 rounded-2xl p-3 mb-4">
                                {analysisData.recommendation}
                            </p>

                            <img className="w-80" src={ImgAiAnswer} alt="" />

                            <button
                                onClick={() => setIsActive(false)}
                                className="mt-3 text-white font-primary-light text-sm underline"
                            >
                                بستن جزئیات
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => setIsActive(true)}
                            className="mt-4 bg-white text-[#007BFF] font-primary-medium rounded-full px-6 py-2 hover:bg-blue-50 transition-colors"
                        >
                            مشاهده تحلیل کامل
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}