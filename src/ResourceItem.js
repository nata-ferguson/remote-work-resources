import React from "react";

export default function ResourceItem({ resource, viewType }) {
  const currentURL = window.location.href;
  //encoding the url and resource name for sharing
  const encodedURL = encodeURIComponent(currentURL);
  const encodedName = encodeURIComponent(resource.name);
  const encodedDescription = encodeURIComponent(resource.description);

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

      <div className="social-sharing">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedName}: ${encodedDescription}&url=${encodedURL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedURL}&title=${encodedName}&summary=${encodedDescription}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
