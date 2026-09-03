import React from "react";
import ImageAi from "../../assets/imges/image 20.png"
import ImgAiAnswer from "../../assets/imges/Frame 2147223398.png"
import RectangleAnswer from "../../assets/imges/Rectangle 17837.png"
export default function AIAnalysisCard() {


    return (
        <div className="bg-[#007BFF] rounded-[32px] p-5 h-full relative overflow-hidden">
            <div className="flex">
                <img className="size-60" src={ImageAi} alt="" />

                <div className="flex-col mr-3 mt-8">
                    <h1 className="text-3xl text-white">تحلیل هوشمند</h1>
                    <h3 className="text-white font-primary-light">بر اساس اخرین داده های شما</h3>
                    <div className="flex justify-center items-center gap-3">
                    <img className="w-3 h-15" src={RectangleAnswer} alt="" />
                    <p className="text-white font-primary-ExtraLight my-4">روند کلی بدن شما در وضعیت عالی قرار دارد. در ماه گذشته موفق به کاهش ۱.۵ کیلوگرم چربی و افزایش ۰.۵ کیلوگرم توده عضلانی شده‌اید. </p>
                    </div>
                    <img className="w-80"  src={ImgAiAnswer} alt="" />
                </div>
            </div>
        </div>
    );
}