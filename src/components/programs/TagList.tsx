export function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="border-gold/30 font-heading text-gold hover:border-gold border px-5 py-3 text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:text-white"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
