import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React, { useState } from "react";
import AIChat from "../../Components/DashBoardAuthlete/Aichat/Aichat";
import StatCard from "../../Components/DashBoardAuthlete/StatCard/StatCard";
import Navbar from "../../Components/Navbar/Navbar";
import imgLunch from "../../assets/imges/lunch.png";
import ImgFood from "../../assets/imges/image 17.png"
export default function DashBoardNutrition() {
  const id = React.useId();
  const [open, setOpen] = useState(true);


  const foods = [
    {
      title: "جوی دوسر با موز",
      desc: "۵۰ گرم جو + ۱ عدد موز متوسط",
      calories: "340 kcal",
      emoji: "🥣",
    },
    {
      title: "تخم مرغ آبپز",
      desc: "۳ عدد تخم مرغ بزرگ",
      calories: "340 kcal",
      emoji: "🥚",
    },
    {
      title: "شیر کم چرب",
      desc: "۲۰۰ میلی لیتر",
      calories: "340 kcal",
      emoji: "🥛",
    },
  ];

  const supplements = [
    {
      title: "پروتئین وی",
      desc: "۳۰ گرم پس از تمرین",
      emoji: "🥛",
    },
    {
      title: "کراتین",
      desc: "۳۰ گرم پس از تمرین",
      emoji: "⚪",
    },
    {
      title: "ویتامین D3",
      desc: "۳۰ گرم پس از تمرین",
      emoji: "💊",
    },
    {
      title: "امگا ۳",
      desc: "۳۰ گرم پس از تمرین",
      emoji: "🟡",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FB] flex justify-center">
      <div className="w-full max-w-[1600px] grid grid-cols-[90px_1fr_330px] gap-6 px-8 py-6 bg-[#F5F7FB]">
        <div className="">
          <Navbar />
        </div>
        <div className="py-3 ">
          <div className="col-span-10 grid grid-cols-4 gap-5 mt-1">
            <StatCard />
            <StatCard />
            <StatCard />
            <StatCard />
          </div>
          {/* Content */}
          <div className="bg-white rounded-3xl p-6 mt-5">
            <div onClick={() => {
              setOpen(!open)
            }} className="flex items-center justify-between ">
              {/* سمت راست */}
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-4">
                  <img src={imgLunch} className="w-13 h-13 rounded-2xl bg-[#E9FFD9] flex items-center justify-center text-2xl">
                    
                  </img>
                  <div className="text-right">
                    <p className="text-sm text-[#A0A4AA]">
                    <h2 className="text-xl text-[#6B6F77] font-medium">
                      صبحانه
                    </h2>
                      ۷:۳۰ خورده شد
                    </p>
                  </div>
                </div>
              </div>
              {/* سمت چپ */}
              <div className="flex gap-2.5">
                <button className="bg-[#E8F1FF] text-[#007BFF] px-5 py-2 rounded-full text-sm">
                  افزودن +
                </button>

                <button
                  onClick={() => setOpen(!open)}
                  className="text-[#6B6F77] text-xl"
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </button>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-125 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
                }`}
            >
              <div className="h-px bg-[#EEEEEE] mb-6"></div>

              <div className="flex flex-col gap-6">

                {foods.map((food, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >

                    {/* غذا */}
                    <div className="flex items-center gap-4 flex-row-reverse">

                      <div className="text-right">
                        <h3 className="text-[#6B6F77] font-medium">
                          {food.title}
                        </h3>

                        <p className="text-sm text-[#A0A4AA]">
                          {food.desc}
                        </p>
                      </div>


                      <div className="w-13 h-13 rounded-2xl bg-[#0065B8] flex items-center justify-center text-2xl">
                        <img className='w-12 h-12' src={ImgFood} alt="" />
                      </div>

                    </div>


                    {/* کالری */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[#6B6F77]">
                        {food.calories}
                      </span>
                  <div className="w-7 h-7 rounded-xl border-2 border-[#007BFF] flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#007BFF] rounded-md flex items-center justify-center">
                      <span className="text-white text-xs">
                        ✓
                      </span>
                    </div>
                  </div>



                    </div>


                  </div>
                ))}

              </div>

            </div>
          </div>
          <div className="bg-white rounded-3xl p-6 mt-5">
            <div onClick={() => {
              setOpen(!open)
            }} className="flex items-center justify-between ">
              {/* سمت راست */}
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-4">
                  <img src={imgLunch} className="w-13 h-13 rounded-2xl bg-[#E9FFD9] flex items-center justify-center text-2xl">
                    
                  </img>
                  <div className="text-right">
                    <p className="text-sm text-[#A0A4AA]">
                    <h2 className="text-xl text-[#6B6F77] font-medium">
                      صبحانه
                    </h2>
                      ۷:۳۰ خورده شد
                    </p>
                  </div>
                </div>
              </div>
              {/* سمت چپ */}
              <div className="flex gap-2.5">
                <button className="bg-[#E8F1FF] text-[#007BFF] px-5 py-2 rounded-full text-sm">
                  افزودن +
                </button>

                <button
                  onClick={() => setOpen(!open)}
                  className="text-[#6B6F77] text-xl"
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </button>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-125 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
                }`}
            >
              <div className="h-px bg-[#EEEEEE] mb-6"></div>

              <div className="flex flex-col gap-6">

                {foods.map((food, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >

                    {/* غذا */}
                    <div className="flex items-center gap-4 flex-row-reverse">

                      <div className="text-right">
                        <h3 className="text-[#6B6F77] font-medium">
                          {food.title}
                        </h3>

                        <p className="text-sm text-[#A0A4AA]">
                          {food.desc}
                        </p>
                      </div>


                      <div className="w-13 h-13 rounded-2xl bg-[#0065B8] flex items-center justify-center text-2xl">
                        <img className='w-12 h-12' src={ImgFood} alt="" />
                      </div>

                    </div>


                    {/* کالری */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[#6B6F77]">
                        {food.calories}
                      </span>
                  <div className="w-7 h-7 rounded-xl border-2 border-[#007BFF] flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#007BFF] rounded-md flex items-center justify-center">
                      <span className="text-white text-xs">
                        ✓
                      </span>
                    </div>
                  </div>



                    </div>


                  </div>
                ))}

              </div>

            </div>
          </div>
          <div className="bg-white rounded-3xl p-6 mt-5">
            <div onClick={() => {
              setOpen(!open)
            }} className="flex items-center justify-between ">
              {/* سمت راست */}
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-4">
                  <img src={imgLunch} className="w-13 h-13 rounded-2xl bg-[#E9FFD9] flex items-center justify-center text-2xl">
                    
                  </img>
                  <div className="text-right">
                    <p className="text-sm text-[#A0A4AA]">
                    <h2 className="text-xl text-[#6B6F77] font-medium">
                      صبحانه
                    </h2>
                      ۷:۳۰ خورده شد
                    </p>
                  </div>
                </div>
              </div>
              {/* سمت چپ */}
              <div className="flex gap-2.5">
                <button className="bg-[#E8F1FF] text-[#007BFF] px-5 py-2 rounded-full text-sm">
                  افزودن +
                </button>

                <button
                  onClick={() => setOpen(!open)}
                  className="text-[#6B6F77] text-xl"
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </button>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-125 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
                }`}
            >
              <div className="h-px bg-[#EEEEEE] mb-6"></div>

              <div className="flex flex-col gap-6">

                {foods.map((food, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >

                    {/* غذا */}
                    <div className="flex items-center gap-4 flex-row-reverse">

                      <div className="text-right">
                        <h3 className="text-[#6B6F77] font-medium">
                          {food.title}
                        </h3>

                        <p className="text-sm text-[#A0A4AA]">
                          {food.desc}
                        </p>
                      </div>


                      <div className="w-13 h-13 rounded-2xl bg-[#0065B8] flex items-center justify-center text-2xl">
                        <img className='w-12 h-12' src={ImgFood} alt="" />
                      </div>

                    </div>


                    {/* کالری */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[#6B6F77]">
                        {food.calories}
                      </span>
                  <div className="w-7 h-7 rounded-xl border-2 border-[#007BFF] flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#007BFF] rounded-md flex items-center justify-center">
                      <span className="text-white text-xs">
                        ✓
                      </span>
                    </div>
                  </div>



                    </div>


                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>
        <div className="">
          <AIChat />
          <div className="bg-white rounded-4xl p-7 mt-5">
            {/* Header */}
            <h2 className="text-2xl text-[#6B6F77] font-medium text-right">
              مکمل‌ها
            </h2>


            <div className="h-px bg-[#EEEEEE] my-5"></div>
            {/* List */}
            <div className="flex flex-col gap-8">
              {supplements.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between"
                >
                  {/* Right side */}
                  <div className="flex items-center gap-5">
                    <div className="w-15 h-15 rounded-3xl bg-[#EAF3FF] flex items-center justify-center text-2xl">
                      {item.emoji}
                    </div>
                    <div className="text-right">
                      <h3 className="text-xl text-[#6B6F77] font-medium">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#A0A4AA] mt-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  {/* Checkbox */}
                  <div className="w-7 h-7 rounded-xl border-2 border-[#007BFF] flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#007BFF] rounded-md flex items-center justify-center">
                      <span className="text-white text-xs">
                        ✓
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}