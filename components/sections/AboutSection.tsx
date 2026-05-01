import Image from "next/image";
import AboutServiceList from "./AboutServiceList";

export default function AboutSection() {
  return (
    <section id="ueber-uns" className="relative overflow-hidden bg-[#050608]">
      {/* Desktop: edge-to-edge image pinned to the right half */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2">
        <Image
          src="/images/key-programming-car-service.jpeg"
          alt="Kfz-Service Diagnose"
          fill
          className="object-cover"
          sizes="50vw"
          priority
        />
        {/* Left blend into section background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/20 to-transparent" />
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#050608] to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050608] to-transparent" />
      </div>

      {/* Content — constrained to left half on desktop */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-24 lg:py-32">
        <div className="lg:max-w-[52%] lg:pr-12 xl:pr-20">
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

        {/* Mobile image — stacks below the text */}
        <div className="lg:hidden mt-12 relative h-[300px] sm:h-[380px] rounded-3xl overflow-hidden">
          <Image
            src="/images/key-programming-car-service.jpeg"
            alt="Kfz-Service Diagnose"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608]/70 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
