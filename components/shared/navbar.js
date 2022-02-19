/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Navbar() {
  const router = useRouter();
  console.log(router.route);
  const textStyling = "text-navbarActiveText";
  const highlightStyling = "bg-navbarActiveHighlight";

  return (
    <nav className="w-20vw h-screen flex flex-col font-display border-r border-r-borderGray">
      <img
        className="rounded-full mx-28 mt-16 mb-12"
        src="/photos/portrait.jpeg"
        alt="profile pic"
      ></img>

      <button className=" w-full pr-28 pb-10">
        <motion.div
          className={`rounded-r-full py-3 ${
            router.route === "/dashboard" ? highlightStyling : ""
          }`}
          whileHover={{
            color: "rgb(46, 119, 205)",
          }}
        >
          <h3
            className={`text-left pl-24  font-semibold text-xl ${
              router.route === "/dashboard" ? textStyling : ""
            }`}
          >
            Dashboard
          </h3>
        </motion.div>
      </button>

      <hr className="mx-24 border-dividerGray"></hr>

      <ul className="flex flex-col  text-textGray pr-16 pt-10 space-y-12 pb-10">
        <button className=" w-full">
          <motion.div
            className={`rounded-r-full ${
              router.route === "/breakdown/yearly" ? highlightStyling : ""
            }`}
            whileHover={{
              color: "rgb(46, 119, 205)",
            }}
          >
            <Link href="/breakdown/yearly" passHref>
              <h3
                className={`text-left pl-24  font-semibold text-xl  ${
                  router.route === "/breakdown/yearly" ? textStyling : ""
                }`}
              >
                <a>Yearly Breakdown</a>
              </h3>
            </Link>
          </motion.div>
        </button>

        <button className=" w-full">
          <motion.div
            className={`rounded-r-full ${
              router.route === "/breakdown/yearly" ? highlightStyling : ""
            }`}
            whileHover={{
              color: "rgb(46, 119, 205)",
            }}
          >
            <Link href="/breakdown/monthly" passHref>
              <h3
                className={`text-left pl-24  font-semibold text-xl  ${
                  router.route === "/breakdown/monthly" ? textStyling : ""
                }`}
              >
                <a>Monthly Breakdown</a>
              </h3>
            </Link>
          </motion.div>
        </button>

        <button className=" w-full">
          <motion.div
            className={`rounded-r-full ${
              router.route === "/breakdown/weekly" ? highlightStyling : ""
            }`}
            whileHover={{
              color: "rgb(46, 119, 205)",
            }}
          >
            <Link href="/breakdown/yearly" passHref>
              <h3
                className={`text-left pl-24 font-semibold text-xl  ${
                  router.route === "/breakdown/weekly" ? textStyling : ""
                }`}
              >
                <a>Weekly Breakdown</a>
              </h3>
            </Link>
          </motion.div>
        </button>
      </ul>
      <hr className="mx-24 border-dividerGray"></hr>

      <ul className="text-textGray pt-10 space-y-12 pb-10">
        <button className=" w-full">
          <motion.div
            className={`rounded-r-full ${
              router.route === "/goals" ? highlightStyling : ""
            }`}
            whileHover={{
              color: "rgb(46, 119, 205)",
            }}
          >
            <Link href="/goals" passHref>
              <h3
                className={`text-left pl-24  font-semibold text-xl  ${
                  router.route === "/goals" ? textStyling : ""
                }`}
              >
                <a>Your Goals</a>
              </h3>
            </Link>
          </motion.div>
        </button>
        <button className=" w-full">
          <motion.div
            className={`rounded-r-full ${
              router.route === "/settings" ? highlightStyling : ""
            }`}
          >
            <Link href="/settings" passHref>
              <h3
                className={`text-left pl-24  font-semibold text-xl  ${
                  router.route === "/settings" ? textStyling : ""
                }`}
              >
                <a>Settings</a>
              </h3>
            </Link>
          </motion.div>
        </button>
        <button className=" w-full ">
          <motion.div
            className={`rounded-r-full ${
              router.route === "/faq" ? highlightStyling : ""
            }`}
            whileHover={{
              color: "rgb(46, 119, 205)",
            }}
          >
            <Link href="/faq" passHref>
              <h3
                className={`text-left pl-24  font-semibold text-xl  ${
                  router.query === "/faq" ? textStyling : ""
                }`}
              >
                <a>FAQ</a>
              </h3>
            </Link>
          </motion.div>
        </button>
      </ul>
      <div className="flex flex-row-reverse px-20 ">
        <img src="/icons/questionIcon.svg" className="pl-5"></img>
        <img src="/icons/settingsIcon.svg"></img>
      </div>
    </nav>
  );
}
