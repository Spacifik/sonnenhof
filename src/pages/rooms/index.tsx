/* eslint-disable jsx-a11y/alt-text */
import { PageTopImage } from "@sonnenhof/components/image";
import { Layout } from "@sonnenhof/components/layout";
import { PageSection } from "@sonnenhof/components/page-section";
import { RoomDetails } from "@sonnenhof/components/room-details";
import { Text } from "@sonnenhof/components/text";

export default function Rooms(): JSX.Element {
  const items = [
    { content: "- Kingsize bed" },
    { content: "- Flatscreen inklusive Pay TV" },
    { content: "- Safe" },
    { content: "- Kühlschrank" },
    { content: "- Highspeed WLAN" },
    { content: "- Bluetooth sound system" },
    { content: "- Nespresso machine" },
    { content: "- Flasche Wasser inklusive" },
    { content: "- Begehbare Dusche und Badezubehör" },
    { content: "- Wake up service" },
    { content: "- Pillow service" },
    { content: "- Bügeleisen und -brett auf Anfrage" },
  ];
  const halfLength = Math.ceil(items.length / 2);
  const firstHalf = items.slice(0, halfLength);
  const secondHalf = items.slice(halfLength);
  return (
    <Layout>
      <main className="bg-black">
        <div>
          <PageTopImage name="rooms-overview" />
        </div>
        <PageSection>
          <div>
            <h1>
              <Text variant="huge-primary" bold>
                Leben wie ein König
              </Text>
            </h1>
            <h2>
              <Text variant="big-primary">Mitten im bayrischen Wald</Text>
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            <h3>
              <Text variant="big-primary" bold>
                Grundausstattung
              </Text>
            </h3>
            <h4>
              <Text variant="small-primary">
                Unsere Zimmer und Suiten sind standardmäßig ausgestattet mit:
              </Text>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <ul className="space-y-2">
                {firstHalf.map((item, index) => (
                  <li key={index}>
                    <Text variant="small-primary">{item.content}</Text>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 mt-2 md:mt-0">
                {secondHalf.map((item, index) => (
                  <li key={index}>
                    <Text variant="small-primary">{item.content}</Text>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3>
              <Text variant="big-primary" bold>
                Zimmerkategorien
              </Text>
            </h3>
            <Text variant="small-primary" light>
              Sollten Sie unter Allergien leiden, bieten wir Ihnen gerne nach
              Verfügbarkeit ein Allergikerzimmer mit spezieller Ausstattung und
              auf Wunsch sogar mit Luftreinigungsgerät an – einfach bei der
              Hotelbuchung angeben.
            </Text>
          </div>
        </PageSection>

        <div className={`flex flex-col`}>
          <RoomDetails
            buttons={[
              { label: "Jetzt buchen", variant: "primary" },
              { label: "Hineinschauen", variant: "tertiary" },
            ]}
            summary="Comfort King - 22m²"
            details="Komfortables 22m² Nichtraucherzimmer mit Balkon und allergikerfreundlichem Holzboden"
            items={["22m²", "Begehbare Dusche", "Kühlschrank"]}
            image="rooms-comfort-king"
          />

          <RoomDetails
            buttons={[
              { label: "Jetzt buchen", variant: "primary" },
              { label: "Hineinschauen", variant: "tertiary" },
            ]}
            summary="Superior King - 25,5m²"
            details="Premium 25,5m² Nichtraucherzimmer mit Balkon und allergikerfreundlichem Holzboden"
            items={["25,5m²", "Begehbare Dusche", "Kühlschrank"]}
            image="rooms"
          />
        </div>
      </main>
    </Layout>
  );
}
