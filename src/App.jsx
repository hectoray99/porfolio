/**
 * Composición de la página: Navbar + secciones + footer.
 * Notas: anclas internas para scroll simple. Minimalista y responsive.
 */
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Navbar sticky */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
          <a href="#home" className="font-semibold">Héctor Ayala</a>
          <div className="hidden sm:flex gap-6 text-sm">
            <a href="#about" className="hover:opacity-70">Sobre mí</a>
            <a href="#experience" className="hover:opacity-70">Experiencia</a>
            <a href="#skills" className="hover:opacity-70">Habilidades</a>
            <a href="#education" className="hover:opacity-70">Educación</a>
            <a href="#projects" className="hover:opacity-70">Proyectos</a>
            <a href="#contact" className="hover:opacity-70">Contacto</a>
          </div>
        </nav>
      </header>

      {/* Secciones */}
      <section id="home"><Hero /></section>
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Héctor Alejandro Ayala. Hecho con React + Tailwind.
      </footer>
    </div>
  );
}
