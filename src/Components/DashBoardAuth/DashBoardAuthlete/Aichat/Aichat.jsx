import AIImage from "../../../../assets/imges/image 12.png";
import Send from "../../../../assets/imges/Plain 3.png";
import SegmentedControl from "../../../shared/SegmentedControl/SegmentedControl";

export default function AIChat() {
  return (
    <div className="bg-surface rounded-3xl h-[570px] flex flex-col overflow-hidden mt-5">
      {/* Tabs */}
      <div className="p-5 border-b border-border flex justify-center items-center">
       <SegmentedControl item1={"چت با مربی"} item2={"هوش مصنوعی"}/>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col justify-center items-center px-8">
        <img src={AIImage} className="w-40 mb-8" alt="" />

        <h2 className="text-2xl font-semibold text-foreground">سلام ارشیا 👋</h2>

        <p className="text-center text-muted leading-8 mt-2 font-primary-Light font-medium">
          من دستیار هوشمند فیتو هستم.
          <br />
          می‌توانم تمرینات، تغذیه،
          <br />
          خواب و پیشرفت بدنت را تحلیل کنم.
        </p>
      </div>

      {/* Input */}
      <div className="p-5">
        <div className="bg-transparent border rounded-full px-5 py-3 flex items-center">
          <input
            type="text"
            placeholder="از من هر چیزی بپرس..."
            className="flex-1 outline-none text-foreground"
          />

          <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary-hover transition">
            <img className="size-4" src={Send} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}