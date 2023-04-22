import { LogoNoTextSvg } from "@sonnenhof/svg/logo-no-text";
import { LogoTextSvg } from "@sonnenhof/svg/logo-text";

export function Header(): JSX.Element {
  return (
    <header className="sticky w-full h-0 top-0 bg-white h-16 z-30 p-3">
      <div className="flex h-9  max-h-full  max-w-full justify-center">
        <LogoNoTextSvg className="h-full ml-3 mr-3 " />
        <LogoTextSvg className="h-full mr-3  " />
      </div>
    </header>
  );
}
