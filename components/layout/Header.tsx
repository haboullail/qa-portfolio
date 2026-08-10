"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const navigation = [
    { label: language === "fr" ? "Accueil" : "Home", href: "#home" },
    { label: language === "fr" ? "Projets" : "Projects", href: "#projects" },
    { label: language === "fr" ? "Expérience" : "Experience", href: "#experience" },
    { label: "QA Lab", href: "#qa-lab" },
    { label: language === "fr" ? "À propos" : "About", href: "#about" },
    { label: language === "fr" ? "Outils" : "Tools", href: "#technologies" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.05] bg-[#151e36]/90 backdrop-blur-xl">
      <div className="container flex h-[70px] items-center justify-between">
        <Link href="#home" className="flex items-center gap-2.5" aria-label="Accueil">
          <img src="/ha-logo.svg" alt="Logo HA" className="h-10 w-10" />
          <span className="text-sm font-bold tracking-tight text-white">HAMZA<span className="text-cyan-400">.QA</span></span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href} className="group relative py-6 text-xs font-medium text-slate-400 transition hover:text-white">
              {index === 0 && <span className="absolute left-1/2 top-2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-400" />}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex rounded-lg border border-white/10 bg-white/[0.03] p-1">
            {(["fr", "en"] as const).map((value) => (
              <button key={value} type="button" onClick={() => setLanguage(value)} className={`rounded-md px-2.5 py-1 text-[10px] font-bold uppercase transition ${language === value ? "bg-cyan-400 text-[#07111f]" : "text-slate-500 hover:text-white"}`}>{value}</button>
            ))}
          </div>
          <Link href="#contact" className="rounded-lg border border-cyan-400/30 px-4 py-2 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-500/10">
            {language === "fr" ? "Travaillons ensemble" : "Let’s work together"}
          </Link>
        </div>

        <button type="button" onClick={() => setOpen(!open)} aria-label="Menu" className="rounded-lg border border-white/10 p-2 text-white lg:hidden">
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {open && (
        <nav className="container border-t border-white/5 py-4 lg:hidden">
          <div className="mb-3 flex gap-2 px-3">
            <button type="button" onClick={() => setLanguage("fr")} className={`rounded-md px-3 py-1.5 text-xs font-bold ${language === "fr" ? "bg-cyan-400 text-[#07111f]" : "bg-white/5 text-slate-400"}`}>FR</button>
            <button type="button" onClick={() => setLanguage("en")} className={`rounded-md px-3 py-1.5 text-xs font-bold ${language === "en" ? "bg-cyan-400 text-[#07111f]" : "bg-white/5 text-slate-400"}`}>EN</button>
          </div>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5">
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
