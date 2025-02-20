// components/CalendlyWidget.jsx

import { useEffect } from "react";

const LeadForm = () => {
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
        data-url="https://api.leadconnectorhq.com/widget/form/11k2AW90MBYdYeszQ6iD"
        style={{ minWidth: "80%", height: "700px", borderRadius: "25px" }}
      ></div>
    </>
  );
};

export default LeadForm;
