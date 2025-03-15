import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/cabins">View all cabins</Link>
        </li>
        <li>
          <Link href="/accounts">Account</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
