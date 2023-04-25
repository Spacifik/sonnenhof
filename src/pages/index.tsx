/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Inter } from "next/font/google";
import { Section } from "@sonnenhof/components/section";
import { Layout } from "@sonnenhof/components/layout";
import { Text } from "@sonnenhof/components/text";
import { Image } from "@sonnenhof/components/image";
import { Special } from "@sonnenhof/components/special";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <div
        id="overlay-root"
        className="absolute top-0 left-0 h-screen w-full"
      ></div>
      <Layout>
        <main className="flex min-h-screen flex-col items-center scrollbar-hide bg-black">
          <iframe
            src="https://customer-mpt8p3umq4r630uj.cloudflarestream.com/e2c0d8fe33b9c367e67c0e6a713c9539/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-mpt8p3umq4r630uj.cloudflarestream.com%2Fe2c0d8fe33b9c367e67c0e6a713c9539%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
            className="z-10 object-cover max-h-90vh h-full w-full inset-0 absolute border-none"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          ></iframe>
          <div className="md:flex md:flex-wrap">
            <Section
              hint="zimmer & suiten"
              title="rubin | saphir | diamond"
              text="147 Zimmer und Suiten mit wundervoller Aussicht und Balkon in einem ausgefallenen Design"
              background="rooms"
              buttons={[]}
            />

            <Section
              hint="Events & Konferenzen"
              title="business | events"
              text="270m² Eventfläche mit modernster Technik"
              background="events"
              buttons={[]}
            />

            <Section
              hint="Pool und Thermalbad"
              title="indoor | outdoor"
              text="Exklusiver Innen- und Außenpool mit Massagebereich"
              background="pool"
              buttons={[]}
            />

            <Section
              hint="Wellness & Spa"
              title="Face | Body"
              text="Luxoriöser SPA Bereich mit Sauna, Eis-Lounge, Dampfbad und Massagezentrum"
              background="wellness"
              buttons={[]}
            />

            <Section
              hint="Ausflüge & Incentives"
              title="wald | natur | historie"
              text="25.000 Hektar Wald-Nationalpark & staatlich anerkannter Kurort"
              background="activities"
              buttons={[]}
            />

            <Section
              hint="Breakfast/Lunch & Fine dining"
              title="Wildbachklamm | the fine"
              text="Lichtdurchflutetes Restaurant mit exklusiver Fine Dining Area"
              background="dining"
              buttons={[]}
            />
          </div>
          <br />
          <div className="flex px-10 pt-10 pb-5 md:px-16 md:pt-16 md:pb-10 w-full">
            <Text variant="medium-primary" mono uppercase bold>
              Specials
            </Text>
          </div>
          <div className="flex flex-col px-10 pb-5 gap-8 md:flex-row md:px-16 md:pb-10  md:gap-12">
            <Special
              title="wedding package"
              text="Erleben Sie einen unvergesslichen Tag"
              background="event1"
              href="/wedding"
            />
            <Special
              title="sport package"
              text="Gehen Sie mit uns ans Limit"
              background="sport"
              href="/sport"
            />
            <Special
              title="city cruise"
              text="Städtetrip mit Führung"
              background="city"
              href="/city-cruise"
            />
          </div>
        </main>
      </Layout>
    </>
  );
}
