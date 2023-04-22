import React from "react";
import { Text } from "./text";
import Link from "next/link";

export interface FooterProps {
  phone: string;
  email: string;
  links: { label: string; href: string; }[];
}

export function Footer({ phone, email, links }: FooterProps): JSX.Element {
  return (
    <footer className="font-mono w-full uppercase px-3 pt-3 pb-2 md:px-9 md:pt-9 flex flex-col gap-3">
      <Text variant="big">Contact us</Text>
      <a href={`tel:${phone}`}>
        <Text variant="big">{phone}</Text>
      </a>
      <a href={`mailto:${email}`}>
        <Text variant="big">{email}</Text>
      </a>
      <div className="footer-links flex md:justify-around gap-3 md:gap-0">
        {links.map((link) => (
          <Link key={link.label} href={link.href}>
            <Text variant="small">{link.label}</Text>
          </Link>
        ))}
      </div>
    </footer>
  );
}
