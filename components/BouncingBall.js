import React from "react";
import { motion } from "framer-motion";

const ballStyle = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "black",
  borderRadius: "0.5rem",
  marginLeft:"6px"
};

const bounceTransition = {
  y: {
    duration: 0.6,
    yoyo: Infinity,
    ease: "easeOut"
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.1
  }
};

export default function BouncingBall({children}) {
  return (
      <motion.span
        style={ballStyle}
        whileHover={{ scale: 1.5 }}
        transition={bounceTransition}
        animate={{
          y: ["150%", "-50%"],
          backgroundColor: ["#ff6699", "#6666ff"]
        }}
      >
          {children}
      </motion.span>
  );
}