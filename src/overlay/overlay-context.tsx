import { createContext, useContext, useState, useEffect } from "react";
import { createPortal } from "react-dom";
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

export function useOverlay(): OverlayContextValue {
  return useContext(OverlayContext);
}

export const OverlayProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [overlayContent, setOverlayContent] = useState<React.ReactNode>(null);
  const [overlayRoot, setOverlayRoot] = useState<Element | null>(null);

  useEffect(() => {
    setOverlayRoot(document.getElementById("overlay-root"));
  }, []);

  useEffect(() => {
    if (overlayContent === null) {
      overlayRoot?.classList.remove("z-40");
      document.body.style.overflow = "unset";
    } else {
      overlayRoot?.classList.add("z-40");
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [overlayContent, overlayRoot?.classList]);

  const showOverlay = (content: React.ReactNode) => {
    setOverlayContent(content);
  };
  const hideOverlay = () => setOverlayContent(null);

  const overlay = (
    <Overlay show={overlayContent !== null} onClose={hideOverlay}>
      <div
        className="absolute top-3 right-3 cursor-pointer text-primary-regular"
        onClick={hideOverlay}
      >
        <Cancel />
      </div>
      {overlayContent}
    </Overlay>
  );

  return (
    <OverlayContext.Provider value={{ showOverlay, hideOverlay }}>
      {overlayRoot && createPortal(overlay, overlayRoot)}
      {children}
    </OverlayContext.Provider>
  );
};
