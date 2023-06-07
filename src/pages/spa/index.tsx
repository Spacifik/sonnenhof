import { Button } from "@sonnenhof/components/button";
import { PageTopImage, getImageSrc } from "@sonnenhof/components/image";
import { Layout } from "@sonnenhof/components/layout";
import { PageSection } from "@sonnenhof/components/page-section";
import { Text } from "@sonnenhof/components/text";

export default function Page(): JSX.Element {
  return (
    <Layout>
      <main className="bg-black">
        <div>
          <PageTopImage name="spa-overview" />
        </div>
        <PageSection>
          <Text variant="huge-primary" mono uppercase>
            Erhabenheit im bayrischen Wald
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
              label="Spa Broschüre"
              variant="tertiary"
              onClick={() => alert("Broschüre nicht verfügbar")}
            />
          </div>
        </PageSection>
        <div
          className="h-full w-full bg-cover bg-center after:content-none after:h-full after:w-full after:absolute after:inset-0"
          style={{
            backgroundImage: `url(${getImageSrc("spa-dark-background")})`,
          }}
        >
          <div className="bg-black/90 p-2 md:p-5 lg:p-10 xl:p-20">
            <PageSection>
              <Text variant="huge-primary" mono uppercase>
                Spa
              </Text>
              <Text variant="small-primary">
                Unser Spa ist ein Ort zum Entspannen und Regenerieren, mit
                Hamam, Dampfbad sowie Whirlpool und Sauna mit Blick auf den
                bayrischen Wald. Alle angebotenen Wellness Treatments werden
                dank eines hervorragenden Spa Teams zu einem relaxenden Erlebnis
                besonderer Art.
              </Text>
              <Text variant="small-primary">
                Lassen Sie es sich und Ihren Lieben gut gehen, ob als Hotelgäste
                oder als Day Spa Besucher.
              </Text>
            </PageSection>
          </div>
        </div>
      </main>
    </Layout>
  );
}
