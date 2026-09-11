import React, { useState } from "react";
import { X, Search, Plus, Minus, Camera, ChevronDown } from "lucide-react";

export default function ValueFood({ SelectedFood }) {
  const [ValueFood, setValueFood] = useState(100);
  const clickPalus = () => {
    setValueFood(Number(ValueFood + 1));
  };
  console.log(ValueFood);

  return (
    <div className="flex flex-1 items-center justify-between rounded-2xl border border-gray-200 bg-white p-2">
      <button
        type="button"
        onClick={() => setValueFood(Number(ValueFood > 1 ? ValueFood - 1 : ValueFood = 0))}
        disabled={SelectedFood == null}
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition hover:bg-gray-200 disabled:disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Minus size={17} />
      </button>
      <input
        type="number"
        min="1"
        disabled={SelectedFood == null || ValueFood < 1}
        value={ValueFood}
        onChange={(e) => setValueFood(Number(e.target.value))}
        className="w-16 bg-transparent text-center font-bold text-gray-900 outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <button
        type="button"
        disabled={SelectedFood == null}
        onClick={clickPalus}
        className="flex disabled:disabled:cursor-not-allowed disabled:opacity-40 h-10 w-10 items-center justify-center rounded-xl bg-[#007BFF] text-white transition hover:bg-blue-600"
      >
        <Plus size={17} />
      </button>
    </div>
  );
}
