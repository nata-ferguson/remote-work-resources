import React, { useState, useEffect } from "react";

const RemoteWorkResources = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Remote Work Resources</h1>
      <ul>
        {data.map((resource) => (
          <li key={resource._id}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.name}
            </a>
            <br />
            <span>Region: {resource.region}</span>
            <br />
            <span>Category: {resource.category}</span>
            <br />
            <span>Description: {resource.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RemoteWorkResources;
