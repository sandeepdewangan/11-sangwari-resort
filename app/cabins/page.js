import React from "react";

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div>
      <h1>Cabin Page</h1>
      {data.map((d) => (
        <p>{d.title}</p>
      ))}
    </div>
  );
};

export default page;
