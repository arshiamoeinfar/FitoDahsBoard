import React, { useState } from "react";

export default function SegmentedControl({ onChange, ...items }) {
  const options = Object.values(items);
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option) => {
    setSelected(option);
    onChange?.(option);
  };

  return (
    <div className="bg-surface-secondary rounded-3xl p-1 w-fit">
      {options.map((option) => (
        <button
          className={`rounded-3xl px-5 py-2 text-sm font-medium transition-all duration-200  ${option === selected ? "bg-surface text-primary" : "bg-surface-secondary text-muted"}`}
          key={option}
          onClick={() => handleSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}