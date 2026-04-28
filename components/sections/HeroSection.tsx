import { Calendar, MessageCircle, ChevronDown, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

const stats = [
  { value: "6+", label: "Leistungen" },
  { value: "100%", label: "Professionell" },
  { icon: Star, value: "5", label: "Bewertung" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-bg">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/90 to-[#050608]/50" />
        <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-[radial-gradient(ellipse_at_80%_50%,rgba(11,92,255,0.08)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050608] to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full pt-[82px]">
        <div className="max-w-3xl py-24 md:py-32">
          <SectionLabel>Professioneller KFZ-Service · Pocking, Bayern</SectionLabel>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] mb-8 tracking-tight">
            <span className="text-[#F5F7FA]">Dein Auto.</span>
            <br />
            <span className="gradient-blue">Unser Handwerk.</span>
          </h1>

          <p className="text-sm md:text-base text-[#A0A7B3] mb-10 max-w-md leading-relaxed">
            Chip Tuning, Schlüsselprogrammierung, Xentry Codierung & mehr —
            präzise ausgeführt, transparent kommuniziert.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Button href="#kontakt" className="uppercase tracking-widest text-xs px-7 py-3.5">
              <Calendar size={15} />
              Termin vereinbaren
            </Button>
            <Button variant="outline" href="https://wa.me/491711234567" className="uppercase tracking-widest text-xs px-7 py-3.5">
              <MessageCircle size={15} />
              WhatsApp
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 border-t border-white/[0.08] pt-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  {stat.icon && <stat.icon size={18} className="text-[#0B5CFF] fill-[#0B5CFF]" />}
                  <span className="text-2xl md:text-3xl font-black text-[#0B5CFF]">{stat.value}</span>
                </div>
                <span className="text-[10px] tracking-[0.18em] uppercase text-[#A0A7B3]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#A0A7B3] z-10">
        <div className="w-6 h-9 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[#0B5CFF] animate-bounce" />
        </div>
        <span className="text-[9px] tracking-[0.25em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
