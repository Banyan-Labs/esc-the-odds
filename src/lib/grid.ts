/**
 * Generates conditional border classes for grid card layouts.
 * Prevents the last item in a row from having a right border,
 * and the last row from having a bottom border.
 */
export function gridBorderClasses(index: number, total: number, columns: number = 3): string {
  const isLastInRow = (index + 1) % columns === 0;
  const isInLastRow = index >= total - (total % columns || columns);

  return [
    !isLastInRow ? "md:border-r border-white/10" : "",
    !isInLastRow ? "border-b border-white/10 md:border-b-0" : "",
  ]
    .filter(Boolean)
    .join(" ");
}
