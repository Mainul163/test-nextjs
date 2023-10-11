import React from "react";

const InfoComponent = ({ info }) => {
  return (
    <div>
      <h1>{info.id}</h1>
      <br />
      <h5>{info.title}</h5>
    </div>
  );
};

export default InfoComponent;
