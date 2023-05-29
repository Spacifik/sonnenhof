/* eslint-disable @next/next/no-img-element */
import { ArrowLeft, Calendar, Menu, Minus, Plus, User } from "iconoir-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HamburgerOverlay } from "./hamburger-overlay";
import { getThemeColor } from "./theme-color";
import { Logo } from "./logo";
import React, { useId } from "react";
import { useImmer } from "use-immer";
import { Text, getVariantSize } from "./text";
import { Button } from "./button";
import { de } from "date-fns/locale";
import { MewsForm } from "./mews-form";
import { useDefaultBookingDates } from "@sonnenhof/utils/use-default-booking-dates";
import { parseDateToIso } from "@sonnenhof/utils/parse-date-to-iso";
import { useIsMediumOrBigger } from "@sonnenhof/utils/use-is-medium-or-bigger";
import { useOnClickOutside } from "@sonnenhof/utils/use-on-click-outside";
import { StyledDatepicker } from "./styled-datepicker";

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
        className="flex gap-2 cursor-pointer hover:text-primary-200 group"
      >
        <p
          className={`${getVariantSize("tiny")} ${getThemeColor(
            "primary"
          )} group-hover:text-primary-200`}
        >
          {value as string}
        </p>
        <input
          ref={ref as any}
          className="hidden"
          name={name}
          value={parseDateToIso(value as string)}
          readOnly
        />
        <Calendar className="h-4 m-auto hidden lg:block" />
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
      className="flex flex-row gap-4 items-center hover:text-primary-200"
      onClick={(e) => e.stopPropagation()}
    >
      <label htmlFor={id}>
        <p className={`${getVariantSize("tiny")} ${getThemeColor("primary")}`}>
          {label}
        </p>
      </label>
      <div className="grow" />
      <div className="flex items-center justify-center">
        <button
          className="text-primary-500 hover:text-primary-200 p-2"
          onClick={() => onChange(value - 1)}
          type="button"
        >
          <Minus />
        </button>
        <input
          className="max-w-[40px] text-center bg-transparent group-hover:text-primary-500 hover:text-primary-500"
          id={id}
          type="number"
          name={name}
          min={min}
          value={value}
          readOnly
        />
        <button
          className="text-primary-500 hover:text-primary-200 p-2"
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
  const { from, to } = useDefaultBookingDates();
  const [dates, setDates] = useImmer<{
    from: Date;
    to: Date;
  }>({
    from,
    to,
  });
  const [showPersonInput, setShowPersonInput] = React.useState(false);
  const ref = React.useRef(null);
  useOnClickOutside(ref, () => setShowPersonInput(false));
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
  const isMediumOrBigger = useIsMediumOrBigger();
  const headerRef = React.useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = React.useState("");
  React.useEffect(() => {
    if (headerRef.current !== null) {
      setHeaderHeight(
        () => window.getComputedStyle(headerRef.current as HTMLElement).height
      );
    }
  }, []);
  const dialogRef = React.useRef(null);
  return (
    <>
      <dialog
        ref={dialogRef}
        className="w-full h-full bg-black/50 backdrop:bg-black/75 flex items-center"
        onClick={() => (dialogRef.current as any)?.close()}
      >
        <HamburgerOverlay />
      </dialog>
      <header
        ref={headerRef}
        className={`sticky top-0 z-30 bg-black`}
        style={{ height: headerHeight !== "" ? 0 : undefined }}
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
            className={`flex w-44 mx-3 max-h-[25vh]  
            md:w-50 lg:mx-6
            xl:w-60
            3xl:w-72  `}
            href={`/`}
          >
            <Logo className="h-full w-auto" />
          </Link>

          <div className="hidden md:flex grow" />
          <MewsForm className="hidden md:flex md:gap-3 justify-end items-center max-h-[200px]">
            <input
              className="hidden"
              name="mewsRoute"
              value={personInputDirty.current ? "rooms" : ""}
              readOnly
            />
            <div className="max-h-1/2">
              <StyledDatepicker
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
              <StyledDatepicker
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
            <div className="max-h-1/2 min-w-[270px] hidden xl:block">
              <div
                className="gap-2 cursor-pointer border p-2 border-primary-500 hover:border-primary-200 text-primary-500 hover:text-primary-200 relative group whitespace-nowrap flex"
                onClick={() => setShowPersonInput((shown) => !shown)}
              >
                <div className="grow">
                  <Text variant="tiny-primary" addHover>
                    {guestLabel}
                  </Text>
                </div>
                <User className="h-4 m-auto" />
                {showPersonInput ? (
                  <div
                    ref={ref}
                    className="absolute cursor-auto top-[50px] left-0 border border-primary-500 hover:border-primary-200 p-4 flex gap-4 flex-col bg-black"
                  >
                    <PersonInput
                      name="mewsAdultCount"
                      value={adults}
                      onChange={(newAdults) =>
                        newAdults > 0 ? setAdults(newAdults) : undefined
                      }
                    />
                    <PersonInput
                      name="mewsChildCount"
                      value={children}
                      onChange={(newChildren) =>
                        newChildren >= 0 ? setChildren(newChildren) : undefined
                      }
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div className="grow-0 shrink-0 basis-[100px] max-h-1/2 h-1/2">
              <Button label="Jetzt buchen" variant="primary" submit />
            </div>
          </MewsForm>

          <div
            className={`cursor-pointer h-1/2 ${getThemeColor(
              "primary"
            )} flex-grow justify-end flex p-3 md:p-5 md:grow-0`}
            onClick={() => (dialogRef.current as any).showModal()}
          >
            <Menu />
          </div>
        </div>
      </header>
      {!isMediumOrBigger || (router.route !== "/" && headerHeight !== "") ? (
        <div
          className="w-full bg-black z-0 inset-0"
          style={{
            height: headerHeight,
          }}
        />
      ) : null}
    </>
  );
}
