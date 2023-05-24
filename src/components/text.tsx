import { ThemeColor, getThemeColor } from "./theme-color";

type TextSize = "big" | "medium" | "small" | "tiny";

interface TextProps {
  variant: UnionString<TextSize, ThemeColor>;
  children: string;
  uppercase?: boolean;
  mono?: boolean;
  dark?: boolean;
  bold?: boolean;
}

export function Text({
  variant,
  children,
  mono,
  uppercase,
  bold,
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
      hover:brightness-150`}
    >
      {children}
    </p>
  );
}

function getVariantSize(size: TextSize): string {
  switch (size) {
    case "tiny":
      return "text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl";
    case "small":
      return "text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl";
    case "medium":
      return "text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl";
    case "big":
      return "text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl";
  }
}
