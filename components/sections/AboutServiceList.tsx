import { aboutServices } from "@/data/services";

export default function AboutServiceList() {
  return (
    <div className="flex flex-col gap-3">
      {aboutServices.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#0E1118] border border-white/[0.08] hover:border-[#0B5CFF]/30 transition-colors duration-200 group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#0B5CFF]/10 border border-[#0B5CFF]/20 flex items-center justify-center shrink-0 group-hover:bg-[#0B5CFF]/20 transition-colors">
            <Icon size={16} className="text-[#0B5CFF]" />
          </div>
          <span className="text-sm font-medium text-[#F5F7FA]">{label}</span>
        </div>
      ))}
    </div>
  );
}
