import { AreaChart, Area, ResponsiveContainer } from "recharts";

const data = [
  { v: 15 }, { v: 22 }, { v: 18 }, { v: 2 },
  { v: 24 }, { v: 34 }, { v: 10 }, { v: 42 },
  { v: 50 }, { v: 50 }, { v: 46 }, { v: 62 },
  { v: 58 }, { v: 78 },
];

export default function MetricCard({ label = "متابولیسم پایه", value = 1850, unit = "kcal", status = "عالی" }) {
  return (
    <div dir="rtl" className="bg-white rounded-3xl p-5 flex flex-col gap-4 w-full max-w-72 max-h-72">
      <span className="text-sm text-gray-500">{label}</span>

      <div className="flex items-baseline gap-1 justify-start">
        <span className="text-3xl font-extrabold text-gray-800">{value}</span>
        <span className="text-sm text-cyan-500 font-medium">{unit}</span>
      </div>

      <div className="h-24 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorV" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="linear"
              dataKey="v"
              stroke="#22d3ee"
              strokeWidth={2}
              fill="url(#colorV)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <span className="text-xs text-gray-400">
        وضعیت: <span className="text-green-500 font-medium">{status}</span>
      </span>
    </div>
  );
}