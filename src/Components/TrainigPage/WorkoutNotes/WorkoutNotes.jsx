import { useState } from "react";

const initialNotes = [
  {
    id: 1,
    date: "امروز",
    title: "امروز",
    text: "هنگام پرس سرشانه کمی در شانه راست احساس درد داشتم. برای ست بعدی وزن را کاهش دادم.",
    type: "training",
  },

  {
    id: 2,
    date: "۲۱ مرداد",
    title: "۲۱ مرداد",
    text: "انرژی بالایی داشتم، همه ست‌های اسکوات را با رکورد کامل انجام دادم.",
    type: "record",
  },

  {
    id: 3,
    date: "۱۰ مرداد",
    title: "۱۰ مرداد",
    text: "وزنه تمرین امروز نسبت به هفته قبل بهتر بود و احساس قدرت بیشتری داشتم.",
    type: "progress",
  },
];


export default function WorkoutNotes() {

  const [notes, setNotes] = useState(initialNotes);

  const [selectedNote, setSelectedNote] = useState(null);

  const [isAdding, setIsAdding] = useState(false);

  const [newNote, setNewNote] = useState("");


  // ===============================
  // Add Note
  // ===============================

  const addNote = () => {

    if (!newNote.trim()) return;


    const note = {
      id: Date.now(),
      date: "امروز",
      title: "امروز",
      text: newNote,
      type: "training",
    };


    setNotes((previousNotes) => [
      note,
      ...previousNotes,
    ]);


    setNewNote("");

    setIsAdding(false);
  };


  return (
    <>

      <section
        dir="rtl"
        className="h-full rounded-3xl bg-white p-6"
      >

        {/* Header */}
        <div className="mb-7 flex items-center justify-between">

          <h2 className="text-2xl font-medium text-[#6B6F77]">
            یادداشت تمرین
          </h2>


          <button
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 rounded-full bg-[#DBECFF] px-3 py-1 text-[#007BFF] transition hover:bg-[#CDE4FF]"
          >

            <span className="text-xl">
              ⊕
            </span>

            <span>
              افزودن
            </span>

          </button>

        </div>


        {/* Notes */}
        <div className="space-y-5">

          {notes.map((note) => (

            <button
              key={note.id}
              onClick={() => setSelectedNote(note)}
              className="group w-full rounded-[28px] bg-[#F4F8FE] p-6 text-right transition hover:-translate-y-1 hover:bg-[#EDF5FF] hover:shadow-sm"
            >

              <div className="flex items-start justify-between gap-5">

                <div>

                  <p className="text-lg text-[#007BFF]">
                    {note.title}
                  </p>


                  <p className="mt-4 line-clamp-2 text-[15px] leading-9 text-[#6B6F77]">
                    {note.text}
                  </p>

                </div>


                <span className="text-xl opacity-60 transition group-hover:opacity-100">
                  📝
                </span>

              </div>


              <div className="mt-4 flex items-center gap-2 text-xs text-[#A0A4AA]">

                <span>
                  📅
                </span>

                مشاهده جزئیات یادداشت

              </div>

            </button>

          ))}

        </div>

      </section>


      {/* ===============================
          Add Note Modal
      =============================== */}

      {isAdding && (

        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30 p-5 backdrop-blur-sm"
          onClick={() => setIsAdding(false)}
        >

          <div
            dir="rtl"
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-xl rounded-[32px] bg-white p-7 shadow-2xl"
          >

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">

              <div>

                <p className="text-sm text-[#007BFF]">
                  📝 یادداشت جدید
                </p>

                <h2 className="mt-2 text-2xl text-[#6B6F77]">
                  ثبت یادداشت تمرین
                </h2>

              </div>


              <button
                onClick={() => setIsAdding(false)}
                className="flex size-10 items-center justify-center rounded-full bg-[#F5F7FA] text-lg transition hover:bg-[#EEF3F8]"
              >
                ✕
              </button>

            </div>


            {/* Input */}
            <textarea
              value={newNote}
              onChange={(event) => setNewNote(event.target.value)}
              placeholder="یادداشت خود را درباره تمرین امروز بنویسید..."
              className="min-h-40 w-full resize-none rounded-2xl border border-[#E5EAF0] bg-[#F9FBFD] p-5 text-[#6B6F77] outline-none transition placeholder:text-[#A0A4AA] focus:border-[#007BFF] focus:ring-4 focus:ring-[#007BFF]/10"
            />


            {/* Actions */}
            <div className="mt-5 flex gap-3">

              <button
                onClick={() => setIsAdding(false)}
                className="flex-1 rounded-2xl border border-[#E5EAF0] py-4 text-[#6B6F77] transition hover:bg-[#F7F9FB]"
              >
                انصراف
              </button>


              <button
                onClick={addNote}
                className="flex-1 rounded-2xl bg-[#007BFF] py-4 text-white transition hover:bg-[#0067D6]"
              >
                💾 ذخیره یادداشت
              </button>

            </div>

          </div>

        </div>

      )}


      {/* ===============================
          Note Details
      =============================== */}

      {selectedNote && (

        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30 p-5 backdrop-blur-sm"
          onClick={() => setSelectedNote(null)}
        >

          <div
            dir="rtl"
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-xl rounded-[32px] bg-white p-7 shadow-2xl"
          >

            {/* Header */}
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-[#007BFF]">
                  📅 {selectedNote.date}
                </p>

                <h2 className="mt-2 text-2xl text-[#6B6F77]">
                  📝 یادداشت تمرین
                </h2>

              </div>


              <button
                onClick={() => setSelectedNote(null)}
                className="flex size-10 items-center justify-center rounded-full bg-[#F5F7FA] text-lg"
              >
                ✕
              </button>

            </div>


            {/* Note */}
            <div className="mt-7 rounded-2xl bg-[#F4F8FE] p-6">

              <p className="text-lg leading-9 text-[#6B6F77]">
                {selectedNote.text}
              </p>

            </div>


            {/* Footer */}
            <div className="mt-5 flex items-center justify-between text-sm text-[#A0A4AA]">

              <span>
                📅 {selectedNote.date}
              </span>

              <span className="text-[#6BAF41]">
                ✓ ثبت شده
              </span>

            </div>

          </div>

        </div>

      )}

    </>
  );
}