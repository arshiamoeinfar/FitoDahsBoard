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
    <div dir="rtl" className="w-full min-h-screen">
      <div className="w-full max-w-[1600px] grid grid-cols-[1fr] gap-6 bg-background">

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 mb-5">
        {/* Search */}
        <div className="relative w-full sm:w-[300px]">
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted">
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
              bg-input
              rounded-2xl
              border border-transparent
              pr-10
              pl-4
              text-xs
              text-foreground
              placeholder:text-muted
              outline-none
              transition-all duration-200
              focus:border-primary
              focus:ring-4
              focus:ring-primary/30
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
              bg-primary
              text-white
              text-xs
              font-medium
              flex
              items-center
              justify-center
              gap-2
              shadow-sm
              hover:bg-primary-hover
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
                bg-surface
                rounded-2xl
                border border-border
                shadow-xl
                p-2
                animate-[filterIn_.2s_ease-out]
              "
            >
              <p className="px-3 py-2 text-[11px] text-muted">
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
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-foreground hover:bg-surface-secondary"
                    }
                  `}
                >
                  <span className="flex items-center justify-between">
                    {filter}

                    {selectedFilter === filter && (
                      <span className="text-primary">✓</span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="bg-surface rounded-3xl overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-muted text-[13px] font-normal">
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
                      border-t border-border
                      hover:bg-surface-secondary
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
                            bg-primary/10
                            border
                            border-primary/30
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
                          <span className="text-xs font-medium text-foreground">
                            {student.name}
                          </span>

                          <span className="text-[11px] text-muted mt-0.5">
                            {student.goal}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Goal */}
                    <td className="px-5 py-4">
                      <span className="text-[13px] text-foreground">
                        {student.goal}
                      </span>
                    </td>

                    {/* Weight */}
                    <td className="px-5 py-4">
                      <span className="text-[13px] text-foreground">
                        {student.weight}KG
                      </span>
                    </td>

                    {/* Height */}
                    <td className="px-5 py-4">
                      <span className="text-[13px] text-foreground">
                        {student.height}CM
                      </span>
                    </td>

                    {/* BMI */}
                    <td className="px-5 py-4">
                      <span className="text-[13px] text-foreground">
                        {student.bmi}
                      </span>
                    </td>

                    {/* Body Fat */}
                    <td className="px-5 py-4">
                      <span className="text-[13px] text-foreground">
                        {student.bodyFat}%
                      </span>
                    </td>

                    {/* Activity */}
                    <td className="px-5 py-4">
                      <span className="text-[13px] text-foreground">
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
                          bg-primary/10
                          text-primary
                          text-[12px]
                          font-medium
                          hover:bg-primary
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
                      <div className="w-14 h-14 rounded-full bg-surface-secondary flex items-center justify-center text-2xl">
                        🔍
                      </div>

                      <p className="text-[13px] font-medium text-foreground">
                        شاگردی پیدا نشد
                      </p>

                      <p className="text-[11px] text-muted">
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
        <div className="border-t border-border px-5 py-4">
          <span className="text-[10px] text-muted">
            نمایش {filteredStudents.length} شاگرد از {students.length} شاگرد
          </span>
        </div>
      </div>

      {/* Student Details Modal */}


    </div>
    </div>
  );
}