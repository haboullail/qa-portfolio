"use client";

import { useLanguage } from "@/components/LanguageProvider";

const clients = [
  { name: "Orange", domain: "orange.com" },
  { name: "CIH Bank", domain: "cihbank.ma" },
  { name: "Grupo Avalon", domain: "grupoaval.com" },
  { name: "Attijariwafa Bank", domain: "attijariwafabank.com" },
  { name: "Crédit Agricole", domain: "credit-agricole.com" },
  { name: "MAIF", domain: "maif.fr" },
];

export default function Clients() {
  const { language } = useLanguage();
  return (
    <section className="border-y border-white/5 bg-[#151e36]/70 py-12">
      <div className="container">
        <p className="text-center text-xs font-semibold uppercase tracking-[.22em] text-slate-500">
          {language === "fr" ? "Des environnements clients exigeants" : "Trusted in demanding client environments"}
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client, index) => (
            <div key={client.name} className="client-logo group flex min-h-24 items-center justify-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]" style={{ animationDelay: `${index * 100}ms` }}>
              <img src={`https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`} alt="" className="h-8 w-8 rounded-md object-contain" />
              <span className="text-center text-xs font-semibold text-slate-300">{client.name}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-[11px] text-slate-600">
          {language === "fr" ? "Les marques sont citées uniquement comme contextes de mission." : "Brands are shown solely as client engagement contexts."}
        </p>
      </div>
    </section>
  );
}
