import "@/styles/globals.scss";
import { ParkProvider } from "context/ParkContext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ParkProvider>
        <Component {...pageProps} />
      </ParkProvider>
    </>
  );
}
