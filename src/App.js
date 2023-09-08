import Header from "./Header";
import RemoteResourcesList from "./RemoteResourcesList";
import SearchBar from "./SearchBar";

function App() {
  function handleSearch(query) {
    console.log("Searching for: ", query);
  }
  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <RemoteResourcesList />
    </div>
  );
}

export default App;
