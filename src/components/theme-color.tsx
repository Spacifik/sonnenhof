export type ThemeColor = "primary" | "dark" | "light";

export function getThemeColor(color: ThemeColor, bg = false): string {
  const prefix = bg ? "bg-" : "text-";
  switch (color) {
    case "primary":
      return `${prefix}primary-500`;
    case "dark":
      return `${prefix}gray-500`;
    case "light":
      return `${prefix}gray-100`;
  }
}
export function getHoverThemeColor(color: ThemeColor, bg = false): string {
  const prefix = bg ? "bg-" : "text-";
  switch (color) {
    case "primary":
      return `hover:${prefix}primary-200 group-hover:${prefix}primary-200 group-hover/button:${prefix}primary-50`;
    case "dark":
      return `hover:${prefix}gray-200 group-hover:${prefix}gray-200`;
    case "light":
      return `hover:${prefix}gray-50 group-hover:${prefix}gray-50`;
  }
}
