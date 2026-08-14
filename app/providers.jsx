"use client";
// Client-side providers/effects for the App Router tree. Mirrors what
// pages/_app.js does for the Pages Router: toast provider, AOS init,
// bootstrap JS, Zoho SalesIQ bootstrap, and GA pageview tracking on
// client-side navigation.
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import { ToastProvider } from "lib/toast";
import * as ga from "lib/ga";

export default function Providers({ children }) {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    var $zoho = { ...window?.$zoho } || {};
    $zoho.salesiq = $zoho.salesiq || {
      widgetcode:
        "siqd802d9d0f485dfaac340ddc20306f3d11ecdc5f9d155bc34c062992d6745a323",
      values: {},
      ready: function () {},
    };
    window.$zoho = { ...window?.$zoho, ...$zoho };
    AOS.init();
  }, []);

  // The initial pageview is reported by the inline gtag('config') script in
  // the root layout; only client-side route changes are reported here.
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    ga.pageview(pathname);
  }, [pathname]);

  return <ToastProvider placement="top-center">{children}</ToastProvider>;
}
