"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";

const baseNavLinks = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Kontakt", href: "/#kontakt" },
];

const extraPageLinks: Record<string, { label: string; href: string }> = {
  "/impressum": { label: "Impressum", href: "/impressum" },
  "/datenschutz": { label: "Datenschutz", href: "/datenschutz" },
  "/anfrage": { label: "Anfrage", href: "/anfrage" },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const extraLink = extraPageLinks[pathname];
  const navLinks = extraLink ? [...baseNavLinks, extraLink] : baseNavLinks;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] backdrop-blur-md bg-[#050608]/85">
      <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 h-[82px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-[#0E1118] border border-white/[0.1] flex items-center justify-center">
            <span className="text-xs font-black text-[#0B5CFF] tracking-tight">OE</span>
          </div>
          <div>
            <p className="font-black text-[#F5F7FA] text-sm tracking-[0.12em]">OEZENTRY</p>
            <p className="text-[12px] text-[#A0A7B3] tracking-[0.2em]">FAHRZEUGELEKTRONIK</p>
          </div>
        </Link>

        {/* Nav + WhatsApp grouped on the right */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = link.href === pathname;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold tracking-[0.18em] uppercase transition-colors duration-200 border-b-2 pb-0.5 ${
                    isActive
                      ? "text-[#F5F7FA] border-[#0B5CFF]"
                      : "text-[#A0A7B3] hover:text-[#F5F7FA] border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <a
            href="https://wa.me/491632539557"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full gradient-blue-bg text-white text-xs font-bold tracking-wide hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
        </div>

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
          {navLinks.map((link) => {
            const isActive = link.href === pathname;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-xs font-semibold tracking-[0.18em] uppercase transition-colors ${
                  isActive
                    ? "text-[#19B5FF]"
                    : "text-[#A0A7B3] hover:text-[#F5F7FA]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://wa.me/491632539557"
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
