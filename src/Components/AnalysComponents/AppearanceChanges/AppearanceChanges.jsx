// components/BodyChanges/BodyChanges.jsx
import { useState } from "react";
import BodyChangesModal from "./BodyChangesModal";
import BodyImg from "../../../assets/imges/image 22 (1).svg"
const BodyChanges = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ========== داده نمونه (بعداً از props یا API میگیری) ==========
  const stats = {
    currentWeight: 72.5,
    previousWeight: 75.0,
    currentFat: 18.2,
    previousFat: 20.5,
    currentMuscle: 38.5,
    previousMuscle: 36.0,
    lastUpdate: "۱۴۰۵/۰۶/۱۸",
    imagePreview: BodyImg, // یا null
    targetWeight: 70,
  };

  // محاسبه تغییرات
  const weightDiff = (stats.currentWeight - stats.previousWeight).toFixed(1);
  const fatDiff = (stats.currentFat - stats.previousFat).toFixed(1);
  const muscleDiff = (stats.currentMuscle - stats.previousMuscle).toFixed(1);

  const isWeightDown = weightDiff < 0;
  const isFatDown = fatDiff < 0;
  const isMuscleUp = muscleDiff > 0;

  return (
    <>
      {/* ===== کارت اصلی ===== */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100/50 overflow-hidden hover:shadow-xl transition-shadow">
        <div className="flex flex-col md:flex-row">
          
          {/* بخش تصویر (پیش‌نمایش) */}
          <div className="relative w-full md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-blue-50 to-indigo-100">
            {stats.imagePreview ? (
              <img
                src={stats.imagePreview}
                alt="پیش‌نمایش تغییرات بدن"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                <svg className="w-12 h-12 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            )}
            {/* تاریخ روی تصویر */}
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {stats.lastUpdate}
            </div>
          </div>

          {/* بخش اطلاعات */}
          <div className="flex-1 p-5 md:p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">تغییرات بدن</h3>
              <p className="text-sm text-gray-500">آخرین بروزرسانی: {stats.lastUpdate}</p>
            </div>

            {/* ۳ کارت آمار */}
            <div className="grid grid-cols-3 gap-4">
              {/* وزن */}
              <div className="bg-gray-50/70 p-3 rounded-xl text-center">
                <p className="text-xs text-gray-500 mb-1">وزن</p>
                <p className="text-base font-bold text-gray-800">{stats.currentWeight} kg</p>
                <div className={`flex items-center justify-center gap-0.5 text-xs font-medium mt-0.5 ${isWeightDown ? "text-emerald-500" : "text-rose-500"}`}>
                  {weightDiff < 0 ? (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  )}
                  <span>{Math.abs(weightDiff)} kg</span>
                  <span className="text-gray-400 mr-1">({isWeightDown ? "✓" : "✗"})</span>
                </div>
              </div>

              {/* چربی */}
              <div className="bg-gray-50/70 p-3 rounded-2xl text-center">
                <p className="text-xs text-gray-500 mb-1">چربی</p>
                <p className="text-base font-bold text-gray-800">{stats.currentFat}%</p>
                <div className={`flex items-center justify-center gap-0.5 text-xs font-medium mt-0.5 ${isFatDown ? "text-emerald-500" : "text-rose-500"}`}>
                  {fatDiff < 0 ? (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  )}
                  <span>{Math.abs(fatDiff)}%</span>
                  <span className="text-gray-400 mr-1">({isFatDown ? "✓" : "✗"})</span>
                </div>
              </div>

              {/* عضله */}
              <div className="bg-gray-50/70 p-3 rounded-xl text-center">
                <p className="text-xs text-gray-500 mb-1">عضله</p>
                <p className="text-base font-bold text-gray-800">{stats.currentMuscle}%</p>
                <div className={`flex items-center justify-center gap-0.5 text-xs font-medium mt-0.5 ${isMuscleUp ? "text-emerald-500" : "text-rose-500"}`}>
                  {muscleDiff > 0 ? (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  )}
                  <span>{Math.abs(muscleDiff)}%</span>
                  <span className="text-gray-400 mr-1">({isMuscleUp ? "✓" : "✗"})</span>
                </div>
              </div>
            </div>

            {/* مقایسه با هدف */}
            <div className="flex items-center justify-between bg-gray-50/80 p-3 rounded-xl">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <span>وزن هدف: {stats.targetWeight} kg</span>
              </div>
              <div className="text-sm font-medium">
                <span className="text-gray-500">فاصله: </span>
                <span className={stats.currentWeight > stats.targetWeight ? "text-amber-500" : "text-emerald-500"}>
                  {(stats.currentWeight - stats.targetWeight).toFixed(1)} kg
                </span>
              </div>
            </div>

            {/* دکمه مشاهده تصاویر کامل */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full h-12 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              مشاهده تصاویر کامل
            </button>
          </div>
        </div>
      </div>

      {/* مودال (همان کامپوننت قبلی) */}
      <BodyChangesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default BodyChanges;
