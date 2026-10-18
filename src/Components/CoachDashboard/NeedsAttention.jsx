// components/coach/NeedsAttention.jsx

import { useNavigate } from "react-router-dom";

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

const statusStyles = {
  warning: "bg-amber-500/10 text-amber-600",
  danger: "bg-rose-500/10 text-rose-600",
  success: "bg-emerald-500/10 text-emerald-600",
};

const NeedsAttention = () => {

  const navigate = useNavigate()
  return (
    <section className="bg-surface rounded-3xl p-5 md:p-7 ">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-primary  text-foreground">نیازمند توجه</h2>
        <button
        onClick={() => navigate("/coach/athletes")}
        className="text-sm font-medium text-primary hover:text-primary-hover transition-colors cursor-pointer">
          مشاهده همه شاگردان
        </button>
      </div>

      <div className="overflow-x-auto ">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="text-sm text-muted">
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
                className=" border-t border-border hover:bg-surface-secondary/50 transition-colors"
              >
                {/* شاگرد */}
                <td className="py-4">
                  <div className="flex  items-center gap-3">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-border"
                    />
                    <div>
                      <p className="text-sm font-primary text-foreground">
                        {student.name}
                      </p>
                      <p className="text-xs text-muted mt-0.5">
                        {student.goal}
                      </p>
                    </div>
                  </div>
                </td>

                {/* وضعیت */}
                <td className="py-4">
                  <span
                    className={`inline-block px-4 py-1.5 text-xs font-medium rounded-full ${
                      statusStyles[student.statusType]
                    }`}
                  >
                    {student.status}
                  </span>
                </td>

                {/* دلیل */}
                <td className="py-4 text-sm text-foreground">
                  {student.reason}
                </td>

                {/* آخرین فعالیت */}
                <td className="py-4 text-sm text-foreground">
                  {student.lastActivity}
                </td>

                {/* جزئیات */}
                <td className="py-4 text-center">
                  <button className="px-6 py-2 cursor-pointer bg-primary/10 text-primary text-sm font-medium rounded-full hover:bg-primary/20 transition-colors">
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