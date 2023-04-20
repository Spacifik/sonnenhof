import React from "react";
import { Text } from "./text";

export interface FooterProps {
  phone: string;
  email: string;
  links: { label: string; onClick: Callback<void> }[];
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
          <a key={link.label} onClick={() => link.onClick?.()}>
            <Text variant="small">{link.label}</Text>
          </a>
        ))}
      </div>
    </footer>
  );
}
