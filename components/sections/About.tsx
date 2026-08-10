"use client";

import {
  ArrowRight,
  Code2,
  ShieldCheck,
  TestTubeDiagonal,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function About() {
  const { language } = useLanguage();
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 py-24"
    >
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-400">
              {language === "fr" ? "À propos" : "About me"}
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              {language === "fr" ? "Du développement logiciel" : "From software development"}
              <span className="gradient-text"> {language === "fr" ? "à l’ingénierie qualité." : "to quality engineering."}</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">
            <p>
              {language === "fr" ? "J’ai commencé ma carrière dans le développement logiciel, où j’ai appris comment les applications sont conçues, réalisées et intégrées." : "I started my career in software development, where I learned how applications are designed, implemented and integrated."}
            </p>

            <p>
              {language === "fr" ? "J’ai ensuite évolué vers la Quality Assurance, en associant mon bagage technique à une forte attention portée à la qualité produit, à l’expérience utilisateur et à la prévention des risques." : "I later moved into Quality Assurance, combining my technical background with a strong focus on product quality, user experience and risk prevention."}
            </p>

            <p>
              {language === "fr" ? "Aujourd’hui, j’interviens sur les tests fonctionnels, la validation API, la régression et l’automatisation, en collaboration étroite avec les développeurs, Product Owners et équipes métier." : "Today, I work across functional testing, API validation, regression testing and test automation, while collaborating closely with developers, Product Owners and business teams."}
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          <AboutCard
            icon={Code2}
            title={language === "fr" ? "Culture développement" : "Development mindset"}
            description={language === "fr" ? "Comprendre l’architecture applicative m’aide à analyser les anomalies et à communiquer efficacement avec les développeurs." : "Understanding application architecture helps me investigate defects and communicate effectively with developers."}
          />

          <AboutCard
            icon={TestTubeDiagonal}
            title={language === "fr" ? "Méthodologie QA" : "QA methodology"}
            description={language === "fr" ? "Je conçois les scénarios de test selon les exigences, les risques, la valeur métier et les usages réels." : "I design test scenarios based on requirements, risks, business value and real user behavior."}
          />

          <AboutCard
            icon={ShieldCheck}
            title={language === "fr" ? "Culture qualité" : "Quality ownership"}
            description={language === "fr" ? "Mon objectif n’est pas seulement de détecter les bugs, mais de réduire le risque avant la production." : "My objective is not only to find bugs, but to reduce risk before a feature reaches production."}
          />
        </div>
      </div>
    </section>
  );
}

type AboutCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

function AboutCard({
  icon: Icon,
  title,
  description,
}: AboutCardProps) {
  return (
    <article className="glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
        <Icon size={21} />
      </div>

      <h3 className="mt-5 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-400">
        {description}
      </p>

      <div className="mt-5 flex items-center gap-2 text-sm text-cyan-400">
        Quality mindset
        <ArrowRight size={15} />
      </div>
    </article>
  );
}
