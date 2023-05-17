/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { EmptyPage } from "@sonnenhof/components/empty-page";
import { Image, ImageProps } from "@sonnenhof/components/image";
import { Layout } from "@sonnenhof/components/layout";
import { Text } from "@sonnenhof/components/text";
import { useIsMediumOrBigger } from "@sonnenhof/utils/use-is-medium-or-bigger";

function TextAsideMediumOrLarger({
  imageName,
  text,
}: {
  imageName: ImageProps["name"];
  text: string;
}): JSX.Element {
  const mediumOrBigger = useIsMediumOrBigger();
  const WrapperElement = mediumOrBigger
    ? ({ children }: React.PropsWithChildren<{}>) => (
        <aside className="flex flex-row-reverse">{children}</aside>
      )
    : ({ children }: React.PropsWithChildren<{}>) => <>{children}</>;
  return (
    <WrapperElement>
      <Image
        name={imageName}
        className="md:max-h-[50vh] md:max-w-[50vw] m-auto md:m-4 float-right "
      />
      <Text variant="small-primary">{text}</Text>
    </WrapperElement>
  );
}

export default function Page(): JSX.Element {
  return (
    <Layout>
      <main>
        <div className="flex flex-col min-h-60vh gap-5 md:gap-8 lg:gap-12 bg-black p-3 md:p-5 lg:p-10">
          <div className="flex flex-col gap-1">
            <Text variant="tiny-primary" mono uppercase>
              Events & Konferenzen
            </Text>
            <Text variant="big-primary">Business | Events</Text>
          </div>
          <Text variant="small-primary">
            270m² Eventfläche mit modernster Technik
          </Text>
          <TextAsideMediumOrLarger
            imageName="events"
            text="Herzlich willkommen zu unseren Events und Konferenzen im bayrischen Wald, in unserem exquisiten Edelhotel. Mit einer großzügigen Eventfläche von 270m² und modernster Technik bieten wir Ihnen den idealen Ort für Veranstaltungen aller Art."
          />
          <Text variant="small-primary">
            Unser Hotel ist stolz darauf, eine perfekte Kulisse für Ihre
            geschäftlichen oder privaten Anlässe zu bieten. Die Eventfläche
            wurde mit viel Liebe zum Detail gestaltet und lässt keine Wünsche
            offen. Mit modernster Technik ausgestattet, stehen Ihnen alle
            Möglichkeiten für Präsentationen, Tagungen oder Feierlichkeiten zur
            Verfügung. Wir stellen sicher, dass Sie über alle erforderlichen
            Ressourcen verfügen, um Ihr Event reibungslos ablaufen zu lassen.
          </Text>
          <Text variant="small-primary">
            Unsere erfahrenen Eventplaner stehen Ihnen zur Seite und helfen
            Ihnen bei der individuellen Gestaltung Ihrer Veranstaltung. Von der
            Auswahl des passenden Raumlayouts bis hin zur technischen
            Unterstützung - wir sorgen dafür, dass Ihre Veranstaltung ein voller
            Erfolg wird. Unser aufmerksames Personal kümmert sich um jeden
            einzelnen Gast und sorgt für einen reibungslosen Ablauf.
          </Text>
          <Text variant="small-primary">
            Neben der erstklassigen Eventfläche bietet unser Edelhotel im
            bayrischen Wald eine einzigartige Umgebung für Ihre Teilnehmer. Der
            malerische bayrische Wald mit seinen majestätischen Bergen und
            idyllischen Tälern schafft eine inspirierende Atmosphäre für Ihre
            Veranstaltung. In den Pausen können Ihre Gäste die frische Luft
            genießen und die natürliche Schönheit der Umgebung erkunden.
          </Text>
          <Text variant="small-primary">
            Nach einem erfolgreichen Tag voller Meetings und Konferenzen bietet
            unser Hotel luxuriöse Zimmer und erstklassige Annehmlichkeiten für
            Ihre Gäste. Entspannen Sie sich in unserem Wellnessbereich, genießen
            Sie kulinarische Köstlichkeiten in unserem Restaurant und lassen Sie
            den Tag in stilvollem Ambiente ausklingen.
          </Text>
          <Text variant="small-primary">
            Ganz gleich, ob Sie eine Konferenz, ein Seminar oder eine festliche
            Veranstaltung planen - unser Edelhotel im bayrischen Wald bietet
            Ihnen die ideale Kombination aus professionellen Eventmöglichkeiten
            und einer unvergleichlichen Umgebung. Lassen Sie uns gemeinsam Ihr
            Event zu einem unvergesslichen Erlebnis machen.
          </Text>
        </div>
      </main>
    </Layout>
  );
}
