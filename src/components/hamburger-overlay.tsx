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
          <Text variant="tiny-primary" mono uppercase>
            Gutscheine
          </Text>
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
          <Text variant="medium-primary" mono uppercase>
            Bar
          </Text>
          <li>
            <Text variant="medium-primary" mono uppercase>
              Spa & Gesundheit
            </Text>
          </li>
          <li>
            <Text variant="medium-primary" mono uppercase>
              Meetings & Events
            </Text>
          </li>
          <li>
            <Text variant="medium-primary" mono uppercase>
              Gym & Outdoor
            </Text>
          </li>
        </li>
      </ul>
    </div>
  );
}
