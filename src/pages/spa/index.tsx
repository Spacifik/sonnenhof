import { Button } from "@sonnenhof/components/button";
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
        <div className="flex flex-col min-h-60vh gap-5 md:gap-8 lg:gap-12 bg-black px-3 md:px-5 lg:px-10 py-20 md:py-32">
          <Text variant="huge-primary" mono uppercase>
            Wellness & Spa
          </Text>
          <Text variant="small-primary">
            Der Sonnenhof Spa ist ein echtes Hideaway mit urbanem Komfort. Vor
            der atemberaubenden Kulisse des bayrischen Waldes wird Ihr
            Aufenthalt zu einer erholsamen Wellnessauszeit für Sie und Ihren
            Körper. Entdecken Sie die einzigartige Vielfalt entspannender
            Treatments, wie unsere besondere Michelhotel Behandlung. Auch Gäste,
            die nicht bei uns übernachten sind eingeladen, den Spa als Day Spa
            zu nutzen. Und wenn Sie eine kleine Abwechslung beim Relaxen
            brauchen, steht im Kühlschrank gutes, bayrisches Bier kalt – Cheers!
          </Text>
          <div className="pt-3">
            <Button
              label="Broschüre"
              variant="tertiary"
              onClick={() => alert("Broschüre nicht verfügbar")}
            />
          </div>
        </div>
        <div>
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
