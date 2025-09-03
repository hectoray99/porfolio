/**
 * Navbar responsiva con toggle de dark mode y menú hamburguesa.
 * Dark mode: alterna 'dark' en <html> y guarda preferencia en localStorage.
 */
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggleDark = () => {
    const el = document.documentElement;
    const next = !el.classList.contains("dark");
    el.classList.toggle("dark", next);
    setDark(next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-white/20 shadow-sm dark:bg-slate-900/70 dark:border-slate-800">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
        <a href="#home" className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-600">
          Héctor Ayala
        </a>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <NavLinks />
          <button onClick={toggleDark} className="btn-secondary" aria-label="Toggle dark mode">
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile: hamburguesa */}
        <button
          className="sm:hidden btn-secondary"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(v => !v)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="sm:hidden px-4 pb-4">
          <div className="surface">
            <div className="flex flex-col gap-3 text-sm">
              <a href="#about" className="hover:text-indigo-600">Sobre mí</a>
              <a href="#experience" className="hover:text-indigo-600">Experiencia</a>
              <a href="#skills" className="hover:text-indigo-600">Habilidades</a>
              <a href="#education" className="hover:text-indigo-600">Educación</a>
              <a href="#projects" className="hover:text-indigo-600">Proyectos</a>
              <a href="#contact" className="hover:text-indigo-600">Contacto</a>
              <button onClick={() => { toggleDark(); setOpen(false); }} className="btn-secondary mt-2">
                {dark ? "Tema claro" : "Tema oscuro"}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLinks() {
  return (
    <div className="flex gap-6">
      <a href="#about" className="hover:text-indigo-600">Sobre mí</a>
      <a href="#experience" className="hover:text-indigo-600">Experiencia</a>
      <a href="#skills" className="hover:text-indigo-600">Habilidades</a>
      <a href="#education" className="hover:text-indigo-600">Educación</a>
      <a href="#projects" className="hover:text-indigo-600">Proyectos</a>
      <a href="#contact" className="hover:text-indigo-600">Contacto</a>
    </div>
  );
}
