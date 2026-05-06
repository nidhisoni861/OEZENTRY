import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Impressum – OEZENTRY",
  description: "Impressum gemäß § 5 DDG für OEZENTRY KFZ-Service.",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050608]">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(11,92,255,0.09)_0%,transparent_65%)]" />
        </div>

        <div className="relative z-10 pt-[82px] pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mt-10 w-full">
            <div className="rounded-3xl border border-white/[0.1] bg-[#0A0D14] p-6 sm:p-10 lg:p-14 shadow-2xl">

              <h1 className="text-3xl sm:text-4xl font-black text-[#F5F7FA] mb-3">
                Impressum
              </h1>
              <p className="text-sm text-[#0B5CFF] font-semibold mb-10">
                Angaben gemäß § 5 DDG
              </p>

              <div className="flex flex-col gap-8">

                {/* Company */}
                <section>
                  <h2 className="text-base font-bold text-[#19B5FF] mb-4">OEZENTRY</h2>
                  <div className="text-sm text-[#A0A7B3] leading-relaxed space-y-0.5">
                    <p>Inhaber: Özdemir Can Kökten</p>
                    <p>Schorndorfer Str. 7</p>
                    <p>73650 Winterbach</p>
                    <p>Deutschland</p>
                  </div>
                </section>

                <hr className="border-white/[0.06]" />

                {/* Contact */}
                <section>
                  <h2 className="text-base font-bold text-[#19B5FF] mb-4">Kontakt</h2>
                  <div className="text-sm text-[#A0A7B3] leading-relaxed space-y-0.5">
                    <p>Telefon / WhatsApp: +49 163 253 9557</p>
                    <p>E-Mail: oezentry@outlook.de</p>
                  </div>
                </section>

                <hr className="border-white/[0.06]" />

                {/* Bildnachweis */}
                <section>
                  <h2 className="text-base font-bold text-[#19B5FF] mb-4">Bildnachweis</h2>
                  <p className="text-sm text-[#A0A7B3] leading-relaxed mb-2">
                    Die auf dieser Website verwendeten Bilder stammen von:
                  </p>
                  <p className="text-sm text-[#A0A7B3] leading-relaxed mb-2">
                    Hintergrundbild: © Виталий Сова / Adobe Stock (bearbeitet/animiert)
                  </p>
                  <p className="text-sm text-[#A0A7B3] leading-relaxed">
                    Service-Illustrationen (Schlüssel/Diagnose): KI-generiert (erstellt mit Google Gemini)
                  </p>
                </section>

                <hr className="border-white/[0.06]" />

                {/* EU-Streitschlichtung */}
                <section>
                  <h2 className="text-base font-bold text-[#19B5FF] mb-4">EU-Streitschlichtung</h2>
                  <p className="text-sm text-[#A0A7B3] leading-relaxed">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                    <a
                      href="https://ec.europa.eu/consumers/odr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#19B5FF] hover:underline break-all"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                    .<br />
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                  </p>
                </section>

                <hr className="border-white/[0.06]" />

                {/* Verbraucherstreitbeilegung */}
                <section>
                  <h2 className="text-base font-bold text-[#19B5FF] mb-4">
                    Verbraucherstreitbeilegung / Universalschlichtungsstelle
                  </h2>
                  <p className="text-sm text-[#A0A7B3] leading-relaxed">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </section>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
