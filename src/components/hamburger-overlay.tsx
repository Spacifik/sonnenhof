import { Text } from "./text";

export function HamburgerOverlay(): JSX.Element {
  return (
    <div>
      <div className="flex">
        <div className="border-r-2 pe-2 me-2">
          <Text variant="tiny-bright" mono uppercase>
            Zimmer buchen
          </Text>
        </div>
        <div className="border-r-2  pe-2 me-2">
          <Text variant="tiny-bright" mono uppercase>
            Tisch reservieren
          </Text>
        </div>
        <div>
          <Text variant="tiny-bright" mono uppercase>
            Gutscheine
          </Text>
        </div>
      </div>
      <br />
      <ul className="">
        <li>
          <Text variant="medium-bright" mono uppercase>
            Blog
          </Text>
        </li>
        <li>
          <Text variant="medium-bright" mono uppercase>
            Zimmer & suiten
          </Text>
        </li>
        <li>
          <Text variant="medium-bright" mono uppercase>
            Bar
          </Text>
          <li>
            <Text variant="medium-bright" mono uppercase>
              Spa & Gesundheit
            </Text>
          </li>
          <li>
            <Text variant="medium-bright" mono uppercase>
              Meetings & Events
            </Text>
          </li>
          <li>
            <Text variant="medium-bright" mono uppercase>
              Gym & Outdoor
            </Text>
          </li>
        </li>
      </ul>
    </div>
  );
}
