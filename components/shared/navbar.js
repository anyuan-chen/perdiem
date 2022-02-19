/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-20vw h-screen flex flex-col font-display">
      <img
        className="rounded-full"
        src="/photos/portrait.jpeg"
        alt="profile pic"
      ></img>
      <div>
        <h1>Aileen Luo</h1>
      </div>
      <ul className="flex flex-col">
        <li>
          <Link href="/breakdown/yearly">
            <a>Yearly Breakdown</a>
          </Link>
        </li>
        <li>
          <Link href="/breakdown/monthly">
            <a>Monthly Breakdown</a>
          </Link>
        </li>
        <li>
          <Link href="/breakdown/weekly">
            <a>Weekly Breakdown</a>
          </Link>
        </li>
      </ul>
      <Link href="/settings">
        <a>Settings</a>
      </Link>
    </nav>
  );
}
