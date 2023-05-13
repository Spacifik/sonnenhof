import React from "react";
import { Text } from "./text";
import Link from "next/link";

export interface FooterProps {
  phone: string;
  email: string;
  links: { label: string; href: string }[];
}

export function Footer({ phone, email, links }: FooterProps): JSX.Element {
  return (
    <footer className="font-mono w-full px-6 py-10 flex flex-col gap-10 bg-black min-h-15vh md:px-9 md:py-13 md:gap-16">
      <div>
        <div className="flex flex-row gap-3">
          <Text variant="small-primary">Contact us</Text>
          <a href={`tel:${phone}`}>
            <Text variant="small-primary">{phone}</Text>
          </a>
        </div>
        <a href={`mailto:${email}`}>
          <Text variant="small-primary">{email}</Text>
        </a>
      </div>
      <div className="flex gap-3 md:gap-5">
        <MediaIconWrapper className={"instagram-icon"}>
          <a
            href="https://www.instagram.com/michelhotel/"
            className="fab fa-instagram"
          />
        </MediaIconWrapper>
        <MediaIconWrapper className={"bg-[#55ACEE]"}>
          <a
            href="https://twitter.com/michelhotels"
            className="fab fa-twitter"
          />
        </MediaIconWrapper>

        <MediaIconWrapper className={"bg-[#3B5998]"}>
          <a
            href="https://www.facebook.com/michelhotel"
            className="fab fa-facebook-f"
          />
        </MediaIconWrapper>

        <MediaIconWrapper className="bg-white bg-opacity-20">
          <a
            href="https://www.tiktok.com/@michelhotel"
            className="fab fa-tiktok "
          />
        </MediaIconWrapper>
      </div>
      <div className="flex justify-around flex-col md:flex-row gap-3 md:gap-0">
        {links.map((link) =>
          link.href.startsWith(`https://`) ? (
            <a key={link.label} href={link.href} className="cursor-pointer">
              <Text variant="small-primary" uppercase mono>
                {link.label}
              </Text>
            </a>
          ) : (
            <Link key={link.label} href={link.href} className="cursor-pointer">
              <Text variant="small-primary" uppercase mono>
                {link.label}
              </Text>
            </Link>
          )
        )}
      </div>
    </footer>
  );
}

function MediaIconWrapper({
  className,
  children,
}: React.PropsWithChildren<{ className: string }>): JSX.Element {
  return (
    <div
      className={`${className} cursor-pointer w-12 h-12 text-2xl md:w-16 md:h-16 md:text-4xl rounded-full flex items-center justify-center text-white`}
    >
      {children}
    </div>
  );
}
