"use client";

import { useLanguage } from "@/components/LanguageProvider";

const technologies = [
  { name: "Playwright", category: "Automation", icon: "playwright/playwright-original.svg" },
  { name: "Selenium", category: "Automation", icon: "selenium/selenium-original.svg" },
  { name: "Postman", category: "API Testing", icon: "postman/postman-original.svg" },
  { name: "Jira", category: "QA Management", icon: "jira/jira-original.svg" },
  { name: "C#", category: "Language", icon: "csharp/csharp-original.svg" },
  { name: "Java", category: "Language", icon: "java/java-original.svg" },
  { name: "TypeScript", category: "Language", icon: "typescript/typescript-original.svg" },
  { name: ".NET", category: "Development", icon: "dot-net/dot-net-original.svg" },
  { name: "SQL Server", category: "Database", icon: "microsoftsqlserver/microsoftsqlserver-original.svg" },
  { name: "Azure", category: "Cloud & CI/CD", icon: "azure/azure-original.svg" },
  { name: "GitLab", category: "CI/CD", icon: "gitlab/gitlab-original.svg" },
  { name: "Git", category: "Version Control", icon: "git/git-original.svg" },
];

const baseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

export default function Technologies() {
  const { language } = useLanguage();
  return (
    <section id="technologies" className="border-t border-white/5 py-24">
      <div className="container">
        <div className="max-w-3xl">
          <p className="section-kicker">Tech stack</p>
          <h2 className="section-title">
            {language === "fr" ? "Technologies & " : "Technologies & "}
            <span className="gradient-text">{language === "fr" ? "outils." : "tools."}</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            {language === "fr" ? "Les outils que j’utilise pour analyser, tester, automatiser et sécuriser les livraisons." : "The tools I use to analyze, test, automate and secure software delivery."}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {technologies.map((technology, index) => (
            <article key={technology.name} className="tech-card group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-cyan-400/[0.04]" style={{ animationDelay: `${index * 60}ms` }}>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#111d34] ring-1 ring-white/[0.06]">
                <img src={`${baseUrl}${technology.icon}`} alt={`${technology.name} logo`} className="h-8 w-8 object-contain transition duration-300 group-hover:scale-110" />
              </span>
              <h3 className="mt-5 text-sm font-bold text-white">{technology.name}</h3>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">{technology.category}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
