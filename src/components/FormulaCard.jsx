// FormulaCard.js
export default function FormulaCard({ title, items, color }) {
  return (
    <div className={`rounded-xl overflow-hidden bg-gradient-to-br ${color}`}>
      {/* Glass layer */}
      <div className="glass p-5 rounded-xl">
        <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
        <div className="grid gap-3">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-lg bg-white/5 p-3">
              <div className="text-lg text-slate-300">{it.subtitle}</div>
              <div className="mt-1 font-medium text-white md:text-xl">{it.formula}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
