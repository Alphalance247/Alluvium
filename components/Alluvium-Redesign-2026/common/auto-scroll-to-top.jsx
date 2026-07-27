// app/scroll-to-top.tsx
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    history.scrollRestoration = "manual"; // stop browser from restoring old position
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
