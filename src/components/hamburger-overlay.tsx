import Link from "next/link";
import { Text } from "./text";
import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  TwitterIcon,
} from "./media-icons";
import { MewsForm } from "./mews-form";

export function HamburgerOverlay(): JSX.Element {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-center lg:justify-space-around h-full">
      <div className="basis-[40%] shrink flex justify-between flex-col pl-10 xl:pl-20">
        <div className="hidden md:flex" />
        <div className="flex flex-col gap-3">
          <Link className="cursor-pointer" href={"/gallery"}>
            <Text variant="small-primary">Standort</Text>
          </Link>

          <Link className="cursor-pointer" href={"/gallery"}>
            <Text variant="small-primary">Gallerie</Text>
          </Link>

          <Link className="cursor-pointer" href={"/career"}>
            <Text variant="small-primary">Karriere</Text>
          </Link>

          <Link className="cursor-pointer" href={"/contact"}>
            <Text variant="small-primary">Kontakt</Text>
          </Link>
        </div>
        <div className="flex my-10">
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
          <TikTokIcon />
        </div>
      </div>
      <div className="basis-[50%] grow justify-center flex flex-col pl-10 md:pl-0 h-full">
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-0">
          <MewsForm addDefaultDates>
            <button
              className="lg:border-r-2 pe-2 me-2 border-primary-500 xl:pe-4 xl:me-4 cursor-pointer"
              type="submit"
            >
              <Text variant="tiny-primary" mono uppercase bold noWrap addHover>
                Zimmer buchen
              </Text>
            </button>
          </MewsForm>
          <div className="lg:border-r-2  pe-2 me-2 border-primary-500 xl:pe-4 xl:me-4 cursor-pointer">
            <Text variant="tiny-primary" mono uppercase bold noWrap addHover>
              Tisch reservieren
            </Text>
          </div>
          <div className="cursor-pointer">
            <Link href={"/rooms"}>
              <Text variant="tiny-primary" mono uppercase bold noWrap addHover>
                Gutscheine
              </Text>
            </Link>
          </div>
        </div>
        <br />
        <ul className="">
          <OverlayListItem>
            <a href="https://blog.michelhotel-sonnenhof.de/">
              <Text variant="big-primary" mono uppercase light noWrap addHover>
                Blog
              </Text>
            </a>
          </OverlayListItem>
          <OverlayListItem>
            <Link href={"/rooms"}>
              <Text variant="big-primary" mono uppercase light noWrap addHover>
                Zimmer & suiten
              </Text>
            </Link>
          </OverlayListItem>
          <OverlayListItem>
            <Link href={"/bar"}>
              <Text variant="big-primary" mono uppercase light noWrap addHover>
                Bar
              </Text>
            </Link>
          </OverlayListItem>
          <OverlayListItem>
            <Link href={"/spa"}>
              <Text variant="big-primary" mono uppercase light noWrap addHover>
                Spa & Gesundheit
              </Text>
            </Link>
          </OverlayListItem>
          <OverlayListItem>
            <Link href={"/events"}>
              <Text variant="big-primary" mono uppercase light noWrap addHover>
                Meetings & Events
              </Text>
            </Link>
          </OverlayListItem>
          <OverlayListItem>
            <Link href={"/gym"}>
              <Text variant="big-primary" mono uppercase light noWrap addHover>
                Gym & Outdoor
              </Text>
            </Link>
          </OverlayListItem>
        </ul>
      </div>
    </div>
  );
}

function OverlayListItem({
  children,
}: React.PropsWithChildren<{}>): JSX.Element {
  return <li className="py-2 xl:py-3">{children}</li>;
}
