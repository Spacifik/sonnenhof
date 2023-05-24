/* eslint-disable @next/next/no-img-element */
import { useOverlay } from "@sonnenhof/overlay/overlay-context";
import { ArrowLeft, Calendar, Menu, Minus, Plus, User } from "iconoir-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HamburgerOverlay } from "./hamburger-overlay";
import { getThemeColor } from "./theme-color";
import { Logo } from "./logo";
import DatePicker from "react-datepicker";
import React, { useId } from "react";
import { useImmer } from "use-immer";
import { Text } from "./text";
import { Button } from "./button";
import { de } from "date-fns/locale";
import { v4 } from "uuid";
import { Stream } from "@cloudflare/stream-react";
import { useAspectRatioBox } from "@sonnenhof/utils/use-aspect-ratio-box";

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

const TextWithValue = React.forwardRef(
  (
    {
      value,
      onClick,
      name,
    }: {
      value?: string;
      onClick?: Callback<void>;
      name?: string;
    },
    ref
  ) => {
    return (
      <div
        onClick={() => onClick?.()}
        className="flex gap-2 cursor-pointer hover:brightness-150"
      >
        <Text variant="tiny-primary">{value as string}</Text>
        <input
          ref={ref as any}
          className="hidden"
          name={name}
          value={parseDate(value as string)}
          readOnly
        />
        <Calendar className="h-4 m-auto" />
      </div>
    );
  }
);
TextWithValue.displayName = "TextWithValue";

function PersonInput({
  name,
  value,
  onChange,
}: {
  value: number;
  name: "mewsAdultCount" | "mewsChildCount";
  onChange: Callback<number>;
}): JSX.Element {
  const adultInputId = useId();
  const childrenInputId = useId();
  const id = name === "mewsAdultCount" ? adultInputId : childrenInputId;
  const min = name === "mewsAdultCount" ? 1 : 0;
  const label = name === "mewsAdultCount" ? "Erwachsene" : "Kinder";
  return (
    <div
      className="flex flex-row gap-4 items-center"
      onClick={(e) => e.stopPropagation()}
    >
      <label htmlFor={id}>
        <Text variant="tiny-primary">{label}</Text>
      </label>
      <div className="grow" />
      <div className="flex items-center justify-center">
        <button
          className="text-primary-regular p-2"
          onClick={() => onChange(value - 1)}
          type="button"
        >
          <Minus />
        </button>
        <input
          className="max-w-[40px] text-center bg-transparent"
          id={id}
          type="number"
          name={name}
          min={min}
          value={value}
          readOnly
        />
        <button
          className="text-primary-regular p-2"
          onClick={() => onChange(value + 1)}
          type="button"
        >
          <Plus />
        </button>
      </div>
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
    to: (() => {
      const today = new Date();
      today.setDate(new Date().getDate() + 7);
      return today;
    })(),
  });
  const [showPersonInput, setShowPersonInput] = React.useState(false);
  const [adults, setAdults] = useImmer(2);
  const [children, setChildren] = useImmer(0);
  // track if the user explicitly set how many people they want to
  // book. If they did, then the label was recomputed at least once
  // as such, the value will be truthy (> 0) and we can go to page 2
  // of the mews
  const personInputDirty = React.useRef(-1);
  const guestLabel = React.useMemo(() => {
    const label =
      adults > 1 ? `${adults} Erwachsene` : `${adults} Erwachsene*r`;
    personInputDirty.current++;
    if (children === 0) {
      return label;
    } else if (children === 1) {
      return `${label}, ${children} Kind`;
    } else {
      return `${label}, ${children} Kinder`;
    }
  }, [adults, children]);
  return (
    <header
      className={`sticky top-0 z-30 bg-black ${
        router.route === "/" ? "md:h-0" : ""
      }`}
    >
      <div
        className="flex flex-row justify-center top-0 items-center bg-black"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 1), 80%, rgba(0, 0, 0, 0.01))",
        }}
      >
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
        <Link
          className="flex w-44 md:w-50 mx-3 lg:mx-6 max-h-[25vh]"
          href={`/`}
        >
          <Logo className="h-full w-auto" />
        </Link>

        <div className="hidden md:flex grow" />
        <form
          className="hidden md:flex md:gap-3 justify-end items-center max-h-[200px]"
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
          <input
            className="hidden"
            name="mewsRoute"
            value={personInputDirty.current ? "rooms" : ""}
            readOnly
          />
          <div className="max-h-1/2">
            <DatePicker
              selected={dates.from}
              onChange={(newDate) => {
                if (newDate) {
                  setDates((currentDates) => {
                    currentDates.from = newDate;

                    if (currentDates.to && +newDate > +currentDates.to) {
                      const copy = new Date(newDate);
                      copy.setDate(copy.getDate() + 1);
                      currentDates.to = copy;
                    }
                  });
                }
              }}
              dateFormat="dd.MM.yyyy"
              name="mewsStart"
              locale={de}
              customInput={<TextWithValue />}
              minDate={React.useMemo(() => new Date(), [])}
            />
          </div>
          <div className="max-h-1/2">
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
              minDate={React.useCallback(() => {
                const today = new Date();
                today.setDate(dates.from.getDate() + 1);
                return today;
              }, [dates.from])()}
            />
          </div>
          <div className="max-h-1/2">
            <div
              className="gap-2 cursor-pointer border p-2 border-primary-regular text-primary-regular relative whitespace-nowrap hidden lg:flex  hover:brightness-150"
              onClick={() => setShowPersonInput((shown) => !shown)}
            >
              <Text variant="tiny-primary">{guestLabel}</Text>
              <input className="hidden" readOnly />
              <User className="h-4 m-auto" />
              {showPersonInput ? (
                <div className="absolute top-[50px] left-0 border border-primary-regular p-4 flex gap-4 flex-col bg-black">
                  <PersonInput
                    name="mewsAdultCount"
                    value={adults}
                    onChange={(newAdults) => setAdults(newAdults)}
                  />
                  <PersonInput
                    name="mewsChildCount"
                    value={children}
                    onChange={(newChildren) => setChildren(newChildren)}
                  />
                </div>
              ) : null}
            </div>
          </div>

          <div className="grow-0 shrink-0 basis-[100px] max-h-1/2 h-1/2">
            <Button label="Jetzt buchen" variant="primary" submit />
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
