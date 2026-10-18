import { useState } from "react";

function ProgressRing({
  value,
  max,
  color,
  label,
  unit = "",
}) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;

  const percentage = Math.min(
    100,
    Math.max(0, (Number(value) / max) * 100)
  );

  const offset =
    circumference * (1 - percentage / 100);

  return (
    <div className="flex min-w-0 flex-col items-center">
      <div className="relative h-36 w-36 sm:h-36 sm:w-36">  
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full -rotate-90"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={color}
            strokeOpacity="0.12"
            strokeWidth="15"
          />

          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="15"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-700"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="text-sm font-bold"
            style={{ color }}
          >
            {value}{unit}
          </span>

          <span className="mt-1 text-center text-[13px] text-muted">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SleepEnergyCard({
  initialSleepHours = 7.5,
  initialSleepQuality = 85,
  initialEnergyLevel = 6,
  summary = "برای ریکاوری بهتر، خواب شبانه منظم و کافی داشته باش.",
}) {
  const [sleepHours, setSleepHours] =
    useState(initialSleepHours);

  const [sleepQuality, setSleepQuality] =
    useState(initialSleepQuality);

  const [energyLevel, setEnergyLevel] =
    useState(initialEnergyLevel);

  const [editing, setEditing] = useState(false);

  return (
    <section
      dir="rtl"
      className="min-w-0 rounded-2xl bg-surface p-5"
    >
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-sm font-bold text-foreground">
          خواب و انرژی
        </h3>


      </div>

      <div className="grid grid-cols-3 gap-2">
        <ProgressRing
          value={sleepHours}
          max={10}
          color="#65AD3E"
          label="ساعت خواب"
        />

        <ProgressRing
          value={sleepQuality}
          max={100}
          color="#6479C2"
          label="کیفیت خواب"
          unit="%"
        />

        <ProgressRing
          value={energyLevel}
          max={10}
          color="#D3A52D"
          label="سطح انرژی"
        />
      </div>

      {editing && (
        <div className="mt-5 space-y-4 rounded-xl bg-surface-secondary p-4">
          <label className="block text-xs text-foreground">
            ساعت خواب: {sleepHours}
            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={sleepHours}
              onChange={(e) =>
                setSleepHours(Number(e.target.value))
              }
              className="mt-2 w-full accent-primary"
            />
          </label>

          <label className="block text-xs text-foreground">
            کیفیت خواب: {sleepQuality}%
            <input
              type="range"
              min="0"
              max="100"
              value={sleepQuality}
              onChange={(e) =>
                setSleepQuality(Number(e.target.value))
              }
              className="mt-2 w-full accent-primary"
            />
          </label>

          <label className="block text-xs text-foreground">
            سطح انرژی: {energyLevel} از ۱۰
            <input
              type="range"
              min="0"
              max="10"
              value={energyLevel}
              onChange={(e) =>
                setEnergyLevel(Number(e.target.value))
              }
              className="mt-2 w-full accent-primary"
            />
          </label>
        </div>
      )}

      <div className="mt-6 rounded-2xl bg-surface-secondary p-4">
        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
          <span className="text-primary">✳</span>
          خلاصه وضعیت
        </div>

        <p className="text-xs leading-6 text-muted">
          {summary}
        </p>
      </div>
    </section>
  );
}