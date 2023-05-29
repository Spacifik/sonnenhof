import { ThemeColor, getHoverThemeColor, getThemeColor } from "./theme-color";

type TextSize = "huge" | "big" | "medium" | "small" | "tiny" | "tiniest";

interface TextProps {
  variant: UnionString<TextSize, ThemeColor>;
  children: string;
  uppercase?: boolean;
  mono?: boolean;
  dark?: boolean;
  bold?: boolean;
  light?: boolean;
  noWrap?: boolean;
  addHover?: boolean;
  inline?: boolean;
}

export function Text({
  variant,
  children,
  mono,
  uppercase,
  bold,
  light,
  noWrap,
  addHover,
  inline,
}: TextProps): JSX.Element {
  const [size, color] = variant.split("-") as [TextSize, ThemeColor];
  return (
    <p
      className={`
      ${getVariantSize(size)} 
      ${getThemeColor(color)}  
      ${mono ? "mono" : ""} 
      ${uppercase ? "uppercase" : ""} 
      ${bold ? "font-bold" : ""}
      ${light ? "font-light" : ""}
      ${noWrap ? "whitespace-nowrap" : ""}
      ${addHover ? getHoverThemeColor(color) : ""}
      ${inline ? "display-inline" : ""}
      `}
    >
      {children}
    </p>
  );
}

export function getVariantSize(size: TextSize): string {
  switch (size) {
    case "tiniest":
      return "text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-lg";
    case "tiny":
      return "text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl";
    case "small":
      return "text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl";
    case "medium":
      return "text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl";
    case "big":
      return "text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl";
    case "huge":
      return "text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl";
  }
}
