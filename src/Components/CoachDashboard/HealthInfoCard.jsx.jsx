export default function HealthInfoCard({
  title,
  items = [],
}) {
  return (
    <section
      dir="rtl"
      className="min-w-0 rounded-2xl bg-white p-5"
    >
      <h3 className="mb-3 text-sm font-bold text-gray-600">
        {title}
      </h3>

      <div>
        {items.map((item, index) => (
          <div
            key={item.id ?? item.label}
            className={`flex items-center justify-between gap-3 py-2.5 text-xs ${
              index !== items.length - 1
                ? "border-b border-gray-100"
                : ""
            }`}
          >
            <span className="text-gray-500 text-[13px]">
              {item.label}
            </span>

            <span className="font-medium text-gray-600 text-[13px]">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}