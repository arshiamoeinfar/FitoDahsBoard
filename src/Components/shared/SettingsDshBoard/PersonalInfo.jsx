const PersonalInfo = () => {
  return (
    <div className="bg-white rounded-4xl p-8">
      {/* Header */}
      <div className="flex items-center justify-start gap-3 mb-8">
        <span className="text-2xl">👤</span>

        <h2 className="text-2xl text-[#6B6F77] font-bold Modam-Medium">
          اطلاعات شخصی
        </h2>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-5">
        <div>
          <label className="block text-[#6B6F77] mb-3 text-sm">
            نام:
          </label>

          <input
            type="text"
            defaultValue="علی"
            className="w-full h-16 bg-[#F5F7FA] rounded-2xl px-5 text-[#6B6F77] outline-none border border-transparent focus:border-[#007BFF] transition"
          />
        </div>

        <div>
          <label className="block text-[#6B6F77] mb-3 text-sm">
            نام خانوادگی:
          </label>

          <input
            type="text"
            defaultValue="خواجه زاده"
            className="w-full h-16 bg-[#F5F7FA] rounded-2xl px-5 text-[#6B6F77] outline-none border border-transparent focus:border-[#007BFF] transition"
          />
        </div>

        <div>
          <label className="block text-[#6B6F77] mb-3 text-sm">
            ایمیل:
          </label>

          <input
            type="email"
            defaultValue="mahdi.kh@gmail.com"
            dir="ltr"
            className="w-full h-16 bg-[#F5F7FA] rounded-2xl px-5 text-[#6B6F77] outline-none border border-transparent focus:border-[#007BFF] transition"
          />
        </div>

        <div>
          <label className="block text-[#6B6F77] mb-3 text-sm">
            شماره موبایل:
          </label>

          <input
            type="text"
            defaultValue="09123456789"
            dir="ltr"
            className="w-full h-16 bg-[#F5F7FA] rounded-2xl px-5 text-[#6B6F77] outline-none border border-transparent focus:border-[#007BFF] transition"
          />
        </div>

        <div>
          <label className="block text-[#6B6F77] mb-3 text-sm">
            تاریخ تولد:
          </label>

          <input
            type="text"
            defaultValue="1383/06/15"
            className="w-full h-16 bg-[#F5F7FA] rounded-2xl px-5 text-[#6B6F77] outline-none border border-transparent focus:border-[#007BFF] transition"
          />
        </div>

        <div>
          <label className="block text-[#6B6F77] mb-3 text-sm">
            جنسیت:
          </label>

          <select className="w-full h-16 bg-[#F5F7FA] rounded-2xl px-5 text-[#6B6F77] outline-none border border-transparent focus:border-[#007BFF] transition">
            <option>مرد</option>
            <option>زن</option>
          </select>
        </div>
      </div>

      {/* Save Button */}
      <button className="mt-8 bg-[#007BFF] hover:bg-[#006BE0] text-white px-10 h-14 rounded-full transition-all duration-300 cursor-pointer">
        ذخیره تغییرات
      </button>
    </div>
  );
};

export default PersonalInfo;