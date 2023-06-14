import { useIsMediumOrBigger } from "@sonnenhof/utils/use-is-medium-or-bigger";
import React from "react";
import { PageSection } from "./page-section";
import { Text } from "./text";


export function PageSectionThirdWrapper({
  children,
}: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <div className="flex flex-col lg:flex-row gap-3 mt-5 lg:mt-0 lg:p-12 2xl:p-28 mx-w-[2200px] m-auto">
      {children}
    </div>
  );
}

export function PageSectionThird({
  grow,
  children,
}: React.PropsWithChildren<{ grow?: boolean }>): JSX.Element {
  const isMediumOrBigger = useIsMediumOrBigger();
  return isMediumOrBigger ? (
    <div
      className={`flex flex-col ${
        grow ? "grow" : ""
      } basis-[33.3333%] m-3 pt-3 md:pt-5 lg:pt-10 2xl:pt-16 pb-3 2xl:pb-8`}
    >
      {children}
    </div>
  ) : (
    <PageSection>{children}</PageSection>
  );
}

export function PageSectionThirdHeader({
  children,
}: {
  children: string;
}): JSX.Element {
  const isMediumOrBigger = useIsMediumOrBigger();
  return isMediumOrBigger ? (
    <Text variant="medium-primary" mono uppercase>
      {children}
    </Text>
  ) : (
    <Text variant="huge-primary" mono uppercase>
      {children}
    </Text>
  );
}
