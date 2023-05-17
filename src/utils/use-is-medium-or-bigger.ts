import React from "react";

export function useIsMediumOrBigger(): boolean {
  const isClient = useIsClient();
  const [mediumOrBigger, setMediumOrBigger] = React.useState(false);

  React.useEffect(() => {
    if (isClient) {
      setMediumOrBigger(window.matchMedia(`(min-width: 768px)`).matches);

      const subscriber = () =>
        setMediumOrBigger(window.matchMedia(`(min-width: 768px)`).matches);

      window.addEventListener("resize", subscriber);
      return () => window.removeEventListener("resize", subscriber);
    }
  }, [isClient]);

  return mediumOrBigger;
}

function useIsClient() {
  const [isClient, setIsClient] = React.useState(false);
  // The useEffect function runs after the first render, so it won't
  // run on the server. When we're on the server, isClient is false.
  // After the first render on the client, isClient is true.
  React.useEffect(() => {
    setIsClient(true);
  }, []); // Empty array ensures this only runs on mount and unmount

  return isClient;
}
