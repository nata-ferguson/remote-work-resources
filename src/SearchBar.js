import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSearch() {
    onSearch(query);
  }

  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search for remote work resources..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
