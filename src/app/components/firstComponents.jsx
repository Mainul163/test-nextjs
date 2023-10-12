import Link from "next/link";
import React from "react";

const firstComponents = () => {
  return (
    <div>
      <h1>this is my first coomponents</h1>
      <Link href="/dynamic/1">User 1</Link>
      <Link href="/dynamic/2">User 2</Link>
      <Link href="/dynamic/3">User 3</Link>
      <br />
      <br />
      <Link href="/moredynamic/3/csk">more dynamic</Link>
      <br />
      <br />
    </div>
  );
};

export default firstComponents;
