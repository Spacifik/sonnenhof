import React from "react";
import { Text } from "./text";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  TwitterIcon,
} from "./media-icons";
import { BackgroundImage } from "./image";

export interface FooterProps {
  phone: string;
  email: string;
  links: { label: string; href: string }[];
}

export function Footer({ phone, email, links }: FooterProps): JSX.Element {
  return (
    <footer className="font-mono w-full px-6 py-10 flex flex-col gap-10 bg-black min-h-15vh md:px-9 md:py-13 md:gap-16">
      <div
        className={`flex flex-col px-10 pb-5 gap-8  w-full h-auto 
            md:flex-row md:px-16 md:pb-10  md:gap-12
         
            lg:gap-16
            xl:gap-20  xl:px-32  xl:pb-20
           2xl:gap-24 2xl:px-40 2xl:pb-24
           3xl:gap-28
            `}
      >
        <Link
          className="cursor-pointer grow "
          href={"https://blog.michelhotel-sonnenhof.de/#about"}
        >
          <BackgroundImage name="location">
            <Text variant="medium-primary" mono uppercase addHover>
              Standort
            </Text>
          </BackgroundImage>
        </Link>

        <Link
          className="cursor-pointer grow"
          href={"https://blog.michelhotel-sonnenhof.de/#our-clients"}
        >
          <BackgroundImage name="gallery">
            <Text variant="medium-primary" mono uppercase addHover>
              Gallerie
            </Text>
          </BackgroundImage>
        </Link>

        <Link className="cursor-pointer grow" href={"/career"}>
          <BackgroundImage name="career">
            <Text variant="medium-primary" mono uppercase addHover>
              Karriere
            </Text>
          </BackgroundImage>
        </Link>

        <Link
          className="cursor-pointer grow"
          href={"https://www.michel-hotels.com/contact-us"}
          target="_blank"
        >
          <BackgroundImage name="contact">
            <Text variant="medium-primary" mono uppercase addHover>
              Kontakt
            </Text>
          </BackgroundImage>
        </Link>
      </div>
      <div>
        <div className="flex flex-row gap-3">
          <Text variant="small-primary">Kontakt</Text>
          <a href={`tel:${phone}`}>
            <Text variant="small-primary">{phone}</Text>
          </a>
        </div>
        <a href={`mailto:${email}`}>
          <Text variant="small-primary">{email}</Text>
        </a>
      </div>
      <div className="flex gap-3 md:gap-5">
        <InstagramIcon className="align-center justify-center" />
        <TwitterIcon className="align-center justify-center" />
        <FacebookIcon className="align-center justify-center" />
        <TikTokIcon className="align-center justify-center" />
      </div>
      <div className="flex justify-around flex-col md:flex-row gap-3 md:gap-0">
        {links.map((link) =>
          link.href.startsWith(`https://`) ? (
            <ExternalLink key={link.label} {...link} />
          ) : (
            <InternalLink key={link.label} {...link} />
          )
        )}
      </div>
    </footer>
  );
}

function ExternalLink({
  label,
  href,
}: {
  label: string;
  href: string;
}): JSX.Element {
  function Label(): JSX.Element {
    return (
      <Text variant="small-primary" uppercase mono>
        {label}
      </Text>
    );
  }

  return (
    <>
      <a className="cursor-pointer hidden md:block" href={href} target="_blank">
        <Label />
      </a>
      <a className="cursor-pointer md:hidden" href={href}>
        <Label />
      </a>
    </>
  );
}

function InternalLink({
  label,
  href,
}: {
  label: string;
  href: string;
}): JSX.Element {
  return (
    <Link href={href} className="cursor-pointer">
      <Text variant="small-primary" uppercase mono>
        {label}
      </Text>
    </Link>
  );
}
