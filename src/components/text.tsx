interface TextProps {
  variant: "big" | "medium" | "small";
  children: string;
}

export function Text({ variant, children }: TextProps): JSX.Element {
  return <p className={getVariantSize(variant)}>{children}</p>;
}

function getVariantSize(variant: TextProps["variant"]): string {
  switch (variant) {
    case "small":
      return "text-sm";
    case "medium":
      return "text-lg";
    case "big":
      return "text-2xl";
  }
}
