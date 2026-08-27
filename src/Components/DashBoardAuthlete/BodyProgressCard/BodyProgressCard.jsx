import React from "react";
import Liner from "../../../assets/imges/Line 1.png";
import Vector from "../../../assets/imges/Vector 177.png";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

export default function BodyProgressCard({ count = [], title = "" }) {
  const data = [
    { value: 45 },
    { value: 20 },
    { value: 50 },
    { value: 55 },
    { value: 50 },
    { value: 72 },
    { value: 28 },
    { value: 48 },
    { value: 60 },
    { value: 55 },
  ];
  return (
    <div className="flex bg-white flex-col p-6 rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg text-[#6B6F77]">{title}</h1>
        <div className="flex justify-center items-center">
          <span className="text-sm text-[#6B6F77] font-primary-light">
            این هفته
          </span>
          <img className=" mr-0.5 w-2.5 h-fit" src={Vector} alt="" />
        </div>
      </div>
      <div className="flex justify-start items-center gap-4">
        {count.map((item, index) => (
          <>
            <div className="flex w-full flex-col gap-2">
              <div className="flex flex-col gap-2">
                <h1 className="text-[#6B6F77] Modam-Medium text-sm ">پرس دمبل</h1>
                <p className="text-sm text-[#6B6F77] font-primary-light">
                  20kg → 24kg
                </p>
              </div>
              <div className="flex w-full">
                <ResponsiveContainer width="100%" height={90}>
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#6BAF41"
                          stopOpacity={0.35}
                        />
                        <stop
                          offset="100%"
                          stopColor="#6BAF41"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>

                    <Area
                      type="linear"
                      dataKey="value"
                      stroke="#6BAF41"
                      strokeWidth={3}
                      fill="url(#gradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            {index !== 1 && index !== count.length - 1 && (
              <img className="w-1 h-32" src={Liner} alt="" />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
