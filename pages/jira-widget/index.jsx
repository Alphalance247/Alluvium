import { useEffect } from "react";

export default function JiraWidget() {
  useEffect(() => {
    window.csmWidgetSettings = {
      widgetId: "09e960f0-aa19-4250-9c9e-13727cb70d3a",
      site: "alluviumdemo.atlassian.net",
      cloudId: "8b3f9314-316c-4b9a-8470-8b9298e51d38",
    };

    if (!document.getElementById("jira-csm-script")) {
      const script = document.createElement("script");

      script.id = "jira-csm-script";

      script.src =
        "https://alluviumdemo.atlassian.net/csm/widget/script.js?widgetId=09e960f0-aa19-4250-9c9e-13727cb70d3a&site=alluviumdemo.atlassian.net&cloudId=8b3f9314-316c-4b9a-8470-8b9298e51d38";

      script.async = true;

      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "fixed",
          bottom: "40px",
          right: "90px",
          background: "#fff",
          padding: "10px 14px",
          borderRadius: "12px",
          // boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          fontFamily: "Arial",
          fontSize: "14px",
          zIndex: 9999,
        }}
      >
        Chat to Tally 👉🏾
      </div>
    </div>
  );
}
