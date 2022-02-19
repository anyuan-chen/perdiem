/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import CalendarDay from "./calendarDay";
import { useEffect } from "react";

var dates = [];


export default function Calendar() {
  var date = new Date(2022,1,28)
  useEffect(() => {
    for (var i = new Date(2022,1,28); i < new Date(2022,3,4); i.setDate(i.getDate() + 1))
        dates.push();
    }
    
  }, [dates])
  
  return (
    <div className="rounded-xl h-full" style={{ background: "linear-gradient(to right, #75C5FF, #1C69FF)", padding: "1px" }}>
      <div className="flex flex-col align-center h-full bg-white rounded-xl px-12" >
        <div className="flex pt-8 justify-center">
          <motion.button
            className="rounded-full w-12 h-12 flex items-center justify-center"
            style={{ backgroundColor: "#E9EFFD" }}
          >
            <img src="/icons/leftArrow.svg" alt="left arrow"></img>
          </motion.button>
          <h1 className="text-3xl font-bold px-8">February 2022</h1>
          <motion.button
            className="rounded-full w-12 h-12 flex items-center justify-center"
            style={{ backgroundColor: "#F5F3FF" }}
          >
            <img src="/icons/rightArrow.svg" alt="right arrow"></img>
          </motion.button>
        </div>
        <div className="grid grid-rows-5 grid-cols-7 gap-x-10 gap-y-5">
          <div className="flex flex-col-reverse">
            <h2 className="text-lg font-semibold text-center">Sun</h2>
          </div>
          <div className="flex flex-col-reverse">
            <h2 className="text-lg font-semibold text-center">Sun</h2>
          </div>
          <div className="flex flex-col-reverse">
            <h2 className="text-lg font-semibold text-center">Sun</h2>
          </div>
          <div className="flex flex-col-reverse">
            <h2 className="text-lg font-semibold text-center">Sun</h2>
          </div>
          <div className="flex flex-col-reverse">
            <h2 className="text-lg font-semibold text-center">Sun</h2>
          </div>
          <div className="flex flex-col-reverse">
            <h2 className="text-lg font-semibold text-center">Sun</h2>
          </div>
          <div className="flex flex-col-reverse">
            <h2 className="text-lg font-semibold text-center">Sun</h2>
          </div>
          <CalendarDay backgroundColor="#E9EFFD" date="30"></CalendarDay>
          <CalendarDay backgroundColor="#E9EFFD" date="30"></CalendarDay>
          <CalendarDay backgroundColor="#E9EFFD" date="30"></CalendarDay>
          <CalendarDay backgroundColor="#E9EFFD" date="30"></CalendarDay>
          <CalendarDay backgroundColor="#E9EFFD" date="30"></CalendarDay>
          <CalendarDay backgroundColor="#E9EFFD" date="30"></CalendarDay>
          <CalendarDay backgroundColor="#E9EFFD" date="30"></CalendarDay>
        </div>
      </div>
    </div>
  );
}
