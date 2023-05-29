/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { Inter } from "next/font/google";
import { Section } from "@sonnenhof/components/section";
import { Layout } from "@sonnenhof/components/layout";
import { Text } from "@sonnenhof/components/text";
import { BackgroundImage, Image } from "@sonnenhof/components/image";
import { Special } from "@sonnenhof/components/special";
import { Stream } from "@cloudflare/stream-react";
import Link from "next/link";
import { useAspectRatioBox } from "@sonnenhof/utils/use-aspect-ratio-box";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const paddingBottom = useAspectRatioBox();
  return (
    <>
      <Layout>
        <main className="flex min-h-[75vh] flex-col items-center scrollbar-hide bg-black w-full">
          <div className={`relative w-full h-0 z-0`} style={{ paddingBottom }}>
            <Stream
              src="61c703f87842eae49b847d53c6b37a89"
              loop
              autoplay
              muted
              className="absolute w-full h-full object-cover"
            />
          </div>
          <div className="md:flex md:flex-wrap 3xl:max-w-[75vw] w-full">
            <Section
              applyMinHeight
              hint="zimmer & suiten"
              title="Royals"
              text="147"
              details="147 stilvolle Zimmer und Suiten mit Aussicht und Balkonen. Moderner Komfort trifft auf Ästhetik."
              background="rooms"
              buttons={[
                {
                  label: "Hineinschauen",
                  variant: "tertiary",
                  href: "/rooms",
                },
              ]}
            />

            <Section
              applyMinHeight
              hint="Events & Konferenzen"
              title="business"
              text="270"
              details="270m² Eventfläche. Modernste Technik ermöglicht Präsentationen und Feiern. Erfahrene Planer gestalten Events individuell."
              background="events"
              buttons={[
                {
                  label: "Hineinschauen",
                  variant: "tertiary",
                  href: "/events",
                },
              ]}
            />

            <Section
              applyMinHeight
              hint="indoor & outdoor"
              title="Pool"
              text="28"
              details="Pool und angrenzender Massagebereich verwöhnen und fördern das Wohlbefinden. Ein stilvolles Ambiente für unvergessliche Erlebnisse."
              background="pool"
              buttons={[
                {
                  label: "Hineinschauen",
                  variant: "tertiary",
                  href: "/pool",
                },
              ]}
            />

            <Section
              applyMinHeight
              hint="Wellness"
              title="Spa"
              text="90"
              details="Wohltuende Sauna, erfrischende Eis-Lounge, verwöhnendes Massagezentrum. Eine unvergleichliche Kombination."
              background="wellness"
              buttons={[
                {
                  label: "Hineinschauen",
                  variant: "tertiary",
                  href: "/wellness",
                },
              ]}
            />

            <Section
              applyMinHeight
              hint="Ausflüge & Incentives"
              title="Natur"
              text="25.000"
              details="25.000 Hektar Wald-Nationalpark und Kurort. Unberührte Natur, atemberaubende Landschaften, zahlreiche Freizeitmöglichkeiten."
              background="activities"
              buttons={[
                {
                  label: "Hineinschauen",
                  variant: "tertiary",
                  href: "/activities",
                },
              ]}
            />

            <Section
              applyMinHeight
              hint="Breakfast/Lunch & Fine dining"
              title="Plates"
              text="200"
              details="Exquisite Speisen, erlesene Weine, stilvolles Ambiente, raffinierte Küche. Unvergessliches Erlebnis und aufmerksames Personal."
              background="dining"
              buttons={[
                {
                  label: "Hineinschauen",
                  variant: "tertiary",
                  href: "/dining",
                },
              ]}
            />
          </div>
          <br />
          <div
            className={`
          flex px-10 pt-10 pb-5 w-full
           md:px-16 md:pt-16 md:pb-10
           xl:px-32 xl:pt-16 xl:pb-10
          2xl:px-40 2xl:pb-20
          `}
          >
            <Text variant="medium-primary" mono uppercase bold>
              Specials
            </Text>
          </div>
          <div
            className={`
          grid grid-cols-1 grid-rows-1
          gap-y-20 px-10 pb-16 gap-8
          md:grid-cols-3  md:px-16 md:pb-10  md:gap-12
           lg:gap-20
           xl:gap-24  xl:px-32  xl:pb-20u
          2xl:gap-28 2xl:px-40 2xl:pb-24
          3xl:gap-32`}
          >
            <Special
              title="Hochzeitspaket"
              text="Erleben Sie einen unvergesslichen Tag"
              background="event1"
              href="/wedding"
            />
            <Special
              title="Sportpaket"
              text="Gehen Sie mit uns ans Limit"
              background="sport"
              href="/sport"
            />
            <Special
              title="Stadtführung"
              text="Städtetrip mit Führung"
              background="city"
              href="/city-cruise"
            />
          </div>
          <div
            className={`flex flex-col px-10 pb-5 gap-8  w-full h-auto 
            md:flex-row md:px-16 md:pb-10  md:gap-12
         
            lg:gap-16
            xl:gap-20  xl:px-32  xl:pb-20
           2xl:gap-24 2xl:px-40 2xl:pb-24
           3xl:gap-28
            `}
          >
            <Link
              className="cursor-pointer grow  md:hover:brightness-150"
              href={"/gallery"}
            >
              <BackgroundImage name="location">
                <Text variant="medium-primary" mono uppercase>
                  Standort
                </Text>
              </BackgroundImage>
            </Link>

            <Link
              className="cursor-pointer grow md:hover:brightness-150"
              href={"/gallery"}
            >
              <BackgroundImage name="gallery">
                <Text variant="medium-primary" mono uppercase>
                  Gallerie
                </Text>
              </BackgroundImage>
            </Link>

            <Link
              className="cursor-pointer grow md:hover:brightness-150"
              href={"/career"}
            >
              <BackgroundImage name="career">
                <Text variant="medium-primary" mono uppercase>
                  Karriere
                </Text>
              </BackgroundImage>
            </Link>

            <Link
              className="cursor-pointer grow md:hover:brightness-150"
              href={"/contact"}
            >
              <BackgroundImage name="contact">
                <Text variant="medium-primary" mono uppercase>
                  Kontakt
                </Text>
              </BackgroundImage>
            </Link>
          </div>
        </main>
      </Layout>
    </>
  );
}
