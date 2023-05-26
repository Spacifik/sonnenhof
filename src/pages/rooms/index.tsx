import { Layout } from "@sonnenhof/components/layout";
import { RoomDetails } from "@sonnenhof/components/room-details";
import { Section } from "@sonnenhof/components/section";
import { Text } from "@sonnenhof/components/text";

export default function Rooms(): JSX.Element {
  const items = [
    { content: "- Kingsize bed" },
    { content: "- Flatscreen inklusive Pay TV" },
    { content: "- Apple TV" },
    { content: "- Highspeed WLAN" },
    { content: "- Bluetooth sound system" },
    { content: "- Nespresso machine" },
    { content: "- Flasche Wasser inklusive" },
    { content: "- Bath amenities" },
    { content: "- Wake up service" },
    { content: "- Pillow service" },
    { content: "- Bügeleisen und -brett auf Anfrage" },
  ];
  const halfLength = Math.ceil(items.length / 2);
  const firstHalf = items.slice(0, halfLength);
  const secondHalf = items.slice(halfLength);
  return (
    <Layout>
      <main>
        <Section
          title="Edelsteine im bayrischen Wald"
          text="Some text"
          buttons={[]}
        />
        <Section title="Room essentials" buttons={[]}>
          <Text variant="small-primary">
            Unsere Zimmer und Suiten sind standardmäßig ausgestattet mit:
          </Text>
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
        </Section>
        <Section
          title="Room categories"
          text="Sollten Sie unter Allergien leiden, bieten wir Ihnen gerne nach Verfügbarkeit ein Allergikerzimmer mit spezieller Ausstattung und auf Wunsch sogar mit Luftreinigungsgerät an – einfach bei der Hotelbuchung angeben."
          buttons={[]}
        />
        <div className={`flex flex-col`}>
          <RoomDetails
            buttons={[
              { label: "Jetzt buchen", variant: "primary" },
              { label: "Hineinschauen", variant: "tertiary" },
            ]}
            summary="Comfort King - 22m²"
            details="Komfortables 22m² Nichtraucherzimmer mit Balkon und allergikerfreundlichem Holzboden"
            items={[
              "Kingsize Bett",
              "Klimaanlage",
              "Begehbare Dusche",
              "Safe",
              "Wifi",
              "Lan",
              "Smart TV",
              "Kühlschrank",
              "Haartrockner",
            ]}
            image="rooms"
          />

          <RoomDetails
            buttons={[
              { label: "Jetzt buchen", variant: "primary" },
              { label: "Hineinschauen", variant: "tertiary" },
            ]}
            summary="Superior King - 25,5m²"
            details="Premium 25,5m² Nichtraucherzimmer mit Balkon und allergikerfreundlichem Holzboden"
            items={[
              "Kingsize Bett",
              "Klimaanlage",
              "Begehbare Dusche",
              "Safe",
              "Wifi",
              "Lan",
              "Smart TV",
              "Kühlschrank",
              "Haartrockner",
            ]}
            image="rooms"
          />
        </div>
      </main>
    </Layout>
  );
}
