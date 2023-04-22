import { createContext, useContext, useState } from "react";
import { Overlay } from "./overlay";
import { Cancel } from "iconoir-react";

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
      <Overlay show={overlayContent !== null} onClose={hideOverlay}>
        <div
          className="absolute top-3 right-3 cursor-pointer"
          onClick={hideOverlay}
        >
          <Cancel />
        </div>
        {overlayContent}
      </Overlay>
      {children}
    </OverlayContext.Provider>
  );
}
