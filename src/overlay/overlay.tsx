// components/Overlay.tsx
import React from "react";

interface OverlayProps {
  show: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export function Overlay({
  show,
  children,
  onClose,
}: React.PropsWithChildren<OverlayProps>): JSX.Element | null {
  if (!show) {
    return null;
  }

  return (
    <div
      className=" overlay relative w-full h-screen top-0 bg-[rgba(0,0,0,.7)] flex justify-center items-center z-50"
      onClick={onClose}
    >
      {children}
    </div>
  );
}
