import { ButtonProps } from "./button";
import { Picture } from "./picture";

interface SectionProps {
  title: string;
  text: string;
  buttons: ButtonProps[];
  background?: string; // image url
}

export function Section({
  title,
  text,
  buttons,
  background,
}: SectionProps): JSX.Element {
  return <section></section>;
}

function SectionBackground({
  background,
}: Pick<SectionProps, "background">): JSX.Element {
  if (background) {
    return (
      <div className="section-background">
        <Picture src={background} />
      </div>
    );
  }

  return <div className="section-background" />;
}
