import { useState } from "react";
import ImgCalander from "../../../assets/Icons/Calendar.svg";

export default function AssessmentHistory() {
  const [openIndex, setOpenIndex] = useState(null);

  const assessments = [
    {
      date: "۲۳ تیر ۱۴۰۵",
      score: 81,
      weight: "89.5 kg",
      bodyFat: "18.6%",
      muscle: "38.5 kg",
      water: "58.2%",
    },
    {
      date: "۲۰ تیر ۱۴۰۵",
      score: 79,
      weight: "90.2 kg",
      bodyFat: "19.1%",
      muscle: "38.1 kg",
      water: "57.8%",
    },
    {
      date: "۱۵ تیر ۱۴۰۵",
      score: 77,
      weight: "91 kg",
      bodyFat: "19.8%",
      muscle: "37.8 kg",
      water: "57.2%",
    },
    {
      date: "۱۰ تیر ۱۴۰۵",
      score: 75,
      weight: "92.1 kg",
      bodyFat: "20.4%",
      muscle: "37.2 kg",
      water: "56.9%",
    },
    {
      date: "۵ تیر ۱۴۰۵",
      score: 73,
      weight: "93 kg",
      bodyFat: "21.1%",
      muscle: "36.8 kg",
      water: "56.4%",
    },
  ];

  return (
    <div className="bg-white rounded-[32px] p-7">

      {/* Header */}
      <h2 className="text-2xl  text-[#6B6F77] font-primary mb-6">
        تاریخچه ارزیابی‌ها
      </h2>

      <div className="flex flex-col">

        {assessments.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index}>

              {/* Row */}
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="w-full flex items-center justify-between py-5 text-right cursor-pointer group"
              >

                {/* Date */}
                <div className="flex items-center gap-3">

                  <span className="text-[#6B6F77] ">
                    {item.date}
                  </span>

                  
                    <img className="size-5" src={ImgCalander} alt="calendar" />
                

                </div>

                {/* Score */}
                <div
                  className={`
                    px-5 py-2 rounded-full
                    text-white text-sm font-medium
                    transition-all duration-300
                    ${
                      isOpen
                        ? "bg-[#006FE6] scale-105"
                        : "bg-[#007BFF] group-hover:bg-[#006FE6]"
                    }
                  `}
                >
                  نمره: {item.score}
                </div>

              </button>


              {/* Details */}
              <div
                className={`
                  grid transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >

                <div className="overflow-hidden">

                  <div className="bg-[#F5F8FC] rounded-[24px] p-5 mb-5">

                    <div className="grid grid-cols-4 gap-4">

                      {/* Weight */}
                      <div className="bg-white rounded-2xl p-4 text-center">
                        <p className="text-sm text-[#A0A4AA]">
                          وزن
                        </p>

                        <p className="text-xl font-semibold text-[#6B6F77] mt-2">
                          {item.weight}
                        </p>
                      </div>

                      {/* Body Fat */}
                      <div className="bg-white rounded-2xl p-4 text-center">
                        <p className="text-sm text-[#A0A4AA]">
                          چربی بدن
                        </p>

                        <p className="text-xl font-semibold text-[#6B6F77] mt-2">
                          {item.bodyFat}
                        </p>
                      </div>

                      {/* Muscle */}
                      <div className="bg-white rounded-2xl p-4 text-center">
                        <p className="text-sm text-[#A0A4AA]">
                          عضله
                        </p>

                        <p className="text-xl font-semibold text-[#6B6F77] mt-2">
                          {item.muscle}
                        </p>
                      </div>

                      {/* Water */}
                      <div className="bg-white rounded-2xl p-4 text-center">
                        <p className="text-sm text-[#A0A4AA]">
                          آب بدن
                        </p>

                        <p className="text-xl font-semibold text-[#6B6F77] mt-2">
                          {item.water}
                        </p>
                      </div>

                    </div>

                  </div>

                </div>
              </div>


              {/* Divider */}
              {index !== assessments.length - 1 && (
                <div className="h-px bg-[#E8E8E8]" />
              )}

            </div>
          );
        })}

      </div>

    </div>
  );
}