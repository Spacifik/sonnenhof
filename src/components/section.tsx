import { Button, ButtonProps } from "./button";
import { Picture } from "./picture";
import { Text } from "./text";

export interface SectionProps {
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
    <section className="w-full">
      <SectionBackground background={background}>
        <div className="flex flex-col gap-6">
          <Text variant="big" mono uppercase>
            {title}
          </Text>
          <Text variant="medium">{text}</Text>
          <div className="flex gap-4">
            {buttons.map((button) => (
              <Button key={button.label} {...button} />
            ))}
          </div>
        </div>
      </SectionBackground>
    </section>
  );
}

function SectionBackground({
  background,
  children,
}: React.PropsWithChildren<Pick<SectionProps, "background">>): JSX.Element {
  return (
    <div className="section-background relative w-full justify-center align-center">
      {background && (
        <div className="w-full">
          <Picture src={background} />
        </div>
      )}
      <div className={`${background && "absolute top-1/4"} p-6`}>
        {children}
      </div>
    </div>
  );
}
