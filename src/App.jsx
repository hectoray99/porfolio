import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="home"><Hero /></section>
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-sm text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} Héctor Alejandro Ayala. Hecho con React + Tailwind.
      </footer>
    </div>
  );
}
