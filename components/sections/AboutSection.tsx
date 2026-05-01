import Image from "next/image";
import AboutServiceList from "./AboutServiceList";

export default function AboutSection() {
  return (
    <section id="ueber-uns" className="bg-[#050608] overflow-hidden">
      {/* Two-column grid: left = content, right = image.
          Both columns are exactly 50% of the viewport — no absolute positioning
          that could drift when a max-width container auto-margins. */}
      <div className="lg:grid lg:grid-cols-2">

        {/* ── Left: content ── */}
        <div className="py-20 lg:py-28 xl:py-32 px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black gradient-blue mb-6 tracking-tight leading-tight">
            Kfz-Service
          </h2>

          <p className="text-sm md:text-base text-[#A0A7B3] leading-relaxed mb-10 max-w-lg">
            OEZENTRY steht für professionelle Kfz-Dienstleistungen auf höchstem
            Niveau. Mit modernster Diagnosetechnik und jahrelanger Erfahrung
            bieten wir maßgeschneiderte Lösungen für Ihr Fahrzeug – schnell,
            zuverlässig und transparent.
          </p>

          <AboutServiceList />
        </div>

        {/* ── Right: image — fills the grid cell edge-to-edge ── */}
        <div className="relative h-[360px] lg:h-auto">
          <Image
            src="/images/key-programming-car-service.jpeg"
            alt="Kfz-Service Diagnose"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {/* Blend left edge into section background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/15 to-transparent" />
          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#050608] to-transparent" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050608] to-transparent" />
        </div>

      </div>
    </section>
  );
}
