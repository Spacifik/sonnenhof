import { Button, ButtonProps } from "./button";
import { Picture } from "./picture";
import { Text } from "./text";

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
  return (
    <section>
      <SectionBackground background={background}>
        <Text variant="big">{title}</Text>
        <Text variant="medium">{text}</Text>
        <div className="flex">
          {buttons.map((button) => (
            <Button key={button.label} {...button} />
          ))}
        </div>
      </SectionBackground>
    </section>
  );
}

function SectionBackground({
  background,
  children,
}: React.PropsWithChildren<Pick<SectionProps, "background">>): JSX.Element {
  if (background) {
    return (
      <div className="section-background">
        <Picture src={background} />
        {children}
      </div>
    );
  }

  return <div className="section-background">{children}</div>;
}
