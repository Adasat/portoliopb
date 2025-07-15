export function getSpanClasses(title) {
  const len = title.length;
  if (len < 12) return "sm:col-span-2 md:col-span-2";
  if (len > 12) return "md:col-span-4 md:row-span-20";

  return ""; // fallback
}
