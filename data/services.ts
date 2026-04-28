import type { LucideIcon } from "lucide-react";
import { Zap, Key, Monitor, Search, Wrench, Music2 } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  category: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "chip-tuning",
    icon: Zap,
    category: "Performance",
    title: "Chip Tuning",
    description:
      "Leistungssteigerung durch professionelle Motorsteuerung-Optimierung. Mehr PS, mehr Drehmoment — abgestimmt auf Ihr Fahrzeug.",
  },
  {
    id: "schluessel",
    icon: Key,
    category: "Sicherheit",
    title: "Schlüsselprogrammierung",
    description:
      "Verloren oder defekt? Wir programmieren neue Fahrzeugschlüssel und Fernbedienungen für alle gängigen Marken.",
  },
  {
    id: "xentry",
    icon: Monitor,
    category: "Mercedes",
    title: "Xentry Codierung",
    description:
      "Fahrzeugspezifische Codierung & Freischaltung von Sonderfunktionen mit professioneller Mercedes-Diagnosesoftware.",
  },
  {
    id: "diagnose",
    icon: Search,
    category: "Diagnose",
    title: "Fehler Diagnose",
    description:
      "Vollständige OBD-Fahrzeugdiagnose zur Auslesung und Analyse von Fehlercodes. Schnell, präzise, transparent.",
  },
  {
    id: "dpf-agr",
    icon: Wrench,
    category: "Motoroptimierung",
    title: "DPF / AGR Off",
    description:
      "Professionelle Deaktivierung von Dieselpartikelfilter und AGR-Ventil für verbesserte Motorleistung und Haltbarkeit.",
  },
  {
    id: "pop-bang",
    icon: Music2,
    category: "Sound",
    title: "Pop & Bang",
    description:
      "Sportlicher Auspuffsound auf Knopfdruck. Wir programmieren den begehrten Pfeif- und Knalleffekt in Ihre Motorsteuerung.",
  },
];

export const aboutServices = [
  { icon: Zap, label: "Chip Tuning & Leistungsoptimierung" },
  { icon: Key, label: "Schlüsselprogrammierung aller Marken" },
  { icon: Monitor, label: "Xentry Codierung & Diagnose" },
  { icon: Wrench, label: "DPF / AGR Off & Motoroptimierung" },
  { icon: Music2, label: "Pop & Bang Soundprogrammierung" },
];
