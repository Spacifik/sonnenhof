/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { EmptyPage } from "@sonnenhof/components/empty-page";
import { Image, ImageProps } from "@sonnenhof/components/image";
import { Layout } from "@sonnenhof/components/layout";
import { Text } from "@sonnenhof/components/text";
import { useIsMediumOrBigger } from "@sonnenhof/utils/use-is-medium-or-bigger";

export function TextAsideMediumOrLarger({
  imageName,
  children,
  right,
}: React.PropsWithChildren<{
  imageName: ImageProps["name"];
  right?: boolean;
}>): JSX.Element {
  const mediumOrBigger = useIsMediumOrBigger();
  const WrapperElement = mediumOrBigger
    ? ({ children }: React.PropsWithChildren<{}>) => <aside className="max-w-[70vw] m-auto">{children}</aside>
    : ({ children }: React.PropsWithChildren<{}>) => <>{children}</>;

  return (
    <WrapperElement>
      {right ? null : <div>{children}</div>}
      <Image
        name={imageName}
        className={`md:max-h-[50vh] md:max-w-[50vw] lg:max-h-[30vh] lg:max-h-[30vh] m-auto md:m-4 float${right ? "-right" : "-left"}`}
      />
      {right ? <div>{children}</div> : null}
    </WrapperElement>
  );
}
