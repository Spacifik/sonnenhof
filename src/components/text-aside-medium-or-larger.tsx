/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { EmptyPage } from "@sonnenhof/components/empty-page";
import { Image, ImageProps } from "@sonnenhof/components/image";
import { Layout } from "@sonnenhof/components/layout";
import { Text } from "@sonnenhof/components/text";
import { useIsMediumOrBigger } from "@sonnenhof/utils/use-is-medium-or-bigger";

export function TextAsideMediumOrLarger({
  imageName,
  text,
}: {
  imageName: ImageProps["name"];
  text: string;
}): JSX.Element {
  const mediumOrBigger = useIsMediumOrBigger();
  const WrapperElement = mediumOrBigger
    ? ({ children }: React.PropsWithChildren<{}>) => (
        <aside className="flex flex-row-reverse">{children}</aside>
      )
    : ({ children }: React.PropsWithChildren<{}>) => <>{children}</>;
  return (
    <WrapperElement>
      <Image
        name={imageName}
        className="md:max-h-[50vh] md:max-w-[50vw] m-auto md:m-4 float-right "
      />
      <Text variant="small-primary">{text}</Text>
    </WrapperElement>
  );
}
