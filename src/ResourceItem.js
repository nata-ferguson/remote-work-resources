import React, { useState, useEffect } from "react";

export default function ResourceItem({ resource, viewType }) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    //check if this resource is already liked when component mounts
    const likedResources = JSON.parse(
      localStorage.getItem("likedResources") || "[]"
    );
    setIsLiked(likedResources.includes(resource._id));
  }, [resource._id]);

  function handleLike() {
    let likedResources = JSON.parse(
      localStorage.getItem("likedResources") || "[]"
    );

    if (isLiked) {
      //Remove the resource from likedResources if it's already liked
      likedResources = likedResources.filter((id) => id !== resource._id);
    } else {
      //add the resource to likedResources if it's not liked yet
      likedResources.push(resource._id);
    }

    localStorage.setItem("likedResources", JSON.stringify(likedResources));
    setIsLiked(!isLiked); //toggle the isLiked state
  }

  return (
    <div className={`resource-card ${viewType === "list" ? "list-item" : ""}`}>
      <div className="heart-container">
        <h1>
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            {resource.name}
          </a>
        </h1>
        <button className="like-button" onClick={handleLike}>
          <i
            className="fas fa-heart heart-icon"
            style={{ color: isLiked ? "red" : "lightgrey" }}
          ></i>
        </button>
      </div>

      <div className={`${viewType === "list" ? "list-item-meta" : ""}`}>
        <h2>Region: {resource.region}</h2>
        <h2>Category: {resource.category}</h2>
      </div>

      <p>{resource.description}</p>
    </div>
  );
}
