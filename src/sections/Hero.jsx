/**
 * Portada del portfolio (headline + CTAs).
 */
import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            {profile.name}
          </motion.h1>
          <p className="mt-3 text-lg text-slate-600">{profile.role}</p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Soy versátil con background administrativo y técnico, ahora enfocado en desarrollo web.
            Me gusta crear interfaces limpias, rápidas y fáciles de usar.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-4 py-2 border bg-slate-900 text-white hover:opacity-90"
            >
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="rounded-xl px-4 py-2 border hover:bg-slate-100">
              Escribime
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="rounded-xl px-4 py-2 border hover:bg-slate-100">
              Llamar
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:justify-self-end"
        >
          <div className="aspect-square w-full max-w-xs md:max-w-sm mx-auto rounded-2xl border shadow-sm bg-white p-6 flex items-center justify-center">
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
