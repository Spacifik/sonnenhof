import React from "react";
import { getImageSrc } from "./image";

export function PageSectionBackgroundImageWrapper({
  children,
}: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <div
      className="h-full w-full bg-cover bg-center after:content-none after:h-full after:w-full after:absolute after:inset-0"
      style={{
        backgroundImage: `url(${getImageSrc("spa-dark-background")})`,
      }}
    >
      {children}
    </div>
  );
}
