import { ParkProvider } from "@/context/ParkContext";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <>
          <ParkProvider>
            <Component {...pageProps} />
          </ParkProvider>
        </>
      ) : (
        "Prerendered"
      )}
    </>
  );
}
