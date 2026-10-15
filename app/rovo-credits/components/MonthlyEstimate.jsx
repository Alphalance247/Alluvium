import { nf, usd } from "../data";

export default function MonthlyEstimate({ statusClass, statusText, used, pool, pct, inW, overW, over, cost, msg }) {
  return (
    <section className="panel sticky">
      <h2>Monthly estimate</h2>
      <div className={`status ${statusClass}`}>{statusText}</div>
      <div className="big">{nf.format(Math.round(used))}</div>
      <div style={{ color: "var(--muted)", fontSize: "13px" }}>
        credits used of <span style={{ fontFamily: "var(--mono)" }}>{nf.format(pool)}</span> pooled
      </div>
      <div className="meter" aria-hidden="true">
        <i style={{ background: "var(--accent-fill)", width: `${inW}%` }} />
        <i style={{ background: "var(--crit)", width: `${overW}%` }} />
      </div>
      <div className="legend">
        <span>{Math.round(pct)}% of pool</span>
        <span>{over > 0 ? `${nf.format(Math.round(over))} over` : `${nf.format(Math.round(pool - used))} left`}</span>
      </div>
      <dl>
        <dt>Pooled allowance</dt>
        <dd>{nf.format(pool)}</dd>
        <dt>Credits used</dt>
        <dd>{nf.format(Math.round(used))}</dd>
        <dt>Credits over allowance</dt>
        <dd>{nf.format(Math.round(over))}</dd>
        <dt>Extra usage cost / month</dt>
        <dd>{usd(cost)}</dd>
        <dt className="tot">Extra usage cost / year</dt>
        <dd>{usd(cost * 12)}</dd>
      </dl>
      <p style={{ fontSize: "13px", color: "var(--muted)", margin: "14px 0 0" }}>{msg}</p>
    </section>
  );
}
