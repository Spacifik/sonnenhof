import { SectionProps } from "@sonnenhof/components/section";

export const sections: SectionProps[] = [
  {
    title: "Welcome at michelhotel sonnenhof",
    text: "Das Michelhof Sonnenhof ist ein charmantes Hotel inmitten der idyllischen Landschaft des bayrischen Waldes. Die einzigartige Architektur des Hauses, gestaltet von renommierten Designern, verspricht ein unvergessliches Erlebnis für Gäste aus der ganzen Welt. Das hauseigene Restaurant bietet feinste regionale Küche und eine exklusive Auswahl an Weinen. Die Bar des Hotels ist der perfekte Ort, um den Tag ausklingen zu lassen und sich von einem erfahrenen Barkeeper mit erlesenen Drinks verwöhnen zu lassen. Ein Spa-Bereich und Fitnessstudio bieten Entspannung und sportliche Betätigung gleichermaßen. Auf der Dachterrasse erwartet die Gäste ein Panoramablick über die malerische Landschaft des bayrischen Waldes.",
    buttons: [
      {
        label: "3D Tour",
        variant: "secondary",
      },
      {
        label: "Gutscheine",
        variant: "secondary",
      },
    ],
  },
  {
    hint: "Zimmer und suiten",
    title: "171 Zimmer",
    text: "Das Michelhof Sonnenhof verfügt über 171 Zimmer, darunter 144 Komfortzimmer, 12 Familienzimmer, 12 Suiten und 3 Executive Suiten – perfekt für unterschiedliche Bedürfnisse und Ansprüche.",
    background: "Background_zimmer.jpg",
    buttons: [
      {
        label: "Anschauen",
        variant: "secondary",
      },
      {
        label: "Jetzt buchen",
        variant: "primary",
      },
    ],
  },
  {
    title: "Sauna",
    text: "Die Sauna im Michelhof Sonnenhof bietet eine entspannende Auszeit mit verschiedenen Saunen und erfrischenden Abkühlungsmöglichkeiten. Im Ruhebereich können Sie sich anschließend entspannen und erholen.",
    background: "Background_sauna.jpg",
    buttons: [],
  },
];
