/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Inter } from "next/font/google";
import { Section } from "@sonnenhof/components/section";
import { Layout } from "@sonnenhof/components/layout";
import { Text } from "@sonnenhof/components/text";
import { BackgroundImage, Image } from "@sonnenhof/components/image";
import { Special } from "@sonnenhof/components/special";
import { Stream } from "@cloudflare/stream-react";

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
          <div className="relative w-full h-full">
            <div className="inset-0 flex items-center justify-center max-h-75vh max-w-screen">
              <Stream
                src="e2c0d8fe33b9c367e67c0e6a713c9539"
                loop
                autoplay
                muted
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:flex md:flex-wrap">
            <Section
              hint="zimmer & suiten"
              title="rubin | saphir | diamond"
              text="147 Zimmer und Suiten mit wundervoller Aussicht und Balkon in einem ausgefallenen Design"
              details="In unserem Luxushotel bieten wir 147 stilvolle Zimmer und Suiten mit Aussicht und Balkonen. Moderner Komfort trifft auf Ästhetik. Genießen Sie user Gourmet-Restaurant, den Wellnessbereich und Outdoor-Aktivitäten."
              background="rooms"
              buttons={[
                {
                  label: "Peek inside",
                  variant: "tertiary",
                  href: "/rooms",
                },
              ]}
            />

            <Section
              hint="Events & Konferenzen"
              title="business | events"
              text="270m² Eventfläche mit modernster Technik"
              details="Unser Hotel hat 270m² Eventfläche für Veranstaltungen. Modernste Technik ermöglicht Präsentationen und Feiern. Erfahrene Planer gestalten Events individuell, ansprechendes Design und aufmerksames Personal inklusive."
              background="events"
              buttons={[
                {
                  label: "Peek inside",
                  variant: "tertiary",
                  href: "/events",
                },
              ]}
            />

            <Section
              hint="Pool und Thermalbad"
              title="indoor | outdoor"
              text="Exklusiver Innen- und Außenpool mit Massagebereich"
              details="Exklusive Innen- und Außenpools bieten Entspannung. Der qngrenzende Massagebereich verwöhnt und fördert das Wohlbefinden. Stilvolles Ambiente, wohltuende Wasserlandschaften und professionelle Massagen für unvergessliche Erlebnisse."
              background="pool"
              buttons={[
                {
                  label: "Peek inside",
                  variant: "tertiary",
                  href: "/pool",
                },
              ]}
            />

            <Section
              hint="Wellness & Spa"
              title="Face | Body"
              text="Luxoriöser SPA Bereich mit Sauna, Eis-Lounge, Dampfbad und Massagezentrum"
              details="Luxuriöser SPA-Bereich mit Entspannungsvielfalt: Wohltuende Sauna, erfrischende Eis-Lounge, entspannendes Dampfbad, verwöhnendes Massagezentrum. Unvergleichliches Wellness-Erlebnis in stilvollem Ambiente."
              background="wellness"
              buttons={[
                {
                  label: "Peek inside",
                  variant: "tertiary",
                  href: "/wellness",
                },
              ]}
            />

            <Section
              hint="Ausflüge & Incentives"
              title="wald | natur | historie"
              text="25.000 Hektar Wald-Nationalpark & staatlich anerkannter Kurort"
              details="Hotel im 25.000 Hektar Wald-Nationalpark und Kurort. Unberührte Natur, atemberaubende Landschaften, zahlreiche Freizeitmöglichkeiten. Erholung pur in malerischer Oase."
              background="activities"
              buttons={[
                {
                  label: "Peek inside",
                  variant: "tertiary",
                  href: "/activities",
                },
              ]}
            />

            <Section
              hint="Breakfast/Lunch & Fine dining"
              title="Wildbachklamm | the fine"
              text="Lichtdurchflutetes Restaurant mit exklusiver Fine Dining Area"
              details="Lichtdurchflutetes Restaurant mit Fine Dining Area. Exquisite Speisen, erlesene Weine, stilvolles Ambiente, raffinierte Küche. Unvergessliches Erlebnis und aufmerksames Personal."
              background="dining"
              buttons={[
                {
                  label: "Peek inside",
                  variant: "tertiary",
                  href: "/dining",
                },
              ]}
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
          <div className="flex flex-col px-10 pb-5 gap-8 md:flex-row md:px-16 md:pb-10  md:gap-12 w-full h-auto">
            <BackgroundImage name="location">
              <Text variant="medium-primary" mono uppercase>
                Standort
              </Text>
            </BackgroundImage>

            <BackgroundImage name="gallery">
              <Text variant="medium-primary" mono uppercase>
                Gallerie
              </Text>
            </BackgroundImage>

            <BackgroundImage name="career">
              <Text variant="medium-primary" mono uppercase>
                Karriere
              </Text>
            </BackgroundImage>

            <BackgroundImage name="contact">
              <Text variant="medium-primary" mono uppercase>
                Kontakt
              </Text>
            </BackgroundImage>
          </div>
        </main>
      </Layout>
    </>
  );
}
