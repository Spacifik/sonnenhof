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
import { de } from "date-fns/locale";

/**
 * Transforms date from dd.MM.yyyy  to YYYY-MM-DD
 */
function parseDate(inputDate: string): string {
  let parts = inputDate.split(".");
  let date = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0])); // note: months are 0-based in JavaScript

  let year = date.getFullYear();
  let month = ("0" + (date.getMonth() + 1)).slice(-2); // add leading zero if needed
  let day = ("0" + date.getDate()).slice(-2); // add leading zero if needed

  return `${year}-${month}-${day}`;
}

function TextWithValue({
  value,
  onClick,
  name,
}: {
  value?: string;
  onClick?: Callback<void>;
  name?: string;
}): JSX.Element {
  return (
    <div onClick={() => onClick?.()} className="flex gap-2 cursor-pointer">
      <Text variant="tiny-primary">{value as string}</Text>
      <input
        className="hidden"
        name={name}
        value={parseDate(value as string)}
        readOnly
      />
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
    <header className="w-full z-30 sticky bg-black top-0 h-25vh">
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
          <div className="h-1/2  p-3 grow md:grow-0 md:p-5">
            <ArrowLeft className="invisible" />
          </div>
        )}
        <Link className="flex w-44 md:w-50 mx-3 lg:mx-6" href={`/`}>
          <Logo className="h-full w-auto" />
        </Link>

        <div className="hidden md:flex grow" />
        <form
          className="hidden md:flex md:gap-3 md:pt-3 justify-end"
          method="GET"
          action="https://app.mews.com/distributor/9c4dca19-3942-46a3-8f37-affe006f4062"
          target="_blank"
        >
          <input
            className="hidden"
            name="mewsCityId"
            value="c4d8e6d4-da08-40f5-b95e-affe006ea0ef"
            readOnly
          />
          <div>
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
              name="mewsStart"
              locale={de}
              customInput={<TextWithValue />}
            />
          </div>
          <div>
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
              name="mewsEnd"
              locale={de}
              customInput={<TextWithValue />}
            />
          </div>
          <div className="grow-0 shrink-0 basis-[100px]">
            <Button label="Book now" variant="primary" submit />
          </div>
        </form>

        <div
          className={`cursor-pointer h-1/2 ${getThemeColor(
            "primary"
          )} flex-grow justify-end flex p-3 md:p-5 md:grow-0`}
          onClick={() => showOverlay(<HamburgerOverlay />)}
        >
          <Menu />
        </div>
      </div>
    </header>
  );
}
