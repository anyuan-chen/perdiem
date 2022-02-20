/* eslint-disable @next/next/no-img-element */
import React from "react";
import Tooltip from "./tooltip";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Goal({
  color,
  title,
  motivation,
  value1,
  value2,
  tip,
  tooltip,
}) {
  let arrow;
  let textColor;
  const [hover, setHover] = useState(false);
  if (color === "green") {
    arrow = "greenarrow";
    textColor = "489C6A";
  }
  if (color === "red") {
    arrow = "redarrow";
    textColor = "FF4D00";
  }
  if (color === "yellow") {
    arrow = "yellowarrow";
    textColor = "FF9900";
  }
  return (
    <div className="flex flex-col w-full pb-8">
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
          {title}
        </h1>
        <img
          src={`/photos/${arrow}.svg`}
          alt="writing"
          className="pr-4"
          style={{
            marginLeft: "auto",
            alignSelf: "center",
          }}
        ></img>
        <h4
          style={{
            color: `#${textColor}`,
            alignSelf: "end",
            lineHeight: "33px",
            fontWeight: "lighter",
          }}
        >
         {motivation}
        </h4>
      </div>

      <div
        className="w-full h-8 rounded-full"
        style={{ backgroundColor: "#E0E0E0", marginTop: "1rem" }}
      >
        <div
          className="w-full h-8"
          style={{
            backgroundColor: `#${textColor}`,
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
          {value1}
        </h1>
        <h1
          style={{
            fontSize: "24px",
            lineHeight: "33px",
            color: "#818181",
            marginLeft: "auto",
          }}
        >
          of {value2}{" "}
        </h1>
      </div>
      <div className="flex">
        <motion.button
          className="flex space-x-4 px-4 py-2 rounded-full mt-4"
          style={{ color: "#2E77CD", background: "#E2F0FF" }}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <h1>{tip}</h1>
          <img src="/photos/questionMark.svg" alt="question mark"></img>
        </motion.button>
        {hover && <Tooltip tooltip={tooltip}></Tooltip>}
      </div>
    </div>
  );
}
