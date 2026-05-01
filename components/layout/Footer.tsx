import { MapPin, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Instagram"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="TikTok"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#050608] relative">
      <div className="absolute top-0 left-0 right-0 h-px gradient-blue-bg opacity-40" />
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-[#0B5CFF] blur-sm" />

      <div className="max-w-[1440px] mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand + social */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#0E1118] border border-white/[0.1] flex items-center justify-center">
                <span className="text-xs font-black text-[#0B5CFF]">OE</span>
              </div>
              <div>
                <p className="font-black text-[#F5F7FA] text-sm tracking-[0.12em]">OEZENTRY</p>
                <p className="text-[9px] text-[#A0A7B3] tracking-[0.2em]">KFZ - SERVICE - POCKING</p>
              </div>
            </div>

            <p className="text-sm text-[#A0A7B3] leading-relaxed mb-6">
              Inhaber: Özdemir Can Kökten
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/oezentry?igsh=MWh6ZzV0YTMzZnZrMA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-[#0E1118] border border-white/[0.1] hover:border-[#0B5CFF]/40 flex items-center justify-center text-[#0B5CFF] transition-colors"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@oezentry?_r=1&_t=ZG-960MU7HDNUv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-xl bg-[#0E1118] border border-white/[0.1] hover:border-[#0B5CFF]/40 flex items-center justify-center text-[#0B5CFF] transition-colors"
              >
                <TikTokIcon size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold text-[#F5F7FA] tracking-[0.18em] uppercase mb-6">
              Navigation
            </h3>
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

          {/* Contact info */}
          <div>
            <h3 className="text-xs font-bold text-[#F5F7FA] tracking-[0.18em] uppercase mb-6">
              Kontakt
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { icon: MapPin, text: "Schorndorferstr 7, 73650 Winterbach" },
                { icon: Phone, text: "+49 163 2539557" },
                { icon: Mail, text: "Oezentry@outlook.de" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-2.5 text-sm text-[#A0A7B3]">
                  <Icon size={14} className="text-[#0B5CFF] shrink-0 mt-0.5" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#A0A7B3]">
            Datenschutzerklärung | Impressum
          </p>
          <p className="text-xs text-[#A0A7B3]">
            © 2025 OEZENTRY. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
