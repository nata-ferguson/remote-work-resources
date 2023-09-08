import React from "react";

export default function ResourceItem({ resource }) {
  return (
    <div className="resource-card">
      <h1>
        <a href={resource.url} target="_blank" rel="noopener noreferrer">
          {resource.name}
        </a>
      </h1>
      <h3>Region: {resource.region}</h3>
      <h3>Category: {resource.category}</h3>
      <p>{resource.description}</p>
    </div>
  );
}
