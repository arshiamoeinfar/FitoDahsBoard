// components/coach/ProgressChart.jsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ==================== داده‌ها بر اساس بازه ====================
const dataByRange = {
  "7 روز": [
    { day: "شنبه", weight: 70, fat: 22, muscle: 35 },
    { day: "یکشنبه", weight: 89, fat: 20, muscle: 37 },
    { day: "دوشنبه", weight: 81, fat: 19, muscle: 38 },
    { day: "سه‌شنبه", weight: 102, fat: 18, muscle: 39 },
    { day: "چهارشنبه", weight: 128, fat: 17, muscle: 40 },
    { day: "پنجشنبه", weight: 78, fat: 18, muscle: 39 },
    { day: "جمعه", weight: 115, fat: 17, muscle: 41 },
  ],
  "30 روز": [
    { day: "هفته ۱", weight: 76, fat: 23, muscle: 34 },
    { day: "هفته ۲", weight: 82, fat: 22, muscle: 36 },
    { day: "هفته ۳", weight: 79, fat: 21, muscle: 37 },
    { day: "هفته ۴", weight: 88, fat: 20, muscle: 38 },
  ],
  "3 ماه": [
    { day: "فروردین", weight: 82, fat: 24, muscle: 33 },
    { day: "اردیبهشت", weight: 79, fat: 22, muscle: 35 },
    { day: "خرداد", weight: 85, fat: 21, muscle: 37 },
  ],
};

// ==================== تنظیمات هر متریک ====================
// هر متریک: رنگ خط، شناسه‌ی گرادینت، کلید داده، و domain محور Y
const metrics = {
  "وزن": {
    dataKey: "weight",
    color: "#007BFF",
    domain: [60, 140],
    ticks: [60, 80, 100, 120, 140],
  },
  "چربی": {
    dataKey: "fat",
    color: "#6BAF41",
    domain: [10, 30],
    ticks: [10, 15, 20, 25, 30],
  },
  "عضله": {
    dataKey: "muscle",
    color: "#6366F1",
    domain: [30, 45],
    ticks: [30, 35, 40, 45],
  },
};

// ==================== کامپوننت اصلی ====================
const ProgressChart = () => {
  const [range, setRange] = useState("7 روز");
  const [metric, setMetric] = useState("وزن");

  const chartData = dataByRange[range] || [];
  const currentMetric = metrics[metric];

  return (
    <section className="bg-white rounded-3xl p-5 md:p-7 shadow-sm h-full flex flex-col">
      {/* ===== هدر ===== */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h2 className="text-2xl font-primary  text-[#6B6F77]">
          روند پیشرفت شاگردان
        </h2>

        <div className="flex items-center gap-2">
          <FilterPill
            value={range}
            options={Object.keys(dataByRange)}
            onChange={setRange}
          />
          <FilterPill
            value={metric}
            options={Object.keys(metrics)}
            onChange={setMetric}
          />
        </div>
      </div>

      {/* ===== نمودار ===== */}
      <div className="w-full flex-1 min-h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 15, right: 0, left: 0, bottom: 10 }}
          >
            {/* گرادینت داینامیک بر اساس متریک انتخاب‌شده */}
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor={currentMetric.color}
                  stopOpacity={0.28}
                />
                <stop
                  offset="100%"
                  stopColor={currentMetric.color}
                  stopOpacity={0.02}
                />
              </linearGradient>
            </defs>

            {/* گرید */}
            <CartesianGrid
              stroke="#DCE3EB"
              strokeDasharray="7 7"
              vertical={true}
              horizontal={true}
            />

            {/* محور X */}
            <XAxis
              dataKey="day"
              tick={{ fill: "#777", fontSize: 16 }}
              axisLine={false}
              tickLine={{ stroke: "#8FA7C0" }}
              tickMargin={18}
            />

            {/* محور Y — داینامیک بر اساس متریک */}
            <YAxis
              domain={currentMetric.domain}
              ticks={currentMetric.ticks}
              tickMargin={40}
              width={70}
              tick={{ fill: "#777", fontSize: 16 }}
              axisLine={false}
              tickLine={{ stroke: "#8FA7C0" }}
            />

            {/* تولتیپ */}
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "#007BFF", strokeDasharray: "5 5" }}
            />

            {/* ===== Area اصلی (داینامیک) ===== */}
            <Area
              type="natural"
              dataKey={currentMetric.dataKey}
              name={metric}
              stroke={currentMetric.color}
              strokeWidth={3}
              fill="url(#areaGradient)"
              fillOpacity={1}
              dot={false}
              activeDot={{
                r: 6,
                strokeWidth: 3,
                fill: "#fff",
                stroke: currentMetric.color,
              }}
              animationDuration={700}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

// ==================== تولتیپ سفارشی ====================
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;
  const item = payload[0];
  return (
    <div className="bg-white rounded-xl shadow-lg px-4 py-3 border border-slate-100">
      <p className="text-xs text-slate-400 mb-1">{label}</p>
      <p className="text-sm font-semibold text-slate-800">
        {item.name}: {item.value}
      </p>
    </div>
  );
};

// ==================== Pill برای dropdown ====================
const FilterPill = ({ value, options, onChange }) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none px-8 h-11 bg-white text-sm font-medium text-slate-700 rounded-full border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none cursor-pointer hover:border-slate-300 transition"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
    </div>
  );
};

export default ProgressChart;