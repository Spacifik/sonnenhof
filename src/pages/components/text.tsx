

interface TextProps {
    variant: "huge" | "big" | "medium" | "small";
    children: string;
}

export function Text({ variant, children }: TextProps): JSX.Element {
    return <p className={`text-${variant}`}>{children}</p>
}