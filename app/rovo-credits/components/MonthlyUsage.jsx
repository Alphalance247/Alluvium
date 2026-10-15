import { ACTS } from "../data";

export default function MonthlyUsage({ active, onActiveChange, runs, credits, onRunChange, onCreditChange, onPreset }) {
  return (
    <section className="panel">
      <h2>Monthly usage</h2>
      <div className="preset">
        <button className="p" type="button" onClick={() => onPreset("light")}>
          Light adopter
        </button>
        <button className="p" type="button" onClick={() => onPreset("typical")}>
          Typical team
        </button>
        <button className="p" type="button" onClick={() => onPreset("heavy")}>
          Heavy AI use
        </button>
      </div>

      <div className="row2" style={{ marginBottom: "16px" }}>
        <div>
          <label htmlFor="active">Users actively using Rovo (%)</label>
          <input
            type="number"
            id="active"
            min="0"
            max="100"
            value={active}
            onChange={(e) => onActiveChange(e.target.value)}
          />
        </div>
      </div>

      <div className="act head">
        <span>Action</span>
        <span>Runs / user / mo</span>
        <span>Credits / run</span>
      </div>

      {ACTS.map((a) => (
        <div className="act" key={a.id}>
          <div className="nm">
            <span>{a.name}</span>
            <span className={`tag${a.free ? " free" : ""}`}>{a.tag}</span>
          </div>
          <div>
            <label className="sr" htmlFor={`r-${a.id}`}>
              Runs / user / mo
            </label>
            <input
              type="number"
              min="0"
              id={`r-${a.id}`}
              value={runs[a.id]}
              onChange={(e) => onRunChange(a.id, e.target.value)}
            />
          </div>
          <div>
            <label className="sr" htmlFor={`c-${a.id}`}>
              Credits / run
            </label>
            <input
              type="number"
              min="0"
              id={`c-${a.id}`}
              value={credits[a.id]}
              disabled={a.free}
              onChange={(e) => onCreditChange(a.id, e.target.value)}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
