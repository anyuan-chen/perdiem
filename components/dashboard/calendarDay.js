import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Tooltip from "./tooltip";

function CalendarDay({ color, date, spending }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.a
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={`/day/${date.substring(0, date.indexOf("T"))}`}
      className="rounded-md"
      whileHover={{
        border: "1.5px solid #3B5EFF",
      }}
      style={{
        background: color,
        border: "border #AFAFAF 1px",
        height: "78px",
        border: "",
      }}
    >
      <p className="pt-3 pl-3">{date.substr(8, 2)}</p>
      {hover && <Tooltip spending={spending}></Tooltip>}
    </motion.a>
  );
}

export default CalendarDay;
