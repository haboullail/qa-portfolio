"use client";

import { motion } from "motion/react";

import {
  CheckCircle2,
  Play,
  Terminal,
} from "lucide-react";

const tests = [
  {
    name: "functional.spec.ts",
    duration: "2.4s",
  },
  {
    name: "api-validation.spec.ts",
    duration: "1.7s",
  },
  {
    name: "checkout.spec.ts",
    duration: "3.2s",
  },
  {
    name: "regression.spec.ts",
    duration: "5.8s",
  },
];

export default function HeroTerminal() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        delay: 0.15,
        duration: 0.6,
      }}
      className="relative"
    >
      <div className="absolute -inset-10 -z-10 bg-indigo-500/10 blur-3xl" />

      <div className="glass overflow-hidden rounded-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-3">
            <Terminal
              size={19}
              className="text-indigo-400"
            />

            <span className="font-mono text-sm text-slate-200">
              test-execution
            </span>
          </div>

          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
        </div>

        <div className="border-b border-white/10 bg-black/20 px-5 py-4 font-mono text-sm">
          <span className="text-indigo-400">$</span>{" "}

          <span className="text-slate-300">
            npx playwright test
          </span>
        </div>

        <div className="space-y-2 p-5">
          {tests.map((test, index) => (
            <motion.div
              key={test.name}
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.5 + index * 0.15,
              }}
              className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.025] p-3"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={18}
                  className="text-emerald-400"
                />

                <span className="font-mono text-sm text-slate-300">
                  {test.name}
                </span>
              </div>

              <span className="font-mono text-xs text-slate-500">
                {test.duration}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/10 bg-black/20 px-5 py-5">
          <div className="flex items-center gap-2 font-mono text-sm text-emerald-400">
            <Play size={15} />

            4 passed
          </div>

          <p className="mt-2 font-mono text-xs text-slate-500">
            0 failed · execution completed successfully
          </p>
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="glass absolute -bottom-7 -left-5 hidden rounded-xl px-4 py-3 lg:block"
      >
        <p className="text-xs text-slate-500">
          Current status
        </p>

        <p className="mt-1 flex items-center gap-2 text-sm font-medium text-white">
          <CheckCircle2
            size={16}
            className="text-emerald-400"
          />

          Release ready
        </p>
      </motion.div>
    </motion.div>
  );
}