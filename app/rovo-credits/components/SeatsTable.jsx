import { nf } from "../data";

export default function SeatsTable({ rows }) {
  return (
    <section className="panel">
      <h2>Seats needed to stay in allowance</h2>
      <div className="scroll">
        <table>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Per seat</th>
              <th>Pool</th>
              <th>Covers usage?</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.key}>
                <td>
                  {r.label}
                  {r.selected ? " (selected)" : ""}
                </td>
                <td>{r.per}</td>
                <td>{nf.format(r.pool)}</td>
                <td style={{ color: `var(--${r.ok ? "good" : "crit"})` }}>
                  {r.ok ? "Yes" : `Short ${nf.format(r.short)}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: "12px", color: "var(--muted)", margin: "10px 0 0" }}>
        Compared at your current seat counts. Seat prices are not included.
      </p>
    </section>
  );
}
