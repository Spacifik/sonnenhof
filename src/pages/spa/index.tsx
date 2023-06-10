import { Button } from "@sonnenhof/components/button";
import { PageTopImage, getImageSrc } from "@sonnenhof/components/image";
import { Layout } from "@sonnenhof/components/layout";
import { PageSection } from "@sonnenhof/components/page-section";
import { Text } from "@sonnenhof/components/text";
import { footer } from "@sonnenhof/data/footer/footer";
import { useIsMediumOrBigger } from "@sonnenhof/utils/use-is-medium-or-bigger";

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
          <div className="bg-black/75 p-2 md:p-5 lg:p-10 xl:p-20">
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

        <PageSectionWrapper>
          <CustomPageSection>
            <CustomPageSectionHeader>Öffnungszeiten</CustomPageSectionHeader>
            <dl className="grid grid-cols-12 gap-2 lg:block max-w-[400px] xl:min-w-full mt-8 lg:mt-0">
              <dt className="lg:pt-8 lg:pb-2 xl:pt-12 col-span-5">
                <Text variant="medium-primary">Spa:</Text>
              </dt>
              <dd className="inline-block lg:pl-3 xl:pl-10  col-span-2">
                <Text variant="medium-primary">6:30</Text>
              </dd>
              <dd className="inline-block lg:pl-3 text-center xl:pl-10  col-span-1">
                <Text variant="medium-primary">-</Text>
              </dd>
              <dd className="inline-block lg:pl-3 xl:pl-10  col-span-2">
                <Text variant="medium-primary">01:00</Text>
              </dd>
              <dd className="inline-block lg:pl-2 col-span-2">
                <Text variant="medium-primary">Uhr</Text>
              </dd>

              <dt className="lg:pt-8 lg:pb-2 xl:pt-12 col-span-5">
                <Text variant="medium-primary">Rezeption:</Text>
              </dt>
              <dd className="inline-block lg:pl-3 xl:pl-10  col-span-2">
                <Text variant="medium-primary">10:00</Text>
              </dd>
              <dd className="inline-block lg:pl-3 text-center xl:pl-10  col-span-1">
                <Text variant="medium-primary">-</Text>
              </dd>
              <dd className="inline-block lg:pl-3 xl:pl-10  col-span-2">
                <Text variant="medium-primary">19:00</Text>
              </dd>
              <dd className="inline-block lg:pl-2 col-span-2">
                <Text variant="medium-primary">Uhr</Text>
              </dd>

              <dt className="lg:pt-8 lg:pb-2 xl:pt-12 col-span-5">
                <Text variant="medium-primary">Behandlungen:</Text>
              </dt>
              <dd className="inline-block lg:pl-3 xl:pl-10  col-span-2">
                <Text variant="medium-primary">10:00</Text>
              </dd>
              <dd className="inline-block lg:pl-3 text-center xl:pl-10  col-span-1">
                <Text variant="medium-primary">-</Text>
              </dd>
              <dd className="inline-block lg:pl-3 xl:pl-10  col-span-2">
                <Text variant="medium-primary">19:00</Text>
              </dd>
              <dd className="inline-block lg:pl-2 col-span-2">
                <Text variant="medium-primary">Uhr</Text>
              </dd>
            </dl>
          </CustomPageSection>

          <CustomPageSection grow>
            <CustomPageSectionHeader>Termine</CustomPageSectionHeader>
            <dl className="grid grid-cols-12 gap-2 lg:block max-w-[400px] mt-8 lg:mt-0 xl:min-w-full">
              <dt className="lg:pt-8 lg:pb-2 xl:pt-12 col-span-5">
                <Text variant="medium-primary">Massagen:</Text>
              </dt>
              <dd className="inline-block lg:pl-3 xl:pl-10  col-span-2">
                <Text variant="medium-primary">10:00</Text>
              </dd>
              <dd className="inline-block lg:pl-3 text-center xl:pl-10  col-span-1">
                <Text variant="medium-primary">-</Text>
              </dd>
              <dd className="inline-block lg:pl-3 xl:pl-10  col-span-2">
                <Text variant="medium-primary">19:00</Text>
              </dd>
              <dd className="inline-block lg:pl-2 col-span-2">
                <Text variant="medium-primary">Uhr</Text>
              </dd>
            </dl>
            <div className="py-6 lg:py-8">
              <Text variant="small-primary" inline>
                Wir empfehlen Ihnen, Ihre Behandlung mindestens
              </Text>{" "}
              <Text variant="small-primary" inline bold>
                einen Tag vor Ihrem Besuch im Spa zu reservieren.
              </Text>{" "}
              <Text variant="small-primary" inline>
                Sollten Sie Ihren Termin nicht wahrnehmen können, bitten wir Sie
                um eine Absage 24 Stunden vorher, da wir Ihnen andernfalls die
                Gesamtkosten in Rechnung stellen müssen.
              </Text>
            </div>
            <Button label="Jetzt buchen" variant="primary" submit />
          </CustomPageSection>

          <CustomPageSection>
            <CustomPageSectionHeader>Kontakt</CustomPageSectionHeader>
            <div className="flex gap-2 flex-col  mt-8 lg:mt-12">
              <a href={`tel:${footer.phone}`}>
                <Text variant="small-primary">{footer.phone}</Text>
              </a>
              <a href={`mailto:${footer.email}`}>
                <Text variant="small-primary">{footer.email}</Text>
              </a>
            </div>
          </CustomPageSection>
        </PageSectionWrapper>
      </main>
    </Layout>
  );
}

function PageSectionWrapper({
  children,
}: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <div className="flex flex-col lg:flex-row gap-3 mt-5 lg:mt-0 lg:p-12 2xl:p-28 mx-w-[2200px] m-auto">
      {children}
    </div>
  );
}

function CustomPageSection({
  grow,
  children,
}: React.PropsWithChildren<{ grow?: boolean }>): JSX.Element {
  const isMediumOrBigger = useIsMediumOrBigger();
  return isMediumOrBigger ? (
    <div
      className={`flex flex-col ${
        grow ? "grow" : ""
      } basis-[33.3333%] m-3 pt-3 md:pt-5 lg:pt-10 2xl:pt-16 pb-3 2xl:pb-8`}
    >
      {children}
    </div>
  ) : (
    <PageSection>{children}</PageSection>
  );
}

function CustomPageSectionHeader({
  children,
}: {
  children: string;
}): JSX.Element {
  const isMediumOrBigger = useIsMediumOrBigger();
  return isMediumOrBigger ? (
    <Text variant="medium-primary" mono uppercase>
      {children}
    </Text>
  ) : (
    <Text variant="huge-primary" mono uppercase>
      {children}
    </Text>
  );
}
