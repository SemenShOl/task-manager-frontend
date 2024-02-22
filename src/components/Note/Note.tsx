import React, { FC } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineNotes } from "react-icons/md";
import cl from "./Note.module.scss";
import { NoteProps } from "./NoteProps";

export const Note: FC<NoteProps> = ({
  fontSize,
  note,
  onDeleteNote,
  onClick,
}) => {
  const deleteNoteHandler = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();
    onDeleteNote(note.id);
  };
  return (
    <div className={cl.wrapper} onClick={onClick}>
      <div className={cl.titleAndIcon}>
        <MdOutlineNotes className={cl.noteIcon} />
        <p style={{ fontSize: fontSize }}>{note.title}</p>
      </div>
      <RxCross2 onClick={deleteNoteHandler} />
    </div>
  );
};
