import React from "react";
import { Text } from "./text";

interface FooterProps {
  phone: string;
  email: string;
  links: { label: string; onClick: Callback<void> }[];
}

export function Footer({ phone, email, links }: FooterProps): JSX.Element {
  return (
    <footer>
      <Text variant="huge">Contact us</Text>
      <a href={`tel:${phone}`}>
        <Text variant="huge">{phone}</Text>
      </a>
      <a href={`mailto:${email}`}>
        <Text variant="huge">{email}</Text>
      </a>
      <div className="footer-links">
        {links.map((link) => (
          <a key={link.label} onClick={() => link.onClick?.()}>
            <Text variant="small">{link.label}</Text>
          </a>
        ))}
      </div>
    </footer>
  );
}
