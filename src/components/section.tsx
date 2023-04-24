import Link from "next/link";
import { Button, ButtonProps } from "./button";
import { Text } from "./text";

export interface SectionProps {
  hint?: string;
  title: string;
  text: string;
  buttons: (ButtonProps & { href?: string })[];
  background?: string; // image url
}

export function Section({
  hint,
  title,
  text,
  buttons,
  background,
}: SectionProps): JSX.Element {
  const textColorVariant = background ? "primary" : "light";
  return (
    <section
      className={`grow relative p-6 md:p-9 md:basis-1/3 ${
        background ? "bg-cover bg-no-repeat" : "bg-gray-700"
      }`}
      style={
        background
          ? { backgroundImage: `url(/desktop/${background})` }
          : undefined
      }
    >
      <div className="flex flex-col gap-6 z-20">
        <div>
          {hint && (
            <Text variant={`small-${textColorVariant}`} mono uppercase>
              {hint}
            </Text>
          )}
          <Text variant={`big-${textColorVariant}`} mono uppercase>
            {title}
          </Text>
        </div>
        <Text variant={`medium-${textColorVariant}`}>{text}</Text>
        <div className="flex gap-4">
          {buttons.map(({ href, ...button }) =>
            href ? (
              <Link key={href} href={href}>
                <Button key={button.label} {...button} />
              </Link>
            ) : (
              <Button key={button.label} {...button} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
