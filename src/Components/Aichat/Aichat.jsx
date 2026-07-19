import AIImage from "../../assets/imges/image 12.png";
import Send from "../../assets/imges/Plain 3.png";

export default function AIChat() {
  return (
    <div className="bg-white rounded-[32px] h-[570px] flex flex-col overflow-hidden mt-5">
      {/* Tabs */}
      <div className="p-5 border-b border-[#ECECEC]">
        <div className="bg-[#F5F7FA] rounded-full p-1 flex">
          <button className="flex-1 py-3 rounded-full bg-[#007BFF] text-white  transition text-sm">
            هوش مصنوعی
          </button>

          <button className="flex-1 py-3 rounded-full text-[#7D8790] font-medium hover:text-[#007BFF] transition text-sm">
            چت مربی
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col justify-center items-center px-8">
        <img src={AIImage} className="w-40 mb-8" alt="" />

        <h2 className="text-2xl font-semibold text-[#4F5965]">سلام ارشیا 👋</h2>

        <p className="text-center text-[#9CA3AF] leading-8 mt-2">
          من دستیار هوشمند فیتو هستم.
          <br />
          می‌توانم تمرینات، تغذیه،
          <br />
          خواب و پیشرفت بدنت را تحلیل کنم.
        </p>
      </div>

      {/* Input */}
      <div className="p-5">
        <div className="bg-[#F6F7FA] rounded-full px-5 py-3 flex items-center">
          <input
            type="text"
            placeholder="از من هر چیزی بپرس..."
            className="flex-1 bg-transparent outline-none text-[#6B7280]"
          />

          <button className="w-8 h-8 rounded-full bg-[#007BFF] flex items-center justify-center hover:bg-blue-600 transition">
            <img className="size-4" src={Send} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
