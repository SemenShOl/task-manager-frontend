import React, { useEffect, useState } from "react";
import cl from "./NotesPage.module.scss";
import {
  fetchDeleteTask,
  fetchGetTasksForDeadline,
  fetchToggleTask,
} from "../../redux/slices/tasks";
import { AddNote } from "../../components";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { PageWrapper } from "../../wrappers";
import { Note } from "../../components/Note/Note";
export const NotesPage = () => {
  useCheckAuth();
  const navigate = useNavigate();
  //   const tasks: TTask[] = useAppSelector((state) => state.tasks.items);

  const dispatch = useAppDispatch();

  //   useEffect(() => {
  //     dispatch(fetchGetTasksForDeadline(activeDate));
  //   }, []);

  const deleteTaskHandler = (id: number) => {
    dispatch(fetchDeleteTask(id));
  };

  const toggleTaskHandler = (id: number) => {
    dispatch(fetchToggleTask(id));
  };

  const notes = [
    "Js basics",
    "Мат логика",
    "Мат логика",
    "Мат логика",
    "Мат логика",
    "Мат логика",
    "Мат логика",
    "Мат логика",
    "Мат логика",
    "Мат логика",
    "Мат логика",
    "Мат логика",
    "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
    // "Мат логика",
  ];
  return (
    <PageWrapper>
      <div className={cl.wrapper}>
        <div className={cl.notesList}>
          {notes.map((note) => (
            <Note fontSize={15} title={note} />
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
