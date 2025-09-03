/** Chip simple para skills/tecnologías */
export default function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium mr-2 mb-2">
      {children}
    </span>
  );
}
