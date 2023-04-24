export type ThemeColor = "primary" | "dark" | "bright";

export function getThemeColor(color: ThemeColor, bg = false): string {
  const prefix = bg ? "bg-" : "text-";
  switch (color) {
    case "primary":
      return `${prefix}primary-regular`;
    case "dark":
      return `${prefix}gray-500`;
    case "bright":
      return `${prefix}gray-50`;
  }
}
