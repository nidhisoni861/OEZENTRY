import Image from "next/image";
import { Phone } from "lucide-react";

export default function AboutImageCard() {
  return (
    <div className="relative">
      <div className="relative rounded-3xl overflow-hidden h-[480px] lg:h-[580px]">
        {/* Real image */}
        <Image
          src="/images/key-programming-car-service.jpeg"
          alt="Key programming car service"
          fill
          className="object-cover z-0"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />

        {/* Dark overlay to match site style */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#050608]/70 via-[#050608]/40 to-transparent" />

        {/* Blue accent glow */}
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_30%_40%,rgba(11,92,255,0.12)_0%,transparent_60%)]" />

        {/* Bottom fade into page background */}
        <div className="absolute bottom-0 left-0 right-0 h-40 z-[2] bg-gradient-to-t from-[#07090D] to-transparent" />

        {/* Subtle blue border glow */}
        <div className="absolute inset-0 z-[3] rounded-3xl ring-1 ring-[#0B5CFF]/20 pointer-events-none" />
      </div>

      {/* Phone / contact card */}
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
