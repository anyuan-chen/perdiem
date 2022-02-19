/* eslint-disable @next/next/no-img-element */
import React from "react";
import BankCard from "../components/shared/bankcard";
import Navbar from "../components/shared/navbar";
import Link from "next/link";
import autoprefixer from "autoprefixer";
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
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="px-24 py-16"
        style={{ width: "75vw", marginLeft: "25vw" }}
      >
        <div className="flex space-x-16">
          <div
            className="flex flex-col px-12 py-12 space-y-8 w-full border "
            style={{ height: "257px", borderRadius: "4%" }}
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
              ></input>
              <button
                className="px-4 text-white rounded-lg"
                style={{ background: "rgba(46,119,205,0.5)" }}
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
          <div className="mt-16 mr-24 border rounded-2xl ">
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
            <div className="py-8 px-8 flex">
              <h1
                style={{
                  fontSize: "24px",
                  lineHeight: "33px",
                  color: "#474747",
                }}
              >
                Save for A Car
              </h1>
              <img
                src="/photos/greenarrow.svg"
                alt="writing"
                style={{
                  marginLeft: "auto",
                }}
              ></img>
              <h4 style={{ color: "#489C6A", justifyContent: "" }}>
                You are on track to finish in 14 months, keep it up!
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
