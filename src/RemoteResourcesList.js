import React, { useState, useEffect } from "react";
import ResourceItem from "./ResourceItem";
import "./index.css";

function RemoteResourcesList({ searchQuery }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    // This will only run once
    fetch("https://remote-work-resources-api.vercel.app/api/remoteWorkResource")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

  let filteredData = data;

  // If there is a search query, filter the data based on it
  if (searchQuery) {
    filteredData = data.filter(
      (resource) =>
        resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Implementing pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="resource-list">
        {currentItems.map((resource) => (
          <ResourceItem key={resource._id} resource={resource} />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPageCount}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(filteredData.length / itemsPerPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default RemoteResourcesList;
