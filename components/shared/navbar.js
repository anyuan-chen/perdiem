/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-20vw h-screen flex flex-col font-display">
      <img
        className="rounded-full mx-16 my-16"
        src="/photos/portrait.jpeg"
        alt="profile pic"
      ></img>
      <div className=" w-full pr-16">
        <div className="bg-navbarActiveHighlight rounded-r-full">
          <h3 className="pl-16 py-2 font-bold text-navbarActiveText mb-8">
            Dashboard
          </h3>
        </div>
      </div>
      <hr className="mx-16"></hr>
      <ul className="flex flex-col space-y-8">
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
      <hr className="mx-16"></hr>

      <ul>
        <li>
          <Link href="/goals">
            <a>Your Goals</a>
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <a>Settings</a>
          </Link>
        </li>
        <li>
          <Link href="/faq">
            <a>FAQ</a>
          </Link>
        </li>
      </ul>
      <div>
          
      </div>
    </nav>
  );
}
