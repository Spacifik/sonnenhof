import React, { DOMAttributes, useId } from "react";
import { getThemeColor } from "./theme-color";

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
          "border-primary-regular",
          "hover:text-primary-light",
          "hover:border-primary-light",
        ]
      : [getThemeColor("dark", true)];
  return (
    <div
      className={` ${textColor} ${bgColors.join(
        " "
      )} p-2 hover:brightness-125 bold cursor-pointer text-center w-fit whitespace-nowrap`}
    >
      <label className="cursor-pointer" htmlFor={buttonId}>
        {label}
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
