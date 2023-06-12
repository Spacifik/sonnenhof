import React from "react";

type PaddingBottom = string;

/**
 * Calculates how much space the video on the front page will take place,
 * given that it is of aspect ratio 16:9 and we want it to have a max height
 * of 75vh
 *
 * @returns the padding bottom value, that needs to be applied to the
 * video containing element
 */
export function useAspectRatioBox(): PaddingBottom {
  const [paddingBottom, setPaddingBottom] = React.useState("56.25%");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const calcPadding = () => {
        const vh = Math.max(
          document.documentElement.clientHeight || 0,
          window.innerHeight || 0
        );
        const maxWidth = vh * 1; // 100vh
        const aspectRatio = 9 / 16;
        const width = Math.min(maxWidth / aspectRatio, window.innerWidth);
        setPaddingBottom(`${width * aspectRatio}px`);
      };
      calcPadding();
      window.addEventListener("resize", calcPadding);
      return () => window.removeEventListener("resize", calcPadding);
    }
  }, []);
  return paddingBottom;
}
