"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const GA_MEASUREMENT_ID = "G-6NJZKR87V1";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    // The initial page_view is sent automatically by the `gtag('config', ...)`
    // call below. This effect only needs to fire on subsequent client-side
    // route changes, since Next.js doesn't do a full page reload for those.
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    window.gtag?.("event", "page_view", {
      page_path: pathname,
    });
  }, [pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
