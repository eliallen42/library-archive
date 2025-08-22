export default function FilterBar({
  query,
  setQuery,
  type,
  setType,
  category,
  setCategory,
  yearMin,
  setYearMin,
  yearMax,
  setYearMax,
  onReset,
}) {
  // Main filter bar layout
  return (
    <div className="filterbar">
      <Search query={query} setQuery={setQuery} />
      <div className="filterbar-controls">
        <FilterType type={type} setType={setType} />
        <FilterCategory category={category} setCategory={setCategory} />
        <FilterYear
          yearMin={yearMin}
          setYearMin={setYearMin}
          yearMax={yearMax}
          setYearMax={setYearMax}
        />
        <Reset onReset={onReset} />
      </div>
    </div>
  );
}

// Search input for title/author/description
function Search({ query, setQuery }) {
  // Handle Enter key to trigger search (optional: could blur input or do nothing)
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      // Optionally blur the input or trigger a search action
      e.target.blur();
    }
  }

  return (
    <input
      type="search"
      className="filterbar-search"
      placeholder="Search title/author"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}

// Dropdown for filtering by type
function FilterType({ type, setType }) {
  return (
    <label className="filterbar-field">
      Type:
      <select
        className="filterbar-select"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="All">All Types</option>
        <option value="Book">Book</option>
        <option value="Newspaper">Newspaper</option>
        <option value="Magazine">Magazine</option>
        <option value="Journal">Journal</option>
        <option value="Map">Map</option>
        <option value="Documentary">Documentary</option>
        <option value="Music Album">Music Album</option>
        <option value="Artifact">Artifact</option>
        <option value="Reference">Reference</option>
        <option value="Audio Recording">Audio Recording</option>
        <option value="Report">Report</option>
        <option value="Document">Document</option>
      </select>
    </label>
  );
}

// Dropdown for filtering by category
function FilterCategory({ category, setCategory }) {
  return (
    <label className="filterbar-field">
      Category:
      <select
        className="filterbar-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Reference">Reference</option>
        <option value="Periodicals">Periodicals</option>
        <option value="Local History">Local History</option>
        <option value="Multimedia">Multimedia</option>
        <option value="Special Collections">Special Collections</option>
        <option value="Library Operations">Library Operations</option>
      </select>
    </label>
  );
}

// Inputs for filtering by year range
function FilterYear({ yearMin, setYearMin, yearMax, setYearMax }) {
  return (
    <label className="filterbar field filterbar-yearGroup">
      Year:
      <input
        type="number"
        className="filterbar-input"
        placeholder="Min"
        value={yearMin}
        onChange={(e) => setYearMin(e.target.value)}
      />
      -
      <input
        type="number"
        className="filterbar-input"
        placeholder="Max"
        value={yearMax}
        onChange={(e) => setYearMax(e.target.value)}
      />
    </label>
  );
}

// Button to reset all filters
function Reset({ onReset }) {
  return (
    <button
      type="button"
      className="filterbar-btn filterbar-btn--reset"
      onClick={onReset}
    >
      Reset
    </button>
  );
}
