import Link from "next/link";
import { Button, ButtonProps } from "./button";
import { Text } from "./text";
import { ImageProps, getImageSrc } from "./image";

export interface SectionProps {
  hint?: string;
  title: string;
  text: string;
  buttons: (ButtonProps & { href?: string })[];
  background?: ImageProps["name"];
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
      className={`grow relative p-6 min-h-40vh md:p-16 md:basis-1/2 md:min-h-60vh ${
        background ? "bg-cover bg-no-repeat" : "bg-black"
      }`}
      style={
        background
          ? { backgroundImage: `url(${getImageSrc(background)})` }
          : undefined
      }
    >
      <div className="flex flex-col gap-6 z-20 align-middle md:mt-14">
        <div>
          {hint && (
            <Text variant={`tiny-${textColorVariant}`} mono uppercase>
              {hint}
            </Text>
          )}
          <Text variant={`big-${textColorVariant}`} mono uppercase>
            {title}
          </Text>
        </div>
        <Text variant={`small-${textColorVariant}`}>{text}</Text>
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
