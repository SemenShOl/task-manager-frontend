import React from "react";
import { motion } from "framer-motion";

type Props = {
  onClick: () => void;
  className: string;
};

export const ICPause = ({ onClick, className }: Props) => {
  return (
    <motion.svg
      className={className}
      onClick={onClick}
      //   whileTap={{ scale: 0.9 }}
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"></path>
    </motion.svg>
  );
};
