import { footer } from "@sonnenhof/data/footer/footer";
import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <main>
      <Header />
      {children}
      <Footer {...footer} />
    </main>
  );
}
