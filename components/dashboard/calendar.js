/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
export default function Calendar() {
  

  return (
    <div className="flex flex-col">
      <div className="flex">
        <motion.button>
          <img src="/icons/leftArrow.svg"></img>
        </motion.button>
        <h1 className="text-3xl font-bold">February 2022</h1>
        <motion.button>
          <img src="/icons/rightArrow.svg"></img>
        </motion.button>
      </div>
      <div className="grid grid-rows-5 grid-cols-7">
        <h2 className="text-lg font-semibold">Sun</h2>
        <h2 className="text-lg font-semibold">Mon</h2>
        <h2 className="text-lg font-semibold">Tues</h2>
        <h2 className="text-lg font-semibold">Wed</h2>
        <h2 className="text-lg font-semibold">Thurs</h2>
        <h2 className="text-lg font-semibold">Fri</h2>
        <h2 className="text-lg font-semibold">Sat</h2>
      </div>
    </div>
  );
}
