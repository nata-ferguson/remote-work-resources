import { useState } from "react";
import Header from "./Header";
import RemoteResourcesList from "./RemoteResourcesList";
import SearchBar from "./SearchBar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(query) {
    setSearchQuery(query);
  }

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <RemoteResourcesList searchQuery={searchQuery} />
    </div>
  );
}

export default App;
