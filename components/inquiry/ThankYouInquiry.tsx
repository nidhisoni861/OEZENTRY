"use client";

import { useRouter } from "next/navigation";
import { CheckCircle, Search, Calendar, Check, Info } from "lucide-react";

const steps = [
  {
    num: 1,
    icon: Search,
    text: "Wir prüfen deine Anfrage.",
  },
  {
    num: 2,
    icon: Calendar,
    text: "Wir melden uns mit einem passenden Terminvorschlag.",
  },
  {
    num: 3,
    icon: Check,
    text: "Du bestätigst den Termin – fertig.",
  },
];

export default function ThankYouInquiry() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#050608] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(11,92,255,0.09)_0%,transparent_65%)]" />
      </div>

      <div className="relative z-10 w-full max-w-3xl">
        <div className="rounded-3xl border border-white/[0.1] bg-[#0A0D14] p-8 sm:p-12 lg:p-16 shadow-2xl text-center">

          {/* ── Checkmark ── */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full border-2 border-[#0B5CFF] flex items-center justify-center">
              <CheckCircle size={38} className="text-[#0B5CFF]" />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F5F7FA] mb-6 leading-tight">
            Vielen Dank für deine Anfrage!
          </h1>

          <p className="text-sm md:text-base text-[#A0A7B3] leading-relaxed mb-3 max-w-xl mx-auto">
            Deine Anfrage wurde erfolgreich gesendet. Wir melden uns
            schnellstmöglich bei dir mit einem Terminvorschlag zurück.
          </p>
          <p className="text-sm md:text-base text-[#A0A7B3] leading-relaxed mb-10 max-w-xl mx-auto">
            Falls wir noch Informationen benötigen, kontaktieren wir dich per
            E-Mail oder Telefon / WhatsApp.
          </p>

          <hr className="border-white/[0.08] mb-10" />

          {/* ── Steps heading ── */}
          <p className="text-[11px] font-black tracking-[0.22em] uppercase text-[#0B5CFF] mb-7">
            Wie geht es jetzt weiter?
          </p>

          {/* Steps: 1 col on mobile, 3 col on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {steps.map(({ num, icon: Icon, text }) => (
              <div
                key={num}
                className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3 p-5 rounded-2xl border border-white/[0.08] bg-[#050608] text-left sm:text-center"
              >
                <div className="flex items-center gap-2 shrink-0">
                  <span className="w-7 h-7 rounded-full gradient-blue-bg flex items-center justify-center text-white text-xs font-black shrink-0">
                    {num}
                  </span>
                  <Icon size={18} className="text-[#A0A7B3]" />
                </div>
                <p className="text-sm text-[#A0A7B3] leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* ── Info box ── */}
          <div className="flex items-start gap-3 p-5 rounded-2xl border border-white/[0.08] bg-[#050608] text-left mb-10">
            <Info size={16} className="text-[#0B5CFF] shrink-0 mt-0.5" />
            <p className="text-sm text-[#A0A7B3] leading-relaxed">
              Bei dringenden Anliegen kannst du uns auch direkt per{" "}
              <a
                href="https://wa.me/491632539557"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#19B5FF] hover:underline"
              >
                WhatsApp
              </a>{" "}
              kontaktieren.
            </p>
          </div>

          {/* ── Actions ── */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => router.push("/")}
              className="flex-1 py-4 rounded-full gradient-blue-bg text-white text-xs font-black tracking-[0.15em] uppercase hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Zur Startseite
            </button>
            <button
              onClick={() => router.push("/anfrage")}
              className="flex-1 py-4 rounded-full border border-white/20 text-white text-xs font-black tracking-[0.15em] uppercase hover:border-[#0B5CFF]/60 hover:bg-[#0B5CFF]/5 transition-all"
            >
              Neue Anfrage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
