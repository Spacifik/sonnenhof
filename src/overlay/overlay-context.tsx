import { createContext, useContext, useState } from "react";
import { Overlay } from "./overlay";

interface OverlayContextValue {
  showOverlay: (content: React.ReactNode) => void;
  hideOverlay: () => void;
}

const OverlayContext = createContext<OverlayContextValue>({
  showOverlay: () => {},
  hideOverlay: () => {},
});

export const useOverlay = () => useContext(OverlayContext);

export function OverlayProvider({
  children,
}: React.PropsWithChildren<{}>): JSX.Element {
  const [overlayContent, setOverlayContent] = useState<React.ReactNode>(null);

  const showOverlay = (content: React.ReactNode) => {
    setOverlayContent(content);
  };
  const hideOverlay = () => setOverlayContent(null);

  return (
    <OverlayContext.Provider value={{ showOverlay, hideOverlay }}>
      {children}
      <Overlay show={overlayContent !== null} onClose={hideOverlay}>
        {overlayContent}
      </Overlay>
    </OverlayContext.Provider>
  );
}
