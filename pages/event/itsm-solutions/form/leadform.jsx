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
        data-url="https://api.leadconnectorhq.com/widget/form/HPY7IVD9x9Cl6Y8s4zd2"
        style={{ minWidth: "80%", height: "700px", borderRadius: "25px" }}
      ></div>
    </>
  );
};

export default LeadForm;
