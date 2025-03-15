import Counter from "@/_components/Counter";
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

      {/* Client component */}
      {/* We can pass data from server to client */}
      <Counter data={data} />
    </div>
  );
};

export default page;
