import React, { FC } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import cl from "./AddNote.module.scss";
import cn from "classnames";
import { AddNoteProps } from "./AddNoteProps";

export const AddNote: FC<AddNoteProps> = ({ size, className, onAddNote }) => {
  return (
    <div className={cn(cl.wrapper, className)} onClick={onAddNote}>
      <div className={cl.addIcon}>
        <IoMdAdd size={35} className={cl.plus} />
        <FaCircle size={45} className={cl.circle} />
      </div>
    </div>
  );
};
