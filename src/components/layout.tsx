import { footer } from "@sonnenhof/data/footer/footer";
import { Footer } from "./footer";
import { Header } from "./header";
import { OverlayProvider } from "@sonnenhof/overlay/overlay-context";

export function Layout({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <>
      <div
        id="overlay-root"
        className="absolute top-0 left-0 h-screen w-full"
      ></div>
      <OverlayProvider>
        <div className="font-saver invisible">
          <span className="text-gray-50" />
          <span className="text-gray-100" />
          <span className="text-gray-400" />
          <span className="text-gray-500" />
          <span className="text-primary-regular" />
          <span className="text-primary-light" />

          <span className="bg-gray-50" />
          <span className="bg-gray-100" />
          <span className="bg-gray-400" />
          <span className="bg-gray-500" />
          <span className="bg-primary-regular" />
          <span className="bg-primary-light" />
        </div>
        <Header />
        {children}
        <Footer {...footer} />
      </OverlayProvider>
    </>
  );
}
