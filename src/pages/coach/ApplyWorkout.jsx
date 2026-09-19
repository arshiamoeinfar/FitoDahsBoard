import React, { useMemo, useState } from "react";
import Navbar from "../../Components/shared/Navbar/Navbar";
import HeaderDashBoard from "../../Components/DashBoardAuth/HeaderDashBoard/HeaderDashBoard";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
const students = [
  {
    id: 1,
    name: "آرشیا معین‌فر",
    avatar: "👨🏻‍💻",
    workout: {
      name: "برنامه حجم عضلانی",
      status: "active",
      createdAt: "1405/06/01",
      expireAt: "1405/07/25",
    },
    nutrition: {
      name: "برنامه افزایش حجم",
      status: "active",
      createdAt: "1405/06/05",
      expireAt: "1405/07/10",
    },
  },
  {
    id: 2,
    name: "علی رضایی",
    avatar: "👨🏻",
    workout: {
      name: "برنامه قدرتی",
      status: "inProgress",
      createdAt: "1405/05/20",
      expireAt: "1405/07/20",
    },
    nutrition: {
      name: "برنامه کات",
      status: "inactive",
      createdAt: "1405/05/10",
      expireAt: "1405/06/10",
    },
  },
  {
    id: 3,
    name: "محمد احمدی",
    avatar: "👨🏼",
    workout: {
      name: "برنامه عضله‌سازی",
      status: "expired",
      createdAt: "1405/03/10",
      expireAt: "1405/05/10",
    },
    nutrition: {
      name: "برنامه افزایش وزن",
      status: "inProgress",
      createdAt: "1405/06/01",
      expireAt: "1405/07/02",
    },
  },
  {
    id: 4,
    name: "رضا کریمی",
    avatar: "👨🏻‍🦱",
    workout: {
      name: "برنامه قدرت و استقامت",
      status: "inactive",
      createdAt: "1405/04/01",
      expireAt: "1405/05/01",
    },
    nutrition: {
      name: "برنامه رژیم پایه",
      status: "expired",
      createdAt: "1405/03/01",
      expireAt: "1405/04/01",
    },
  },
  {
    id: 5,
    name: "امیرحسین محمدی",
    avatar: "👨🏻",
    workout: {
      name: "برنامه عضله‌سازی",
      status: "active",
      createdAt: "1405/06/10",
      expireAt: "1405/07/30",
    },
    nutrition: {
      name: "برنامه کات",
      status: "active",
      createdAt: "1405/06/08",
      expireAt: "1405/07/28",
    },
  },
];

const statusConfig = {
  active: {
    label: "فعال",
    className: "bg-emerald-50 text-emerald-600",
  },
  inactive: {
    label: "غیرفعال",
    className: "bg-gray-100 text-gray-500",
  },
  expired: {
    label: "منقضی شده",
    className: "bg-red-50 text-red-500",
  },
  inProgress: {
    label: "درحال انجام",
    className: "bg-blue-50 text-blue-600",
  },
};

