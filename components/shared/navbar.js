/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  console.log(router.route);
  const textStyling = "text-navbarActiveText";
  const highlightStyling = "bg-navbarActiveHighlight";

  return (
    <nav className="w-20vw h-screen flex flex-col font-display border-r border-r-borderGray">
      <img
        className="rounded-full mx-16 my-16"
        src="/photos/portrait.jpeg"
        alt="profile pic"
      ></img>

      <button className=" w-full pr-16">
        <div
          className={`rounded-r-full ${
            router.route === "/dashboard" ? highlightStyling : ""
          }`}
        >
          <h3
            className={`text-left pl-16  font-bold  ${
              router.route === "/dashboard" ? textStyling : ""
            }`}
          >
            Dashboard
          </h3>
        </div>
      </button>

      <hr className="mx-16"></hr>

      <ul className="flex flex-col  text-textGray pr-16">
        <button className=" w-full">
          <div
            className={`rounded-r-full ${
              router.route === "/breakdown/yearly" ? highlightStyling : ""
            }`}
          >
            <Link href="/breakdown/yearly" passHref>
              <h3
                className={`text-left pl-16  font-bold  ${
                  router.route === "/breakdown/yearly" ? textStyling : ""
                }`}
              >
                <a>Yearly Breakdown</a>
              </h3>
            </Link>
          </div>
        </button>

        <button className=" w-full">
          <div
            className={`rounded-r-full ${
              router.route === "/breakdown/yearly" ? highlightStyling : ""
            }`}
          >
            <Link href="/breakdown/monthly" passHref>
              <h3
                className={`text-left pl-16  font-bold  ${
                  router.route === "/breakdown/monthly" ? textStyling : ""
                }`}
              >
                <a>Monthly Breakdown</a>
              </h3>
            </Link>
          </div>
        </button>

        <button className=" w-full">
          <div
            className={`rounded-r-full ${
              router.route === "/breakdown/weekly" ? highlightStyling : ""
            }`}
          >
            <Link href="/breakdown/yearly" passHref>
              <h3
                className={`text-left pl-16 font-bold  ${
                  router.route === "/breakdown/weekly" ? textStyling : ""
                }`}
              >
                <a>Weekly Breakdown</a>
              </h3>
            </Link>
          </div>
        </button>
      </ul>
      <hr className="mx-16"></hr>

      <ul className="text-textGray ">
        <button className=" w-full">
          <div
            className={`rounded-r-full ${
              router.route === "/goals" ? highlightStyling : ""
            }`}
          >
            <Link href="/goals" passHref>
              <h3
                className={`text-left pl-16  font-bold  ${
                  router.route === "/goals" ? textStyling : ""
                }`}
              >
                <a>Your Goals</a>
              </h3>
            </Link>
          </div>
        </button>
        <button className=" w-full">
          <div
            className={`rounded-r-full ${
              router.route === "/settings" ? highlightStyling : ""
            }`}
          >
            <Link href="/settings" passHref>
              <h3
                className={`text-left pl-16  font-bold  ${
                  router.route === "/settings" ? textStyling : ""
                }`}
              >
                <a>Settings</a>
              </h3>
            </Link>
          </div>
        </button>
        <button className=" w-full ">
          <div
            className={`rounded-r-full ${
              router.route === "/faq" ? highlightStyling : ""
            }`}
          >
            <Link href="/faq" passHref>
              <h3
                className={`text-left pl-16  font-bold  ${
                  router.query === "/faq" ? textStyling : ""
                }`}
              >
                <a>FAQ</a>
              </h3>
            </Link>
          </div>
        </button>
      </ul>
      <div></div>
    </nav>
  );
}
