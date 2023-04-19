import { FooterProps } from "@sonnenhof/components/footer";

export const footer: FooterProps = {
  phone: "+123456789",
  email: "info@sonnenhof.de",
  links: ["career", "press", "agb", "impressum"].map((label) => ({
    label,
    onClick: () => alert(`clicked ${label}`),
  })),
};
