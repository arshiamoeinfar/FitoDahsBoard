const trainingFiles = [
  "فایل تمرین هفته اول",
  "فایل برنامه تغذیه",
  "جدول ثبت روزانه",
  "جدول ثبت غذا",
];

const medicalFiles = [
  "آزمایش خون کامل",
  "ویتامین D",
  "تست قند خون",
  "چربی خون",
];

function FilesCard({ title, files }) {
  return (
    <div dir="rtl" className="rounded-2xl bg-surface p-5">
      <h3 className="mb-5 text-[16px] font-primary text-muted">{title}</h3>

      <div className="space-y-3">
        {files.map((file) => (
          <div
            key={file}
            className="flex items-center gap-3 rounded-2xl bg-surface-secondary px-3 py-3"
          >
            <span className="flex-1 text-sm text-muted">{file}</span>
            {/* File icon - UI only */}
            <span className="flex h-7 w-7 shrink-0 items-center justify-center text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
                <path d="M8 13h8" />
                <path d="M8 17h8" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AthleteFiles() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <FilesCard title="فایل‌های تمرین و تغذیه" files={trainingFiles} />

      <FilesCard title="فایل‌های پزشکی" files={medicalFiles} />
    </div>
  );
}
