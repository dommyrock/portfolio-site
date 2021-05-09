import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <h2>
        here will be my info links/nav ,note:make about me text render in with spring animations(like i did for %
        finished on zip gallery)
      </h2>
      <main className="main-container">
        <Component {...pageProps} />
      </main>
    </>
  );
}