export default function ApplyWorkout() {
  const [programType, setProgramType] = useState("workout");
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const currentProgramKey =
    programType === "workout" ? "workout" : "nutrition";

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const program = student[currentProgramKey];

      const matchesSearch = student.name
        .toLowerCase()
        .includes(search.toLowerCase());

      if (!matchesSearch) return false;

      if (activeFilter === "all") return true;

      return program.status === activeFilter;
    });
  }, [search, activeFilter, currentProgramKey]);

  const getCount = (filter) => {
    return students.filter((student) => {
      const program = student[currentProgramKey];

      if (filter === "all") return true;

      return program.status === filter;
    }).length;
  };

  const filters = [
    {
      id: "all",
      title: "شاگردان",
    },
    {
      id: "active",
      title:
        programType === "workout"
          ? "برنامه‌های فعال تمرین"
          : "برنامه‌های فعال تغذیه",
    },
    {
      id: "inactive",
      title: "برنامه‌های غیرفعال",
    },
    {
      id: "expired",
      title: "منقضی شده",
    },
    {
      id: "inProgress",
      title: "درحال انجام",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FB] flex justify-center">
      <div className="w-full max-w-[1600px] grid grid-cols-[90px_1fr] gap-6 px-8 py-6 bg-[#F5F7FB]">

        {/* Navbar */}
        <div>
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="py-3">

          {/* Header */}
          <div className="grid grid-cols-12 gap-6">
            <HeaderDashBoard
              title="برنامه ها"
              description="برای شاگردانت برنامه رو بساز"
            />
          </div>

          {/* Program Management */}
          <section className="mt-7">

            {/* ================= TOP CONTROLS ================= */}
            <div className="flex items-center justify-between gap-6 mb-6">

              {/* Program Type */}
              <div className="flex items-center gap-2">

                <div className="inline-flex items-center p-1 bg-white border border-[#E8EDF5] rounded-2xl gap-2">

                  {/* Workout */}
                  <button
                    type="button"
                    onClick={() => {
                      setProgramType("workout");
                      setActiveFilter("all");
                    }}
                    className={`
                      relative
                      flex
                      items-center
                      gap-2
                      h-11
                      px-5
                      rounded-xl
                      text-sm
                      font-primary
                      transition-all
                      duration-200
                      cursor-pointer
                      
                      ${
                        programType === "workout"
                          ? "bg-[#007BFF] text-white shadow-[0_5px_14px_rgba(0,123,255,0.18)]"
                          : "text-[#7A8494] hover:text-[#007BFF] hover:bg-[#F8FAFC]"
                      }
                    `}
                  >
                    <span className="text-base text-center flex items-center justify-center">
                      <FitnessCenterIcon/>
                    </span>

                    <span>
                      تمرین
                    </span>
                  </button>

                  {/* Nutrition */}
                  <button
                    type="button"
                    onClick={() => {
                      setProgramType("nutrition");
                      setActiveFilter("all");
                    }}
                    className={`
                      relative
                      flex
                      items-center
                      gap-2
                      h-11
                      px-5
                      rounded-xl
                      text-sm
                      font-primary
                      transition-all
                      duration-200
                      cursor-pointer
                      ${
                        programType === "nutrition"
                          ? "bg-[#007BFF] text-white shadow-[0_5px_14px_rgba(0,123,255,0.18)]"
                          : "text-[#7A8494] hover:text-[#007BFF] hover:bg-[#F8FAFC]"
                      }
                    `}
                  >
                    <span className="text-base text-center flex items-center justify-center">
                      <FastfoodIcon/>
                    </span>

                    <span>
                      تغذیه
                    </span>
                  </button>

                </div>

              </div>

              {/* ================= RIGHT ACTIONS ================= */}
              <div className="flex items-center gap-3">

                {/* Search */}
                <div className="relative w-[280px]">

                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="جستجوی شاگرد..."
                    className="
                      w-full
                      h-12
                      pr-11
                      pl-4
                      rounded-2xl
                      bg-white
                      border
                      border-[#E8EDF5]
                      outline-none
                      text-sm
                      text-[#1F2937]
                      placeholder:text-[#A5ADBA]
                      shadow-[0_4px_20px_rgba(15,23,42,0.03)]
                      focus:border-[#007BFF]
                      focus:ring-4
                      focus:ring-[#007BFF]/5
                      transition-all
                    "
                  />

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9AA3B2] text-sm">
                    <SearchIcon/>
                  </span>

                </div>

                {/* Create Program */}
                <button
                  type="button"
                  className="
                    h-12
                    px-6
                    rounded-2xl
                    bg-[#007BFF]
                    text-white
                    text-sm
                    font-bold
                    flex
                    items-center
                    justify-center
                    gap-2
                    shadow-[0_8px_20px_rgba(0,123,255,0.18)]
                    hover:bg-[#006FE6]
                    hover:shadow-[0_10px_24px_rgba(0,123,255,0.24)]
                    active:scale-[0.98]
                    transition-all
                  "
                >
                  <span className="text-lg leading-none">
                    <AddIcon/>
                  </span>

                  <span className="text-white font-medium">
                    {programType === "workout"
                      ? "ساخت برنامه تمرینی"
                      : "ساخت برنامه تغذیه"}
                  </span>
                </button>

              </div>

            </div>

            {/* ================= TABLE CARD ================= */}
            <div className="bg-white rounded-[24px] border border-gray-100  overflow-hidden">

              {/* ================= FILTERS ================= */}
              <div className="px-6 pt-5 border-b border-gray-100">

                <div className="flex items-center gap-8">

                  {filters.map((filter) => {
                    const active = activeFilter === filter.id;
                    const count = getCount(filter.id);

                    return (
                      <button
                        key={filter.id}
                        type="button"
                        onClick={() => setActiveFilter(filter.id)}
                        className={`
                          relative
                          pb-4
                          text-sm
                          font-bold
                          transition
                          ${
                            active
                              ? "text-[#007BFF]"
                              : "text-gray-400 hover:text-gray-700"
                          }
                        `}
                      >

                        {/* Title + Notification Badge */}
                        <span className="relative inline-flex text-[#6B6F77] font-medium cursor-pointer">

                          {filter.title}

                          {count > 0 && (
                            <span
                              className={`
                                absolute
                                -top-3.5
                                -left-4
                                p-0
                                m-0
                                flex
                                h-5.5
                                w-5.5 
                                
                                items-center
                                justify-center
                                rounded-full
                                text-[12px]
                                
                                ${
                                  active
                                    ? "bg-[#007BFF] text-white"
                                    : "bg-[#EEF5FF] text-[#007BFF]"
                                }
                              `}
                            >
                              {count}
                            </span>
                          )}

                        </span>

                        {/* Active Line */}
                        {active && (
                          <span className="absolute bottom-0 right-0 left-0 h-[2px] rounded-full bg-[#007BFF]" />
                        )}

                      </button>
                    );
                  })}

                </div>

              </div>

              {/* ================= TABLE HEADER ================= */}
              <div
                className="
                  grid
                  grid-cols-[1.5fr_1.7fr_1fr_1fr_1fr_120px]
                  items-center
                  px-6
                  h-14
                  bg-[#FAFBFD]
                  font-primary 
                  text-sm
                  text-gray-400
                "
              >

                <div>
                  شاگرد
                </div>

                <div>
                  اسم برنامه
                </div>

                <div>
                  وضعیت
                </div>

                <div>
                  تاریخ ایجاد
                </div>

                <div>
                  تاریخ انقضا
                </div>

                <div className="text-center">
                  مشاهده کامل
                </div>

              </div>

              {/* ================= TABLE BODY ================= */}
              <div>

                {filteredStudents.map((student) => {
                  const program = student[currentProgramKey];
                  const status = statusConfig[program.status];

                  return (
                    <div
                      key={student.id}
                      className="
                        grid
                        grid-cols-[1.5fr_1.7fr_1fr_1fr_1fr_120px]
                        items-center
                        px-6
                        min-h-[82px]
                        border-t
                        border-gray-50
                        hover:bg-[#FAFCFF]
                        transition
                      "
                    >

                      {/* Student */}
                      <div className="flex items-center gap-3">

                        <div className="w-11 h-11 rounded-full bg-[#F1F5F9] flex items-center justify-center text-xl">
                          {student.avatar}
                        </div>

                        <div>

                          <p className="text-sm text-[#6B6F77] font-primary">
                            {student.name}
                          </p>

                          <p className="text-[10px] text-gray-400 mt-1">
                            شاگرد {student.id}
                          </p>

                        </div>

                      </div>

                      {/* Program */}
                      <div>

                        <p className="text-sm text-[#6B6F77] font-primary">
                          {program.name}
                        </p>

                      </div>

                      {/* Status */}
                      <div>

                        <span
                          className={`
                            inline-flex
                            items-center
                            gap-1.5
                            px-3
                            py-1.5
                            rounded-full
                            text-xs
                            font-primary
                            ${status.className}
                          `}
                        >

                          <span className="w-1.5 h-1.5 rounded-full bg-current " />

                          {status.label}

                        </span>

                      </div>

                      {/* Created */}
                      <div className="text-sm text-gray-500">
                        {program.createdAt}
                      </div>

                      {/* Expire */}
                      <div className="text-sm text-gray-500">
                        {program.expireAt}
                      </div>

                      {/* View */}
                      <div className="flex justify-center">

                        <button
                          type="button"
                          className={`
                            px-4
                            py-2
                            rounded-xl
                            
                            ${status.label === "فعال" ? "bg-emerald-50 text-emerald-600" : status.label === "منقضی شده" ? "bg-red-50 text-red-500" : status.label === "درحال انجام" ? "bg-blue-50 text-blue-600" : status.label === "غیرفعال" ? "bg-gray-100 text-gray-500" : ""}
                            text-xs
                            font-bold
                            hover:scale-102
                            hover:shadow-md
                            transition
                            duration-300
                            ease-in-out
                            cursor-pointer
                          `}
                        >
                        {status.label === "فعال" ? "مشاهده کامل" : status.label === "درحال انجام" ? "ادامه فرایند" : status.label === "منقضی شده" ? "حذف" : status.label === "غیرفعال" ? "فعال کردن" : status.label}
                        </button>

                      </div>

                    </div>
                  );
                })}

              </div>

              {/* ================= EMPTY STATE ================= */}
              {filteredStudents.length === 0 && (
                <div className="py-20 text-center">

                  <div className="text-4xl mb-4">
                    🔍
                  </div>

                  <p className="text-sm font-bold text-gray-700">
                    شاگردی پیدا نشد
                  </p>

                  <p className="text-xs text-gray-400 mt-2">
                    جستجو یا فیلتر انتخاب‌شده را تغییر دهید
                  </p>

                </div>
              )}

            </div>

          </section>

        </div>
      </div>
    </div>
  );
}