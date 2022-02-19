import React from "react";
import { motion } from "framer-motion";

export default function CalendarDay(props) {
  return (
    <motion.div
      className="rounded-md"
      whileHover={{
        border: "1.5px solid #3B5EFF",
      
      }}
      style={{
        backgroundColor: props.backgroundColor,
        border: "border #AFAFAF 1px",
        height: "78px",
      }}
    >
      <p className="pt-3 pl-3">{props.date.substr(8,2)}</p>
    </motion.div>
  );
}
