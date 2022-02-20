/* eslint-disable @next/next/no-img-element */
import React from "react";
import BankCard from "../components/shared/bankcard";
import Navbar from "../components/shared/navbar";
import Link from "next/link";
import CompletionBar from "../components/breakdown/bar";
import Goal from "../components/goals/goal";
import { useState } from "react";
import { useEffect } from "react";
const pairList = [
  {
    title: "total bank balance",
    value: 338.34,
  },
  {
    title: "money spent today",
    value: 22003.98,
  },
];
export default function Goals() {
  const [message, setMessage] = useState("");
  const [opacity, setOpacity] = useState(0.5);
  useEffect(() => {
    if (message !== "") {
      setOpacity(1);
    }
  }, [message]);

  return (
    <div>
      <Navbar></Navbar>
      <div
        className="px-24 py-16"
        style={{ width: "75vw", marginLeft: "25vw" }}
      >
        <div className="flex space-x-16">
          <div
            className="flex flex-col px-12 py-12 space-y-8 w-full rounded-2xl"
            style={{ height: "257px", border: "1px blue solid" }}
          >
            <h1
              className=" text-lg UPPERCASE text-textGray"
              style={{ lineHeight: "27px", letterSpacing: "0.1em" }}
            >
              YOUR MONTHLY BUDGET
            </h1>
            <div className="flex space-x-4">
              <span style={{ fontSize: "34px" }} className="text-textGray">
                $
              </span>
              <input
                type="text"
                className="rounded-lg border-dividerGray"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              ></input>
              <button
                className="px-4 text-white rounded-lg"
<<<<<<< HEAD
                onClick={() => setMessage("")}
                style={{
                  background: "rgba(46,119,205)",
                  opacity: `${opacity}`,
                }}
=======
                style={{ background: "rgba(46,119,205)" }}
>>>>>>> 53758e5 (Change yearly budget to monthly budget)
              >
                Save
              </button>
            </div>
            <Link href="/dashboard">
              <a className="underline text-blue-500">Enter a yearly budget</a>
            </Link>
          </div>
          <BankCard
            pairList={pairList}
            type="goal"
            style={{ width: "200px" }}
          ></BankCard>
        </div>
        <div className="">
          <div className="mt-16  rounded-2xl " style={{border : "1px solid #8567FE"}}>
            <div className="flex py-8 px-8">
              <h1
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  lineHeight: "41px",
                }}
                className="pr-6"
              >
                Current Goals
              </h1>
              <img src="/photos/writing.svg" alt="writing"></img>
              <button
                className="flex items-center justify-center rounded"
                style={{
                  background: "#2E77CD",
                  height: "auto",
                  width: "41px",
                  marginLeft: "auto",
                }}
              >
                <img src="/photos/plus.svg" alt="plus"></img>
              </button>
            </div>
            <div
              className="pb-4 px-8 flex flex-col scrollable overflow-auto"
              style={{ height: "45vh" }}
            >
              <Goal
                color="green"
                title="Save for a car"
                motivation="You are on track to finish in 14 months, keep it up!"
                value1="$10,339.04"
                value2="$13,984.23"
                tip="Add extra money once a day according to algorithm"
                tooltip="If you spent less than our recommended  (according to your overall budget): the difference will be added to this goal"
              ></Goal>
              <Goal
                color="red"
                title="Buy your mom a present"
                motivation="You need 1 more month to finish this goal :("
                value1="$20"
                value2="$60"
                tip="Take away money according to algorithm"
                tooltip="If you spent more than our recommended  (according to your overall budget): the difference will be removed from this goal"
              ></Goal>
              <Goal
                color="yellow"
                title="Bubble Tea fund"
                motivation="You have not deposited anything in this fund in the past 2 months"
                value1="$8"
                value2="$10"
                tip="Add extra money once a day according to algorithm"
                tooltip="If you spent more than our recommended  (according to your overall budget): the difference will be removed from this goal"
              ></Goal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
