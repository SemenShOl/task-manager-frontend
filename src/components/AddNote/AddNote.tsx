import React, { FC } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import cl from "./AddNote.module.scss";
import cn from "classnames";
import { AddNoteProps } from "./AddNoteProps";

export const AddNote: FC<AddNoteProps> = ({ size, className, onAddNote }) => {
  return (
    <div className={cn(cl.wrapper, className)} onClick={onAddNote}>
      <p>Добавить запись</p>
      <div className={cl.addIcon}>
        <IoMdAdd size={size} className={cl.plus} />
        <FaCircle size={size * 1.3} className={cl.circle} />
      </div>
    </div>
  );
};
