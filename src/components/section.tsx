import { Button, ButtonProps } from "./button";
import { Picture } from "./picture";
import { Text } from "./text";

export interface SectionProps {
  hint?: string;
  title: string;
  text: string;
  buttons: ButtonProps[];
  background?: string; // image url
}

export function Section({
  hint,
  title,
  text,
  buttons,
  background,
}: SectionProps): JSX.Element {
  return (
    <section
      className={`grow relative p-6 md:p-9 md:basis-1/3 ${
        background ? "bg-cover bg-no-repeat" : "bg-gray-700"
      }`}
      style={
        background
          ? { backgroundImage: `url(/desktop/${background})` }
          : undefined
      }
    >
      <div className="flex flex-col gap-6 z-20">
        <div>
          {hint && (
            <Text variant="small" mono uppercase>
              {hint}
            </Text>
          )}
          <Text variant="big" mono uppercase>
            {title}
          </Text>
        </div>
        <Text variant="medium">{text}</Text>
        <div className="flex gap-4">
          {buttons.map((button) => (
            <Button key={button.label} {...button} />
          ))}
        </div>
      </div>
    </section>
  );
}
