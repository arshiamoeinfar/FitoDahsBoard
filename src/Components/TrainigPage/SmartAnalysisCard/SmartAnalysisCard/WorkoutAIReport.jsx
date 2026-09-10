import React, { useEffect, useState } from "react";
import { Copy, Printer, Share2, X } from "lucide-react";

import ReportHeader from "./ModalReport/ReportHeader";
import ReportOverview from "./ModalReport/ReportOverview";
import ReportStats from "./ModalReport/ReportStats";
import ExerciseProgress from "./ModalReport/ExerciseProgress";
import AnalysisSection from "./ModalReport/AnalysisSection";
import AIRecommendations from "./ModalReport/AIRecommendations";
import ReportSummary from "./ModalReport/ReportSummary";
import { reportData } from "./ModalReport/reportData";

export default function WorkoutAIReport({ onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = async () => {
    const text = `
گزارش عملکرد تمرینی ${reportData.athlete}

بازه گزارش:
${reportData.period}

امتیاز عملکرد:
${reportData.score}/100

جلسات:
${reportData.stats.completed} از ${reportData.stats.planned}

پایبندی:
${reportData.stats.adherence}٪

رکوردهای جدید:
+${reportData.stats.records}

${reportData.summary}
    `.trim();

    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleShare = async () => {
    const text = `گزارش عملکرد ${reportData.athlete}
امتیاز عملکرد: ${reportData.score}/100
پایبندی: ${reportData.stats.adherence}٪`;

    if (navigator.share) {
      await navigator.share({
        title: "گزارش تمرینی Fito",
        text,
      });
    } else {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <div
      dir="rtl"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#08111F]/55 p-3 backdrop-blur-md sm:p-5"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="flex max-h-[94vh] w-full max-w-[980px] flex-col overflow-hidden rounded-[32px] bg-[#F5F8FC] shadow-2xl">

        {/* Header */}
        <ReportHeader
          athlete={reportData.athlete}
          period={reportData.period}
          onClose={onClose}
        />

        {/* Content */}
        <div className="overflow-y-auto p-4 sm:p-6">

          <ReportOverview
            score={reportData.score}
            summary={reportData.summary}
          />

          <ReportStats stats={reportData.stats} />

          <ExerciseProgress
            exercises={reportData.exercises}
          />

          <div className="mt-4 grid gap-4 lg:grid-cols-2">

            <AnalysisSection
              type="success"
              title="نقاط قوت"
              description="مواردی که عملکرد ورزشکار در آن‌ها مثبت بوده"
              items={reportData.strengths}
            />

            <AnalysisSection
              type="warning"
              title="موارد قابل بهبود"
              description="مواردی که نیاز به توجه بیشتری دارند"
              items={reportData.weaknesses}
            />

          </div>

          <AIRecommendations
            recommendations={reportData.recommendations}
          />

          <ReportSummary />

        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-[#E9EEF4] bg-white px-4 py-3 sm:px-6">

          <div className="flex flex-col-reverse gap-2.5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex gap-2">

              <button
                onClick={handlePrint}
                className="flex flex-1 items-center justify-center gap-2 rounded-[14px] border border-[#E3E8EE] px-4 py-3 text-xs text-[#62666D] transition hover:bg-[#F7FAFD] sm:flex-none"
              >
                <Printer size={17} />
                چاپ گزارش
              </button>

              <button
                onClick={handleCopy}
                className="flex flex-1 items-center justify-center gap-2 rounded-[14px] border border-[#E3E8EE] px-4 py-3 text-xs text-[#62666D] transition hover:bg-[#F7FAFD] sm:flex-none"
              >
                {copied ? (
                  "کپی شد"
                ) : (
                  <>
                    <Copy size={17} />
                    کپی گزارش
                  </>
                )}
              </button>

            </div>

            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-2 rounded-[14px] bg-[#007BFF] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#006FE6]"
            >
              <Share2 size={17} />
              اشتراک‌گذاری گزارش
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}