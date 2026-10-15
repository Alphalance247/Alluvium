export default function Overage({ price, onPriceChange, cap, onCapChange, extra, onExtraChange }) {
  return (
    <section className="panel">
      <h2>Overage</h2>
      <div className="row2">
        <div>
          <label htmlFor="price">Price per credit (USD)</label>
          <input
            type="number"
            id="price"
            min="0"
            step="0.001"
            value={price}
            onChange={(e) => onPriceChange(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cap">Monthly spend limit (USD, 0 = none)</label>
          <input type="number" id="cap" min="0" value={cap} onChange={(e) => onCapChange(e.target.value)} />
        </div>
      </div>
      <label className="toggle">
        <input type="checkbox" id="extra" checked={extra} onChange={(e) => onExtraChange(e.target.checked)} />
        Extra usage enabled (otherwise credit features pause when the pool runs out)
      </label>
    </section>
  );
}
