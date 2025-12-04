export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-6 ml-3">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="text-sm text-slate-300 mt-1">{subtitle}</p>}
    </div>
  );
}
