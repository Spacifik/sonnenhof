import Link from "next/link";
import { Button, ButtonProps } from "./button";
import { Text } from "./text";
import { ImageProps, getImageSrc } from "./image";

export interface SectionProps {
  hint?: string;
  details?: string;
  title: string;
  text: string;
  buttons: (ButtonProps & { href?: string })[];
  background?: ImageProps["name"];
}

export function Section({
  hint,
  title,
  details,
  buttons,
  background,
  ...props
}:
  | SectionProps
  | React.PropsWithChildren<Omit<SectionProps, "text">>): JSX.Element {
  const textColorVariant = "primary";
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
      <div className="flex flex-col gap-6 z-10 align-middle md:mt-14">
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
        {(props as SectionProps).text ? (
          <Text variant={`small-${textColorVariant}`}>
            {(props as SectionProps).text}
          </Text>
        ) : (
          <>
            {
              (props as React.PropsWithChildren<Omit<SectionProps, "text">>)
                .children
            }
          </>
        )}
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
      {details ? (
        <div className="absolute inset-0 items-center justify-center z-20 align-middle bg-black opacity-0 w-full h-full p-6 md:p-16 hover:md:opacity-80">
          <Text variant="small-primary">{details}</Text>
        </div>
      ) : null}
    </section>
  );
}
