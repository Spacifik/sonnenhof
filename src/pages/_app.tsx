import "@sonnenhof/styles/globals.css";
import "@sonnenhof/styles/datepicker.css";
import type { AppProps } from "next/app";
import "react-datepicker/dist/react-datepicker.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
