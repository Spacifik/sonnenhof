import { exhaustiveCheck } from "@sonnenhof/utils/exhaustive-check";

/* eslint-disable @next/next/no-img-element */
interface ImageProps {
  name:
    | "events"
    | "location"
    | "city"
    | "event1"
    | "dining"
    | "gallery"
    | "sport"
    | "activities"
    | "pool"
    | "rooms"
    | "contact"
    | "career";
  className?: string;
}

const baseUrl: string = "https://imagedelivery.net";
const accountHash: string = "gV_YLJoGO2jaxKnnl4mKxg";
const variant: string = "public";

export function Image({ name, className }: ImageProps): JSX.Element {
  return (
    <img
      className={className}
      src={`${baseUrl}/${accountHash}/${getImageHashFor(name)}/${variant}`}
      alt={name}
    />
  );
}

function getImageHashFor(name: ImageProps["name"]): string {
  switch (name) {
    case "events":
      return "97644631-2c0d-4d84-0376-a3ebfae9a200";
    case "location":
      return "1be9506e-d7fb-42bf-8c7c-65f3fd8bc800";
    case "city":
      return "c4d0d673-de5a-499f-8749-b34ea0a93100";
    case "event1":
      return "85f27a17-282f-4945-4196-694d93a3ec00";
    case "dining":
      return "9bdf44fc-5032-455c-0d40-655dee79b900";
    case "gallery":
      return "9bdf44fc-5032-455c-0d40-655dee79b900";
    case "sport":
      return "0ccbc308-a119-4b9d-d052-c802aaa2fb00";
    case "activities":
      return "df35a89d-cd98-421a-4626-ed72ca75a300";
    case "pool":
      return "fcf44452-85d5-4626-488f-a062cfb92600";
    case "rooms":
      return "d2e6641a-7b95-4bfe-78e1-26ed549eb500";
    case "contact":
      return "0972ead8-3b64-4fa7-7668-86cc3722b500";
    case "career":
      return "9bc14109-f98f-455f-89d4-79aad5597200";
      default:
          exhaustiveCheck(name);
          return "";
  }
}
