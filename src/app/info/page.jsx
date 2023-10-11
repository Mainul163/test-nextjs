import React from "react";
import InfoComponent from "../components/InfoComponent";

const page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return (
    <div>
      <h1>This is info page</h1>

      {data.map((element) => (
        <InfoComponent key={element.id} info={element} />
      ))}
    </div>
  );
};

export default page;
