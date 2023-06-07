import { EmptyPage } from "@sonnenhof/components/empty-page";
import { PageTopImage } from "@sonnenhof/components/image";
import { Layout } from "@sonnenhof/components/layout";
import { Text } from "@sonnenhof/components/text";
import { TextAsideMediumOrLarger } from "@sonnenhof/components/text-aside-medium-or-larger";

export default function Page(): JSX.Element {
  return (
    <Layout>
      <main>
        <div>
          <PageTopImage name="spa-overview" />
        </div>
        <div className="flex flex-col min-h-60vh gap-5 md:gap-8 lg:gap-12 bg-black p-3 md:p-5 lg:p-10">
          <div className="flex flex-col gap-1">
            <Text variant="tiny-primary" mono uppercase>
              Wellness & Spa
            </Text>
            <Text variant="big-primary">Face | Body</Text>
          </div>
          <Text variant="small-primary">
            Luxoriöser SPA Bereich mit Sauna, Eis-Lounge, Dampfbad und
            Massagezentrum
          </Text>

          <TextAsideMediumOrLarger right imageName="wellness">
            Unser luxuriöser Spa-Bereich erwartet Sie mit einer Vielzahl von
            erstklassigen Einrichtungen. Beginnen Sie Ihre Wellnessreise mit
            einem Besuch unserer Sauna, wo Sie die wohltuende Wärme genießen und
            Ihre Sinne beleben können. Nach einem erholsamen Saunagang können
            Sie sich in unserer erfrischenden Eis-Lounge abkühlen und Ihre Haut
            revitalisieren.
          </TextAsideMediumOrLarger>

          <Text variant="small-primary">
            Im Dampfbad können Sie in eine Welt der Entspannung eintauchen und
            Ihre Muskeln lockern. Die feucht-warme Luft wirkt sich wohltuend auf
            Ihren Körper aus und hilft Ihnen, den Alltagsstress abzuschütteln.
            Lassen Sie Ihre Sorgen einfach davonschmelzen und genießen Sie die
            heilsame Wirkung des Dampfbads.
          </Text>

          <Text variant="small-primary">
            Unser Massagezentrum bietet Ihnen eine Vielzahl von wohltuenden
            Behandlungen, die von erfahrenen Therapeuten durchgeführt werden.
            Von entspannenden Ganzkörpermassagen bis hin zu gezielten
            Gesichtsanwendungen - hier steht Ihr Wohlbefinden im Mittelpunkt.
            Spüren Sie, wie sich Ihre Verspannungen lösen und Ihr Geist zur Ruhe
            kommt.
          </Text>

          <TextAsideMediumOrLarger imageName="wellness">
            Ob Sie ein strahlendes Gesicht wünschen oder Ihrem Körper eine
            Auszeit gönnen möchten, unser Wellness- und Spa-Bereich bietet Ihnen
            die besten Voraussetzungen für Ihr Wohlbefinden. Tauchen Sie ein in
            eine Welt der Entspannung und lassen Sie den Alltag hinter sich.
          </TextAsideMediumOrLarger>

          <Text variant="small-primary">
            Gönnen Sie sich das Beste und erleben Sie unvergessliche Momente im
            Wellness- und Spa-Bereich unseres Michelhotels im bayrischen Wald.
            Hier finden Sie die perfekte Balance zwischen Erholung und Genuss,
            während Sie von Kopf bis Fuß verwöhnt werden.
          </Text>
        </div>
      </main>
    </Layout>
  );
}
