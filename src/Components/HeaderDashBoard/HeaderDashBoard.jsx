import React from "react";
import Diskette from "../../assets/Icons/Diskette.svg";
import UserProfile from "./UserProfile/UserProfile";
import HeadeeMessage from "./HeadeeMessage/HeadeeMessage";
import BellImg from "../../assets/Icons/Bell.svg"
import message from "../../assets/Icons/Letter.svg";
import BtnHeader from "./BtnHeader/BtnHeader";
export default function HeaderDashBoard({
  title,
  description,
  date,
  newStatus,
  btnTrue = false,
  imgBtn,
}) {
  return (
    <div className="col-span-12 ">
      <div className="flex items-center justify-between mb-8">
        {/* Right */}
        <div>
          <h1 className="text-3xl font-bold text-[#6B6F77]">{title}</h1>

          <div className="flex items-center gap-3 mt-2 text-sm">
            <span className="text-[#A0A4AA]">{description}</span>

            <span className="text-[#6B6F77] font-medium">{date}</span>

            <span className="w-2 h-2 rounded-full bg-[#3BCB6A]"></span>

            <span className="text-[#3BCB6A]">{newStatus}</span>
          </div>
        </div>

        {/* Left */}

        <div className="flex items-center gap-4">
            {btnTrue && <BtnHeader imgBtn={imgBtn} />}

         <HeadeeMessage img={message} value={12}/>
         <HeadeeMessage img={BellImg} value={1}/>

        <span className="text-[#A0A4AA]">
            <UserProfile/>
         </span>
        </div>
      </div>
    </div>
  );
}
