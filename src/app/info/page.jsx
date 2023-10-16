"use client";
import React, { Suspense } from "react";
import InfoComponent from "../components/InfoComponent";

const page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();

  return (
    <div>
      <Suspense fallback={<h1>Loading.........</h1>}>
        <h1>This is info page</h1>

        {data.map((element) => (
          <InfoComponent key={element.id} info={element} />
        ))}
      </Suspense>
    </div>
  );
};

export default page;
