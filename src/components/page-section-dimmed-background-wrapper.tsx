import React from "react";

export function PageSectionDimmedBackgroundWrapper({
  children,
}: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <div className="bg-black/90 p-2 md:p-5 lg:p-10 xl:p-20">{children}</div>
  );
}
