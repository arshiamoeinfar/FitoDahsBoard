import { useState } from "react";
import BodyChangesModal from "./BodyChangesModal";

const BodyChanges = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* کارت فعلی خودت */}
      <div className="bg-white rounded-[30px] p-5">

        {/* تمام طراحی فعلی خودت */}

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-5 w-full h-12 bg-[#007BFF] text-white rounded-xl hover:bg-[#006BE0] transition cursor-pointer"
        >
          مشاهده تصاویر کامل
        </button>

      </div>

      <BodyChangesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default BodyChanges;