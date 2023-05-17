/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import { Button, ButtonProps } from "./button";
import { Text } from "./text";
import { Image, ImageProps, getImageSrc } from "./image";
import { Minus, Plus } from "iconoir-react";
import React from "react";

export interface RoomDetailsProps {
  summary: string;
  details: string;
  items: string[];
  image: ImageProps["name"];
  buttons: [ButtonProps & { href?: string }, ButtonProps & { href?: string }];
}

export function RoomDetails({
  details,
  summary,
  items,
  image,
  buttons,
}: RoomDetailsProps): JSX.Element {
  const [mediumOrBigger, setMediumOrBigger] = React.useState(
    window.matchMedia(`(min-width: 768px)`).matches
  );
  React.useEffect(() => {
    const subscriber = () =>
      setMediumOrBigger(() => window.matchMedia(`(min-width: 768px)`).matches);
    window.addEventListener("resize", subscriber);
    return () => window.removeEventListener("resize", subscriber);
  }, []);

  const [open, setOpen] = React.useState(mediumOrBigger);

  return (
    <div
      className={`grow relative p-6 md:p-16 md:basis-1/2 md:min-h-60vh bg-black marker:hidden `}
      onClick={(evt) => {
        setOpen((current) => !current || mediumOrBigger);
        evt.stopPropagation();
      }}
    >
      <div className={`flex ${open ? `pb-3` : ""}`}>
        <Text variant="medium-primary">{summary}</Text>
        {!mediumOrBigger ? (
          <>
            <span className="grow" />
            {open ? (
              <Minus className="text-white" />
            ) : (
              <Plus className="text-white" />
            )}
          </>
        ) : null}
      </div>
      {open && (
        <div className="flex flex-col gap-3 md:gap-6">
          <Image name={image} />
          <Text variant="small-primary">{details}</Text>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <Text variant="tiny-primary">{`- ${item}`}</Text>
              </li>
            ))}
          </ul>

          <div className="flex w-full gap-3 md:gap-6">
            {buttons.map((button, index) => (
              <div key={index} className="grow">
                <Button {...button} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
