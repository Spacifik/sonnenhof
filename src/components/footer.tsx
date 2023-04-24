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
    <footer className="font-mono w-full px-3 pt-3 pb-2 md:px-9 md:pt-9 flex flex-col gap-10 bg-black">
      <div>
        <div className="flex flex-row gap-3">
          <Text variant="medium-primary">Contact us</Text>
          <a href={`tel:${phone}`}>
            <Text variant="medium-primary">{phone}</Text>
          </a>
        </div>
        <a href={`mailto:${email}`}>
          <Text variant="medium-primary">{email}</Text>
        </a>
      </div>
      <div className="flex md:justify-around gap-3 md:gap-0">
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="cursor-pointer">
            <Text variant="small-primary" uppercase mono>
              {link.label}
            </Text>
          </Link>
        ))}
      </div>
    </footer>
  );
}
