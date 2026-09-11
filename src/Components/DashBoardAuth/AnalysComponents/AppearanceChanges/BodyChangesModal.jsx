import { useState } from "react";

const BodyChangesModal = ({ isOpen, onClose }) => {
  const [selectedView, setSelectedView] = useState("front");

  if (!isOpen) return null;

  const bodyViews = [
    {
      id: "front",
      title: "نمای روبرو",
      before: "/images/body-before-front.jpg",
      after: "/images/body-after-front.jpg",
    },
    {
      id: "back",
      title: "نمای پشت",
      before: "/images/body-before-back.jpg",
      after: "/images/body-after-back.jpg",
    },
    {
      id: "right",
      title: "نمای سمت راست",
      before: "/images/body-before-right.jpg",
      after: "/images/body-after-right.jpg",
    },
    {
      id: "left",
      title: "نمای سمت چپ",
      before: "/images/body-before-left.jpg",
      after: "/images/body-after-left.jpg",
    },
  ];

  const currentView = bodyViews.find(
    (view) => view.id === selectedView
  );

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F7F8FA] rounded-[32px] p-6 md:p-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-7">

          <div>
            <h2 className="text-2xl font-bold text-[#3D424A]">
              تغییرات ظاهری
            </h2>

            <p className="text-sm text-[#8B9098] mt-2">
              مقایسه تصاویر بدن در بازه زمانی مختلف
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white text-[#6B6F77] hover:bg-red-50 hover:text-red-500 transition cursor-pointer"
          >
            ✕
          </button>
        </div>


        {/* انتخاب زاویه */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-7">

          {bodyViews.map((view) => (
            <button
              key={view.id}
              onClick={() => setSelectedView(view.id)}
              className={`h-11 rounded-xl transition cursor-pointer ${
                selectedView === view.id
                  ? "bg-[#007BFF] text-white"
                  : "bg-white text-[#6B6F77] hover:bg-[#F0F6FF]"
              }`}
            >
              {view.title}
            </button>
          ))}

        </div>


        {/* عکس قبل و بعد */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Before */}
          <div className="bg-white rounded-3xl p-4">

            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-[#3D424A]">
                قبل
              </h3>

              <span className="text-xs text-[#8B9098]">
                اندازه‌گیری قبلی
              </span>
            </div>

            {/* اندازه ثابت */}
            <div className="w-full h-[400px] rounded-2xl overflow-hidden bg-[#EEF1F5]">
              <img
                src={currentView.before}
                alt="Before"
                className="w-full h-full object-cover object-top"
              />
            </div>

          </div>


          {/* After */}
          <div className="bg-white rounded-3xl p-4">

            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-[#3D424A]">
                بعد
              </h3>

              <span className="text-xs text-[#8B9098]">
                اندازه‌گیری جدید
              </span>
            </div>

            {/* اندازه ثابت */}
            <div className="w-full h-[400px] rounded-2xl overflow-hidden bg-[#EEF1F5]">
              <img
                src={currentView.after}
                alt="After"
                className="w-full h-full object-cover object-top"
              />
            </div>

          </div>

        </div>


        {/* اطلاعات پایین */}
        <div className="grid grid-cols-3 gap-3 mt-6">

          <div className="bg-white rounded-2xl p-4 text-center">
            <p className="text-sm text-[#8B9098]">
              کاهش وزن
            </p>

            <p className="text-[#007BFF] font-bold mt-2">
              -5 کیلوگرم
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 text-center">
            <p className="text-sm text-[#8B9098]">
              کاهش چربی
            </p>

            <p className="text-[#007BFF] font-bold mt-2">
              -8.6%
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 text-center">
            <p className="text-sm text-[#8B9098]">
              مدت زمان
            </p>

            <p className="text-[#007BFF] font-bold mt-2">
              120 روز
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BodyChangesModal;