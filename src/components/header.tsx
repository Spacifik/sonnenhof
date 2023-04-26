/* eslint-disable @next/next/no-img-element */
import { useOverlay } from "@sonnenhof/overlay/overlay-context";
import { ArrowLeft, Menu } from "iconoir-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HamburgerOverlay } from "./hamburger-overlay";
import { getThemeColor } from "./theme-color";
import { Logo } from "./logo";

export function Header(): JSX.Element {
  const router = useRouter();
  const { showOverlay } = useOverlay();
  return (
    <header className="w-full z-20 sticky bg-black top-0">
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
        <div className="flex w-44 md:w-56 mx-3 md:mx-8">
          <Logo className="h-full w-auto" />
        </div>
        <div
          className={`cursor-pointer h-1/2 ${getThemeColor(
            "primary"
          )} flex-grow justify-end flex p-3 md:p-5`}
          onClick={() => showOverlay(<HamburgerOverlay />)}
        >
          <Menu />
        </div>
      </div>
    </header>
  );
}
