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
    <div className="min-h-screen bg-[#050608] flex items-center justify-center px-4 sm:px-6">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(11,92,255,0.09)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 w-full max-w-xl py-16">
        <div className="rounded-3xl border border-white/[0.1] bg-[#0A0D14] p-8 sm:p-12 shadow-2xl text-center">

          {/* ── Checkmark circle ── */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full border-2 border-[#0B5CFF] flex items-center justify-center">
              <CheckCircle size={30} className="text-[#0B5CFF]" />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-[#F5F7FA] mb-5 leading-tight">
            Vielen Dank für deine Anfrage!
          </h1>

          <p className="text-sm text-[#A0A7B3] leading-relaxed mb-3">
            Deine Anfrage wurde erfolgreich gesendet. Wir melden uns
            schnellstmöglich bei dir mit einem Terminvorschlag zurück.
          </p>
          <p className="text-sm text-[#A0A7B3] leading-relaxed mb-8">
            Falls wir noch Informationen benötigen, kontaktieren wir dich per
            E-Mail oder Telefon / WhatsApp.
          </p>

          <hr className="border-white/[0.08] mb-8" />

          {/* ── Steps ── */}
          <p className="text-[10px] font-black tracking-[0.22em] uppercase text-[#0B5CFF] mb-6">
            Wie geht es jetzt weiter?
          </p>

          <div className="grid grid-cols-3 gap-3 mb-8">
            {steps.map(({ num, icon: Icon, text }) => (
              <div
                key={num}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl border border-white/[0.08] bg-[#050608]"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-6 h-6 rounded-full gradient-blue-bg flex items-center justify-center text-white text-[11px] font-black shrink-0">
                    {num}
                  </span>
                  <Icon size={16} className="text-[#A0A7B3]" />
                </div>
                <p className="text-[11px] text-[#A0A7B3] leading-relaxed text-center">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* ── Info box ── */}
          <div className="flex items-start gap-3 p-4 rounded-2xl border border-white/[0.08] bg-[#050608] text-left mb-8">
            <Info size={15} className="text-[#0B5CFF] shrink-0 mt-0.5" />
            <p className="text-xs text-[#A0A7B3] leading-relaxed">
              Bei dringenden Anliegen kannst du uns auch direkt per{" "}
              <a
                href="https://wa.me/4916325395577"
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
          <div className="flex gap-4">
            <button
              onClick={() => router.push("/")}
              className="flex-1 py-3.5 rounded-full gradient-blue-bg text-white text-[11px] font-black tracking-[0.15em] uppercase hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Zur Startseite
            </button>
            <button
              onClick={() => router.push("/anfrage")}
              className="flex-1 py-3.5 rounded-full border border-white/20 text-white text-[11px] font-black tracking-[0.15em] uppercase hover:border-[#0B5CFF]/60 hover:bg-[#0B5CFF]/5 transition-all"
            >
              Neue Anfrage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
