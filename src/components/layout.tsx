import { footer } from "@sonnenhof/data/footer/footer";
import { Footer } from "./footer";
import { Header } from "./header";
import { OverlayProvider } from "@sonnenhof/overlay/overlay-context";

export function Layout({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <OverlayProvider>
      <main className="scrollbar-hide">
        <Header />
        {children}
        <Footer {...footer} />
      </main>
    </OverlayProvider>
  );
}
