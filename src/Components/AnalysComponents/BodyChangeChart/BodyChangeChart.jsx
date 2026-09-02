import React from "react";
import ReactApexChart from "react-apexcharts";
import SegmentedControl from "../../SegmentedControl/SegmentedControl";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    day: "شنبه",
    weight: 71,
    fat: 70,
    muscle: 70,
  },
  {
    day: "یکشنبه",
    weight: 97,
    fat: 88,
    muscle: 77,
  },
  {
    day: "دوشنبه",
    weight: 108,
    fat: 101,
    muscle: 82,
  },
  {
    day: "سه‌شنبه",
    weight: 135,
    fat: 126,
    muscle: 91,
  },
  {
    day: "چهارشنبه",
    weight: 117,
    fat: 108,
    muscle: 85,
  },
  {
    day: "پنجشنبه",
    weight: 89,
    fat: 80,
    muscle: 76,
  },
  {
    day: "جمعه",
    weight: 123,
    fat: 115,
    muscle: 88,
  },
];

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-lg">
      <p className="mb-2 font-bold text-gray-700">{payload[0]?.payload?.day}</p>

      <p className="text-[#007BFF]">وزن: {payload[0]?.value} کیلوگرم</p>

      <p className="text-[#6BAF41]">چربی: {payload[1]?.value}٪</p>

      <p className="text-[#6366F1]">عضله: {payload[2]?.value} کیلوگرم</p>
    </div>
  );
};
export default function BodyChangeChart() {
  return (
    <div className="bg-white rounded-3xl p-4 w-full">
      <div className="flex justify-between items-center">
        <div className="text-2xl  text-[#6B6F77] font-primary">
          روند تغییرات وزن ، چربی و عضله
        </div>
        <div className="p-5 flex justify-center items-center">
          <SegmentedControl item1={"7 روز"} item2={"1 ماه"} item3={"3 ماه"} item4={"1 سال"} />
        </div>
      </div>
      <div className="w-full rounded-[32px] bg-white p-6" dir="rtl">
        {/* Header */}

        {/* Chart */}
        <div className="h-80 w-full">
          <ResponsiveContainer width="105%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 15,
                right: 0,
                left: 0,
                bottom: 10,
              }}
            >
              <defs>
                {/* Weight Gradient */}
                <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#007BFF" stopOpacity={0.25} />

                  <stop offset="100%" stopColor="#007BFF" stopOpacity={0} />
                </linearGradient>

                {/* Fat Gradient */}
                <linearGradient id="fatGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6BAF41" stopOpacity={0.22} />

                  <stop offset="100%" stopColor="#6BAF41" stopOpacity={0} />
                </linearGradient>

                {/* Muscle Gradient */}
                <linearGradient id="muscleGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity={0.18} />

                  <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
                </linearGradient>
              </defs>

              {/* Grid */}
              <CartesianGrid
                stroke="#DCE3EB"
                strokeDasharray="7 7"
                vertical={true}
                horizontal={true}
              />

              {/* X Axis */}
              <XAxis
                dataKey="day"
                tick={{
                  fill: "#777",
                  fontSize: 16,
                }}
                axisLine={false}
                tickLine={{
                  stroke: "#8FA7C0",
                }}
                tickMargin={18}
              />

              {/* Y Axis */}
              <YAxis
                domain={[60, 140]}
                ticks={[60, 80, 100, 120, 140]}
                tickMargin={40}
                width={70}
                tick={{
                  fill: "#777",
                  fontSize: 16,
                }}
                axisLine={false}
                tickLine={{
                  stroke: "#8FA7C0",
                }}
              />

              {/* Tooltip */}
              <Tooltip
                content={<CustomTooltip />}
                cursor={{
                  stroke: "#007BFF",
                  strokeDasharray: "5 5",
                }}
              />

              {/* Weight */}
              <Area
                type="natural"
                dataKey="weight"
                name="وزن"
                stroke="#007BFF"
                strokeWidth={3}
                fill="url(#weightGradient)"
                fillOpacity={1}
                dot={false}
                activeDot={{
                  r: 6,
                  strokeWidth: 3,
                  fill: "#fff",
                }}
              />

              {/* Fat */}
              <Area
                type="natural"
                dataKey="fat"
                name="چربی"
                stroke="#6BAF41"
                strokeWidth={3}
                fill="url(#fatGradient)"
                fillOpacity={1}
                dot={false}
                activeDot={{
                  r: 6,
                  strokeWidth: 3,
                  fill: "#fff",
                }}
              />

              {/* Muscle */}
              <Area
                type="natural"
                dataKey="muscle"
                name="عضله"
                stroke="#6366F1"
                strokeWidth={3}
                fill="url(#muscleGradient)"
                fillOpacity={1}
                dot={false}
                activeDot={{
                  r: 6,
                  strokeWidth: 3,
                  fill: "#fff",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="mt-5 flex items-center justify-center gap-10">
          <div className="flex items-center gap-2">
            <span className="h-[3px] w-8 rounded-full bg-[#007BFF]" />
            <span className="text-gray-600">وزن (کیلوگرم)</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-[3px] w-8 rounded-full bg-[#6BAF41]" />
            <span className="text-gray-600">چربی (%)</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-[3px] w-8 rounded-full bg-[#6366F1]" />
            <span className="text-gray-600">عضله (کیلوگرم)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
