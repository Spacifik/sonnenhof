/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import { Button, ButtonProps } from "./button";
import { Text } from "./text";
import { Image, ImageProps, getImageSrc } from "./image";
import { Minus, Plus } from "iconoir-react";
import React from "react";
import { useIsMediumOrBigger } from "@sonnenhof/utils/use-is-medium-or-bigger";
import { MewsForm } from "./mews-form";

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
  const mediumOrBigger = useIsMediumOrBigger();
  console.log(mediumOrBigger);
  const [open, setOpen] = React.useState(mediumOrBigger);
  React.useEffect(() => {
    setOpen(() => mediumOrBigger);
  }, [mediumOrBigger]);

  return (
    <div
      className={`grow relative p-6 md:p-16 lg:px-60 md:basis-1/2 md:min-h-60vh bg-black marker:hidden `}
    >
      <MewsForm addDefaultDates>
        <div className={`flex ${open ? `pb-3 md:pb-5 lg:pb-8` : ""}`}>
          <Text light variant="big-primary">
            {summary}
          </Text>
          {!mediumOrBigger ? (
            <>
              <span className="grow" />
              {open ? (
                <Minus
                  className="text-primary-regular"
                  onClick={() => {
                    setOpen(() => false);
                  }}
                />
              ) : (
                <Plus
                  className="text-primary-regular"
                  onClick={() => {
                    setOpen(() => true || mediumOrBigger);
                  }}
                />
              )}
            </>
          ) : null}
        </div>
        {open && (
          <div className="flex flex-col gap-3 md:gap-6">
            <Image className="max-h-40vh" name={image} />
            <Text variant="medium-primary">{details}</Text>
            <ul>
              {items.map((item, index) => (
                <li key={index} className="mb-2 ">
                  <Text variant="small-primary">{`- ${item}`}</Text>
                </li>
              ))}
            </ul>

            <div className="flex w-full gap-3 md:gap-6">
              {buttons.map((button, index) => (
                <div key={index} className="">
                  <Button {...button} submit />
                </div>
              ))}
            </div>
          </div>
        )}
      </MewsForm>
    </div>
  );
}
