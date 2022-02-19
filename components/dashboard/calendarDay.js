import React from "react";
import { motion } from "framer-motion";

function CalendarDay({color, date}) {
  return (
    <motion.a
      href={`/day/${date.substring(0, date.indexOf("T"))}`}
      className="rounded-md"
      whileHover={{
        border: "1.5px solid #3B5EFF",
      }}
      style={{
        background: color,
        border: "border #AFAFAF 1px",
        height: "78px",
      }}
    >
      <p className="pt-3 pl-3">{date.substr(8, 2)}</p>
    </motion.a>
  );
}


export default CalendarDay;