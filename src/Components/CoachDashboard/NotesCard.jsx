
import {
  StickyNote,
  CalendarDays,
  UserRound,
  MessageSquareText,
} from "lucide-react";

const athleteNotes = [
  {
    id: 1,
    athlete: "آرمان احمدی",
    content:
      "در تمرین امروز حرکات پا کمی سنگین بود. در حرکت اسکوات احساس خستگی بیشتری داشتم.",
    date: "۱۴۰۵/۰۷/۱۸",
  },
  {
    id: 2,
    athlete: "آرمان احمدی",
    content:
      "این هفته خوابم کمتر از حد معمول بوده و انرژی کمتری در طول تمرین دارم.",
    date: "۱۴۰۵/۰۷/۱۶",
  },
  {
    id: 3,
    athlete: "آرمان احمدی",
    content:
      "برنامه غذایی رو رعایت کردم، اما بعد از تمرین احساس گرسنگی زیادی داشتم.",
    date: "۱۴۰۵/۰۷/۱۴",
  },
];

export default function NotesCard() {
  return (
    <section
      dir="rtl"
      className="rounded-2xl border border-border bg-surface p-5 shadow-sm"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <StickyNote size={21} />
          </div>

          <div>
            <h3 className="text-sm font-primary text-muted text-[17px]">
              یادداشت‌های شاگرد
            </h3>

            <p className="mt-1 text-xs text-muted">
              یادداشت‌های ثبت‌شده توسط ورزشکار
            </p>
          </div>
        </div>

        <span className="rounded-lg bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
          {athleteNotes.length} یادداشت
        </span>
      </div>


      {/* Notes List - Read Only */}
      <div className="space-y-3">
        {athleteNotes.length > 0 ? (
          athleteNotes.map((note) => (
            <article
              key={note.id}
              className="rounded-xl border border-border p-4 transition hover:border-primary/30"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-secondary text-primary">
                  <MessageSquareText size={17} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="whitespace-pre-wrap break-words text-sm leading-7 text-muted font-primary">
                    {note.content}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-muted">
                    <CalendarDays size={13} />
                    <span>{note.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-10 text-center">
            <StickyNote
              size={30}
              className="mb-3 text-muted"
            />

            <p className="text-sm font-medium text-muted">
              هنوز یادداشتی ثبت نشده است
            </p>

            <p className="mt-2 text-xs text-muted">
              یادداشت‌های این شاگرد در این قسمت نمایش داده می‌شوند.
            </p>
          </div>
        )}
      </div>

      {/* Read Only Indicator */}
      <div className="mt-5 flex items-center gap-2 rounded-xl bg-surface-secondary px-3 py-3 text-xs text-muted">
        <StickyNote size={15} />
        <span>
          این بخش فقط برای مشاهده یادداشت‌های شاگرد است.
        </span>
      </div>
    </section>
  );
}
