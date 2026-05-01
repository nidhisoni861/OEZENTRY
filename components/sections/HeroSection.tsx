"use client";

import { motion, type Variants } from "motion/react";
import { Calendar, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

// Individual text element: fade up from below
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Video: invisible at start, fades + zooms in after text appears ── */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.07 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.85, duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/videos/hero-video.mp4"
        />
      </motion.div>

      {/* ── Dark overlay — always present so text is readable during video load ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/90 to-[#050608]/50" />
        <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-[radial-gradient(ellipse_at_80%_50%,rgba(11,92,255,0.08)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050608] to-transparent" />
      </div>

      {/* ── Hero content wrapper
            Starts shifted right (appears more centred on screen).
            Settles left into its final position as the car arrives.
            On mobile the shift is kept small so nothing clips. ── */}
      <motion.div
        className="relative z-10 w-full px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 pt-[82px]"
        initial={{ x: 52 }}
        animate={{ x: 0 }}
        transition={{ delay: 1.05, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-3xl py-24 md:py-32">

          {/* 1 — Eyebrow label */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            <SectionLabel>
              Professioneller KFZ-Service · Pocking, Bayern
            </SectionLabel>
          </motion.div>

          {/* 2 — Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] mb-8 tracking-tight">
            <motion.span
              className="text-[#F5F7FA] block"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.38}
            >
              Dein Auto.
            </motion.span>
            <motion.span
              className="gradient-blue block"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.52}
            >
              Unser Handwerk.
            </motion.span>
          </h1>

          {/* 3 — Sub-paragraph */}
          <motion.p
            className="text-sm md:text-base text-[#A0A7B3] mb-10 max-w-md leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.68}
          >
            Chip Tuning, Schlüsselprogrammierung, Xentry Codierung & mehr —
            präzise ausgeführt, transparent kommuniziert.
          </motion.p>

          {/* 4 — CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mb-16"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.82}
          >
            <Button
              href="/anfrage"
              className="uppercase tracking-widest text-xs px-7 py-3.5"
            >
              <Calendar size={15} />
              Termin vereinbaren
            </Button>
            <Button
              variant="outline"
              href="https://wa.me/491632539557"
              className="uppercase tracking-widest text-xs px-7 py-3.5"
            >
              <MessageCircle size={15} />
              WhatsApp
            </Button>
          </motion.div>

        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#A0A7B3] z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <div className="w-6 h-9 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[#0B5CFF] animate-bounce" />
        </div>
        <span className="text-[9px] tracking-[0.25em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
