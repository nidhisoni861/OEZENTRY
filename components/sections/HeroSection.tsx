"use client";

import { useEffect, useRef } from "react";
import { Calendar, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        video.muted = true;
        video.playsInline = true;
        await video.play();
      } catch {
        setTimeout(() => {
          videoRef.current?.play().catch(() => {});
        }, 300);
      }
    };

    playVideo();

    const handlePageShow = () => {
      playVideo();
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        playVideo();
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="relative isolate min-h-screen flex flex-col justify-center overflow-hidden bg-[#050608]">
      {/* Fallback background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#050608] via-[#07111f] to-[#020305]" />

      {/* Video background */}
      <div className="absolute inset-0 z-[1]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          onLoadedData={() => {
            videoRef.current?.play().catch(() => {});
          }}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/90 to-[#050608]/50" />
        <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-[radial-gradient(ellipse_at_80%_50%,rgba(11,92,255,0.08)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050608] to-transparent" />
      </div>

      {/* Hero content - no motion here, so it never disappears */}
      <div className="relative z-[10] w-full px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 pt-[82px]">
        <div className="max-w-3xl py-24 md:py-32">
          <div className="mb-6">
            <SectionLabel>
              Professioneller KFZ-Service · Pocking, Bayern
            </SectionLabel>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] mb-8 tracking-tight">
            <span className="text-[#F5F7FA] block">
              Dein Auto.
            </span>

            <span className="gradient-blue block">
              Unser Handwerk.
            </span>
          </h1>

          <p className="text-sm md:text-base text-[#A0A7B3] mb-10 max-w-md leading-relaxed">
            Chip Tuning, Schlüsselprogrammierung, Xentry Codierung & mehr —
            präzise ausgeführt, transparent kommuniziert.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
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
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#A0A7B3] z-[10]">
        <div className="w-6 h-9 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[#0B5CFF] animate-bounce" />
        </div>

        <span className="text-[9px] tracking-[0.25em] uppercase">
          Scroll
        </span>
      </div>
    </section>
  );
}