import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import Navbar from "../../Components/Navbar/Navbar";
import imgMove from "../../assets/imges/image 13.png";
import Dumbel from "../../assets/imges/Dumbbell Large Minimalistic.png";
import Refresh from "../../assets/imges/refresh.svg";
import ClockCircle from "../../assets/imges/Clock Circle.svg";
import Dumbel1 from "../../assets/icons/Dumbbell Large Minimalistic.png";
import Refresh2 from "../../assets/icons/refresh.png";
import ClockCircle3 from "../../assets/icons/Clock Circle.png";

const SET_LABELS = ["اول", "دوم", "سوم", "چهارم", "پنجم", "ششم"];

const initialExercises = [
  {
    id: "squat",
    title: "اسکوات با هالتر",
    sets: 5,
    reps: 8,
    rest: 90,
    weight: "80KG",
    image: imgMove,
  },
  {
    id: "rdl",
    title: "ددلیفت رومانیایی",
    sets: 4,
    reps: 8,
    rest: 90,
    weight: "60KG",
    image: imgMove,
  },
  {
    id: "cable-crunch",
    title: "کرانچ کابلی",
    sets: 4,
    reps: 8,
    rest: 90,
    weight: "20KG",
    image: imgMove,
  },
];

function ExerciseStat({ icon, label }) {
  return (
    <div className="flex items-center gap-0.5">
      <img className="size-3.5" src={icon} alt="" />
      <p className="text-[12px] text-[#6B6F77] font-primary-ExtraLight font-medium">
        {label}
      </p>
    </div>
  );
}

