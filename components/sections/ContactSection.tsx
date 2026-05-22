import { Clock, MessageCircle, MapPin, Phone } from "lucide-react";
import ContactCard from "@/components/ui/ContactCard";
import Button from "@/components/ui/Button";

const contacts = [
  {
    icon: Clock,
    title: "Öffnungszeiten",
    value: "Termin nach Vereinbarung",
    subtitle: "Schnelle Erreichbarkeit per Telefon & WhatsApp",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+49 163 2539557",
    subtitle: "Schnelle Antwort garantiert",
  },
  {
    icon: MapPin,
    title: "Standort",
    value: "Schorndorferstr 7, 73650 Winterbach",
    subtitle: "Direkt vor Ort für dich da",
  },
];

export default function ContactSection() {
  return (
    <section id="kontakt" className="py-24 lg:py-32 bg-[#07090D] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(11,92,255,0.07)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-5 leading-tight">
            Jetzt Termin{" "}
            <span className="gradient-blue">sichern</span>
          </h2>

          <p className="text-sm md:text-base text-[#A0A7B3] max-w-md mx-auto leading-relaxed">
            Vereinbare noch heute deinen Wunschtermin. Wir beraten dich
            persönlich und finden die perfekte Lösung für dein Fahrzeug.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <Button
            href="tel:+4916325395577"
            className="px-10 py-4 text-base font-bold tracking-wide"
          >
            <Phone size={20} />
            Jetzt anrufen
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.title}
              icon={contact.icon}
              title={contact.title}
              value={contact.value}
              subtitle={contact.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
