export default function Results({ items, onSelect }) {
  // Show message if no results
  if (!items || items.length === 0) {
    return (
      <p className="results-empty">No results. Try adjusting your filters.</p>
    );
  }

  return (
    <div className="results-grid">
      {items.map((item) => (
        <div
          key={item.id}
          className="result-card"
          onClick={() => onSelect(item)}
        >
          <div className="result-title">{item.title}</div>
          <div className="result-meta">
            {item.author} · {item.year} · {item.type}
          </div>
        </div>
      ))}
    </div>
  );
}
