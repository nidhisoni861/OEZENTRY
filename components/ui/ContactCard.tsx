import type { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
}

export default function ContactCard({
  icon: Icon,
  title,
  value,
  subtitle,
}: ContactCardProps) {
  return (
    <div className="p-7 rounded-2xl bg-[#0E1118] border border-white/[0.08] hover:border-[#0B5CFF]/30 transition-all duration-200 flex flex-col gap-4">
      <div className="w-12 h-12 rounded-xl bg-[#0B5CFF]/10 border border-[#0B5CFF]/20 flex items-center justify-center">
        <Icon size={22} className="text-[#0B5CFF]" />
      </div>

      <div>
        <p className="text-sm font-semibold text-[#19B5FF] mb-1">{title}</p>
        <p className="text-lg font-bold text-[#F5F7FA]">{value}</p>
        <p className="text-sm text-[#A0A7B3] mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}
