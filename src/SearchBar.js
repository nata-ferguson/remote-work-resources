import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    const newQuery = e.target.value;

    setQuery(newQuery);

    // Automatically reset the data to its initial list if the query is empty
    if (newQuery === "") {
      onSearch("");
    }
  }

  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search for remote work resource name"
        value={query}
        onChange={handleChange}
      />
      <button className="search-button" onClick={() => onSearch(query)}>
        Search
      </button>
    </div>
  );
}
