import React, { FC } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineNotes } from "react-icons/md";
import cl from "./Note.module.scss";
import { NoteProps } from "./NoteProps";
import { motion } from "framer-motion";
export const Note: FC<NoteProps> = ({
  fontSize,
  note,
  onDeleteNote,
  onChangeNote,
}) => {
  const deleteNoteHandler = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();
    onDeleteNote(note.id);
  };

  const changeNoteHandler = () => onChangeNote(note);
  return (
    <motion.div
      className={cl.wrapper}
      onClick={changeNoteHandler}
      initial={{ opacity: 0, scaleX: 0.4 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={cl.titleAndIcon}>
        <MdOutlineNotes className={cl.noteIcon} />
        <p className={cl.tilte} style={{ fontSize: fontSize }}>
          {note.title}
        </p>
      </div>
      <RxCross2 onClick={deleteNoteHandler} />
    </motion.div>
  );
};
