import React from "react";
import { v4 } from "uuid";
import { getHoverThemeColor, getThemeColor } from "./theme-color";

export interface ButtonProps {
  label: string;
  variant: "primary" | "secondary" | "tertiary";
  id?: string;
  onClick?: Callback<void>;
}

export function Button({
  label,
  variant,
  id,
  onClick,
}: ButtonProps): JSX.Element {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const buttonId = React.useMemo(() => id ?? v4(), []);
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
      )} p-2 bold cursor-pointer text-center w-fit`}
    >
      <label className="cursor-pointer" htmlFor={buttonId}>
        {label}
      </label>
      <button
        className="cursor-pointer"
        id={buttonId}
        onClick={() => onClick?.()}
      />
    </div>
  );
}
