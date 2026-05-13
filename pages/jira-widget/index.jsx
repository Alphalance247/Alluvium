import { useEffect } from "react";

export default function JiraWidget() {
  useEffect(() => {
    window.csmWidgetSettings = {
      widgetId: "1b9fdca4-3c1c-4ad6-8cb2-d8cdd3f5b758",
      site: "one-atlas-tmwv.atlassian.net",
      cloudId: "884720a9-0ef3-4650-82ee-aa5a9dfc6965",
    };

    if (!document.getElementById("jira-csm-script")) {
      const script = document.createElement("script");

      script.id = "jira-csm-script";

      script.src =
        "https://one-atlas-tmwv.atlassian.net/csm/widget/script.js?widgetId=1b9fdca4-3c1c-4ad6-8cb2-d8cdd3f5b758&site=one-atlas-tmwv.atlassian.net&cloudId=884720a9-0ef3-4650-82ee-aa5a9dfc6965";

      script.async = true;

      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    />
  );
}
