import { useState } from "react";
import Header from "./Header";
import RemoteResourcesList from "./RemoteResourcesList";
import SearchBar from "./SearchBar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  function handleSearch(query) {
    //console.log("Searching for: ", query);
    setSearchQuery(query);
    setSelectedCategory(query);
    setSelectedRegion(query);
  }

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <RemoteResourcesList
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        selectedRegion={selectedRegion}
      />
    </div>
  );
}

export default App;
