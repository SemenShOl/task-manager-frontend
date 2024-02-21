import React, { FC } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineNotes } from "react-icons/md";
import cl from "./Note.module.scss";
type NoteProps = {
  fontSize: number;
  title: string;
};

export const Note: FC<NoteProps> = ({ fontSize, title }) => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.titleAndIcon}>
        <MdOutlineNotes className={cl.noteIcon} />
        <p style={{ fontSize: fontSize }}>{title}</p>
      </div>
      <RxCross2 />
    </div>
  );
};
