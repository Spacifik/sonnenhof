import React from "react";

export function useIsMediumOrBigger(): boolean {
  const [mediumOrBigger, setMediumOrBigger] = React.useState(
    window.matchMedia(`(min-width: 768px)`).matches
  );
  React.useEffect(() => {
    const subscriber = () =>
      setMediumOrBigger(() => window.matchMedia(`(min-width: 768px)`).matches);
    window.addEventListener("resize", subscriber);
    return () => window.removeEventListener("resize", subscriber);
  }, []);
  return mediumOrBigger;
}
