"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "motion/react";

import {
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  TestTubeDiagonal,
} from "lucide-react";

import {
  experiences,
  type Experience,
} from "@/data/experience";
import { useLanguage } from "@/components/LanguageProvider";

export default function ExperienceSection() {
  const { language } = useLanguage();
  const [selectedExperience, setSelectedExperience] =
    useState<Experience>(experiences[2]);

  return (
    <section
      id="experience"
      className="relative border-t border-white/10 py-24"
    >
      <div className="container">
        <div className="max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-400">
            {language === "fr" ? "Parcours professionnel" : "Career journey"}
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {language === "fr" ? "Une expérience construite entre" : "Experience built across"}
            <span className="gradient-text">
              {language === "fr" ? " développement et QA." : " development and QA."}
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            {language === "fr" ? "Mon expérience en développement me permet d’aborder la qualité sous les angles utilisateur et technique." : "My development background allows me to approach quality from both the user and technical perspectives."}
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          
          {/* TIMELINE */}

          <div className="relative">
            <div className="absolute bottom-0 left-[19px] top-0 w-px bg-white/10" />

            <div className="space-y-5">
              {experiences.map((experience) => {
                const isSelected =
                  selectedExperience.id === experience.id;

                return (
                  <button
                    key={experience.id}
                    type="button"
                    onClick={() =>
                      setSelectedExperience(experience)
                    }
                    className="relative flex w-full items-start gap-5 text-left"
                  >
                    <div
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition ${
                        isSelected
                          ? "border-cyan-400 bg-cyan-500 text-slate-950"
                          : "border-white/10 bg-[#0b1020] text-slate-500"
                      }`}
                    >
                      {experience.type === "Development" ? (
                        <Code2 size={18} />
                      ) : (
                        <TestTubeDiagonal size={18} />
                      )}
                    </div>

                    <div
                      className={`w-full rounded-2xl border p-5 transition ${
                        isSelected
                          ? "border-cyan-400/30 bg-cyan-500/5"
                          : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
                      }`}
                    >
                      <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
                        {experience.period}
                      </p>

                      <p className="mt-2 font-semibold">
                        {experience.role}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        {experience.company}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* DETAILS */}

          <div className="glass min-h-[430px] rounded-2xl p-7 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExperience.id}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="font-mono text-sm text-cyan-400">
                      {selectedExperience.period}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold">
                      {selectedExperience.role}
                    </h3>

                    <p className="mt-1 text-slate-500">
                      {selectedExperience.company}
                    </p>
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 sm:flex">
                    <BriefcaseBusiness size={22} />
                  </div>
                </div>

                <p className="mt-7 leading-8 text-slate-400">
                  {selectedExperience.summary}
                </p>

                <div className="mt-7">
                  <p className="text-sm font-medium">
                    {language === "fr" ? "Responsabilités principales" : "Key responsibilities"}
                  </p>

                  <ul className="mt-4 space-y-3">
                    {selectedExperience.highlights.map(
                      (highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-slate-400"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-1 shrink-0 text-emerald-400"
                          />

                          <span>{highlight}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <div className="mt-8">
                  <p className="text-sm font-medium">
                    {language === "fr" ? "Technologies et outils" : "Technologies & tools"}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedExperience.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-slate-400"
                        >
                          {technology}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
