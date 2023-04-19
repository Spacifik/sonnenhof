import React from "react";
import { v4 } from "uuid";

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
  return (
    <div className={`button-wrapper ${variant} p-2 bold pointer`}>
      <label htmlFor={buttonId}>{label}</label>
      <button id={buttonId} onClick={() => onClick?.()} />
    </div>
  );
}
