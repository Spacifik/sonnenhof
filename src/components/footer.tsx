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
        <MediaIconWrapper>
          <a
            href="https://www.instagram.com/michelhotel/"
            className="fab fa-instagram"
          />
        </MediaIconWrapper>
        <MediaIconWrapper>
          <a
            href="https://twitter.com/michelhotels"
            className="fab fa-twitter"
          />
        </MediaIconWrapper>

        <MediaIconWrapper>
          <a
            href="https://www.facebook.com/michelhotel"
            className="fab fa-facebook-f"
          />
        </MediaIconWrapper>

        <MediaIconWrapper>
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
}: React.PropsWithChildren<{ className?: string }>): JSX.Element {
  return (
    <div
      className={`${className} md:hover:brightness-150 cursor-pointer rounded-full flex items-center justify-center text-primary-regular
      text-2xl w-12 h-12 
      xl:text-3xl w-14 h-14
      2xl:text-4xl  w-20 h-16
      `}
    >
      {children}
    </div>
  );
}
