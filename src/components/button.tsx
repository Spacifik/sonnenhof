import React, { DOMAttributes, useId } from "react";
import { getThemeColor } from "./theme-color";
import { Text } from "./text";

export interface ButtonProps {
  label: string;
  variant: "primary" | "secondary" | "tertiary";
  id?: string;
  onClick?: Callback<React.MouseEvent<HTMLButtonElement, MouseEvent>>;
  submit?: boolean;
}

export function Button({
  label,
  variant,
  id,
  submit,
  onClick,
}: ButtonProps): JSX.Element {
  const generatedId = useId();
  const [buttonId, setButtonId] = React.useState<string>(id ?? generatedId);

  React.useEffect(() => {
    setButtonId(id ?? generatedId);
  }, [generatedId, id]);

  const textColor = getThemeColor(variant === "tertiary" ? "primary" : "light");
  const bgColors =
    variant === "primary"
      ? [getThemeColor("primary", true)]
      : variant === "tertiary"
      ? [
          "bg-transparent",
          "border",
          "border-solid",
          "border-primary-700",
          "hover:border-primary-700",
        ]
      : [getThemeColor("dark", true)];
  return (
    <div
      className={`
      ${textColor} 
      ${bgColors.join(" ")}
      p-2 px-4 lg:px-10 hover:bg-primary-400 bold cursor-pointer w-fit whitespace-nowrap flex`}
    >
      <label className="cursor-pointer" htmlFor={buttonId}>
        <Text
          variant={`small-${variant === "tertiary" ? "primary" : "light"}`}
          addHover
        >
          {label}
        </Text>
      </label>
      <button
        className="cursor-pointer"
        id={buttonId}
        onClick={(evt) => onClick?.(evt)}
        type={submit ? "submit" : "button"}
      />
    </div>
  );
}
