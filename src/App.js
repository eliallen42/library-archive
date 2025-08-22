import ARCHIVE_DATA from "./Data/ArchiveData";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import Results from "./components/Results";
import Footer from "./components/Footer";
import "./index.css";
import { useState, useEffect } from "react"; // Add useEffect import

export default function App() {
  // State for filters and selected item
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");
  const [category, setCategory] = useState("All");
  const [yearMin, setYearMin] = useState("");
  const [yearMax, setYearMax] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // Set the browser tab title on mount
  useEffect(() => {
    document.title = "Library Archive";
  }, []);

  // Filter archive data based on current filter values
  const filtered = ARCHIVE_DATA.filter((item) => {
    const matchesQuery =
      !query ||
      `${item.title} ${item.author}`
        .toLowerCase()
        .includes(query.toLowerCase());

    const matchesType = type === "All" || item.type === type;
    const matchesCategory = category === "All" || item.category === category;

    const y = Number(item.year);
    const minOk = !yearMin || y >= Number(yearMin);
    const maxOk = !yearMax || y <= Number(yearMax);

    return matchesQuery && matchesType && matchesCategory && minOk && maxOk;
  });

  // Reset all filters
  const handleReset = () => {
    setQuery("");
    setType("All");
    setCategory("All");
    setYearMin("");
    setYearMax("");
  };

  return (
    <div>
      <Header />
      <FilterBar
        query={query}
        setQuery={setQuery}
        type={type}
        setType={setType}
        category={category}
        setCategory={setCategory}
        yearMin={yearMin}
        setYearMin={setYearMin}
        yearMax={yearMax}
        setYearMax={setYearMax}
        onReset={handleReset}
      />
      <Results items={filtered} onSelect={setSelectedItem} />
      {/* Show selected item details */}
      {selectedItem && (
        <div className="selected">
          <img
            src={`/thumbnails/${selectedItem.thumbnail}`}
            alt={selectedItem.title}
          />
          {selectedItem.title} <br />
          <em>{selectedItem.author}</em> ({selectedItem.year})<br />
          <span>{selectedItem.description}</span>
        </div>
      )}
      <Footer />
    </div>
  );
}
