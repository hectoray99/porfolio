// src/sections/Education.jsx

/** Educación y cursos, simple y limpio */
import { motion } from "framer-motion"; 
// FIX: eliminé el import duplicado `motion as Motion`. Con uno alcanza.
import Section from "../components/Section";
import { education } from "../data/profile";

export default function Education() {
  return (
    <Section id="education" title="Educación y cursos">
      <div className="grid sm:grid-cols-2 gap-6">
        {education.map((e, i) => (
          // FIX: había dos aperturas (<motion.div y <Motion.div>). Dejo una sola.
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border p-5 shadow-sm"
          >
            <p className="font-medium">{e.title}</p>
            <p className="text-sm text-slate-600 mt-1">{e.org}</p>
          </motion.div>
          // FIX: removí el cierre duplicado </Motion.div>.
        ))}
      </div>
    </Section>
  );
}