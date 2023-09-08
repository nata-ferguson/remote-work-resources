import React, { useState, useEffect } from "react";
import ResourceItem from "./ResourceItem";
import "./index.css";

function RemoteResourcesList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="resource-list">
        {data.map((resource) => (
          <ResourceItem key={resource._id} resource={resource} />
        ))}
      </div>
    </div>
  );
}

export default RemoteResourcesList;
