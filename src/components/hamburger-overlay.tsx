import Link from "next/link";
import { Text } from "./text";
import React from "react";

export function HamburgerOverlay(): JSX.Element {
  return (
    <div>
      <div className="flex">
        <div className="border-r-2 pe-2 me-2 border-primary-regular xl:pe-4 xl:me-4">
          <Text variant="tiny-primary" mono uppercase bold>
            Zimmer buchen
          </Text>
        </div>
        <div className="border-r-2  pe-2 me-2 border-primary-regular xl:pe-4 xl:me-4">
          <Text variant="tiny-primary" mono uppercase bold>
            Tisch reservieren
          </Text>
        </div>
        <div>
          <Link href={"/rooms"}>
            <Text variant="tiny-primary" mono uppercase bold>
              Gutscheine
            </Text>
          </Link>
        </div>
      </div>
      <br />
      <ul className="">
        <OverlayListItem>
          <a href="https://blog.michelhotel-sonnenhof.de/">
            <Text variant="big-primary" mono uppercase light>
              Blog
            </Text>
          </a>
        </OverlayListItem>
        <OverlayListItem>
          <Link href={"/rooms"}>
            <Text variant="big-primary" mono uppercase light>
              Zimmer & suiten
            </Text>
          </Link>
        </OverlayListItem>
        <OverlayListItem>
          <Link href={"/bar"}>
            <Text variant="big-primary" mono uppercase light>
              Bar
            </Text>
          </Link>
        </OverlayListItem>
        <OverlayListItem>
          <Link href={"/spa"}>
            <Text variant="big-primary" mono uppercase light>
              Spa & Gesundheit
            </Text>
          </Link>
        </OverlayListItem>
        <OverlayListItem>
          <Link href={"/events"}>
            <Text variant="big-primary" mono uppercase light>
              Meetings & Events
            </Text>
          </Link>
        </OverlayListItem>
        <OverlayListItem>
          <Link href={"/gym"}>
            <Text variant="big-primary" mono uppercase light>
              Gym & Outdoor
            </Text>
          </Link>
        </OverlayListItem>
      </ul>
    </div>
  );
}

function OverlayListItem({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return <li className="py-2 xl:py-3">{children}</li>
}