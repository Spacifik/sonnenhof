interface TextProps {
  variant: UnionString<
    "big" | "medium" | "small" | "tiny",
    "primary" | "dark" | "bright"
  >;
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
  return (
    <p
      className={`${getVariantSize(variant)} ${mono ? "mono" : ""} ${
        uppercase ? "uppercase" : ""
      }`}
    >
      {children}
    </p>
  );
}

function getVariantSize(variant: TextProps["variant"]): string {
  switch (variant) {
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
