"use client";

import QALab from "@/components/qa-lab/QALab";
import { useLanguage } from "@/components/LanguageProvider";

export default function QALabSection() {
  const { language } = useLanguage();
  return (
    <section id="qa-lab" className="border-t border-white/10 py-24">
      <div className="container">
        <div className="max-w-3xl">
          <p className="section-kicker">QA Lab</p>
          <h2 className="section-title">
            {language === "fr" ? "La qualité," : "Quality practices,"}
            <span className="gradient-text"> {language === "fr" ? "en pratique." : "made concrete."}</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            {language === "fr" ? "Découvrez des exemples de scénarios de test, rapports d’anomalies, contrôles API et automatisation navigateur." : "Explore examples of test scenarios, defect reports, API checks and browser automation."}
          </p>
        </div>
        <div className="mt-12">
          <QALab />
        </div>
      </div>
    </section>
  );
}
