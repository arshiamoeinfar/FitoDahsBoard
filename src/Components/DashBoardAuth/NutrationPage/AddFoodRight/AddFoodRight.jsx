import React from 'react'
import { X, Search, Plus, Minus, Camera, ChevronDown } from "lucide-react";
import ValueFood from "../ValueFood";

export default function AddFoodRight({ SelectedFood , foods, SearchFood, setSearchFood, clickHandler }) {
    
    return (
        <div className="space-y-6 border-l border-border p-6">
            {/* SEARCH */}
            <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                    انتخاب غذا
                </label>
                <div className="relative">
                    <Search
                        size={19}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted"
                    />
                    <input
                        value={SearchFood}
                        type="text"
                        placeholder="جستجوی غذا.."
                        className="w-full rounded-2xl border border-border bg-input py-3.5 pr-11 pl-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/30"
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
                            className="flex w-full items-center justify-between rounded-2xl border border-border bg-surface p-3 text-right transition hover:border-border cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-secondary text-xl">
                                    {item.emoji}
                                </div>

                                <div>
                                    <p className="font-medium text-foreground">{item.name}</p>

                                    <p className="mt-1 text-xs text-muted">
                                        {item.calories} کالری در 100 گرم
                                    </p>
                                </div>
                            </div>
                        </button>
                    ))}
            </div>

            {/* QUANTITY */}
            <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                    مقدار
                </label>
                <div className="flex gap-3">
                    <ValueFood SelectedFood={SelectedFood} />

                    <div className="relative flex-1">
                        <select className="h-full w-full appearance-none rounded-2xl border border-border bg-input px-4 text-sm text-foreground outline-none focus:border-primary">
                            <option>گرم</option>
                            <option>دانه</option>
                            <option>کف دست</option>
                        </select>
                        <ChevronDown
                            size={17}
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                        />
                    </div>
                </div>
                <p className="mt-2 text-xs text-muted">
                    معادل تقریبی 100.0 گرم
                </p>
            </div>

            {/* MEAL */}
            <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                    وعده غذایی
                </label>
                <div className="grid grid-cols-2 gap-2">
                    <button
                        type="button"
                        className="rounded-xl border border-primary bg-primary/10 px-4 py-3 text-sm font-medium text-primary transition"
                    >
                        صبحانه
                    </button>
                    <button
                        type="button"
                        className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted transition hover:border-border"
                    >
                        ناهار
                    </button>
                    <button
                        type="button"
                        className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted transition hover:border-border"
                    >
                        شام
                    </button>
                    <button
                        type="button"
                        className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted transition hover:border-border"
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
                <div className="flex items-center gap-4 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-4 transition hover:bg-primary/10">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface text-primary shadow-sm">
                        <Camera size={21} />
                    </div>
                    <div>
                        <p className="font-medium text-foreground">تشخیص غذا با عکس</p>
                        <p className="mt-1 text-xs text-muted">
                            از غذایت عکس بگیر تا مقدار و ارزش غذایی آن تخمین زده شود
                        </p>
                    </div>
                </div>
            </label>
        </div>
    )
}
