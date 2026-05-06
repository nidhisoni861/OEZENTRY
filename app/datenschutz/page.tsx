import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – OEZENTRY",
  description: "Datenschutzerklärung gemäß DSGVO für OEZENTRY KFZ-Service.",
};

export default function DatenschutzPage() {
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
                Datenschutzerklärung
              </h1>
              <p className="text-sm text-[#0B5CFF] font-semibold mb-10">
                Informationen gemäß DSGVO
              </p>

              <div className="flex flex-col gap-8">

                {/* Section 1 */}
                <section>
                  <h2 className="text-base font-bold text-[#19B5FF] mb-4">
                    1. Datenschutz auf einen Blick
                  </h2>
                  <div>
                    <h3 className="text-sm font-bold text-[#F5F7FA] mb-2">Allgemeine Hinweise</h3>
                    <p className="text-sm text-[#A0A7B3] leading-relaxed">
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                      Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen
                      Sie persönlich identifiziert werden können.
                    </p>
                  </div>
                </section>

                <hr className="border-white/[0.06]" />

                {/* Section 2 */}
                <section>
                  <h2 className="text-base font-bold text-[#19B5FF] mb-4">
                    2. Datenerfassung auf dieser Website
                  </h2>
                  <div className="flex flex-col gap-5">
                    <div>
                      <h3 className="text-sm font-bold text-[#F5F7FA] mb-2">
                        Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                      </h3>
                      <p className="text-sm text-[#A0A7B3] leading-relaxed mb-3">
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:
                      </p>
                      <div className="text-sm text-[#A0A7B3] leading-relaxed space-y-0.5">
                        <p className="font-semibold text-[#F5F7FA]">OEZENTRY</p>
                        <p>Inhaber: Özdemir Can Kökten</p>
                        <p>Schorndorferstr. 7</p>
                        <p>73650 Winterbach</p>
                        <p>E-Mail: Oezentry@outlook.de</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#F5F7FA] mb-2">Wie erfassen wir Ihre Daten?</h3>
                      <p className="text-sm text-[#A0A7B3] leading-relaxed">
                        Ihre Daten werden dadurch erhoben, dass Sie uns diese mitteilen. Hierbei handelt es sich um Daten, die
                        Sie in unser Service-Anfrageformular eingeben (Name, E-Mail, Telefonnummer, Fahrzeugdaten, Nachricht)
                        oder uns per WhatsApp zusenden.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#F5F7FA] mb-2">Wofür nutzen wir Ihre Daten?</h3>
                      <p className="text-sm text-[#A0A7B3] leading-relaxed">
                        Die Verarbeitung erfolgt zur Beantwortung Ihrer Anfrage und zur Vorbereitung einer möglichen Dienstleistung
                        (Terminvereinbarung für Schlüsselprogrammierung, Diagnose etc.). Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
                        DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen).
                      </p>
                    </div>
                  </div>
                </section>

                <hr className="border-white/[0.06]" />

                {/* Section 3 */}
                <section>
                  <h2 className="text-base font-bold text-[#19B5FF] mb-4">
                    3. Kontaktformular / Serviceanfrage
                  </h2>
                  <p className="text-sm text-[#A0A7B3] leading-relaxed mb-3">
                    Wenn Sie uns per Formular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive
                    der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
                    bei uns verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p className="text-sm text-[#A0A7B3] leading-relaxed">
                    Die von Ihnen im Formular eingegebenen Daten werden ausschließlich zum Zweck der Kontaktaufnahme und
                    Bearbeitung Ihrer Anfrage verwendet. Nach dem Absenden des Formulars werden die Daten als E-Mail an uns
                    weitergeleitet. Eine dauerhafte Speicherung der Daten direkt auf dem Webserver findet nicht statt. Die zugehörige
                    E-Mail in unserem Postfach wird gelöscht, sobald Ihre Anfrage abschließend bearbeitet wurde und keine gesetzlichen
                    Aufbewahrungspflichten (z. B. aus der Buchhaltung oder dem Steuerrecht) mehr bestehen.
                  </p>
                </section>

                <hr className="border-white/[0.06]" />

                {/* Section 4 */}
                <section>
                  <h2 className="text-base font-bold text-[#19B5FF] mb-4">
                    4. WhatsApp-Kontakt
                  </h2>
                  <p className="text-sm text-[#A0A7B3] leading-relaxed mb-3">
                    Auf unserer Website ist ein Button zu WhatsApp eingebunden. Anbieter ist die WhatsApp Ireland Limited,
                    4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
                  </p>
                  <p className="text-sm text-[#A0A7B3] leading-relaxed">
                    Wenn Sie uns per WhatsApp kontaktieren, speichern und nutzen wir Ihre Mobilnummer und die von Ihnen
                    bereitgestellten Inhalte zur Bearbeitung Ihres Anliegens. Bitte beachten Sie, dass WhatsApp Daten in die USA
                    überträgt. Wir haben keinen Einfluss auf die weitere Datenverarbeitung durch WhatsApp. Weitere Infos finden
                    Sie in der Datenschutzrichtlinie von WhatsApp.
                  </p>
                </section>

                <hr className="border-white/[0.06]" />

                {/* Section 5 */}
                <section>
                  <h2 className="text-base font-bold text-[#19B5FF] mb-4">
                    5. Ihre Rechte
                  </h2>
                  <p className="text-sm text-[#A0A7B3] leading-relaxed mb-3">
                    Sie haben jederzeit das Recht:
                  </p>
                  <ul className="flex flex-col gap-2 ml-1">
                    {[
                      "Unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.",
                      "Die Berichtigung oder Löschung dieser Daten zu verlangen.",
                      "Eine erteilte Einwilligung zur Datenverarbeitung jederzeit zu widerrufen.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#A0A7B3] leading-relaxed">
                        <span className="text-[#0B5CFF] mt-0.5 shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
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
