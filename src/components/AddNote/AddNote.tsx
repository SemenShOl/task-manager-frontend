import React, { FC } from "react";
import cl from "./AddNote.module.scss";
import cn from "classnames";
import { AddNoteProps } from "./AddNoteProps";
// import { motion } from "framer-motion";
import { ICPlus } from "../../icons";
export const AddNote: FC<AddNoteProps> = ({ className, onAddNote }) => {
  return (
    <div className={cn(cl.wrapper, className)} onClick={onAddNote}>
      <div className={cl.addIcon}>
        {/* <IoMdAdd size={35} className={cl.plus} /> */}
        <ICPlus className={cl.plus} />
      </div>
    </div>
  );
};
