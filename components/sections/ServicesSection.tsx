import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="leistungen" className="py-24 lg:py-32 bg-[#050608]">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <SectionLabel>Was wir bieten</SectionLabel>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5">
            Unsere{" "}
            <span className="gradient-blue">Leistungen</span>
          </h2>

          <div className="w-14 h-[2px] gradient-blue-bg mx-auto mb-6" />

          <p className="text-sm md:text-base text-[#A0A7B3] max-w-md mx-auto">
            Performance und Zuverlässigkeit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              category={service.category}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
