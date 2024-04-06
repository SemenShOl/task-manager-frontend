import React, { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import cl from "./NotesPage.module.scss";
import { AddNote, Note, NotesParametrs } from "../../components";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchDeleteNote, fetchGetAllNotes } from "../../redux/slices/notes";
import { TNote } from "../../types/globalTypes";
export const NotesPage = () => {
  const [parent] = useAutoAnimate();

  type TModalParamsNote = {
    isActive: boolean;
    note: TNote | undefined;
  };

  useCheckAuth();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGetAllNotes());
  }, []);
  const notes: TNote[] = useAppSelector((state) => state.notes.allNotes.items);

  const deleteNoteHandler = (id: number) => {
    dispatch(fetchDeleteNote(id));
  };
  const [modalParams, setModalParams] = useState({
    isActive: false,
    note: undefined,
  } as TModalParamsNote);

  const closeModalParamsHandler = () => {
    document.body.style.overflow = "";
    setModalParams((previous) => ({
      ...previous,
      isActive: false,
    }));
  };

  const openModalToCreateNewNoteHandler = () => {
    document.body.style.overflow = "hidden";
    setModalParams({
      isActive: true,
      note: undefined,
    });
    // setTheme('')
  };

  const openModalToChangeNoteHandler = (note: TNote) => {
    document.body.style.overflow = "hidden";
    if (note) {
      setModalParams({
        isActive: true,
        note: note,
      });
    }
  };
  return (
    <div>
      <div className={cl.wrapper}>
        <div className={cl.notesList} ref={parent}>
          {notes.map((note) => (
            <Note
              key={note.id}
              fontSize={15}
              note={note}
              onDeleteNote={deleteNoteHandler}
              onChangeNote={openModalToChangeNoteHandler}
            />
          ))}
        </div>
        <AddNote
          size={35}
          className={cl.addBtn}
          onAddNote={openModalToCreateNewNoteHandler}
        />
      </div>
      <div>
        <NotesParametrs
          user_id={21}
          activeNote={modalParams.note}
          isActive={modalParams.isActive}
          onClose={closeModalParamsHandler}
        />
      </div>
    </div>
  );
};
