import React from "react";
import { motion } from "framer-motion";
import spendingData from "../../data/spendingData.json";
import Navbar from "../../components/shared/navbar";
import CompletionBar from "../../components/shared/simplebar";

const allDays = [
  ...new Set(spendingData.map((i) => i.time.substring(0, i.time.indexOf("T")))),
]; // remove duplicates and convert to array to use map

const dayStructure = {};
for (const d of allDays) {
  dayStructure[d] = [];
  dayStructure[d].push(...spendingData.filter((i) => i.time.startsWith(d)));
}

export default function Day({ day }) {
  return (
    <div>
      <Navbar />
      <div className="container grid grid-cols-2 grid-rows-6 w-full p-8">
        <header className="flex items-center justify-center col-span-2">
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
        </header>
        <div className="col-span-2 bg-white p-4">
          <div className="grid bg-white border-orange-300 rounded-lg border p-6 px-10 grid-rows-2 grid-cols-2">
            <div className="col-span-2">
              <CompletionBar percentage={78} color="#ff9900" />
            </div>
            <div className="grid items-center">
              <p className="text-orange-500 text-sm bg-orange-100 w-40 text-center p-1 py-0.5 rounded-xl">
                You are on track! 😄
              </p>
            </div>
            <div className="flex flex-col items-end">
              <p>Remaining monthly budget</p>
              <p>$238.34 of $500</p>
            </div>
          </div>
        </div>
        <div className="row-span-2">another bank card</div>
        <div className="row-span-4">purchase history</div>
        <div className="row-span-2">goal save</div>

        <style jsx>{`
          .container {
            margin-left: 25vw;
            width: 75vw;
          }
          * {
            font-family: "Manrope", sans-serif;
          }
        `}</style>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      day: dayStructure[params.day],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: allDays.map((day) => {
      return {
        params: {
          day,
        },
      };
    }),
    fallback: false,
  };
}
