import React from "react";
import { motion } from "framer-motion";

type Props = {
  onClick: () => void;
  className: string;
};

export const ICPlay = ({ onClick, className }: Props) => {
  return (
    <motion.svg
      className={className}
      onClick={onClick}
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
    </motion.svg>
  );
};
