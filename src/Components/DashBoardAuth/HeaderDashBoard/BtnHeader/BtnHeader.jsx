import React from "react";

export default function BtnHeader({ imgBtn }) {
  return (
    <button className="flex items-center gap-2 bg-primary/10 border border-border px-5 py-3 rounded-3xl hover:bg-primary/20 duration-300 cursor-pointer">
      <img src={imgBtn} className="text-lg"></img>
      <span className="text-primary">دانلود گزارش</span>
    </button>
  );
}
