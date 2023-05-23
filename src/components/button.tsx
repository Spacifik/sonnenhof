import React, { useId } from "react";
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
  const generatedId = useId();
  const [buttonId, setButtonId] = React.useState<string>(id ?? generatedId);

  React.useEffect(() => {
    setButtonId(id ?? generatedId);
  }, [generatedId, id]);

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
          "hover:brightness-150",
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
