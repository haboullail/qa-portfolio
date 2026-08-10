import About from "@/components/sections/About";
import ExperienceSection from "@/components/sections/Experience";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/sections/Projects";
import QALabSection from "@/components/sections/QALabSection";
import Contact from "@/components/sections/Contact";
import Clients from "@/components/sections/Clients";
import Technologies from "@/components/sections/Technologies";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Projects />
      <ExperienceSection />
      <About />
      <Technologies />
      <QALabSection />
      <Contact />
    </>
  );
}
