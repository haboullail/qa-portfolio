import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
      <Link
        href="#projects"
        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 font-medium text-white transition hover:bg-indigo-400"
      >
        Explore my work

        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </Link>

      <Link
        href="/cv/hamza-aboullail-cv.pdf"
        download="CV_Hamza_Aboullail.pdf"
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
      >
        <Download size={18} />

        Download CV
      </Link>
    </div>
  );
}
