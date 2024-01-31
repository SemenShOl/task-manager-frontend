import React from "react";
import cl from "./AddTask.module.scss";
import { IoMdAdd } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { AddButton } from "../AddButton/AddButton";
export const AddTask = ({ title, fontSize, onAddTask }) => {
  return (
    <div className={cl.addNewTaskPart} onClick={onAddTask}>
      <div className={cl.addIcon}>
        <IoMdAdd size={20} className={cl.plus} />
        <FaCircle size={26} className={cl.circle} />
      </div>

      <p style={{ fontSize: fontSize }}>{title}</p>
    </div>
  );
};
