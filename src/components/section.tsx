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
  applyMinHeight?: boolean;
}

export function Section({
  hint,
  title,
  details,
  buttons,
  background,
  applyMinHeight,
  ...props
}:
  | SectionProps
  | React.PropsWithChildren<Omit<SectionProps, "text">>): JSX.Element {
  const textColorVariant = "primary";
  const router = useRouter();

  return (
    <section
      className={`
      grow relative md:basis-1/2 flex
      ${applyMinHeight ? "min-h-40vh md:min-h-60vh 2xl:min-h-40vh" : ""}
      ${details ? "group/section" : ""}
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
      <div className="w-full flex items-center justify-center group-hover/section:bg-black/50 transition-all">
        <div className="flex z-10 align-middle items-center justify-center max-w-[50%]">
          <div className="opacity-100 group-hover/section:opacity-0 transition-all flex flex-col">
            {hint && (
              <Text
                variant={`tiniest-${textColorVariant}`}
                mono
                uppercase
                light
                noWrap
              >
                {hint}
              </Text>
            )}
            <Text variant={`huge-${textColorVariant}`} mono uppercase bold>
              {title}
            </Text>
            {(props as SectionProps).text ? (
              <Text variant={`big-${textColorVariant}`}>
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
          <div className="absolute inset-0 items-center justify-center max-w-[50%] m-auto opacity-0 group-hover/section:opacity-100 group-hover/section:flex flex-col">
            <div className="m-auto gap-5 flex flex-col">
              {hint && (
                <Text
                  variant={`medium-${textColorVariant}`}
                  mono
                  uppercase
                  light
                  noWrap
                >
                  {hint}
                </Text>
              )}
              <Text variant="tiniest-primary">{details}</Text>
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
          </div>
        ) : null}
      </div>
    </section>
  );
}
