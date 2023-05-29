/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import { Button, ButtonProps } from "./button";
import { Text } from "./text";
import { Image, ImageProps, getImageSrc } from "./image";

export interface SpecialProps {
  title: string;
  text: string;
  href: string;
  background: ImageProps["name"];
}

export function Special({
  title,
  text,
  href,
  background,
}: SpecialProps): JSX.Element {
  return (
    <Link
      className="cursor-pointer  grid grid-flow-row auto-rows-max gap-y-2"
      href={href}
    >
      <Image name={background} />
      <Text variant="medium-primary" mono uppercase bold>
        {title}
      </Text>
      <Text variant="small-primary">{text}</Text>
      <Button variant="tertiary" label="weiterlesen" />
    </Link>
  );
}
