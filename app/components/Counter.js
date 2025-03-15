"use client";

import { useState } from "react";

export default function ({ data }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>The data length is: {data.length}</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </>
  );
}
