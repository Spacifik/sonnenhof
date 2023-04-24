import { useOverlay } from "@sonnenhof/overlay/overlay-context";
import { LogoNoTextSvg } from "@sonnenhof/svg/logo-no-text";
import { LogoTextSvg } from "@sonnenhof/svg/logo-text";
import { ArrowLeft, Menu } from "iconoir-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HamburgerOverlay } from "./hamburger-overlay";
import { getThemeColor } from "./theme-color";

export function Header(): JSX.Element {
  const router = useRouter();
  const { showOverlay } = useOverlay();
  return (
    <header className="sticky w-full h-0 top-0 bg-white h-16 z-30 p-3 relative">
      {router.route !== "/" ? (
        <Link
          className={`cursor-pointer absolute top-1/4 h-1/2 ${getThemeColor(
            "primary"
          )}`}
          href={"/"}
        >
          <ArrowLeft />
        </Link>
      ) : null}
      <div
        className={`cursor-pointer absolute top-1/4 h-1/2 right-3 ${getThemeColor(
          "primary"
        )}`}
        onClick={() => showOverlay(<HamburgerOverlay />)}
      >
        <Menu />
      </div>
      <div className="flex h-9  max-h-full  max-w-full justify-center">
        <LogoNoTextSvg className="h-full ml-3 mr-3 " />
        <LogoTextSvg className="h-full mr-3  " />
      </div>
    </header>
  );
}
