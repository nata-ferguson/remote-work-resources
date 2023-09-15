import React from "react";

export default function ResourceItem({ resource, viewType }) {
  return (
    <div className={`resource-card ${viewType === "list" ? "list-item" : ""}`}>
      <h1>
        <a href={resource.url} target="_blank" rel="noopener noreferrer">
          {resource.name}
        </a>
      </h1>

      <div className={`${viewType === "list" ? "list-item-meta" : ""}`}>
        <h2>Region: {resource.region}</h2>
        <h2>Category: {resource.category}</h2>
      </div>

      <p>{resource.description}</p>
    </div>
  );
}
