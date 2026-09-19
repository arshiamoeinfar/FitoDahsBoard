import React, { useMemo, useState } from "react";
import CaretDown from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

export default function CoachAthletes() {
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("همه");
  const [selectedStudent, setSelectedStudent] = useState(null);


  const students = [
    {
      id: 1,
      name: "علی رضایی",
      goal: "کاهش وزن",
      weight: 68,
      height: 168,
      bmi: 24.2,
      bodyFat: 24,
      activity: "دو روز پیش",
      avatar: "👨🏻",
      level: "متوسط",
      sessions: 4,
      trainingHistory: "1 سال",
      phone: "09123456789",
      email: "ali@example.com",
      age: 24,
      gender: "مرد",
    },
    {
      id: 2,
      name: "محمد احمدی",
      goal: "عضله‌سازی",
      weight: 82,
      height: 178,
      bmi: 25.9,
      bodyFat: 17,
      activity: "امروز",
      avatar: "👨🏻",
      level: "پیشرفته",
      sessions: 5,
      trainingHistory: "3 سال",
      phone: "09123456788",
      email: "mohammad@example.com",
      age: 27,
      gender: "مرد",
    },
    {
      id: 3,
      name: "سارا کریمی",
      goal: "تناسب اندام",
      weight: 61,
      height: 165,
      bmi: 22.4,
      bodyFat: 21,
      activity: "دیروز",
      avatar: "👩🏻",
      level: "متوسط",
      sessions: 3,
      trainingHistory: "2 سال",
      phone: "09123456787",
      email: "sara@example.com",
      age: 23,
      gender: "زن",
    },
    {
      id: 4,
      name: "رضا محمدی",
      goal: "افزایش قدرت",
      weight: 91,
      height: 182,
      bmi: 27.5,
      bodyFat: 19,
      activity: "دو روز پیش",
      avatar: "👨🏻",
      level: "حرفه‌ای",
      sessions: 6,
      trainingHistory: "5 سال",
      phone: "09123456786",
      email: "reza@example.com",
      age: 29,
      gender: "مرد",
    },
    {
      id: 5,
      name: "امیر حسینی",
      goal: "کاهش وزن",
      weight: 76,
      height: 175,
      bmi: 24.8,
      bodyFat: 23,
      activity: "امروز",
      avatar: "👨🏻",
      level: "مبتدی",
      sessions: 3,
      trainingHistory: "6 ماه",
      phone: "09123456785",
      email: "amir@example.com",
      age: 21,
      gender: "مرد",
    },
    {
      id: 6,
      name: "نیما رحیمی",
      goal: "عضله‌سازی",
      weight: 84,
      height: 180,
      bmi: 25.9,
      bodyFat: 16,
      activity: "دو روز پیش",
      avatar: "👨🏻",
      level: "پیشرفته",
      sessions: 5,
      trainingHistory: "4 سال",
      phone: "09123456784",
      email: "nima@example.com",
      age: 26,
      gender: "مرد",
    },
  ];

  const filters = [
    "همه",
    "کاهش وزن",
    "عضله‌سازی",
    "تناسب اندام",
    "افزایش قدرت",
  ];

  const navigate = useNavigate();

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        student.name.includes(search) ||
        student.goal.includes(search) ||
        student.level.includes(search);

      const matchesFilter =
        selectedFilter === "همه" || student.goal === selectedFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, selectedFilter]);

  return (
    <div dir="rtl" className="w-full min-h-screen bg-[#f3f8fd] p-5 md:p-7">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 mb-5">
        {/* Search */}
        <div className="relative w-full sm:w-[300px]">
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            ⌕
          </span>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جستجو بر اساس نام، شماره موبایل و..."
            className="
              w-full
              h-11
              bg-white
              rounded-2xl
              border border-transparent
              pr-10
              pl-4
              text-xs
              text-gray-600
              outline-none
              transition-all duration-200
              focus:border-blue-400
              focus:ring-4
              focus:ring-blue-100
            "
          />
        </div>

        {/* Filter */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setFilterOpen((prev) => !prev)}
            className="
              h-11
              px-5
              rounded-2xl
              bg-blue-600
              text-white
              text-xs
              font-medium
              flex
              items-center
              justify-center
              gap-2
              shadow-sm
              hover:bg-blue-700
              active:scale-95
              transition-all duration-200
              w-full sm:w-auto
            "
          >
            <span>فیلتر پیشرفته</span>
            <span
              className={`text-sm  justify-center w-4 h-4 flex items-center transition-transform duration-300 ${
                filterOpen ? "rotate-180" : ""
              }`}
            >
             <CaretDown/>
            </span>
          </button>

          {filterOpen && (
            <div
              className="
                absolute
                z-30
                top-14
                right-0
                w-52
                bg-white
                rounded-2xl
                border border-gray-100
                shadow-xl
                p-2
                animate-[filterIn_.2s_ease-out]
              "
            >
              <p className="px-3 py-2 text-[11px] text-gray-400">
                هدف شاگرد
              </p>

              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => {
                    setSelectedFilter(filter);
                    setFilterOpen(false);
                  }}
                  className={`
                    w-full
                    text-right
                    px-3
                    py-2.5
                    rounded-xl
                    text-xs
                    transition-all duration-200
                    ${
                      selectedFilter === filter
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }
                  `}
                >
                  <span className="flex items-center justify-between">
                    {filter}

                    {selectedFilter === filter && (
                      <span className="text-blue-600">✓</span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-[0_5px_25px_rgba(30,70,110,0.04)]">
        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-gray-500 text-[13px] font-normal">
                <th className="text-right font-normal px-5 py-5">
                  شاگرد
                </th>

                <th className="text-right font-normal px-5 py-5">
                  هدف
                </th>

                <th className="text-right font-normal px-5 py-5">
                  وزن
                </th>

                <th className="text-right font-normal px-5 py-5">
                  قد
                </th>

                <th className="text-right font-normal px-5 py-5">
                  BMI
                </th>

                <th className="text-right font-normal px-5 py-5">
                  درصد چربی
                </th>

                <th className="text-right font-normal px-5 py-5">
                  آخرین فعالیت
                </th>

                <th className="text-right font-normal px-5 py-5">
                  جزئیات
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="
                      border-t border-gray-100
                      hover:bg-blue-50/30
                      transition-colors duration-200
                    "
                  >
                    {/* Student */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="
                            w-9 h-9
                            rounded-full
                            bg-blue-50
                            border
                            border-blue-100
                            flex
                            items-center
                            justify-center
                            text-lg
                            shrink-0
                          "
                        >
                          {student.avatar}
                        </div>

                        <div className="flex flex-col">
                          <span className="text-xs font-medium text-gray-700">
                            {student.name}
                          </span>

                          <span className="text-[11px] text-gray-400 mt-0.5">
                            {student.goal}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Goal */}
                    <td className="px-5 py-4">
                      <span className="text-[13px] text-gray-600">
                        {student.goal}
                      </span>
                    </td>

                    {/* Weight */}
                    <td className="px-5 py-4">
                      <span className="text-[13px] text-gray-600">
                        {student.weight}KG
                      </span>
                    </td>

                    {/* Height */}
                    <td className="px-5 py-4">
                      <span className="text-[13px] text-gray-600">
                        {student.height}CM
                      </span>
                    </td>

                    {/* BMI */}
                    <td className="px-5 py-4">
                      <span className="text-[13px] text-gray-600">
                        {student.bmi}
                      </span>
                    </td>

                    {/* Body Fat */}
                    <td className="px-5 py-4">
                      <span className="text-[13px] text-gray-600">
                        {student.bodyFat}%
                      </span>
                    </td>

                    {/* Activity */}
                    <td className="px-5 py-4">
                      <span className="text-[13px] text-gray-600">
                        {student.activity}
                      </span>
                    </td>

                    {/* Details */}
                    <td className="px-5 py-4">
                      <button
                        type="button"
                        onClick={() => navigate(`/coach/athletes/${student.id}`)}
                        className="
                          min-w-[72px]
                          px-4
                          py-2
                          rounded-full
                          bg-blue-100
                          text-[#007BFF]
                          text-[12px]
                          font-medium
                          hover:bg-blue-600
                          hover:text-white
                          active:scale-95
                          cursor-pointer
                          transition-all duration-200
                        "
                      >
                        مشاهده
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="py-16 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-2xl">
                        🔍
                      </div>

                      <p className="text-[13px] font-medium text-gray-600">
                        شاگردی پیدا نشد
                      </p>

                      <p className="text-[11px] text-gray-400">
                        عبارت جستجو یا فیلتر انتخابی را تغییر دهید
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Result Footer */}
        <div className="border-t border-gray-100 px-5 py-4">
          <span className="text-[10px] text-gray-400">
            نمایش {filteredStudents.length} شاگرد از {students.length} شاگرد
          </span>
        </div>
      </div>

      {/* Student Details Modal */}


    </div>
  );
}