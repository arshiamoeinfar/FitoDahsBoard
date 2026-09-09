import React, { useState } from "react";

export default function SegmentedControl({ onChange, ...items }) {
  const options = Object.values(items);
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option) => {
    setSelected(option);
    onChange?.(option);
  };

  return (
    <div className="bg-[#F2F8FD] rounded-3xl p-1 w-fit">
      {options.map((option) => (
        <button
          className={`rounded-3xl px-5 py-2 text-sm font-medium transition-all duration-200  ${option === selected ? "bg-white text-[#007BFF]" : "bg-[#F2F8FD] text-gray-500"}`}
          key={option}
          onClick={() => handleSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}