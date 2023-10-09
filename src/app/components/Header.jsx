import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Main</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/bio/details">Bio</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
