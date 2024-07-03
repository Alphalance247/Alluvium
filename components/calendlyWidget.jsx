// components/CalendlyWidget.jsx

import { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url="https://api.leadconnectorhq.com/widget/bookings/taiwo"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </>
  );
};

export default CalendlyWidget;
