export type ThemeColor = "primary" | "dark" | "light";

export function getThemeColor(color: ThemeColor, bg = false): string {
  const prefix = bg ? "bg-" : "text-";
  switch (color) {
    case "primary":
      return `${prefix}primary-regular`;
    case "dark":
      return `${prefix}gray-500`;
    case "light":
      return `${prefix}gray-100`;
  }
}
