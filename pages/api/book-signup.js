import { environment } from "../../env/env.local";

const WEBHOOK_URL =
  "https://api.atlassian.com/automation/sc3/o/studio/t/workspace/i/62386105-f704-4438-9f09-2d52cfe78305/webhooks/a/01a0e8ba-163c-7c1d-ac0c-eba4db8da1da";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, firstName, system } = req.body || {};

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const webhookRes = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Automation-Webhook-Token": environment.COMPOUND_INTELLIGENCE_WEBHOOK_TOKEN,
      },
      body: JSON.stringify({
        email,
        firstName: firstName || "",
        system: system || "",
      }),
    });

    if (!webhookRes.ok) {
      const text = await webhookRes.text().catch(() => "");
      console.error("Compound Intelligence signup webhook failed", webhookRes.status, text);
      return res.status(502).json({ message: "Signup service unavailable" });
    }

    return res.status(200).json({ message: "ok" });
  } catch (err) {
    console.error("Compound Intelligence signup webhook error", err);
    return res.status(502).json({ message: "Signup service unavailable" });
  }
}
