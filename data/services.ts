import type { LucideIcon } from "lucide-react";
import { Key, Cpu, Monitor, Search, Rocket, Lock, Zap, Wrench, Music2 } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  category: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "ersatzschluessel",
    icon: Key,
    category: "Schlüssel",
    title: "Auto Ersatzschlüssel",
    description:
      "All Key Lost, Neuanfertigung, Nachmachen, Reparatur und Programmierung von Autoschlüsseln. Auch Keyless-Go und Funkfernbedienung.",
  },
  {
    id: "steuergeraete",
    icon: Cpu,
    category: "Steuergeräte",
    title: "Steuergeräte",
    description:
      "Instandsetzung, Programmierung und Codierung von Motor-, Getriebe- und ABS-Steuergeräten. Wegfahrsperren deaktivieren sowie AdBlue-, DPF- & AGR-Deaktivierung.",
  },
  {
    id: "mercedes-xentry",
    icon: Monitor,
    category: "Mercedes",
    title: "Mercedes Xentry",
    description:
      "Steuergeräte codieren, Funktionen freischalten, Komponenten anlernen, Fehlerspeicher auslesen & löschen, Diagnose und Systemprüfung.",
  },
  {
    id: "fehlerspeicher",
    icon: Search,
    category: "Diagnose",
    title: "Fehlerspeicher Auslesen/Löschen",
    description:
      "Fehlerspeicher auslesen und löschen – inklusive Bericht und Fehlercode.",
  },
  {
    id: "softwareoptimierung",
    icon: Rocket,
    category: "Software",
    title: "Softwareoptimierung",
    description:
      "Chiptuning, Pop & Bangs, VMAX-Aufhebung, AGR-, DPF- und AdBlue-Deaktivierung sowie Getriebe-Optimierung.",
  },
  {
    id: "mercedes-zuendschloss",
    icon: Lock,
    category: "Mercedes",
    title: "Mercedes Zündschloss",
    description:
      "Reparatur defekter Mercedes EZS, Klonen von Zündschlössern und Reset / Virgin Modus.",
  },
];

export const aboutServices = [
  { icon: Zap, label: "Chip Tuning & Leistungsoptimierung" },
  { icon: Key, label: "Schlüsselprogrammierung aller Marken" },
  { icon: Monitor, label: "Xentry Codierung & Diagnose" },
  { icon: Wrench, label: "DPF / AGR Off & Motoroptimierung" },
  { icon: Music2, label: "Pop & Bang Soundprogrammierung" },
];
