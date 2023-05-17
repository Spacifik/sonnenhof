/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { EmptyPage } from "@sonnenhof/components/empty-page";
import { Image } from "@sonnenhof/components/image";
import { Layout } from "@sonnenhof/components/layout";
import { Text } from "@sonnenhof/components/text";
import { useIsMediumOrBigger } from "@sonnenhof/utils/use-is-medium-or-bigger";

export default function Page(): JSX.Element {
  const mediumOrBigger = useIsMediumOrBigger();

  return (
    <Layout>
      <main>
        <div className="flex flex-col min-h-60vh gap-5 md:gap-8 lg:gap-12 bg-black p-3 md:p-5 lg:p-10">
          <div className="flex flex-col gap-1">
            <Text variant="tiny-primary" mono uppercase>
              Ausflüge & Incentives
            </Text>
            <Text variant="big-primary">Wald | Natur | Historie</Text>
          </div>
          <Text variant="small-primary">
            25.000 Hektar Wald-Nationalpark & staatlich anerkannter Kurort
          </Text>

          <Image
            name="activities"
            className="md:max-h-[50vh] md:max-w-[50vw] m-auto"
          />

          <Text variant="small-primary">
            Willkommen im Michelhotel im bayrischen Wald, einem 25.000 Hektar
            großen Wald-Nationalpark und staatlich anerkannten Kurort. Hier
            erleben Sie unberührte Natur, atemberaubende Landschaften und eine
            Vielzahl an Freizeitmöglichkeiten. Das Hotel selbst ist eine wahre
            Perle inmitten dieser malerischen Oase. Eingebettet in den
            Wald-Nationalpark, bietet das Hotel eine einzigartige Erfahrung für
            Naturfreunde und Erholungssuchende.
          </Text>

          <Text variant="small-primary">
            Der Wald erstreckt sich über eine Fläche von 25.000 Hektar und lädt
            zu ausgiebigen Spaziergängen, Wanderungen und Fahrradtouren ein.
            Genießen Sie die frische Waldluft, lauschen Sie dem Zwitschern der
            Vögel und lassen Sie den Alltagsstress hinter sich. Die Landschaft
            des bayrischen Waldes ist von einer beeindruckenden Schönheit
            geprägt. Majestätische Berge, klare Seen und idyllische Täler
            erstrecken sich vor Ihren Augen. Ob bei einer Wanderung durch dichte
            Wälder, einem Ausflug zu den glitzernden Wasserfällen oder einer
            Bootsfahrt auf einem der Seen - hier werden Sie von der Vielfalt der
            Natur fasziniert sein. Das Hotel selbst ist ein wahres Juwel. Das
            edle Ambiente und die stilvolle Einrichtung sorgen für ein
            luxuriöses Erlebnis.
          </Text>

          <Text variant="small-primary">
            Die Zimmer bieten einen Rückzugsort voller Komfort und Eleganz. Von
            einigen Zimmern aus genießen Sie einen spektakulären Ausblick auf
            die umliegende Landschaft. Lassen Sie sich von erstklassigem Service
            verwöhnen und entspannen Sie im Wellnessbereich des Hotels, der
            Ihnen eine Vielzahl von wohltuenden Anwendungen bietet.
          </Text>

          <Text variant="small-primary">
            Ob Sie Ruhe und Entspannung suchen oder aktive Outdoor-Aktivitäten
            bevorzugen, im Hotel im bayrischen Wald werden Sie fündig. Erkunden
            Sie die Umgebung, entdecken Sie die Schönheit der Natur und tanken
            Sie neue Energie. Dieser 25.000 Hektar große Wald-Nationalpark und
            Kurort verspricht Ihnen eine unvergessliche Auszeit inmitten
            unberührter Natur und malerischer Landschaften.
          </Text>
        </div>
      </main>
    </Layout>
  );
}
