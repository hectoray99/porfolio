// src/sections/Projects.jsx

/** Placeholder para tus primeros proyectos (luego reemplazás por reales) */
import Section from "../components/Section";

export default function Projects() {
  return (
    <Section id="projects" title="Proyectos (en construcción)">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((n) => (
          <div key={n} className="card">
            <div className="aspect-video rounded-xl border border-accent bg-accent/10 flex items-center justify-center text-sm">
              Demo #{n}
            </div>
            <h3 className="font-semibold mt-4">Proyecto {n}</h3>
            <p className="text-sm text-slate-600 mt-1">
              Descripción breve. Acá vas a linkear repos y deploys cuando estén listos.
            </p>
            <div className="mt-3 flex gap-2">
              <span className="badge">React</span>
              <span className="badge">Vite</span>
              <span className="badge">Tailwind</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-slate-500 mt-6">
        Tip: empezá con mini-proyectos (conversor de monedas, generador de contraseñas, to-do con filtros).
      </p>
    </Section>
  );
}
