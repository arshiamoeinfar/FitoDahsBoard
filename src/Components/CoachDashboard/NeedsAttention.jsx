// components/coach/NeedsAttention.jsx

const students = [
  {
    id: 1,
    name: "علی رضایی",
    goal: "کاهش وزن",
    avatar: "https://i.pravatar.cc/100?img=12",
    status: "نیازمند پیگیری",
    statusType: "warning", // warning | danger | success
    reason: "سه روز تمرین نکرده است",
    lastActivity: "سه روز پیش",
  },
  {
    id: 2,
    name: "علی رضایی",
    goal: "کاهش وزن",
    avatar: "https://i.pravatar.cc/100?img=13",
    status: "نیازمند پیگیری",
    statusType: "warning",
    reason: "سه روز تمرین نکرده است",
    lastActivity: "سه روز پیش",
  },
  {
    id: 3,
    name: "علی رضایی",
    goal: "کاهش وزن",
    avatar: "https://i.pravatar.cc/100?img=14",
    status: "نیازمند پیگیری",
    statusType: "warning",
    reason: "سه روز تمرین نکرده است",
    lastActivity: "سه روز پیش",
  },
];

// تنظیمات رنگ بج بر اساس نوع وضعیت
const statusStyles = {
  warning: "bg-amber-100 text-amber-700",
  danger: "bg-rose-100 text-rose-700",
  success: "bg-emerald-100 text-emerald-700",
};

const NeedsAttention = () => {
  return (
    <section className="bg-white rounded-3xl p-5 md:p-7 shadow-sm">
      {/* ===== هدر ===== */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-primary  text-[#6B6F77]">نیازمند توجه</h2>
        <button className="text-sm font-medium text-[#007BFF] hover:text-blue-600 transition-colors cursor-pointer">
          مشاهده همه شاگردان
        </button>
      </div>

      {/* ===== جدول ===== */}
      <div className="overflow-x-auto">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="text-sm text-slate-400">
              <th className="pb-4 font-normal">شاگرد</th>
              <th className="pb-4 font-normal">وضعیت</th>
              <th className="pb-4 font-normal">دلیل</th>
              <th className="pb-4 font-normal">آخرین فعالیت</th>
              <th className="pb-4 font-normal text-center">جزئیات</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className=" border-t border-slate-100 hover:bg-slate-50/50 transition-colors"
              >
                {/* شاگرد */}
                <td className="py-4">
                  <div className="flex  items-center gap-3">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-100"
                    />
                    <div>
                      <p className="text-sm font-primary text-[#6B6F77]">
                        {student.name}
                      </p>
                      <p className="text-xs text-[#767676] mt-0.5">
                        {student.goal}
                      </p>
                    </div>
                  </div>
                </td>

                {/* وضعیت */}
                <td className="py-4">
                  <span
                    className={`inline-block text-[#CEA333] px-4 py-1.5 text-xs font-medium rounded-full ${
                      statusStyles[student.statusType]
                    }`}
                  >
                    {student.status}
                  </span>
                </td>

                {/* دلیل */}
                <td className="py-4 text-sm text-[#6B6F77]">
                  {student.reason}
                </td>

                {/* آخرین فعالیت */}
                <td className="py-4 text-sm text-[#6B6F77]">
                  {student.lastActivity}
                </td>

                {/* جزئیات */}
                <td className="py-4 text-center">
                  <button className="px-6 py-2 cursor-pointer bg-blue-50 text-[#007BFF] text-sm font-medium rounded-full hover:bg-blue-100 transition-colors">
                    مشاهده
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default NeedsAttention;