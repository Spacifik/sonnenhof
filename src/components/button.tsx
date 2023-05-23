import React from "react";
import { v4 } from "uuid";
import { getHoverThemeColor, getThemeColor } from "./theme-color";

export interface ButtonProps {
  label: string;
  variant: "primary" | "secondary" | "tertiary";
  id?: string;
  onClick?: Callback<void>;
  submit?: boolean;
}

export function Button({
  label,
  variant,
  id,
  submit,
  onClick,
}: ButtonProps): JSX.Element {
  const [buttonId, setButtonId] = React.useState<string>(id ?? v4());

  React.useEffect(() => {
    setButtonId(id ?? v4());
  }, [id]);

  const textColor = getThemeColor(variant === "tertiary" ? "primary" : "light");
  const bgColors =
    variant === "primary"
      ? [getThemeColor("primary", true), getHoverThemeColor("primary", true)]
      : variant === "tertiary"
      ? [
          "bg-transparent",
          "border",
          "border-solid",
          "border-primary-regular",
          "hover:text-primary-light",
          "hover:border-primary-light",
        ]
      : [(getThemeColor("dark", true), getHoverThemeColor("dark", true))];
  return (
    <div
      className={` ${textColor} ${bgColors.join(
        " "
      )} p-2 bold cursor-pointer text-center w-fit whitespace-nowrap`}
    >
      <label className="cursor-pointer" htmlFor={buttonId}>
        {label}
      </label>
      <button
        className="cursor-pointer"
        id={buttonId}
        onClick={() => onClick?.()}
        type={submit ? "submit" : "button"}
      />
    </div>
  );
}
