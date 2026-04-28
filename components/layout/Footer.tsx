import { MapPin, Phone, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050608] relative">
      <div className="absolute top-0 left-0 right-0 h-px gradient-blue-bg opacity-40" />
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-[#0B5CFF] blur-sm" />

      <div className="max-w-[1440px] mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#0E1118] border border-white/[0.1] flex items-center justify-center">
                <span className="text-xs font-black text-[#0B5CFF]">OE</span>
              </div>
              <div>
                <p className="font-black text-[#F5F7FA] text-sm tracking-[0.12em]">OEZENTRY</p>
                <p className="text-[9px] text-[#A0A7B3] tracking-[0.2em]">KFZ · SERVICE · POCKING</p>
              </div>
            </div>
            <p className="text-sm text-[#A0A7B3] leading-relaxed max-w-xs">
              Professioneller KFZ-Service in Pocking, Bayern. Chip Tuning, Schlüsselprogrammierung und mehr.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-[#F5F7FA] tracking-[0.18em] uppercase mb-6">Navigation</h3>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#A0A7B3] hover:text-[#19B5FF] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-[#F5F7FA] tracking-[0.18em] uppercase mb-6">Kontakt</h3>
            <div className="flex flex-col gap-3">
              {[
                { icon: MapPin, text: "Pocking, Bayern" },
                { icon: Phone, text: "+49 163 2539557" },
                { icon: MessageCircle, text: "WhatsApp verfügbar" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-sm text-[#A0A7B3]">
                  <Icon size={14} className="text-[#0B5CFF] shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 text-center">
          <p className="text-xs text-[#A0A7B3]">© 2026 OEZENTRY. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
