import Link from "next/link";
import React from "react";
import { Button, ButtonProps } from "./button";
import { Text } from "./text";
import { ImageProps, getImageSrc } from "./image";
import { isTouchDevice } from "./is-touch-device";
import { useRouter } from "next/router";

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
  const router = useRouter();

  return (
    <section
      className={`
      grow relative min-h-40vh p-4  md:p-8 md:basis-1/2 md:min-h-60vh justify-center flex
      ${details ? "group md:hover:brightness-150" : ""}
      ${background ? "bg-cover bg-no-repeat" : "bg-black"} 
      `}
      style={
        background
          ? { backgroundImage: `url(${getImageSrc(background)})` }
          : undefined
      }
      onClick={React.useCallback(() => {
        const href = buttons.at(0)?.href;
        if (href) {
          router.push(href);
        }
      }, [buttons, router])}
    >
      <div className="flex z-10 align-middle items-center justify-center ">
        <div className="opacity-100 group-hover:opacity-0 transition-all flex flex-col gap-6">
          {hint && (
            <div>
              <Text variant={`tiny-${textColorVariant}`} mono uppercase>
                {hint}
              </Text>
            </div>
          )}
          <Text variant={`big-${textColorVariant}`} mono uppercase>
            {title}
          </Text>
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
        </div>
      </div>
      {details ? (
        <div className="absolute inset-0 items-center justify-center z-20 align-middle bg-transparent opacity-0 w-full h-full p-4  md:p-8 transition-all group-hover:md:opacity-100 group-hover:pointer-events:none">
          {hint && (
            <div className="pb-2 md:pb-5 lg:pb-8">
              <Text variant={`small-${textColorVariant}`} mono uppercase>
                {hint}
              </Text>
            </div>
          )}
          <Text variant="small-primary">{details}</Text>
          <div className="flex gap-4 pt-3 md:pt-5">
            {buttons.map(({ href, ...button }) =>
              href ? (
                <Link className="cursor-pointer" key={href} href={href}>
                  <Button key={button.label} {...button} />
                </Link>
              ) : (
                <Button key={button.label} {...button} />
              )
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
}
