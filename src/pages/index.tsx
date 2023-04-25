/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Inter } from "next/font/google";
import { Section } from "@sonnenhof/components/section";
import { Layout } from "@sonnenhof/components/layout";
import { Text } from "@sonnenhof/components/text";
import { BackgroundImage, Image } from "@sonnenhof/components/image";
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
            className="z-10 object-cover h-screen w-full inset-0 border-none"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          ></iframe>
          <div className="md:flex md:flex-wrap">
            <Section
              hint="zimmer & suiten"
              title="rubin | saphir | diamond"
              text="147 Zimmer und Suiten mit wundervoller Aussicht und Balkon in einem ausgefallenen Design"
              details="In unserem Luxushotel erwarten Sie 147 stilvolle Zimmer und Suiten mit atemberaubender Aussicht und privaten Balkonen. Unser ausgefallenes Design vereint modernen Komfort mit zeitgenössischer Ästhetik. Bei uns genießen Sie erstklassige Annehmlichkeiten wie ein Gourmet-Restaurant, einen Wellnessbereich und spannende Outdoor-Aktivitäten, die Ihren Aufenthalt unvergesslich machen."
              background="rooms"
              buttons={[]}
            />

            <Section
              hint="Events & Konferenzen"
              title="business | events"
              text="270m² Eventfläche mit modernster Technik"
              details="Unser Hotel bietet auf einer großzügigen Eventfläche von 270m² den idealen Rahmen für Veranstaltungen jeglicher Art. Die modernste Technik, die in diesen Räumlichkeiten zur Verfügung steht, ermöglicht einwandfreie Präsentationen, Konferenzen oder private Feierlichkeiten. Unsere erfahrenen Veranstaltungsplaner unterstützen Sie dabei, Ihre Events individuell und professionell zu gestalten. Die stilvolle Atmosphäre und das ansprechende Design sorgen für ein angenehmes Ambiente, während unser aufmerksames Servicepersonal dafür sorgt, dass Ihre Gäste rundum zufrieden sind."
              background="events"
              buttons={[]}
            />

            <Section
              hint="Pool und Thermalbad"
              title="indoor | outdoor"
              text="Exklusiver Innen- und Außenpool mit Massagebereich"
              details="Unser Hotel verfügt über exklusive Innen- und Außenpools, die Entspannung und Erholung bieten. Der angrenzende Massagebereich lädt zum Verwöhnen ein und trägt zum Wohlbefinden unserer Gäste bei. Genießen Sie das stilvolle Ambiente, die wohltuenden Wasserlandschaften und die professionellen Massagen für ein unvergessliches Erlebnis."
              background="pool"
              buttons={[]}
            />

            <Section
              hint="Wellness & Spa"
              title="Face | Body"
              text="Luxoriöser SPA Bereich mit Sauna, Eis-Lounge, Dampfbad und Massagezentrum"
              details="Unser luxuriöser SPA-Bereich bietet eine Vielfalt an Entspannungsmöglichkeiten: Genießen Sie die wohltuende Wärme der Sauna, erfrischen Sie sich in der Eis-Lounge, entspannen Sie im Dampfbad und lassen Sie sich im Massagezentrum verwöhnen. Diese Kombination sorgt für ein unvergleichliches Wellness-Erlebnis in stilvollem Ambiente."
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
