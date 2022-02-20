import React from "react";
import { motion } from "framer-motion";
export default function Tooltip({ tooltip }) {
  return (
    <>
      <motion.div
        className="pb-8 w-96 px-4 rounded-md fixed"
        id="tooltip-container"
        style={{
          background: "#474747",
          color: "white",
          fontFamily: "Manrope",
          fontSize: "14px",
        }}
      >
        <div
          style={{
            borderTop: "8px solid transparent",
            borderBottom: "8px solid transparent",
            borderRight: "8px solid #474747",
            transform: "-",
          }}
        ></div>
        <div className="flex align-center justify-center">
          <h1>{tooltip}</h1>
        </div>
      </motion.div>
    </>
  );
}
