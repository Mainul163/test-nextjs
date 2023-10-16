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
        <li>
          <Link href="/info">info</Link>
        </li>
        {/* <li>
          <Link href="/dynamic/1">Dynamic</Link>
        </li> */}
        <li>
          <Link
            href={{
              pathname: "/dynamic/1",
            }}
          >
            Dynamic
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
