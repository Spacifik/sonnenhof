import { Button } from "@sonnenhof/components/button";
import { PageTopImage } from "@sonnenhof/components/image";
import { Layout } from "@sonnenhof/components/layout";
import { PageSection } from "@sonnenhof/components/page-section";
import { Text } from "@sonnenhof/components/text";

export default function Page(): JSX.Element {
  return (
    <Layout>
      <main className="bg-black pb-6 md:pb-10 lg:pb-16">
        <div>
          <PageTopImage name="pool" />
        </div>

        <PageSection>
          <Text variant="huge-primary" mono uppercase>
            Treiben lassen
          </Text>
          <Text variant="small-primary">
            Tauchen Sie ein in die erhabene Schönheit unseres Hotel-Pools, einer
            Oase der Ruhe und Exklusivität. Der Innenbereich strahlt mit seinem
            zauberhaften Spiel von Licht und Wasser eine stille Eleganz aus.
            Goldene Verzierungen und der sanfte Plätscher des Wassers auf
            polierten Steinen verleihen diesem Raum eine Atmosphäre von nobler
            Zurückhaltung. Im Außenbereich erwartet Sie ein prächtiger
            Infinity-Pool, umgeben von sorgfältig gepflegten Palmen und
            duftenden Blumen. Sein glitzerndes Wasser spiegelt den Himmel wider
            und verschmilzt nahtlos mit dem Horizont. Beide Bereiche verkörpern
            die perfekte Balance zwischen Luxus und Natürlichkeit und laden Sie
            ein, in einer Welt des raffinierten Komforts zu schwelgen.
          </Text>
          <div className="pt-3">
            <Button
              label="Pool Broschüre"
              variant="tertiary"
              onClick={() => alert("Broschüre nicht verfügbar")}
            />
          </div>
        </PageSection>

        
      </main>
    </Layout>
  );
}
