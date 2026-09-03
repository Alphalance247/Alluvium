import { useEffect, useRef, useState } from "react";
import Script from "next/script";

const CALENDLY_URL = "https://calendly.com/taiwoojo/30min?back=1&month=2026-03"; // replace with your Calendly link

// Calendly never actually confirms "loaded" — this stops the skeleton from
// spinning forever if the widget.js script or its postMessage events get
// blocked (ad blockers, slow network, etc).
const READY_FALLBACK_MS = 8000;

const CalendlySkeleton = () => (
  <div
    aria-hidden="true"
    className="absolute inset-0 flex bg-white animate-pulse"
  >
    <div className="hidden sm:flex w-2/5 flex-col gap-6 p-7 border-r border-slate-100">
      <div className="h-5 w-32 bg-slate-200 rounded" />
      <div className="flex items-center justify-between">
        <div className="w-8 h-8 rounded-full bg-slate-200" />
        <div className="h-4 w-20 bg-slate-200 rounded" />
        <div className="w-8 h-8 rounded-full bg-slate-200" />
      </div>
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 35 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-full bg-slate-100" />
        ))}
      </div>
    </div>
    <div className="flex-1 flex flex-col gap-3 p-7">
      <div className="h-4 w-36 bg-slate-200 rounded mb-3" />
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="h-11 w-full bg-slate-100 rounded-lg" />
      ))}
    </div>
  </div>
);

const CalendlyWidget = () => {
  const containerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  const init = () => {
    if (typeof window === "undefined") return;
    if (!window.Calendly || !containerRef.current) return;
    containerRef.current.innerHTML = "";
    window.Calendly.initInlineWidget({
      url: CALENDLY_URL,
      parentElement: containerRef.current,
    });
  };

  useEffect(() => {
    if (window.Calendly) init();

    const handleMessage = (event) => {
      if (event.data?.event?.indexOf("calendly.") !== 0) return;
      // Fired once the booking page (calendar + slots) has actually rendered.
      if (event.data.event === "calendly.event_type_viewed") {
        setIsReady(true);
      }
    };

    window.addEventListener("message", handleMessage);
    const fallback = setTimeout(() => setIsReady(true), READY_FALLBACK_MS);

    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div className="relative" style={{ minWidth: "320px", height: "700px" }}>
      {!isReady && <CalendlySkeleton />}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={init}
      />
      <div
        ref={containerRef}
        style={{ minWidth: "320px", height: "700px", marginTop: "-3rem" }}
      />
    </div>
  );
};

export default CalendlyWidget;
