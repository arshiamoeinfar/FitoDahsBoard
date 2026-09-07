import React from 'react'
import { X, Search, Plus, Minus, Camera, ChevronDown } from "lucide-react";

export default function AddFoodLeft({ foods, SearchFood, setSearchFood, clickHandler }) {

    return (
        <div className="space-y-6 border-l border-gray-100 p-6">
            {/* SEARCH */}
            <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                    انتخاب غذا
                </label>
                <div className="relative">
                    <Search
                        size={19}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                        value={SearchFood}
                        type="text"
                        placeholder="جستجوی غذا.."
                        className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pr-11 pl-4 text-sm outline-none transition focus:border-[#007BFF] focus:ring-4 focus:ring-blue-500/10"
                        onChange={(e) => setSearchFood(e.target.value)}
                    />
                </div>
            </div>

            {/* FOOD LIST */}
            <div className="max-h-57.5 space-y-2 overflow-y-auto pr-1 transition-all ">
                {foods
                    .filter((item) =>
                        item.name
                            .trim()
                            .toLowerCase()
                            .includes(SearchFood.trim().toLowerCase()),
                    )
                    .map((item) => (
                        <button
                            key={item.id}
                            onClick={() => clickHandler(item.id)}
                            type="button"
                            className="flex w-full items-center justify-between rounded-2xl border border-gray-100 bg-white p-3 text-right transition hover:border-gray-200 cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-xl">
                                    {item.emoji}
                                </div>

                                <div>
                                    <p className="font-medium text-gray-900">{item.name}</p>

                                    <p className="mt-1 text-xs text-gray-400">
                                        {item.calories} کالری در 100 گرم
                                    </p>
                                </div>
                            </div>
                        </button>
                    ))}
            </div>

            {/* QUANTITY */}
            <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                    مقدار
                </label>
                <div className="flex gap-3">
                    <div className="flex flex-1 items-center justify-between rounded-2xl border border-gray-200 bg-white p-2">
                        <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition hover:bg-gray-200"
                        >
                            <Minus size={17} />
                        </button>
                        <input
                            type="number"
                            min="1"
                            value={1}
                            className="w-16 bg-transparent text-center font-bold text-gray-900 outline-none"
                        />
                        <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#007BFF] text-white transition hover:bg-blue-600"
                        >
                            <Plus size={17} />
                        </button>
                    </div>

                    <div className="relative flex-1">
                        <select className="h-full w-full appearance-none rounded-2xl border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none focus:border-[#007BFF]">
                            <option>گرم</option>
                            <option>دانه</option>
                            <option>کف دست</option>
                        </select>
                        <ChevronDown
                            size={17}
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                    </div>
                </div>
                <p className="mt-2 text-xs text-gray-400">
                    معادل تقریبی 100.0 گرم
                </p>
            </div>

            {/* MEAL */}
            <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                    وعده غذایی
                </label>
                <div className="grid grid-cols-2 gap-2">
                    <button
                        type="button"
                        className="rounded-xl border border-[#007BFF] bg-blue-50 px-4 py-3 text-sm font-medium text-[#007BFF] transition"
                    >
                        صبحانه
                    </button>
                    <button
                        type="button"
                        className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm text-gray-500 transition hover:border-gray-200"
                    >
                        ناهار
                    </button>
                    <button
                        type="button"
                        className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm text-gray-500 transition hover:border-gray-200"
                    >
                        شام
                    </button>
                    <button
                        type="button"
                        className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm text-gray-500 transition hover:border-gray-200"
                    >
                        میان وعده
                    </button>
                </div>
            </div>

            {/* AI FOOD PHOTO */}
            <label className="block cursor-pointer">
                <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    className="hidden"
                />
                <div className="flex items-center gap-4 rounded-2xl border border-dashed border-blue-200 bg-blue-50/50 p-4 transition hover:bg-blue-50">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#007BFF] shadow-sm">
                        <Camera size={21} />
                    </div>
                    <div>
                        <p className="font-medium text-gray-900">تشخیص غذا با عکس</p>
                        <p className="mt-1 text-xs text-gray-500">
                            از غذایت عکس بگیر تا مقدار و ارزش غذایی آن تخمین زده شود
                        </p>
                    </div>
                </div>
            </label>
        </div>
    )
}
