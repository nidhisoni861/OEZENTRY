import { Phone } from "lucide-react";

export default function AboutImageCard() {
  return (
    <div className="relative">
      <div className="relative rounded-3xl overflow-hidden h-[480px] lg:h-[580px] bg-[#0E1118]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E] via-[#0E1118] to-[#050608]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(11,92,255,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(25,181,255,0.06)_0%,transparent_50%)]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center select-none">
            <div className="text-[120px] font-black text-white/[0.03] leading-none tracking-tighter">
              KFZ
            </div>
            <div className="text-[60px] font-black text-white/[0.02] leading-none tracking-tighter -mt-4">
              SERVICE
            </div>
          </div>
        </div>

        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-[0.03]">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-[#0B5CFF]" />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050608]/80 to-transparent" />
      </div>

      <div className="absolute bottom-6 left-6 z-20 px-5 py-4 rounded-2xl bg-[#0E1118]/95 backdrop-blur-sm border border-white/[0.1] shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#0B5CFF]/10 border border-[#0B5CFF]/20 flex items-center justify-center">
            <Phone size={18} className="text-[#0B5CFF]" />
          </div>
          <div>
            <p className="text-xl font-black text-[#F5F7FA] leading-tight">+49 163</p>
            <p className="text-sm text-[#A0A7B3]">2539557</p>
          </div>
        </div>
      </div>
    </div>
  );
}
