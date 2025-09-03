// src/sections/Hero.jsx

/**
 * Portada del portfolio (headline + CTAs).
 * Muestra tu nombre, rol y botones de acción (LinkedIn, Email, Tel).
 */

import { motion } from "framer-motion"; // FIX: elimino el import duplicado `motion as Motion`.
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Columna izquierda: título y CTAs */}
        <div>
          {/* FIX: dejo un solo <motion.h1> y unifico className con gradiente. */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
          >
            {profile.name}
          </motion.h1>

          {/* FIX: dejo un solo párrafo para el rol */}
          <p className="mt-3 text-lg text-slate-700">{profile.role}</p>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Soy versátil con background administrativo y técnico, ahora enfocado en desarrollo web.
            Me gusta crear interfaces limpias, rápidas y fáciles de usar.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {/* FIX: dejo un solo link para cada acción con estilo final */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-4 py-2 border border-transparent bg-gradient-to-r from-indigo-500 to-rose-500 text-white hover:opacity-90 shadow"
            >
              LinkedIn
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl px-4 py-2 border hover:bg-sky-50"
            >
              Escribime
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="rounded-xl px-4 py-2 border hover:bg-sky-50"
            >
              Llamar
            </a>
          </div>
        </div>

        {/* Columna derecha: ícono */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:justify-self-end"
        >
          {/* FIX: dejo un solo contenedor con gradiente de fondo */}
          <div className="aspect-square w-full max-w-xs md:max-w-sm mx-auto rounded-2xl border shadow-sm bg-gradient-to-br from-white to-sky-50 p-6 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl">💻</div>
              <p className="mt-3 text-sm text-slate-600">Portafolio en React + Tailwind</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}