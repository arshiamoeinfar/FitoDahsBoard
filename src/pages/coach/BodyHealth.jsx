import HealthInfoCard from "../../Components/CoachDashboard/HealthInfoCard.jsx";
import SleepEnergyCard from "../../Components/CoachDashboard/SleepEnergyCard.jsx";
import MedicalTestsCard from "../../Components/CoachDashboard/MedicalTestsCard.jsx";

export default function BodyHealth() {
  const physicalInfo = [
    { label: "وزن", value: "88 کیلوگرم" },
    { label: "قد", value: "180 سانتی‌متر" },
    { label: "سن", value: "28 سال" },
    { label: "گروه خونی", value: "O+" },
    { label: "ضربان قلب استراحت", value: "68 bpm" },
    { label: "ظرفیت ریه", value: "4.8 لیتر" },
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
      className="min-h-screen bg-[#F1F7FC]"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-4 lg:grid-cols-2">
        <HealthInfoCard
          title="اطلاعات جسمانی"
          items={physicalInfo}
        />

        <HealthInfoCard
          title="اندازه‌گیری بدن"
          items={bodyMeasurements}
        />

        <SleepEnergyCard />

        <MedicalTestsCard />
      </div>
    </main>
  );
}