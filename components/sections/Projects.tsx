"use client";

import Link from "next/link";

import { motion } from "motion/react";

import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Globe2,
  ServerCog,
  ShoppingBag,
} from "lucide-react";

import { projects } from "@/data/projects";
import { useLanguage } from "@/components/LanguageProvider";

const icons = [
  Globe2,
  ShoppingBag,
  ServerCog,
  Code2,
];

export default function Projects() {
  const { language } = useLanguage();
  return (
    <section
      id="projects"
      className="relative border-t border-white/10 py-24"
    >
      <div className="container">

        {/* HEADER */}

        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-400">
              {language === "fr" ? "Projets sélectionnés" : "Selected work"}
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              {language === "fr" ? "Des projets où la qualité" : "Projects where quality"}
              <span className="gradient-text">
                {language === "fr" ? " a fait la différence." : " made the difference."}
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              {language === "fr" ? "Une sélection de missions illustrant mon approche des tests fonctionnels, de la validation backend et de l’automatisation." : "A selection of projects showing how I approach functional testing, backend validation and automation."}
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
          >
            {language === "fr" ? "Voir tous les projets" : "View all projects"}

            <ArrowUpRight
              size={17}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* PROJECT GRID */}

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = icons[index] ?? Code2;
            const localizedProject = language === "fr" ? {
              ...project,
              title: project.titleFr ?? project.title,
              subtitle: project.subtitleFr ?? project.subtitle,
              category: project.categoryFr ?? project.category,
              description: project.descriptionFr ?? project.description,
              highlights: project.highlightsFr ?? project.highlights,
              status: project.statusFr ?? project.status,
            } : project;

            return (
              <motion.article
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group glass relative min-h-[360px] overflow-hidden rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                {/* DECORATION */}

                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl transition duration-500 group-hover:bg-cyan-500/20"
                  aria-hidden="true"
                />
                <span className="absolute right-6 top-4 text-6xl font-black text-cyan-400/[0.06]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* TOP */}

                <div className="relative flex items-start justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-400">
                      <Icon size={22} />
                    </div>

                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                        {localizedProject.category}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        {localizedProject.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-400">
                    {localizedProject.status}
                  </span>
                </div>

                {/* TITLE */}

                <h3 className="relative mt-9 text-2xl font-semibold">
                  {localizedProject.title}
                </h3>

                <p className="relative mt-4 leading-7 text-slate-400">
                  {localizedProject.description}
                </p>

                {/* HIGHLIGHTS */}

                <ul className="relative mt-6 grid gap-3 sm:grid-cols-2">
                  {localizedProject.highlights
                    .slice(0, 4)
                    .map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-slate-400"
                      >
                        <CheckCircle2
                          size={15}
                          className="shrink-0 text-emerald-400"
                        />

                        {highlight}
                      </li>
                    ))}
                </ul>

                {/* TECHNOLOGIES */}

                <div className="relative mt-7 flex flex-wrap gap-2">
                  {project.technologies
                    .slice(0, 5)
                    .map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/10 bg-black/10 px-2.5 py-1 font-mono text-xs text-slate-400"
                      >
                        {technology}
                      </span>
                    ))}
                </div>

                {/* LINK */}

                <div className="relative mt-8 border-t border-white/10 pt-5">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-white"
                  >
                    {language === "fr" ? "Voir l’étude de cas" : "View case study"}

                    <ArrowUpRight
                      size={16}
                      className="text-cyan-400 transition group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
