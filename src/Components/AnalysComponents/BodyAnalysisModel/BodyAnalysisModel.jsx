import React, { useState } from "react";
import SegmentedControl from "../../SegmentedControl/SegmentedControl";

export default function BodyAnalysisModel({ frontImage, backImage, title }) {
  const [active, setActive] = useState("جلو");
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // ========== داده‌های ۲۲ نقطه عصبی ==========
  const musclePoints = {
    جلو: [
      // ===== سینه (۶ نقطه) =====
      {
        id: "chest-upper-l",
        label: "بالاسینه چپ",
        x: "58%",
        y: "22%",
        status: "خوب",
        percent: 19.2,
      },
      {
        id: "chest-upper-r",
        label: "بالاسینه راست",
        x: "47%",
        y: "22%",
        status: "خوب",
        percent: 19.0,
      },
      {
        id: "chest-middle-l",
        label: "وسط سینه چپ",
        x: "56%",
        y: "25%",
        status: "خوب",
        percent: 18.4,
      },
      {
        id: "chest-middle-r",
        label: "وسط سینه راست",
        x: "49%",
        y: "25%",
        status: "خوب",
        percent: 18.6,
      },
      {
        id: "chest-lower-l",
        label: "زیرسینه چپ",
        x: "56%",
        y: "28%",
        status: "خوب",
        percent: 18.0,
      },
      {
        id: "chest-lower-r",
        label: "زیرسینه راست",
        x: "48%",
        y: "28%",
        status: "خوب",
        percent: 18.2,
      },

      // ===== دوسر بازو (۲ نقطه) =====
      {
        id: "biceps-l",
        label: "دوسر چپ",
        x: "64%",
        y: "32%",
        status: "خوب",
        percent: 19.1,
      },
      {
        id: "biceps-r",
        label: "دوسر راست",
        x: "40%",
        y: "32%",
        status: "خوب",
        percent: 19.3,
      },

      // ===== شکم (۳ نقطه) =====
      {
        id: "abdomen-upper",
        label: "بالای شکم",
        x: "52%",
        y: "32%",
        status: "خوب",
        percent: 17.9,
      },
      {
        id: "abdomen-middle",
        label: "وسط شکم",
        x: "52%",
        y: "37%",
        status: "خوب",
        percent: 18.2,
      },
      {
        id: "abdomen-lower",
        label: "زیر شکم",
        x: "52%",
        y: "42%",
        status: "خوب",
        percent: 18.5,
      },

      // ===== پهلو (۲ نقطه) =====
      {
        id: "oblique-l",
        label: "پهلو چپ",
        x: "58%",
        y: "36%",
        status: "خوب",
        percent: 18.7,
      },
      {
        id: "oblique-r",
        label: "پهلو راست",
        x: "46%",
        y: "36%",
        status: "خوب",
        percent: 18.6,
      },

      // ===== چهارسر ران - جلو (۴ نقطه) =====
      {
        id: "quad-middle-l",
        label: "پهنی میانی چپ",
        x: "59%",
        y: "58%",
        status: "خوب",
        percent: 19.0,
      },
      {
        id: "quad-front-l",
        label: "پهنی داخلی چپ",
        x: "56%",
        y: "64%",
        status: "خوب",
        percent: 19.0,
      },
      {
        id: "quad-sartorius-l",
        label: "خیاطه چپ",
        x: "56%",
        y: "54%",
        status: "عالی",
        percent: 18.5,
      },
      {
        id: "quad-front-r",
        label: "پهنی داخلی راست",
        x: "48%",
        y: "64%",
        status: "خوب",
        percent: 18.8,
      },
      {
        id: "quad-side-l",
        label: "پهن خارجی چپ",
        x: "62%",
        y: "63%",
        status: "خوب",
        percent: 18.4,
      },
      {
        id: "quad-side-r",
        label: "پهن خارجی راست",
        x: "42%",
        y: "64%",
        status: "خوب",
        percent: 18.5,
      },
      {
        id: "quad-middle-r",
        label: "پهن میانی راست",
        x: "45%",
        y: "58%",
        status: "خوب",
        percent: 18.5,
      },
      {
        id: "quad-sartorius-r",
        label: "خیاطه راست",
        x: "48%",
        y: "54%",
        status: "خوب",
        percent: 18.5,
      },

      // دلتویید
      {
        id: "anterior-deltoid-r",
        label: "دلتویید قدامی راست",
        x: "42%",
        y: "22%",
        status: "خوب",
        percent: 18.5,
      },
      {
        id: "lateral-deltoid-r",
        label: "دلتویید جانبی راست",
        x: "39%",
        y: "24%",
        status: "خوب",
        percent: 18.5,
      },
      {
        id: "anterior-deltoid-l",
        label: "دلتویید قدامی چپ",
        x: "62%",
        y: "22%",
        status: "خوب",
        percent: 18.5,
      },
      {
        id: "lateral-deltoid-l",
        label: "دلتویید جانبی چپ",
        x: "66%",
        y: "24%",
        status: "خوب",
        percent: 18.5,
      },

      // ساعد
      {
        id: "brachioradialis-l",
        label: "ساعد چپ",
        x: "68%",
        y: "44%",
        status: "خوب",
        percent: 18.5,
      },
      {
        id: "brachioradialis-r",
        label: "ساعد راست",
        x: "36%",
        y: "44%",
        status: "خوب",
        percent: 18.5,
      },
    ],

    پشت: [
      // ===== پشت (۳ نقطه) =====
      {
        id: "back-upper",
        label: "ذوزنقه ای راست",
        x: "54%",
        y: "18%",
        status: "خوب",
        percent: 18.8,
      },
      {
        id: "back-upper-l",
        label: "ذوزنقه ای چپ",
        x: "47%",
        y: "18%",
        status: "خوب",
        percent: 18.8,
      },
      {
        id: "back-middle",
        label: "پشتی بزرگ راست",
        x: "56%",
        y: "32%",
        status: "خوب",
        percent: 18.3,
      },
      {
        id: "back-middle-l",
        label: "پشتی بزرگ چپ",
        x: "46%",
        y: "32%",
        status: "خوب",
        percent: 18.3,
      },
      {
        id: "back-lower",
        label: "گرد بزرگ راست",
        x: "58%",
        y: "28%",
        status: "خوب",
        percent: 17.7,
      },
      {
        id: "back-lower-l",
        label: "گرد بزرگ جپ",
        x: "44%",
        y: "28%",
        status: "خوب",
        percent: 17.7,
      },
      {
        id: "posterior-deltoid-r",
        label: "دلتویید خلفی راست",
        x: "60%",
        y: "22%",
        status: "خوب",
        percent: 18.5,
      },
      {
        id: "posterior-deltoid-l",
        label: "دلتویید خلفی راست",
        x: "42%",
        y: "22%",
        status: "خوب",
        percent: 18.5,
      },

      // ===== سه‌سر بازو (۲ نقطه) =====
      {
        id: "triceps-l",
        label: "سه‌سر چپ",
        x: "38%",
        y: "30%",
        status: "خوب",
        percent: 18.3,
      },
      {
        id: "triceps-r",
        label: "سه‌سر راست",
        x: "62%",
        y: "28%",
        status: "خوب",
        percent: 18.1,
      },

      // ===== پشت ران (۲ نقطه) =====
      {
        id: "hamstring-l",
        label: "پشت ران چپ",
        x: "45%",
        y: "62%",
        status: "خوب",
        percent: 18.9,
      },
      {
        id: "hamstring-r",
        label: "پشت ران راست",
        x: "55%",
        y: "62%",
        status: "خوب",
        percent: 19.1,
      },

      // ساق
      {
        id: "gastrocnemius-r",
        label: "ساق راست",
        x: "57%",
        y: "78%",
        status: "خوب",
        percent: 19.1,
      },
      // ساق
      {
        id: "gastrocnemius-م",
        label: "ساق چپ",
        x: "44%",
        y: "78%",
        status: "خوب",
        percent: 19.1,
      },

    ],
  };

  // ========== تابع رنگ وضعیت ==========
  const getStatusColor = (status) => {
    switch (status) {
      case "عالی":
        return "text-[#007BFF]";
      case "خوب":
        return "text-[#63AF42]";
      case "متوسط":
        return "text-[#D5A329]";
      case "ضعیف":
        return "text-[#F04444]";
      default:
        return "text-[#63AF42]";
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case "عالی":
        return "bg-[#007BFF]";
      case "خوب":
        return "bg-[#63AF42]";
      case "متوسط":
        return "bg-[#D5A329]";
      case "ضعیف":
        return "bg-[#F04444]";
      default:
        return "bg-[#63AF42]";
    }
  };

  const currentPoints = musclePoints[active] || [];

  return (
    <div className="bg-white rounded-3xl flex flex-col justify-between p-4 h-full">
      {/* ===== هدر ===== */}
      <div className="flex justify-between items-center">
        <div className="text-2xl text-[#6B6F77] font-primary">{title}</div>
        <div className="p-5 flex justify-center items-center">
          <SegmentedControl item1={"جلو"} item2={"پشت"} onChange={setActive} />
        </div>
      </div>

      {/* ===== تصویر بدن با نقاط ===== */}
      <div className="flex justify-center items-center mt-2">
        <div className="relative w-full overflow-hidden flex justify-center items-center">
          <div>
            <style>{`
              @keyframes bodyBreathe {
                0%, 100% { transform: scale(1) translateY(0); }
                50% { transform: scale(1.015) translateY(-4px); }
              }
              .body-breathe {
                animation: bodyBreathe 4.2s ease-in-out infinite;
                transform-origin: center bottom;
              }

              @keyframes pulse-ring {
                0% { transform: scale(0.8); opacity: 0.7; }
                100% { transform: scale(1.6); opacity: 0; }
              }
              .point-ring {
                animation: pulse-ring 2s ease-out infinite;
              }
            `}</style>

            <div className="body-breathe size-[850px] relative">
              {/* تصویر بدن */}
              {active === "جلو" ? (
                <img
                  className="w-full h-full p-1"
                  src={frontImage}
                  alt="جلو بدن"
                />
              ) : (
                <img
                  className="w-full h-full p-1"
                  src={backImage}
                  alt="پشت بدن"
                />
              )}

              {/* ====== ۲۲ نقطه عصبی ====== */}
              {currentPoints.map((point) => (
                <div
                  key={point.id}
                  className="absolute group cursor-pointer"
                  style={{
                    left: point.x,
                    top: point.y,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => setHoveredPoint(point.id)}
                  onMouseLeave={() => setHoveredPoint(null)}
                >
                  {/* دایره بیرونی (افکت پالس) */}
                  <div
                    className="absolute rounded-full point-ring"
                    style={{
                      width: "22px",
                      height: "22px",
                      left: "-25%",
                      top: "-12%",
                      // transform: "translate(100%, -50%)",
                      border: "2px solid rgba(0, 123, 255, 0.4)",
                      borderRadius: "50%",
                    }}
                  />

                  {/* دایره اصلی آبی با درخشش */}
                  <div
                    className="relative w-4 h-4 rounded-full bg-[#007BFF] shadow-[0_0_20px_rgba(0,123,255,0.6)] 
                                hover:shadow-[0_0_30px_rgba(0,123,255,0.9)] hover:scale-110 
                                transition-all duration-200 flex items-center justify-center"
                  >
                    {/* نقطه داخلی سفید */}
                    <div className="w-1 h-1 rounded-full bg-white opacity-80" />
                  </div>

                  {/* ===== Tooltip ===== */}
                  <div
                    className={`
                      w-40 flex flex-col py-2 px-4 rounded-3xl absolute z-99
                      bg-white border-2 border-gray-200 shadow-xl
                      transition-all duration-200
                      ${
                        hoveredPoint === point.id
                          ? "opacity-100 visible scale-100"
                          : "opacity-0 invisible scale-95"
                      }
                      group-hover:opacity-100 group-hover:visible group-hover:scale-100
                      bottom-full left-1/2 -translate-x-1/2 mb-3
                    `}
                  >
                    {/* مثلث پایین tooltip */}
                    <div
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 
                                  w-3 h-3 bg-white border-r-2 border-b-2 border-gray-200 
                                  rotate-45 z-99"
                    />

                    {/* نام عضله */}
                    <h2 className="text-[#007BFF] font-bold text-sm text-center">
                      {point.label}
                    </h2>

                    {/* وضعیت */}
                    <h3
                      className={`${getStatusColor(point.status)} font-semibold text-center text-sm`}
                    >
                      {point.status}
                    </h3>

                    {/* درصد */}
                    <span className="text-gray-500 text-xs flex justify-end">
                      {point.percent}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== راهنما (لجند) ===== */}
      <div className="flex justify-center items-end gap-8 text-[#6B6F77] px-4 mt-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#007BFF]" />
          عالی
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#63AF42]" />
          خوب
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#D5A329]" />
          متوسط
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#F04444]" />
          ضعیف
        </div>
      </div>
    </div>
  );
}
