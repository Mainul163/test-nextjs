"use client";
import React, { useState } from "react";
import styles from "../styles/header.module.css";
import FirstComponents from "../components/firstComponents.jsx";
import Image from "next/image";
import profilePic from "../../../public/rakib.jpg";

const page = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1 className={styles.test}>about page</h1>
      <FirstComponents />
      <Image
        src={profilePic}
        alt="Picture of the author"
        width={500}
        height={500}
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <br /> <br />
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default page;
