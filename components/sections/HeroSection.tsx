"use client";

import { motion, type Variants } from "motion/react";
import { Calendar, MessageCircle, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

const stats = [
  { value: "6+", label: "Leistungen" },
  { value: "100%", label: "Professionell" },
  { icon: Star, value: "5", label: "Bewertung" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/hero-video.mp4"
      />

      {/* Dark overlay — keeps text legible over video */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/90 to-[#050608]/55" />
        <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-[radial-gradient(ellipse_at_80%_50%,rgba(11,92,255,0.08)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050608] to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full pt-[82px]">
        <div className="max-w-3xl py-24 md:py-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <SectionLabel>Professioneller KFZ-Service · Pocking, Bayern</SectionLabel>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] mb-8 tracking-tight">
            <motion.span
              className="text-[#F5F7FA] block"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.25}
            >
              Dein Auto.
            </motion.span>
            <motion.span
              className="gradient-blue block"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.45}
            >
              Unser Handwerk.
            </motion.span>
          </h1>

          <motion.p
            className="text-sm md:text-base text-[#A0A7B3] mb-10 max-w-md leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.65}
          >
            Chip Tuning, Schlüsselprogrammierung, Xentry Codierung & mehr —
            präzise ausgeführt, transparent kommuniziert.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-16"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
          >
            <Button href="#kontakt" className="uppercase tracking-widest text-xs px-7 py-3.5">
              <Calendar size={15} />
              Termin vereinbaren
            </Button>
            <Button
              variant="outline"
              href="https://wa.me/491711234567"
              className="uppercase tracking-widest text-xs px-7 py-3.5"
            >
              <MessageCircle size={15} />
              WhatsApp
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-8 border-t border-white/[0.08] pt-8"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.95}
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  {stat.icon && (
                    <stat.icon size={18} className="text-[#0B5CFF] fill-[#0B5CFF]" />
                  )}
                  <span className="text-2xl md:text-3xl font-black text-[#0B5CFF]">
                    {stat.value}
                  </span>
                </div>
                <span className="text-[10px] tracking-[0.18em] uppercase text-[#A0A7B3]">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#A0A7B3] z-10">
        <div className="w-6 h-9 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[#0B5CFF] animate-bounce" />
        </div>
        <span className="text-[9px] tracking-[0.25em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
