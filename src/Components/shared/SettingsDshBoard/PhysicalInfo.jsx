const PhysicalInfo = () => {
  return (
    <div className="bg-surface rounded-4xl p-8">
      {/* Header */}
      <div className="flex items-center justify-start gap-3 mb-8">
        <span className="text-2xl">💪</span>

        <h2 className="text-2xl text-foreground font-bold Modam-Medium">
          اطلاعات فیزیکی
        </h2>
      </div>

      {/* Physical Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-foreground mb-3 text-sm">
            قد (سانتی متر)
          </label>

          <input
            type="number"
            defaultValue="187"
            className="w-full h-16 bg-input rounded-2xl px-5 text-foreground outline-none border border-transparent focus:border-primary transition"
          />
        </div>

        <div>
          <label className="block text-foreground mb-3 text-sm">
            وزن فعلی (کیلوگرم)
          </label>

          <input
            type="number"
            defaultValue="69"
            className="w-full h-16 bg-input rounded-2xl px-5 text-foreground outline-none border border-transparent focus:border-primary transition"
          />
        </div>

        <div>
          <label className="block text-foreground mb-3 text-sm">
            وزن هدف (کیلوگرم)
          </label>

          <input
            type="number"
            defaultValue="75"
            className="w-full h-16 bg-input rounded-2xl px-5 text-foreground outline-none border border-transparent focus:border-primary transition"
          />
        </div>
      </div>

      {/* Injuries */}
      <div className="mt-6">
        <label className="block text-foreground mb-3 text-sm">
          آسیب‌ها یا محدودیت‌های جسمی:
        </label>

        <textarea
          defaultValue="داره مزمن زانوی چپ به محدودیت چرخش شانه راست"
          className="w-full min-h-24 bg-input rounded-2xl p-5 text-foreground outline-none resize-none border border-transparent focus:border-primary transition"
        />
      </div>

      {/* Save */}
      <button className="mt-8 bg-primary hover:bg-primary-hover text-white px-10 h-14 rounded-full transition-all duration-300 cursor-pointer">
        ذخیره تغییرات
      </button>
    </div>
  );
};

export default PhysicalInfo;