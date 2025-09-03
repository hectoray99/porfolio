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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-rose-50 text-slate-900">
      {/* Navbar sticky */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-white/20 shadow-sm">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
          <a
            href="#home"
            className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-600"
          >
            Héctor Ayala
          </a>
          <div className="hidden sm:flex gap-6 text-sm">
            <a href="#about" className="hover:text-indigo-600">Sobre mí</a>
            <a href="#experience" className="hover:text-indigo-600">Experiencia</a>
            <a href="#skills" className="hover:text-indigo-600">Habilidades</a>
            <a href="#education" className="hover:text-indigo-600">Educación</a>
            <a href="#projects" className="hover:text-indigo-600">Proyectos</a>
            <a href="#contact" className="hover:text-indigo-600">Contacto</a>
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

      <footer className="py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Héctor Alejandro Ayala. Hecho con React + Tailwind.
      </footer>
    </div>
  );
}
