import Link from "next/link";
import { Text } from "./text";

export function HamburgerOverlay(): JSX.Element {
  return (
    <div>
      <div className="flex">
        <div className="border-r-2 pe-2 me-2">
          <Text variant="tiny-primary" mono uppercase>
            Zimmer buchen
          </Text>
        </div>
        <div className="border-r-2  pe-2 me-2">
          <Text variant="tiny-primary" mono uppercase>
            Tisch reservieren
          </Text>
        </div>
        <div>
          <Link href={"/rooms"}>
            <Text variant="tiny-primary" mono uppercase>
              Gutscheine
            </Text>
          </Link>
        </div>
      </div>
      <br />
      <ul className="">
        <li>
          <a href="https://blog.michelhotel-sonnenhof.de/">
            <Text variant="medium-primary" mono uppercase>
              Blog
            </Text>
          </a>
        </li>
        <li>
          <Link href={"/rooms"}>
            <Text variant="medium-primary" mono uppercase>
              Zimmer & suiten
            </Text>
          </Link>
        </li>
        <li>
          <Link href={"/bar"}>
            <Text variant="medium-primary" mono uppercase>
              Bar
            </Text>
          </Link>
          <li>
            <Link href={"/spa"}>
              <Text variant="medium-primary" mono uppercase>
                Spa & Gesundheit
              </Text>
            </Link>
          </li>
          <li>
            <Link href={"/events"}>
              <Text variant="medium-primary" mono uppercase>
                Meetings & Events
              </Text>
            </Link>
          </li>
          <li>
            <Link href={"/gym"}>
              <Text variant="medium-primary" mono uppercase>
                Gym & Outdoor
              </Text>
            </Link>
          </li>
        </li>
      </ul>
    </div>
  );
}
