"use client";
import React from "react";

const page = ({ params }) => {
  console.log({ params });
  return (
    <div>
      <h1 style={{ color: "red" }}>this is id page 14</h1>
      <p>text id {params.id}</p>
    </div>
  );
};

export default page;
