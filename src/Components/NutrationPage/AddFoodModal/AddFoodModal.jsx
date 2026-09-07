import { X, Search, Plus, Minus, Camera, ChevronDown } from "lucide-react";
import { useState } from "react";
import AddFoodRight from "../AddFoodLeft/AddFoodLeft";
import AddFoodLeft from "../AddFoodRight/AddFoodRight";

export default function AddFoodModal({ isOpen, onClose, onAdd }) {
  if (!isOpen) return null;

  const [SearchFood, setSearchFood] = useState("");
  const [IsActive, setIsActive] = useState(false);
  const [SelectedFood, setSelectedFood] = useState(null);

  console.log(SelectedFood);

  const foods = [
    {
      id: 1,
      name: "سینه مرغ",
      emoji: "🍗",
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
    },
    {
      id: 2,
      name: "برنج",
      emoji: "🍚",
      calories: 130,
      protein: 2.7,
      carbs: 28,
      fat: 0.3,
    },
    {
      id: 3,
      name: "سیب",
      emoji: "🍎",
      calories: 52,
      protein: 0.3,
      carbs: 14,
      fat: 0.2,
    },
    {
      id: 4,
      name: "ماست",
      emoji: "🥛",
      calories: 61,
      protein: 3.3,
      carbs: 4.8,
      fat: 3.3,
    },
    {
      id: 5,
      name: "تخم مرغ",
      emoji: "🥚",
      calories: 155,
      protein: 13,
      carbs: 1.1,
      fat: 11,
    },
    {
      id: 6,
      name: "پنیر",
      emoji: "🧀",
      calories: 403,
      protein: 25,
      carbs: 2,
      fat: 33,
    }
  ];

  function clickHandler(id) {
    setIsActive(!IsActive);
    setSelectedFood(foods.find((item) => item.id === id));
  }

  return (
    <div
      dir="rtl"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
    >
      <div className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] bg-[#F8FAFC] shadow-2xl">
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-gray-100 bg-white px-6 py-5">
          <div>
            <h2 className="text-xl font-bold text-gray-900">افزودن غذا</h2>
            <p className="mt-1 text-sm text-gray-400">
              غذای خود را به وعده غذایی اضافه کنید
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200 hover:text-gray-800"
          >
            <X size={20} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="grid flex-1 overflow-y-auto lg:grid-cols-2">
          {/* LEFT SIDE */}
          <AddFoodLeft
            foods={foods}
            SearchFood={SearchFood}
            setSearchFood={setSearchFood}
            clickHandler={clickHandler}
          />

          {/* RIGHT SIDE */}
          <AddFoodRight SelectedFood={SelectedFood} />
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between gap-4 border-t border-gray-100 bg-white px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl px-5 py-3 text-sm font-medium text-gray-500 transition bg-gray-100 hover:bg-gray-200 cursor-pointer"
          >
            انصراف
          </button>
          <button
            type="button"
            disabled
            className="rounded-xl bg-[#007BFF] px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            + افزودن به وعده غذایی
          </button>
        </div>
      </div>
    </div>
  );
}



