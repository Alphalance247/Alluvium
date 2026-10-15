import { nf } from "../data";

export default function WhereCreditsGo({ bars }) {
  return (
    <section className="panel">
      <h2>Where credits go</h2>
      <div className="bars">
        {bars.length === 0 ? (
          <span style={{ color: "var(--muted)", fontSize: "13px" }}>No credit-consuming usage entered.</span>
        ) : (
          bars.map((b) => (
            <div className="bar" key={b.label}>
              <span>{b.label}</span>
              <div className="track">
                <div className="fill" style={{ width: `${b.pct}%` }} />
              </div>
              <b>{nf.format(Math.round(b.credits))}</b>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
