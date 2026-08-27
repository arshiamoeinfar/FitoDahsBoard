import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FB] flex justify-center">
      <div className="w-full max-w-[1600px] grid grid-cols-[90px_1fr_330px] gap-6 px-8 py-6 bg-[#F5F7FB]">
        <div className="">
          <Navbar />
        </div>
        <div className="py-3 ">
          <div className="grid grid-cols-12 gap-6 h-full">
            <div className="col-span-12">
              <h1 className="text-3xl font-bold text-[#6B6F77]">تمرین های من</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
