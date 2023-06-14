import { useIsMediumOrBigger } from "@sonnenhof/utils/use-is-medium-or-bigger";
import React from "react";
import { PageSection } from "./page-section";
import { Text } from "./text";

export function OpeningHoursList({
  children,
}: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <dl className="grid grid-cols-12 gap-2 lg:block max-w-[400px] xl:min-w-full mt-8 lg:mt-0">
      {children}
    </dl>
  );
}

export function OpeningHoursLabel({
  children,
}: {
  children: string;
}): JSX.Element {
  return (
    <dt className="lg:pt-8 lg:pb-2 xl:pt-12 col-span-5">
      <Text variant="medium-primary">{children}</Text>
    </dt>
  );
}

export function OpeningHoursTime({
  children,
}: {
  children: string;
}): JSX.Element {
  return (
    <dd className="inline-block lg:pl-3 xl:pl-10  col-span-2">
      <Text variant="medium-primary">{children}</Text>
    </dd>
  );
}

export function OpeningHoursTimeSeparator(): JSX.Element {
  return (
    <dd className="inline-block lg:pl-3 text-center xl:pl-10  col-span-1">
      <Text variant="medium-primary">-</Text>
    </dd>
  );
}


export function OpeningHoursHourLabel(): JSX.Element {
  return (
    <dd className="inline-block lg:pl-2 col-span-2">
      <Text variant="medium-primary">Uhr</Text>
    </dd>
  );
}