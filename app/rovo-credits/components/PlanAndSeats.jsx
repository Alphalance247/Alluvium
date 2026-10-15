import { PLANS } from "../data";

const SEAT_FIELDS = [
  { key: "jira", label: "Jira seats" },
  { key: "loom", label: "Loom seats" },
  { key: "conf", label: "Confluence seats" },
  { key: "coll", label: "Collection seats" },
];

export default function PlanAndSeats({ plan, onPlanChange, seats, onSeatChange }) {
  return (
    <section className="panel">
      <h2>Plan and seats</h2>
      <div className="seg" role="radiogroup" aria-label="Plan">
        <span style={{ display: "contents" }}>
          {Object.entries(PLANS).map(([key, p]) => (
            <span key={key} style={{ display: "contents" }}>
              <input
                type="radio"
                name="plan"
                id={`pl-${key[0]}`}
                value={key}
                checked={plan === key}
                onChange={() => onPlanChange(key)}
              />
              <label htmlFor={`pl-${key[0]}`}>
                {p.label}
                <small>{p.std} / seat</small>
              </label>
            </span>
          ))}
        </span>
      </div>

      <div className="row2">
        {SEAT_FIELDS.map((f) => (
          <div key={f.key}>
            <label htmlFor={`s-${f.key}`}>{f.label}</label>
            <input
              type="number"
              id={`s-${f.key}`}
              min="0"
              value={seats[f.key]}
              onChange={(e) => onSeatChange(f.key, e.target.value)}
            />
          </div>
        ))}
      </div>
      <p className="tag" style={{ fontSize: "12px", color: "var(--muted)", margin: "10px 0 0" }}>
        Collection seats (Service or Teamwork) carry 10x the allowance: 250 / 700 / 1,500. Allowances from all
        products pool into one org-wide balance and reset monthly without rollover.
      </p>
    </section>
  );
}
