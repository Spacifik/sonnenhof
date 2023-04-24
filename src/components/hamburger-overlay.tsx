import { Text } from "./text";

export function HamburgerOverlay(): JSX.Element {
  return (
    <div>
      <div className="flex">
        <div className="border-r-2 pe-2 me-2">
          <Text variant="tiny-light" mono uppercase>
            Zimmer buchen
          </Text>
        </div>
        <div className="border-r-2  pe-2 me-2">
          <Text variant="tiny-light" mono uppercase>
            Tisch reservieren
          </Text>
        </div>
        <div>
          <Text variant="tiny-light" mono uppercase>
            Gutscheine
          </Text>
        </div>
      </div>
      <br />
      <ul className="">
        <li>
          <Text variant="medium-light" mono uppercase>
            Blog
          </Text>
        </li>
        <li>
          <Text variant="medium-light" mono uppercase>
            Zimmer & suiten
          </Text>
        </li>
        <li>
          <Text variant="medium-light" mono uppercase>
            Bar
          </Text>
          <li>
            <Text variant="medium-light" mono uppercase>
              Spa & Gesundheit
            </Text>
          </li>
          <li>
            <Text variant="medium-light" mono uppercase>
              Meetings & Events
            </Text>
          </li>
          <li>
            <Text variant="medium-light" mono uppercase>
              Gym & Outdoor
            </Text>
          </li>
        </li>
      </ul>
    </div>
  );
}
