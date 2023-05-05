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
    <div>
      <Image name={background} />
      <div className="flex flex-col pt-2 gap-2 md:gap-3 lg:gap-5">
        <Text variant="small-primary" mono uppercase bold>
          {title}
        </Text>
        <Text variant="small-primary">{text}</Text>
        <Link className="cursor-pointer" href={href}>
          <Button variant="tertiary" label="> weiterlesen" />
        </Link>
      </div>
    </div>
  );
}
