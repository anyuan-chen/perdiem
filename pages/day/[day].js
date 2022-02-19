import React from "react";
import { motion } from "framer-motion";
import spendingData from "../../data/spendingData.json";
import Navbar from "../../components/shared/navbar";
import CompletionBar from "../../components/shared/simplebar";
import BankCard from "../../components/shared/bankcard";

const allDays = [
  ...new Set(spendingData.map((i) => i.time.substring(0, i.time.indexOf("T")))),
]; // remove duplicates and convert to array to use map

const dayStructure = {};
for (const d of allDays) {
  dayStructure[d] = [];
  dayStructure[d].push(...spendingData.filter((i) => i.time.startsWith(d)));
}

export default function Day({ day }) {
  const bankColor =
    Math.abs(5) <= 5 ? "yellow" : changePercentage < 0 ? "green" : "red";
  return (
    <div>
      <Navbar />
      <div className="container grid grid-cols-2 grid-rows-6 w-full p-8 gap-8">
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
              <span style={{ marginLeft: `77%` }}>▲</span>
            </div>
            <div className="grid items-center">
              <p className="text-orange-500 text-sm bg-orange-100 w-40 text-center p-1 py-0.5 rounded-xl">
                You are on track! 😄
              </p>
            </div>
            <div className="flex flex-col items-end">
              <p className="uppercase tracking-widest text-xs font-medium">
                Remaining monthly budget
              </p>
              <p>
                <span className="font-bold text-xl">$238.34 </span>
                <span className="font-semibold text-xl text-gray-400">
                  of $500
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="row-span-2">
          <BankCard
            pairList={[
              { title: "recommended spending", value: "$400" },
              { title: "money spent today", value: 338.34 },
            ]}
          >
            <p className={`text-sm ${bankColor}`}>
              {5 < 0 ? "▲ " : "▼ "}&nbsp;&nbsp; 10% less than the recommended
            </p>
          </BankCard>
        </div>
        <div className="bg-white border-blue-100 rounded-lg border py-4 px-8 row-span-4 flex flex-col gap-3 items-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Purchase History
          </h1>
          <CompletionBar percentage={60} color="#2e77cd" />
          <div className="flex justify-between w-full mb-5">
            <p className="text-sm">Costco | 60% of daily spending</p>
            <p className="text-sm">$60</p>
          </div>
          <CompletionBar percentage={60} color="#2e77cd" />
          <div className="flex justify-between w-full mb-5">
            <p className="text-sm">Costco | 60% of daily spending</p>
            <p className="text-sm">$60</p>
          </div>
        </div>
        <div className="row-span-2 flex flex-col justify-evenly border rounded-lg p-2 px-10 border-blue-100">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Save for a car
          </h1>
          <div>
            <CompletionBar percentage={60} color="#489c6a" />
            <div className="flex justify-between w-full my-3">
              <p className="font-bold text-lg">$10,339.04</p>
              <p className="font-bold text-lg text-gray-400">of $13,984.23</p>
            </div>
          </div>
          <p>
            {5 < 0 ? "▲ " : "▼ "}&nbsp;&nbsp; You added $15 to your goal today
          </p>
        </div>

        <style jsx>{`
          .container {
            margin-left: 25vw;
            width: 75vw;
          }

          p.yellow {
            color: #ff9900;
          }

          p.red {
            color: #ff4d00;
          }

          p.green {
            color: #489c6a;
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
