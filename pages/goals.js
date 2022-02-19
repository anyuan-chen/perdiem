import React from "react";
import BankCard from "../components/shared/bankcard";
import Navbar from "../components/shared/navbar";
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
      <div className = "px-24 py-16" style={{ width: "75vw", marginLeft: "25vw" }}>
        <div className="flex space-x-16">
          <div
            className="flex flex-col px-12 py-12 space-y-6 border"
            style={{ height: "242px" }}
          >
            <h1 className=" text-lg UPPERCASE text-textGray" style={{lineHeight: "27px", letterSpacing: "0.1em"}}>YOUR MONTHLY BUDGET</h1>
            <div className="flex space-x-4">
              <span style={{ fontSize: "34px" }} className="text-textGray">
                $
              </span>
              <input type="text" className="rounded-lg border-dividerGray"></input>
              <button
                className="px-4 text-white rounded-lg"
                style={{ background: "rgba(46,119,205,0.5)" }}
              >
                Save
              </button>
            </div>
            <a className="underline text-blue-500" href="/dashboard">Enter a yearly budget</a>
          </div>
          <BankCard pairList={pairList} type="goal"></BankCard>
        </div>
      </div>
    </div>
  );
}
