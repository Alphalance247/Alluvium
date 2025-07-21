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

import Script from "next/script";

const CalendlyWidget = () => {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div
        className="calendly-inline-widget"
        data-url="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3pMmWAmChSLCMaEk_8VEJodFhMSuY7hYTCqIVTeORIKpO4Z9aGHDbDAjz7_Q4Sd2J4lJy5Fz2i?gv=true"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </>
  );
};

export default CalendlyWidget;
