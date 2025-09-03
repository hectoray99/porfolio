/** Timeline de experiencia laboral */
import { motion } from "framer-motion";
import Section from "../components/Section";
import { experience } from "../data/profile";

export default function Experience() {
  return (
    <Section id="experience" title="Experiencia">
      <div className="relative">
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-slate-200" />
        <ul className="space-y-8">
          {experience.map((item, idx) => (
            <li key={idx} className="relative pl-10 sm:pl-12">
              <span className="absolute left-3.5 sm:left-5 top-1.5 w-3 h-3 rounded-full bg-slate-900" />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-semibold text-lg">{item.role}</h3>
                  <span className="text-sm text-slate-500">{item.period}</span>
                </div>
                <p className="text-slate-600 mt-1">{item.company}</p>
                <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-700">
                  {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
