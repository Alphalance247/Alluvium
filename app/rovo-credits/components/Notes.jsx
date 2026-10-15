export default function Notes() {
  return (
    <section className="panel notes">
      <h2>About these figures</h2>
      <p>
        <b>Atlassian&apos;s published terms.</b> Seat allowances (25 / 70 / 150 credits per seat per month, and 250 /
        700 / 1,500 for Service and Teamwork Collections), the 10-credit cost of Quick Answers and basic agents, free
        search and summaries, and the $0.01 list price per extra credit all come from{" "}
        <a
          href="https://support.atlassian.com/rovo/docs/rovo-usage-limits"
          target="_blank"
          rel="noopener"
          style={{ color: "var(--accent)", fontWeight: 600 }}
        >
          Atlassian&apos;s Rovo credits documentation
        </a>
        . Credits pool across your organisation, reset monthly and do not roll over. Extra usage billing starts 3
        December 2026.
      </p>
      <p>
        <b>Alluvium planning assumptions.</b> Atlassian prices Think Deeper, advanced agents, Confluence slides, Jira
        agents and the Self-service Agent as variable. We use planning defaults for these, shown in each row, and you
        can replace any rate with the figures from your own usage dashboard (Atlassian Administration, Insights,
        Platform usage, Rovo credits).
      </p>
      <p>
        <b>Not included.</b> Automation steps, AI agent resolutions and Rovo Dev bill on separate meters. Prepaid
        credit packs and volume discounts are not modelled, so extra-usage costs are shown at list price.
      </p>
      <p>
        Figures reflect Atlassian&apos;s published terms as of October 2026. Confirm current pricing with Atlassian
        or your Alluvium contact before committing to a budget.
      </p>
    </section>
  );
}
