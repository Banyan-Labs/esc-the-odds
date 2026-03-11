export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="text-cream/90 flex items-start gap-3 font-sans text-base">
          <div className="bg-gold mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
          {item}
        </li>
      ))}
    </ul>
  );
}
