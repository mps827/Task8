import type { AppProps } from "next/app";
import "../assets/style/scss/elements.scss";
import "../assets/style/css/globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import { UrlChangeListener } from "@/router/UrlChangeListener";
import LoadHandling from "@/core/helpers/LoadHandling";
import ErrorHandling from "@/core/helpers/ErrorHandling";
import { Provider } from "react-redux";
import store from "../store/index";
const myFont = localFont({ src: "../assets/fonts/IRANSans-web.woff" });

import { LocaleProvider } from "../providers/locale-provider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocaleProvider>
      <style jsx global>{`
        html {
          font-family: ${myFont.style.fontFamily};
        }
      `}</style>
      <Provider store={store}>
        <UrlChangeListener />
        <ThemeProvider attribute="class">
          <LoadHandling />
          <ErrorHandling />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </LocaleProvider>
  );
}
