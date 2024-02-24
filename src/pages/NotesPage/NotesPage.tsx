import React, { useEffect, useState } from "react";
import cl from "./NotesPage.module.scss";

import { AddNote } from "../../components";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { PageWrapper } from "../../wrappers";
import { Note } from "../../components/Note/Note";
import { fetchDeleteNote, fetchGetAllNotes } from "../../redux/slices/notes";
import { TNote } from "../../types/globalTypes";
export const NotesPage = () => {
  useCheckAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchGetAllNotes());
    }, 300);
  }, []);
  const notes: TNote[] = useAppSelector((state) => state.notes.allNotes.items);

  const deleteNoteHandler = (id: number) => {
    dispatch(fetchDeleteNote(id));
  };

  return (
    <PageWrapper>
      <div className={cl.wrapper}>
        <div className={cl.notesList}>
          {notes.map((note) => (
            <Note
              key={note.id}
              fontSize={15}
              note={note}
              onDeleteNote={deleteNoteHandler}
              onClick={() => navigate(`/notes/${note.id}`)}
            />
          ))}
        </div>
        <AddNote
          size={35}
          className={cl.addBtn}
          onClick={() => navigate("/note")}
        />
      </div>
    </PageWrapper>
  );
};
