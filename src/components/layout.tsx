import { footer } from "@sonnenhof/data/footer/footer";
import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <>
      <div className="font-saver invisible">
        <span className="text-gray-50" />
        <span className="text-gray-100" />
        <span className="text-gray-400" />
        <span className="text-gray-500" />
        <span className="text-primary-950" />
        <span className="text-primary-900" />
        <span className="text-primary-800" />
        <span className="text-primary-700" />
        <span className="text-primary-600" />
        <span className="text-primary-500" />
        <span className="text-primary-400" />
        <span className="text-primary-200" />
        <span className="text-primary-200" />
        <span className="text-primary-100" />
        <span className="text-primary-50" />
        <span className="group-hover/button:text-primary-50" />

        <span className="bg-gray-50" />
        <span className="bg-gray-100" />
        <span className="bg-gray-400" />
        <span className="bg-gray-500" />
        <span className="bg-primary-950" />
        <span className="bg-primary-900" />
        <span className="bg-primary-800" />
        <span className="bg-primary-700" />
        <span className="bg-primary-600" />
        <span className="bg-primary-500" />
        <span className="bg-primary-400" />
        <span className="bg-primary-200" />
        <span className="bg-primary-200" />
        <span className="bg-primary-100" />
        <span className="bg-primary-50" />
      </div>
      <Header />
      {children}
      <Footer {...footer} />
    </>
  );
}
