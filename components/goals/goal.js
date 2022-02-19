/* eslint-disable @next/next/no-img-element */
import React from "react";
import Tooltip from "../dashboard/tooltip";
export default function Goal() {
  return (
    <div className="flex flex-col w-full">
      <hr color="#E0E0E0" size="1px" className="pb-4"></hr>

      <div className="flex">
        <h1
          style={{
            fontSize: "24px",
            lineHeight: "33px",
            color: "#474747",
            alignSelf: "end",
          }}
        >
          Save for A Car
        </h1>
        <img
          src="/photos/greenarrow.svg"
          alt="writing"
          className="pr-4"
          style={{
            marginLeft: "auto",
            alignSelf: "center",
          }}
        ></img>
        <h4
          style={{
            color: "#489C6A",
            alignSelf: "end",
            lineHeight: "33px",
            fontWeight: "lighter",
          }}
        >
          You are on track to finish in 14 months, keep it up!
        </h4>
      </div>

      <div
        className="w-full h-4"
        style={{ backgroundColor: "#E0E0E0", marginTop: "1rem" }}
      >
        <div
          className="w-full h-4"
          style={{
            backgroundColor: "#489C6A",
            width: "56%",
          }}
        ></div>
      </div>

      <div className="flex pt-4">
        <h1
          style={{
            fontSize: "24px",
            lineHeight: "33px",
            color: "#474747",
          }}
        >
          $10,339.04
        </h1>
        <h1
          style={{
            fontSize: "24px",
            lineHeight: "33px",
            color: "#818181",
            marginLeft: "auto",
          }}
        >
          of $13,984.23{" "}
        </h1>
      </div>
      <div className="flex">
        <button
          className="flex space-x-4 px-4 py-2 rounded-full mt-4"
          style={{ color: "#2E77CD", background: "#E2F0FF" }}
        >
          <h1>Add extra money once a day according to algorithm</h1>
          <img src="/photos/questionMark.svg" alt="question mark"></img>
        </button>
      </div>
    </div>
  );
}
