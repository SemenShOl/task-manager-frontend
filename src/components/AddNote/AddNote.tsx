import React, { FC } from "react";
import cl from "./AddNote.module.scss";
import cn from "classnames";
import { AddNoteProps } from "./AddNoteProps";
import { motion } from "framer-motion";
import { IoMdAdd } from "react-icons/io";
import { ICPlus } from "../../icons";
export const AddNote: FC<AddNoteProps> = ({ className, onAddNote }) => {
  return (
    <div className={cn(cl.wrapper, className)} onClick={onAddNote}>
      <motion.div
        className={cl.addIcon}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2, ease: "easeInOut" },
        }}
      >
        {/* <IoMdAdd size={35} className={cl.plus} /> */}
        <ICPlus className={cl.plus} />
      </motion.div>
    </div>
  );
};
