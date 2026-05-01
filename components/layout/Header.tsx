"use client";

import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] backdrop-blur-md bg-[#050608]/85">
      <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 h-[82px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-[#0E1118] border border-white/[0.1] flex items-center justify-center">
            <span className="text-xs font-black text-[#0B5CFF] tracking-tight">OE</span>
          </div>
          <div>
            <p className="font-black text-[#F5F7FA] text-sm tracking-[0.12em]">OEZENTRY</p>
            <p className="text-[9px] text-[#A0A7B3] tracking-[0.2em]">KFZ · SERVICE · POCKING</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-[0.18em] uppercase text-[#A0A7B3] hover:text-[#F5F7FA] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/491711234567"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full gradient-blue-bg text-white text-xs font-bold tracking-wide hover:opacity-90 transition-opacity"
        >
          <MessageCircle size={15} />
          WhatsApp
        </a>

        <button
          className="md:hidden text-[#F5F7FA] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#07090D] border-t border-white/[0.06] px-6 py-5 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-xs font-semibold tracking-[0.18em] uppercase text-[#A0A7B3] hover:text-[#F5F7FA] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/491711234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full gradient-blue-bg text-white text-xs font-bold w-fit"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
