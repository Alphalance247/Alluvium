import { useEffect } from "react";

export default function JiraWidget() {
  useEffect(() => {
    window.csmWidgetSettings = {
      widgetId: "4aaa65b4-ad5b-4f2c-b41a-38e519a10d51",
      site: "one-atlas-smoc.atlassian.net",
      cloudId: "eb13ffce-9d54-49c5-a977-62129a36700b",
    };

    if (!document.getElementById("jira-csm-script")) {
      const script = document.createElement("script");

      script.id = "jira-csm-script";

      script.src =
        "https://one-atlas-smoc.atlassian.net/csm/widget/script.js?widgetId=4aaa65b4-ad5b-4f2c-b41a-38e519a10d51&site=one-atlas-smoc.atlassian.net&cloudId=eb13ffce-9d54-49c5-a977-62129a36700b";

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
