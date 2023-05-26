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
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    if (show) {
      setScrollPosition(() => window.scrollY);
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div
      className=" overlay relative w-full h-screen top-0 bg-black bg-opacity-80 flex justify-center z-50 text-primary"
      onClick={onClose}
      style={{ top: `${scrollPosition}px` }}
    >
      {children}
    </div>
  );
}
