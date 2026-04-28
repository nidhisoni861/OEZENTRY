import SectionLabel from "@/components/ui/SectionLabel";
import AboutServiceList from "./AboutServiceList";
import AboutImageCard from "./AboutImageCard";

export default function AboutSection() {
  return (
    <section id="ueber-uns" className="py-24 lg:py-32 bg-[#07090D]">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <div>
            <SectionLabel>Über OEZENTRY</SectionLabel>

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6 tracking-tight">
              Leidenschaft für{" "}
              <span className="gradient-blue">präzisen Kfz-Service</span>
            </h2>

            <p className="text-sm md:text-base text-[#A0A7B3] leading-relaxed mb-10 max-w-lg">
              OEZENTRY steht für professionelle Kfz-Dienstleistungen auf
              höchstem Niveau. Mit modernster Diagnosetechnik und jahrelanger
              Erfahrung bieten wir maßgeschneiderte Lösungen für Ihr Fahrzeug —
              schnell, zuverlässig und transparent.
            </p>

            <AboutServiceList />
          </div>

          <AboutImageCard />
        </div>
      </div>
    </section>
  );
}
