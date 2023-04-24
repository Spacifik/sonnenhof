import React from "react";
import { v4 } from "uuid";
import { getHoverThemeColor, getThemeColor } from "./theme-color";

export interface ButtonProps {
  label: string;
  variant: "primary" | "secondary";
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
  const textColor = getThemeColor("light");
  const bgColors =
    variant === "primary"
      ? [getThemeColor("primary", true), getHoverThemeColor("primary", true)]
      : [getThemeColor("dark", true), getHoverThemeColor("dark", true)];
  return (
    <div
      className={` ${textColor} ${bgColors.join(" ")} p-2 bold cursor-pointer`}
    >
      <label htmlFor={buttonId}>{label}</label>
      <button id={buttonId} onClick={() => onClick?.()} />
    </div>
  );
}
