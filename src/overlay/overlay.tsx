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
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