export default function StartTrain() {
  const [queue, setQueue] = useState(initialExercises);
  const [currentStep, setCurrentStep] = useState(1);
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  const current = queue[0];
  const upcoming = queue.slice(0);
  const totalSets = current.sets;
  const isLastSet = currentStep === totalSets;

  const goToExercise = (id) => {
    setQueue((prev) => {
      const idx = prev.findIndex((e) => e.id === id);
      if (idx <= 0) return prev;
      const item = prev[idx];
      const rest = prev.filter((_, i) => i !== idx);
      return [item, ...rest];
    });
    setCurrentStep(1);
    setShowCompleteModal(false);
  };

  const handleFinishSet = () => {
    setShowCompleteModal(true);
  };

  const handleSkipSet = () => {
    if (isLastSet) return;
    setCurrentStep((step) => Math.min(step + 1, totalSets));
  };

  const handleGoToNextExercise = () => {
    if (upcoming.length === 0) {
      setShowCompleteModal(false);
      return;
    }
    goToExercise(upcoming[0].id);
  };

  const progressPercent = ((currentStep - 1) / (totalSets - 1)) * 100;

  return (
    <div className="grid grid-cols-12 min-h-screen px-8 py-6 w-full max-w-[1600px]">
      <div className="col-span-1">
        <Navbar />
      </div>

      <div className="col-span-11 py-3">
        {/* Hero video card */}
        <div className="bg-white rounded-3xl overflow-hidden relative">
          <img className="w-full" src={current.image} alt="" />

          {/* Play button */}
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center hover:bg-white/10 transition cursor-pointer"
            aria-label="پخش ویدیوی حرکت"
          >
            <PlayArrowRoundedIcon className="text-white" fontSize="large" />
          </button>

          {/* Title + stats overlay */}
          <div className="absolute bottom-6 right-6 flex flex-col gap-3">
            <h1 className="text-4xl font-primary text-white">
              {current.title}
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <img className="size-5" src={Dumbel1} alt="" />
                <p className="text-[12px] text-white font-primary-ExtraLight font-medium">
                  {current.sets} ست
                </p>
              </div>
              <div className="flex items-center gap-1">
                <BoltOutlinedIcon
                  className="text-white"
                  sx={{ fontSize: 20 }}
                />
                <p className="text-[12px] text-white font-primary-ExtraLight font-medium">
                  {current.weight}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <img className="size-5" src={Refresh2} alt="" />
                <p className="text-[12px] text-white font-primary-ExtraLight font-medium">
                  {current.reps} بار تکرار
                </p>
              </div>
              <div className="flex items-center gap-1">
                <img className="size-5" src={ClockCircle3} alt="" />
                <p className="text-[12px] text-white font-primary-ExtraLight font-medium">
                  {current.rest} ثانیه استراحت
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress card */}
        <div className="bg-white rounded-3xl mt-5 px-6 py-8">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-5 left-0 w-full h-2 bg-[#D9E9FF] rounded-full" />

            <div
              className="absolute top-5 right-0 h-2 bg-[#007BFF] rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />

            {Array.from({ length: totalSets }, (_, index) => {
              const step = index + 1;
              const isDone = step < currentStep;
              const isCurrent = step === currentStep;

              return (
                <div
                  key={step}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                      isDone
                        ? "bg-[#007BFF] text-white"
                        : isCurrent
                          ? "bg-[#007BFF] ring-4 ring-[#D9E9FF] text-white"
                          : "bg-[#D9E9FF] text-[#6B6F77]"
                    }`}
                  >
                    {isDone ? <CheckIcon fontSize="small" /> : step}
                  </div>

                  <span className="mt-3 text-sm text-[#6B6F77]">
                    ست {SET_LABELS[index]}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex justify-start items-center gap-2 mt-8">
            <button
              onClick={handleFinishSet}
              className="w-44 py-3 px-5 bg-[#007BFF] rounded-4xl text-white font-primary-light cursor-pointer hover:bg-blue-600 transition"
            >
              پایان ست
            </button>
            <button
              onClick={handleSkipSet}
              disabled={isLastSet}
              className="w-44 py-3 px-5 bg-[#DBECFF] rounded-4xl text-[#6578BC] font-primary-light cursor-pointer hover:bg-[#c9e0ff] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              پرش به ست بعدی
            </button>
          </div>
        </div>

        {/* حرکات بعدی */}
        <div className="bg-white mt-5 rounded-3xl p-6">
          <h1 className="text-2xl text-[#6B6F77] mb-4 text-right">
            حرکات بعدی
          </h1>
          <div className="flex justify-around">
            {upcoming.map((exercise) => (
              <button
                key={exercise.id}
                onClick={() => goToExercise(exercise.id)}
                className="flex items-center cursor-pointer text-right hover:opacity-80 transition"
              >
                <div className="relative">
                  <img
                    className="w-40 h-20 rounded-2xl object-cover"
                    src={exercise.image}
                    alt=""
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-white/80 flex items-center justify-center">
                      <PlayArrowRoundedIcon
                        className="text-white"
                        fontSize="small"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mr-3">
                  <h2>{exercise.title}</h2>
                  <div className="flex gap-3">
                    <ExerciseStat icon={Dumbel} label={`${exercise.sets} ست`} />
                    <ExerciseStat
                      icon={Refresh}
                      label={`${exercise.reps} تکرار`}
                    />
                    <ExerciseStat
                      icon={ClockCircle}
                      label={`${exercise.rest} ثانیه استراحت`}
                    />
                  </div>
                </div>
              </button>
            ))}
            {upcoming.length === 0 && (
              <p className="text-[#A0A4AA] py-6">حرکت بعدی‌ای باقی نمانده</p>
            )}
          </div>
        </div>
      </div>

      {/* پاپ‌آپ پایان تمرین */}
      {showCompleteModal && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
          onClick={() => setShowCompleteModal(false)}
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-sm w-full text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCompleteModal(false)}
              className="absolute top-5 left-5 text-[#A0A4AA] hover:text-[#6B6F77] cursor-pointer"
              aria-label="بستن"
            >
              <CloseIcon fontSize="small" />
            </button>

            <div className="w-16 h-16 rounded-full bg-[#E8F1FF] flex items-center justify-center mx-auto mb-5 text-3xl">
              🎉
            </div>

            <h2 className="text-xl font-semibold text-[#4F5965] mb-2">
              آفرین، عالی بود!
            </h2>
            <p className="text-sm text-[#A0A4AA] mb-8">
              ست {current.title} رو تموم کردی، وقت رفتن سراغ حرکت بعدیه 💪
            </p>

            <div className="flex flex-col gap-3">
              {upcoming.length > 0 ? (
                <button
                  onClick={handleGoToNextExercise}
                  className="w-full py-3 px-5 bg-[#007BFF] rounded-4xl text-white font-primary-light cursor-pointer hover:bg-blue-600 transition"
                >
                  شروع حرکت بعدی: {upcoming[0].title}
                </button>
              ) : (
                <p className="text-sm text-[#007BFF] font-medium py-2">
                  تمام حرکات این تمرین تمام شد 🎉
                </p>
              )}
              <button
                onClick={() => setShowCompleteModal(false)}
                className="w-full py-3 px-5 bg-[#F5F7FB] rounded-4xl text-[#6B6F77] font-primary-light cursor-pointer hover:bg-[#eef1f6] transition"
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}