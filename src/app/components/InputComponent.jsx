"use client";
import React, { useState } from "react";

const InputComponent = () => {
  const [bookName, setBookName] = useState("");
  const [bookTopic, setBookTopic] = useState("");
  const handleFromSubmit = (e) => {
    e.preventDefault();
    console.log(bookName, bookTopic);
  };
  return (
    <div>
      <h1>this is input component</h1>
      <br />
      <br />
      <form onSubmit={handleFromSubmit}>
        <input
          type="text"
          id="bookName"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          id="bookTopic"
          value={bookTopic}
          onChange={(e) => setBookTopic(e.target.value)}
        />{" "}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputComponent;
