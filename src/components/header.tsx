/* eslint-disable @next/next/no-img-element */
import { useOverlay } from "@sonnenhof/overlay/overlay-context";
import { ArrowLeft, Calendar, Menu } from "iconoir-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HamburgerOverlay } from "./hamburger-overlay";
import { getThemeColor } from "./theme-color";
import { Logo } from "./logo";
import DatePicker from "react-datepicker";
import React from "react";
import { useImmer } from "use-immer";
import { Text } from "./text";
import { Button } from "./button";

function TextWithValue({
  value,
  onClick,
}: {
  value?: string;
  onClick?: Callback<void>;
}): JSX.Element {
  return (
    <div onClick={() => onClick?.()} className="flex gap-2">
      <Text variant="tiny-primary">{value as string}</Text>
      <Calendar className="h-4 m-auto" />
    </div>
  );
}

export function Header(): JSX.Element {
  const router = useRouter();
  const { showOverlay } = useOverlay();
  const [dates, setDates] = useImmer<{
    from: Date;
    to: Date;
  }>({
    from: new Date(),
    to: new Date(),
  });
  return (
    <header className="w-full z-30 sticky bg-black top-0">
      <div className="flex flex-row">
        {router.route !== "/" ? (
          <Link
            className={`cursor-pointer h-1/2 ${getThemeColor(
              "primary"
            )} p-3 md:p-5`}
            href={"/"}
          >
            <ArrowLeft />
          </Link>
        ) : (
          <div className="h-1/2  p-3 md:p-5">
            <ArrowLeft className="invisible" />
          </div>
        )}
        <div className="flex w-44 md:w-56 mx-3 md:mx-6">
          <Logo className="h-full w-auto" />
        </div>

        <div className="hidden md:flex md:gap-3 md:pt-3">
          <DatePicker
            selected={dates.from}
            onChange={(newDate) => {
              if (newDate) {
                setDates((currentDates) => {
                  currentDates.from = newDate;

                  if (currentDates.to && +newDate > +currentDates.to) {
                    currentDates.to = newDate;
                  }
                });
              }
            }}
            dateFormat="dd.MM.yyyy"
            locale="de"
            customInput={<TextWithValue />}
          />
          <DatePicker
            selected={dates.to}
            onChange={(newDate) => {
              if (newDate) {
                setDates((currentDates) => {
                  currentDates.to = newDate;

                  if (currentDates.from && +newDate < +currentDates.from) {
                    currentDates.from = newDate;
                  }
                });
              }
            }}
            dateFormat="dd.MM.yyyy"
            locale="de"
            customInput={<TextWithValue />}
          />

          <div className="w-full">
            <Button label="Book now" variant="primary" />
          </div>
        </div>

        <div
          className={`cursor-pointer h-1/2 ${getThemeColor(
            "primary"
          )} flex-grow justify-end flex p-3 md:p-5 `}
          onClick={() => showOverlay(<HamburgerOverlay />)}
        >
          <Menu />
        </div>
      </div>
    </header>
  );
}
