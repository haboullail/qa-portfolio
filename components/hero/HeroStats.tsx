const stats = [
  {
    value: "8+",
    label: "Years in IT",
  },
  {
    value: "4+",
    label: "QA Projects",
  },
  {
    value: "3",
    label: "Testing Areas",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-12 grid max-w-xl grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-2xl font-semibold text-white">
            {stat.value}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}