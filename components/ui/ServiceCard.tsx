import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  category: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon: Icon,
  category,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group p-7 rounded-3xl bg-[#0E1118] border border-white/[0.08] hover:border-[#0B5CFF]/40 card-glow transition-all duration-300 flex flex-col gap-4">
      <div className="w-12 h-12 rounded-xl bg-[#0B5CFF]/10 border border-[#0B5CFF]/20 flex items-center justify-center group-hover:bg-[#0B5CFF]/20 transition-colors">
        <Icon size={22} className="text-[#19B5FF]" />
      </div>

      <div>
        <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.15em] uppercase rounded-full bg-[#0B5CFF]/10 text-[#19B5FF] border border-[#0B5CFF]/20 mb-3">
          {category}
        </span>
        <h3 className="text-lg font-bold text-[#F5F7FA] mb-2">{title}</h3>
        <p className="text-sm text-[#A0A7B3] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
