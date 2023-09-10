import React from "react";

export default function ResourceItem({ resource }) {
  return (
    <div className="resource-card">
      <h1>
        <a href={resource.url} target="_blank" rel="noopener noreferrer">
          {resource.name}
        </a>
      </h1>
      <h2>Region: {resource.region}</h2>
      <h2>Category: {resource.category}</h2>
      <p>{resource.description}</p>
    </div>
  );
}
