"use client";

import { motion } from "motion/react";

import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-sm text-emerald-400">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>

        Available for new opportunities
      </div>

      <p className="mb-4 font-mono text-sm uppercase tracking-[0.22em] text-cyan-400">
        QA Engineer · Functional · API · Automation
      </p>

      <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
        Building confidence
        <br />

        <span className="gradient-text">
          before production.
        </span>
      </h1>

      <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
        QA Engineer with a software development background,
        specialized in functional testing, API validation,
        regression testing and modern test automation.
      </p>

      <HeroButtons />

      <HeroStats />
    </motion.div>
  );
}
