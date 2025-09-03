/**
 * Layout de sección con título y animación de entrada.
 * Uso: <Section id="about" title="Sobre mí">...</Section>
 */
import { motion as Motion } from "framer-motion";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {title && (
        <Motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-8"
        >
          {title}
        </Motion.h2>
      )}
      {children}
    </section>
  );
}
