/* eslint-disable @next/next/no-img-element */
import { useOverlay } from "@sonnenhof/overlay/overlay-context";
import { LogoNoTextSvg } from "@sonnenhof/svg/logo-no-text";
import { LogoTextSvg } from "@sonnenhof/svg/logo-text";
import { ArrowLeft, Menu } from "iconoir-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HamburgerOverlay } from "./hamburger-overlay";
import { getThemeColor } from "./theme-color";
import Image from "next/image";
import { Logo } from "./logo";

export function Header(): JSX.Element {
  const router = useRouter();
  const { showOverlay } = useOverlay();
  return (
    <header className="sticky w-full top-0 z-30 relative">
      {router.route !== "/" ? (
        <Link
          className={`cursor-pointer absolute top-3 left-3 h-1/2 ${getThemeColor(
            "primary"
          )}`}
          href={"/"}
        >
          <ArrowLeft />
        </Link>
      ) : null}
      <div
        className={`cursor-pointer absolute top-3 right-3 h-1/2 ${getThemeColor(
          "primary"
        )}`}
        onClick={() => showOverlay(<HamburgerOverlay />)}
      >
        <Menu />
      </div>
      <div className="flex w-44 md:w-56 mx-3 md:mx-8 absolute">
        <Logo className="h-full w-auto" />
      </div>
    </header>
  );
}
