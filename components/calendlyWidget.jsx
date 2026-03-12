// // components/CalendlyWidget.jsx

// import { useEffect } from "react";

// const CalendlyWidget = () => {
//   useEffect(() => {
//     // Load Calendly script
//     const script = document.createElement("script");
//     script.src = "https://assets.calendly.com/assets/external/widget.js";
//     script.async = true;
//     document.body.appendChild(script);

//     // Clean up
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <>
//       <div
//         className="calendly-inline-widget"
//         data-url="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3pMmWAmChSLCMaEk_8VEJodFhMSuY7hYTCqIVTeORIKpO4Z9aGHDbDAjz7_Q4Sd2J4lJy5Fz2i?gv=true"
//         style={{ minWidth: "320px", height: "700px" }}
//       ></div>
//     </>
//   );
// };

// export default CalendlyWidget;

// ... existing code ...
// components/CalendlyWidget.jsx

// import Script from "next/script";

// const CalendlyWidget = () => {
//   return (
//     <>
//       <Script
//         src="https://assets.calendly.com/assets/external/widget.js"
//         strategy="lazyOnload"
//       />
//       <div
//         className="calendly-inline-widget"
//         data-url=""
//         style={{ minWidth: "320px", height: "700px" }}
//       ></div>
//     </>
//   );
// };

// export default CalendlyWidget;

import { useEffect, useRef } from "react";
import Script from "next/script";

const CALENDLY_URL = "https://calendly.com/taiwoojo/30min?back=1&month=2026-03"; // replace with your Calendly link

const CalendlyWidget = () => {
  const containerRef = useRef(null);

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
  }, []);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={init}
      />
      <div
        ref={containerRef}
        style={{ minWidth: "320px", height: "700px", marginTop: "-3rem" }}
      />
    </>
  );
};

export default CalendlyWidget;
