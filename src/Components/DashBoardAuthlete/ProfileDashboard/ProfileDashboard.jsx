import EditProf from "../../../assets/Icons/Pen New Square.svg";
import UserProfile from "../../HeaderDashBoard/UserProfile/UserProfile";
import { useNavigate } from "react-router-dom";
export default function ProfileCard() {

  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-4xl p-7">
      <img
        onClick={()=> navigate("/settings")}
        src={EditProf}
        alt="edit profile"
        className="absolute top-12 left-16 w-6 h-6 cursor-pointer hover:opacity-70 transition"
      />
      {/* پروفایل */}
      <div className="flex flex-col items-center">
          <UserProfile />
        <h2 className="mt-2 text-xl font-semibold text-[#007BFF]">
          ارشیا معین فر
        </h2>

        {/* شهر | سن */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[15px] text-[#A3AED0] font-primary-ExtraLight font-medium">
            ایران، سقز
          </span>
          <div className="w-px h-4 bg-[#ECECEC]"></div>

          <span className="text-[15px] text-[#A3AED0] font-primary-ExtraLight font-medium">
            ۱۸ سال
          </span>
        </div>
      </div>
      {/* اطلاعات */}
      <div className="grid grid-cols-3 mt-5">
        <div className="text-center">
          <p className="text-sm text-[#A0A4AA] mt-1">قد</p>
          <h3 className="text-2xl font-bold text-[#85A5C2]">178</h3>
        </div>

        <div className="border-x border-[#ECECEC] text-center">
          <p className="text-sm text-[#A0A4AA] mt-1">وزن</p>
          <h3 className="text-2xl font-bold text-[#85A5C2]">82</h3>
        </div>

        <div className="text-center">
          <p className="text-sm text-[#A0A4AA] mt-1">گروه خون</p>
          <h3 className="text-2xl font-bold text-[#85A5C2]">+A</h3>
        </div>
      </div>
    </div>
  );
}
