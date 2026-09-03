import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import AIAnalysisCard from "../../Components/AIAnalysisCard/AIAnalysisCard";
import DocumentAdd from "../../assets/Icons/Document Add.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import BodyAnalysisModel from "../../Components/AnalysComponents/BodyAnalysisModel/BodyAnalysisModel";
import Chart from "../../Components/Chart/Chart";
import BodyChangeChart from "../../Components/AnalysComponents/BodyChangeChart/BodyChangeChart";
import NutritionReport from "../../Components/AnalysComponents/NutritionReport/NutritionReport";
import StatCard from "../../Components/DashBoardAuthlete/StatCard/StatCard";
import EvaluationHistory from "../../Components/AnalysComponents/EvaluationHistory/EvaluationHistory";
import AppearanceChanges from "../../Components/AnalysComponents/AppearanceChanges/AppearanceChanges";
import HeaderDashBoard from "../../Components/HeaderDashBoard/HeaderDashBoard";
import imgWalk from "../../assets/imges/walk.png";
export default function AnalysisPage() {
  const changes = [
    {
      title: "وزن",
      value: "+1.2 KG",
      color: "text-[#F04B4B]",
      arrow: "↑",
    },
    {
      title: "چربی بدن",
      value: "-3.2 %",
      color: "text-[#63AF42]",
      arrow: "↓",
    },
    {
      title: "عضله",
      value: "+0.2 KG",
      color: "text-[#63AF42]",
      arrow: "↓",
    },
    {
      title: "آب بدن",
      value: "+1.2 %",
      color: "text-[#63AF42]",
      arrow: "↑",
    },
    {
      title: "قد",
      value: "+1.2 cm",
      color: "text-[#63AF42]",
      arrow: "↑",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FB] flex justify-center">
      <div className="w-full max-w-[1600px] grid grid-cols-[90px_1fr] gap-6 px-8 py-6 bg-[#F5F7FB]">
        <div className="">
          <Navbar />
        </div>

        <div className="py-3 ">
          <div className="grid grid-cols-12 gap-6 ">
            <HeaderDashBoard
              title="تغییر نسبت به قبل"
              description="آخرین بروزرسانی"
              date="۲۳ تیر ۱۴۰۵"
              newStatus="جدید"
              btnTrue={true}
              imgBtn={DocumentAdd}
            />
            <div className="col-span-6">
              <AIAnalysisCard />
            </div>
            <div className="col-span-3">
              <div className="bg-white rounded-4xl p-6 flex flex-col">
                <h2 className="text-2xl  text-[#6B6F77] text-start mb-5">
                  تغییر نسبت به قبل
                </h2>

                <div className="flex-1 flex flex-col justify-between">
                  {changes.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-sm text-[#6B6F77]">
                          {item.title}
                        </span>

                        <div
                          className={`flex items-center gap-2 ${item.color}`}
                        >
                          <span
                            className={`text-2xl leading-none ${item.arrow == "↑" ? "text-[#6BAF41]" : "text-red-600"}`}
                          >
                            {item.arrow}
                          </span>
                          <span
                            className={`text-sm ${item.arrow == "↑" ? "text-[#6BAF41]" : "text-red-600"}`}
                          >
                            {item.value}
                          </span>
                        </div>
                      </div>

                      {index !== changes.length - 1 && (
                        <div className="h-px bg-[#ECECEC] mt-2" />
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-center text-[#A0A4AA] text-sm mt-4">
                  در مقایسه با ۳۰ روز قبل
                </p>
              </div>
            </div>
            <div className="col-span-3 bg-white rounded-3xl p-5">
              <div className="flex justify-between items-center mb-12">
                <h3 className="text-2xl  text-[#6B6F77] text-start">
                  نمره کلی بدن
                </h3>
                <p className="text-[#969696] font-primary-light">
                  وضعیت : <span className="text-[#6BAF41]">عالی</span>
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-52 flex justify-center items-center relative">
                  <CircularProgressbar
                    value={50}
                    text=""
                    strokeWidth={13}
                    styles={buildStyles({
                      pathColor: "#6BAF41",
                      trailColor: "#6BAF411A",
                      strokeLinecap: "round",
                    })}
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-[#6B6F77] text-5xl">
                    50{" "}
                    <span className="text-sm font-primary-light ">از 100</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 flex justify-around">
              <Chart />
              <Chart />
              <Chart />
              <Chart />
            </div>
            <div className="col-span-4 row-span-2">
              <BodyAnalysisModel />
            </div>
            <div className="col-span-8">
              <BodyChangeChart />
            </div>
            <div className="col-span-4 row-span-1">
              <NutritionReport />
            </div>
            <div className="col-span-4">
              <NutritionReport />
            </div>
            <div className="col-span-12 grid grid-cols-5 gap-5">
              <StatCard title={"قدم امروز"} value={"7234"} img={imgWalk} />
              <StatCard title={"قدم امروز"} value={"7234"} img={imgWalk} />
              <StatCard title={"قدم امروز"} value={"7234"} img={imgWalk} />
              <StatCard title={"قدم امروز"} value={"7234"} img={imgWalk} />
              <StatCard title={"قدم امروز"} value={"7234"} img={imgWalk} />
            </div>
            <div className="col-span-6">
              <AppearanceChanges />
            </div>
            <div className="col-span-6">
              <EvaluationHistory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
