import React from "react";
import { v4 } from "uuid";

interface ButtonProps {
  label: string;
  id?: string;
  onClick?: Callback<void>;
}

export function Button({ label, id, onClick }: ButtonProps): JSX.Element {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const buttonId = React.useMemo(() => id ?? v4(), []);
  return (
    <div className="button-wrapper">
      <label htmlFor={buttonId}>{label}</label>
      <button id={buttonId} onClick={() => onClick?.()} />
    </div>
  );
}
