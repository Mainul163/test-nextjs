"use client";
import React from "react";

const page = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  const data = await response.json();

  return (
    <div>
      <title>{data.id}</title>
      <h1 style={{ color: "red" }}>this is id page 14</h1>
      <p>text id {params.id}</p>
    </div>
  );
};

export default page;
