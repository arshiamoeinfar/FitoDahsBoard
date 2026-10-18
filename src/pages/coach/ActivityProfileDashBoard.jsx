import React from 'react'
import HealthInfoCard from "../../Components/CoachDashboard/HealthInfoCard.jsx";
import SleepEnergyCard from '../../Components/CoachDashboard/SleepEnergyCard';

export default function ActivityProfileDashBoard() {
      const physicalInfo = [
    { label: "سینه", value: "88 کیلوگرم" },
    { label: "جلوبازو", value: "8کیلوگرم" },

  ];

  const bodyMeasurements = [
    { label: "دور سینه", value: "105 سانتی‌متر" },
    { label: "دور کمر", value: "88 سانتی‌متر" },
    { label: "دور باسن", value: "102 سانتی‌متر" },
    { label: "دور بازو", value: "38 سانتی‌متر" },
    { label: "دور ران", value: "60 سانتی‌متر" },
    { label: "دور شکم", value: "90 سانتی‌متر" },
  ];
  return (
   <main
        dir="rtl"
        className="min-h-screen bg-background"
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-4 lg:grid-cols-2">
          <HealthInfoCard
            title="حجم تمرین هر عصله(این هفته) "
            items={physicalInfo}
          />
          <SleepEnergyCard />
  
  
        </div>
      </main>
  )
}
