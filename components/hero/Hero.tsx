"use client";

import Link from "next/link";
import { Code2, Download, LinkIcon, Mail, Search, TestTube2 } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/components/LanguageProvider";

const orbitItems = [
  { label: "Playwright", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg", className: "orbit-item orbit-api" },
  { label: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg", className: "orbit-item orbit-sql" },
  { label: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", className: "orbit-item orbit-pw" },
  { label: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg", className: "orbit-item orbit-ci" },
  { label: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", className: "orbit-item orbit-bdd" },
  { label: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg", className: "orbit-item orbit-ux" },
  { label: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", className: "orbit-item orbit-csharp" },
  { label: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", className: "orbit-item orbit-java" },
  { label: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg", className: "orbit-item orbit-sqlserver" },
  { label: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg", className: "orbit-item orbit-azure" },
  { label: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg", className: "orbit-item orbit-gitlab" },
  { label: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", className: "orbit-item orbit-git" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hamza-a-9a4546274/", icon: LinkIcon },
  { label: "GitHub", href: "https://github.com/haboullail", icon: Code2 },
  { label: "Email", href: "mailto:hamza.aboullail@gmail.com", icon: Mail },
];

export default function Hero() {
  const { language } = useLanguage();
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-[70px]">
      <div className="hero-glow" />
      <aside className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-slate-600/50 bg-slate-800/70 text-slate-400 transition hover:border-cyan-400 hover:text-cyan-300">
            <Icon size={18} />
          </a>
        ))}
      </aside>

      <div className="container grid min-h-[calc(100vh-70px)] items-center gap-14 py-20 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            {language === "fr" ? "Disponible pour de nouvelles opportunités" : "Available for new opportunities"}
          </div>

          <h1 className="mt-7 max-w-2xl text-5xl font-extrabold leading-[1.05] tracking-[-.045em] text-white sm:text-6xl xl:text-7xl">
            {language === "fr" ? "Bonjour, je suis " : "Hi, I’m "}<span className="bg-gradient-to-r from-cyan-300 to-teal-400 bg-clip-text text-transparent">Hamza</span>
            <span className="block">Aboullail</span>
          </h1>
          <p className="mt-6 text-lg font-medium text-slate-300">
            {language === "fr" ? "Je suis " : "I am a "}<span className="font-bold text-cyan-300">QA Engineer &amp; DevOps</span>
          </p>
          <p className="mt-2 font-mono text-sm font-semibold uppercase tracking-wider text-cyan-400">
            QA Engineer | Test Automation | DevOps &amp; CI/CD
          </p>
          <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
            {language === "fr"
              ? "J’ai environ huit ans d’expérience dans l’informatique, dont près de quatre ans en Quality Assurance. J’ai commencé ma carrière comme développeur Full Stack, ce qui me permet aujourd’hui de comprendre les aspects techniques d’une application et de communiquer facilement avec les développeurs. Depuis 2023, je me spécialise dans la qualité logicielle et la validation des applications avant leur mise en production."
              : "I have around eight years of experience in IT, including nearly four years in Quality Assurance. I started my career as a Full Stack Developer, which now helps me understand the technical aspects of an application and communicate easily with developers. Since 2023, I have specialized in software quality and validating applications before production."}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/cv/hamza-aboullail-cv.pdf" download="CV_Hamza_Aboullail.pdf" className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-400/35 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-cyan-500/10">
              {language === "fr" ? "Télécharger mon CV" : "Download my CV"} <Download size={16} />
            </Link>
          </div>

        </motion.div>

        <motion.div className="relative mx-auto aspect-square w-full max-w-[540px]" initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .15, duration: .7 }}>
          <div className="orbit orbit-outer" />
          <div className="orbit orbit-inner" />
          <div className="absolute inset-[29%] grid place-items-center overflow-hidden rounded-full border-2 border-cyan-500/70 bg-gradient-to-br from-[#213a55] to-[#111d33] shadow-[0_0_80px_rgba(6,182,212,.18)]">
            <div className="text-center">
              <img src="/ha-logo.svg" alt="Logo Hamza Aboullail" className="mx-auto h-28 w-28 drop-shadow-2xl" />
              <p className="mt-4 text-sm font-bold text-white">QA Engineer &amp; DevOps</p>
              <p className="mt-1 text-[10px] uppercase tracking-[.18em] text-slate-500">Test · Automate · Deploy</p>
            </div>
          </div>
          {orbitItems.map((item) => <span key={item.label} className={item.className} title={item.label}><img src={item.icon} alt={item.label} /></span>)}
          <span className="absolute bottom-[7%] right-[16%] grid h-12 w-12 place-items-center rounded-full border border-cyan-400/30 bg-[#102436] text-cyan-300"><TestTube2 size={20} /></span>
          <span className="absolute left-[5%] top-[41%] grid h-12 w-12 place-items-center rounded-full border border-cyan-400/30 bg-[#102436] text-cyan-300"><Search size={20} /></span>
        </motion.div>
      </div>
    </section>
  );
}
