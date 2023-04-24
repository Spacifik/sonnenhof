import { footer } from "@sonnenhof/data/footer/footer";
import { Footer } from "./footer";
import { Header } from "./header";
import { OverlayProvider } from "@sonnenhof/overlay/overlay-context";

export function Layout({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <OverlayProvider>
      <div className="font-saver invisible">
        <span className="text-gray-50" />
        <span className="text-gray-500" />
        <span className="text-primary-regular" />
      </div>
      <Header />
      {children}
      <Footer {...footer} />
    </OverlayProvider>
  );
}
