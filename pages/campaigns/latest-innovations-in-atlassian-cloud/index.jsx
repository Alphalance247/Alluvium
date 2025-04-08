// components/CalendlyWidget.jsx

import { useEffect } from "react";
import Layout from "components/layout";

const LatestInnovationInAtlassianCloud = () => {
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
    <Layout>
      <div
        className="calendly-inline-widget"
        data-url="https://sites.ziftsolutions.com/atlassian.ziftsolutions.com/8a999784951ede96019522b12d6609b5"
        style={{ minWidth: "80%", height: "700px", borderRadius: "25px" }}
      ></div>
    </Layout>
  );
};

export default LatestInnovationInAtlassianCloud;
