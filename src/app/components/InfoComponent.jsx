import Link from "next/link";
import React from "react";

const InfoComponent = ({ info }) => {
  return (
    <div>
      <Link href={`dynamic/${info.id}`}>Dynamic Page</Link>
      <h1>{info.id}</h1>

      <br />
      <h5>{info.title}</h5>
      <br />
      <p>{info.body}</p>
    </div>
  );
};

export default InfoComponent;
