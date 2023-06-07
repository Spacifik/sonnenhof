import React from "react";

export function PageSection({
  children,
}: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <section className="flex flex-col gap-7 md:gap-10 xl:gap-16 2xl:gap-20 m-3 md:m-5 pt-3 md:pt-5 lg:pt-10 2xl:pt-16 pb-3 2xl:pb-10 lg:m-10 xl:m-auto lg:max-w-[80vw] xl:max-w-[70vw] 2xl:max-w-[60vw]">
      {children}
    </section>
  );
}
