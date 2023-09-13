import { useState } from "react";
import Header from "./Header";
import RemoteResourcesList from "./RemoteResourcesList";
import SearchBar from "./SearchBar";
import Footer from "./Footer";

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
      <Footer />
    </div>
  );
}

export default App;
