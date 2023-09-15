import React, { useState, useEffect } from "react";
import ResourceItem from "./ResourceItem";
import "./index.css";

function RemoteResourcesList({ searchQuery }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  //const [itemsPerPage, setItemsPerPage] = useState(9);
  const itemsPerPage = 9;

  //search filters
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");

  //grid/list view
  const [viewType, setViewType] = useState("grid");

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
  // and filter data based on selected filters
  // Each filter is independent, so if you don't set one (e.g., leave the search bar empty or don't select a region or category), that specific filter is effectively disabled.
  filteredData = data.filter((resource) => {
    const nameMatches = searchQuery
      ? resource.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true; //If searchQuery is empty, it returns true, effectively disabling this filter.

    const regionMatches = selectedRegion
      ? resource.region === selectedRegion
      : true;

    const categoryMatches = selectedCategory
      ? resource.category === selectedCategory
      : true;

    const specializationMatches = selectedSpecialization
      ? resource.specialization === selectedSpecialization
      : true;

    return (
      nameMatches && regionMatches && categoryMatches && specializationMatches
    );
  });

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
      <div>
        <div className="filter-container">
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="">All Regions</option>
            <option value="Global">Global</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Freelance Marketplace">Freelance Marketplace</option>
            <option value="Job Aggregator">Job Aggregator</option>
            <option value="Job Board">Job Board</option>
            <option value="Job Search Engine">Job Search Engine</option>
          </select>

          <select
            value={selectedSpecialization}
            onChange={(e) => setSelectedSpecialization(e.target.value)}
          >
            <option value="">All Specializations</option>
            <option value="Design">Design</option>
            <option value="General">General</option>
            <option value="Social Impact">Social Impact</option>
            <option value="Startups">Startups</option>
            <option value="Technology">Technology</option>
            <option value="Women">Women</option>
          </select>
        </div>
      </div>

      <div className="view-type-buttons">
        <button onClick={() => setViewType("grid")}>Grid View</button>
        <button onClick={() => setViewType("list")}>List View</button>
      </div>

      <div className={`resource-list ${viewType}`}>
        {currentItems.map((resource) => (
          <ResourceItem
            key={resource._id}
            resource={resource}
            viewType={viewType}
          />
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
