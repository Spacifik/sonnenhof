/* eslint-disable jsx-a11y/alt-text */
import { exhaustiveCheck } from "@sonnenhof/utils/exhaustive-check";
import { useAspectRatioBox } from "@sonnenhof/utils/use-aspect-ratio-box";

/* eslint-disable @next/next/no-img-element */
export interface ImageProps {
  name:
    | "events"
    | "event-hybrid-meetings"
    | "event-corporate"
    | "event-press"
    | "event-presentation"
    | "location"
    | "city"
    | "event1"
    | "dining"
    | "gallery"
    | "sport"
    | "activities"
    | "pool"
    | "spa-overview"
    | "spa-icebath"
    | "spa-dark-background"
    | "rooms"
    | "rooms-overview"
    | "rooms-comfort-king"
    | "contact"
    | "wellness"
    | "career";
  className?: string;
}

const baseUrl: string = "https://imagedelivery.net";
const accountHash: string = "gV_YLJoGO2jaxKnnl4mKxg";
const variant: string = "public";

export function Image({ name, className }: ImageProps): JSX.Element {
  return <img className={className} src={getImageSrc(name)} alt={name} />;
}

export function PageTopImage({ name, className }: ImageProps): JSX.Element {
  return (
    <Image
      name={name}
      className={(className ?? "").concat(
        "bg-cover bg-no-repeat object-cover w-full min-h-screen max-h-[100svh] center"
      )}
    />
  );
}

export function BackgroundImage({
  name,
  className,
  children,
}: React.PropsWithChildren<ImageProps>): JSX.Element {
  return (
    <div
      className={`${className} w-full min-h-40vh bg-cover bg-center flex items-center justify-center md:min-h-30vh`}
      style={{ backgroundImage: `url(${getImageSrc(name)})` }}
    >
      {children}
    </div>
  );
}

export function getImageSrc(name: ImageProps["name"]): string {
  return `${baseUrl}/${accountHash}/${getImageHashFor(name)}/${variant}`;
}

function getImageHashFor(name: ImageProps["name"]): string {
  switch (name) {
    case "events":
      return "97644631-2c0d-4d84-0376-a3ebfae9a200";
    case "event-hybrid-meetings":
      return "b4bd46d8-5106-4074-6fea-efce86b2c900";
    case "event-corporate":
      return "de946142-9835-46c4-af20-c58db2144d00";
    case "event-press":
      return "66fdff13-4748-4c72-e0fc-0c6e75812800";
    case "event-presentation":
      return "ec2f648e-bf8e-4074-be81-01a2fe1ac800";
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
      return "54bc294e-0b28-4a84-5008-824a4af03000";
    case "rooms-overview":
      return "200148e0-7f27-4359-3837-535eb26fc900";
    case "rooms-comfort-king":
      return "a9b9cf04-5ba4-4b3b-84ac-037ac1188000";
    case "contact":
      return "0972ead8-3b64-4fa7-7668-86cc3722b500";
    case "career":
      return "9bc14109-f98f-455f-89d4-79aad5597200";
    case "wellness":
      return "90a31e90-e41c-4ceb-76a9-99a85cb76000";
    case "spa-overview":
      return "b7acbcec-f9c1-4bad-b78c-39a72f39a900";
    case "spa-icebath":
      return "041405fa-ed42-4546-12d3-34911e86d600";
    case "spa-dark-background":
      return "1f81b917-e4af-41eb-2b42-9f882eee0e00";
    default:
      exhaustiveCheck(name);
      return "";
  }
}
