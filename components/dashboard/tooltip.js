import React from "react";
import { motion } from "framer-motion";
export default function Tooltip({spending}) {
  return (
    <>
      <motion.div
        className="pb-4 rounded-md"
        id="tooltip-container"
        style={{
          background: "#474747",
          transform: "translateX(100px) translateY(-28px)",
          color: "white",
          fontFamily: "Manrope",
          fontSize: "20px",
        }}
      >
        <div
          style={{
            borderTop: "8px solid transparent",
            borderBottom: "8px solid transparent",
            borderRight: "8px solid #474747",
            transform: "translateX(-88px) translateY(15px)",
          }}
        ></div>
        <div className="flex align-center justify-center">
          <h1>{spending}</h1>
        </div>
      </motion.div>
    </>
  );
}
