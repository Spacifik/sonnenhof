import { EmptyPage } from "@sonnenhof/components/empty-page";
import { Layout } from "@sonnenhof/components/layout";
import { Text } from "@sonnenhof/components/text";
import { TextAsideMediumOrLarger } from "@sonnenhof/components/text-aside-medium-or-larger";

export default function Page(): JSX.Element {
  return (
    <Layout>
      <main>
        <div className="flex flex-col min-h-60vh gap-5 md:gap-8 lg:gap-12 bg-black p-3 md:p-5 lg:p-10">
          <div className="flex flex-col gap-1">
            <Text variant="tiny-primary" mono uppercase>
              Pool & Thermalbad
            </Text>
            <Text variant="big-primary">Indoor | Outdoor</Text>
          </div>
          <Text variant="small-primary">
            Exclusiver Innen- und Außenpool mit Massagebereich
          </Text>

          <TextAsideMediumOrLarger
            right
            imageName="pool"
            text="Unser Hotel verfügt über einen beeindruckenden Innen- und Außenpool, die exklusiv für unsere Gäste zugänglich sind. Im Innenbereich erwartet Sie ein stilvoll gestalteter Poolbereich, der zum Schwimmen und Entspannen einlädt. Tauchen Sie ein in das klare, erfrischende Wasser und lassen Sie den Alltagsstress hinter sich."
          />

          <Text variant="small-primary">
            Für diejenigen, die die frische Luft und die natürliche Umgebung
            genießen möchten, steht Ihnen unser Außenpool zur Verfügung. Umgeben
            von der malerischen Landschaft des bayrischen Waldes, können Sie
            hier unter freiem Himmel schwimmen und die herrliche Aussicht auf
            die umliegenden Berge und Wälder genießen.
          </Text>

          <Text variant="small-primary">
            Ein besonderes Highlight ist der Massagebereich, der sowohl im
            Innen- als auch im Außenbereich des Pools verfügbar ist. Lassen Sie
            sich von erfahrenen Masseuren verwöhnen und spüren Sie, wie sich
            Ihre Verspannungen lösen und Ihre Energie wieder auflädt. Hier
            können Sie vollkommen abschalten und in eine Welt der Entspannung
            eintauchen.
          </Text>

          <TextAsideMediumOrLarger
            imageName="pool"
            text="Unser Edelhotel im bayrischen Wald bietet Ihnen somit nicht nur luxuriöse Unterkünfte und erstklassigen Service, sondern auch ein exquisites Pool- und Thermalbaderlebnis. Genießen Sie die perfekte Kombination aus Wellness, Erholung und der natürlichen Schönheit der Umgebung."
          />

          <Text variant="small-primary">
            Ob Sie einen aktiven Tag im bayrischen Wald verbracht haben oder
            einfach nur Ruhe und Erholung suchen, unser Pool- und
            Thermalbadbereich steht Ihnen jederzeit zur Verfügung. Tauchen Sie
            ein, schwimmen Sie ein paar Runden oder lassen Sie sich von den
            Massagedüsen verwöhnen - bei uns finden Sie die perfekte Balance
            zwischen Entspannung und Aktivität.
          </Text>
        </div>
      </main>
    </Layout>
  );
}
