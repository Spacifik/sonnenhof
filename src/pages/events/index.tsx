/* eslint-disable jsx-a11y/alt-text */
import {
  Image,
  ImageProps,
  PageTopImage,
  getImageSrc,
} from "@sonnenhof/components/image";
import { Layout } from "@sonnenhof/components/layout";
import { Text } from "@sonnenhof/components/text";
import { PageSection } from "@sonnenhof/components/page-section";
import { Button } from "@sonnenhof/components/button";
import { PageSectionBackgroundImageWrapper } from "@sonnenhof/components/page-section-background-image-wrapper";
import { PageSectionDimmedBackgroundWrapper } from "@sonnenhof/components/page-section-dimmed-background-wrapper";

export default function Page(): JSX.Element {
  return (
    <Layout>
      <main className="bg-black pb-6 md:pb-10 lg:pb-16">
        <div>
          <PageTopImage name="events" />
        </div>
        <PageSection>
          <Text variant="huge-primary" mono uppercase>
            Work hard, play hard
          </Text>
          <Text variant="small-primary">
            Ob kleine Zusammenkünfte, besondere Anlässe oder große
            Veranstaltungen - das Team des Sonnenhofs kann alle Gimmicks
            bereitstellen, die Ihr Event zu einem Gesamtkunstwerk machen. Sei es
            modernste Veranstaltungstechnik, internationale DJ’s und Künstler,
            Incentives, Hochzeiten oder Live-Cooking unter freiem Himmel - ein
            Tag, Abend oder eine Nacht im Sonnenhof werden Ihre Gäste nie
            vergessen. Hier wird ihr Event alles andere als gewöhnlich.
          </Text>
          <div className="pt-3">
            <Button
              label="Events Broschüre"
              variant="tertiary"
              onClick={() => alert("Broschüre nicht verfügbar")}
            />
          </div>
        </PageSection>

        <PageSectionBackgroundImageWrapper>
          <PageSectionDimmedBackgroundWrapper>
            <PageSection>
              <Text variant="huge-primary" mono uppercase>
                Inspirationen
              </Text>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <EventArticle>
                  <EventImage name="event1" />
                  <Text variant="big-primary" bold>
                    Hochzeitspaket
                  </Text>
                  <Text variant="small-primary">
                    Mit eleganter Unterkunft, exquisitem Essen, Live-Cooking und
                    maßgeschneiderten Dienstleistungen wird Ihr großer Tag
                    absolut magisch.
                  </Text>
                </EventArticle>

                <EventArticle>
                  <EventImage name="event-hybrid-meetings" />
                  <Text variant="big-primary" bold>
                    Hybride Meetings
                  </Text>
                  <Text variant="small-primary">
                    Egal ob remote oder vor Ort - mit unserer modernsten Technik
                    bieten wir ein nahtloses, produktives Meetingerlebnis
                  </Text>
                </EventArticle>

                <EventArticle>
                  <EventImage name="event-corporate" />
                  <Text variant="big-primary" bold>
                    Corporate events
                  </Text>
                  <Text variant="small-primary">
                    Wir sorgen dafür, das ihre Firmenveranstaltung einzigartig
                    ist. Mit hervorragendem Service gestalten wir inspirierende
                    Erlebnisse, die Ihren Geschäftszielen gerecht werden.
                  </Text>
                </EventArticle>

                <EventArticle>
                  <EventImage name="event-presentation" />
                  <Text variant="big-primary" bold>
                    Präsentationen
                  </Text>
                  <Text variant="small-primary">
                    Präsentieren Sie Ihren Kunden Ihr Angebot in eindrucksvollem
                    Ambiente. Wir schaffen den perfekten Rahmen für Ihre
                    Produktpräsentationen.
                  </Text>
                </EventArticle>

                <EventArticle>
                  <EventImage name="event-press" />
                  <Text variant="big-primary" bold>
                    Pressekonferenzen
                  </Text>
                  <Text variant="small-primary">
                    Unser Service bietet Ihnen die perfekte Bühne für wichtige
                    Ankündigungen und Präsentationen, damit diese Ihre volle
                    Wirkung entfalten können.
                  </Text>
                </EventArticle>
              </div>
            </PageSection>
          </PageSectionDimmedBackgroundWrapper>
        </PageSectionBackgroundImageWrapper>
      </main>
    </Layout>
  );
}

function EventArticle({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return <article>{children}</article>;
}

function EventImage({ name }: Pick<ImageProps, "name">): JSX.Element {
  return <Image name={name} className="h-64 w-full object-cover" />;
}
