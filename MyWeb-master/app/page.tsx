import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TechConstellation from "@/components/TechConstellation";
import OpenSource from "@/components/OpenSource";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <TechConstellation />
      <OpenSource />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
