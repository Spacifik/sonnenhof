import { ThemeColor, getThemeColor } from "./theme-color";

type TextSize = "big" | "medium" | "small" | "tiny";

interface TextProps {
  variant: UnionString<TextSize, ThemeColor>;
  children: string;
  uppercase?: boolean;
  mono?: boolean;
  dark?: boolean;
}

export function Text({
  variant,
  children,
  mono,
  uppercase,
}: TextProps): JSX.Element {
  const [size, color] = variant.split("-") as [TextSize, ThemeColor];
  return (
    <p
      className={`${getVariantSize(size)} ${getThemeColor(color)}  ${
        mono ? "mono" : ""
      } ${uppercase ? "uppercase" : ""}`}
    >
      {children}
    </p>
  );
}

function getVariantSize(size: TextSize): string {
  switch (size) {
    case "tiny":
      return "text-xs";
    case "small":
      return "text-sm";
    case "medium":
      return "text-lg";
    case "big":
      return "text-2xl";
  }
}
