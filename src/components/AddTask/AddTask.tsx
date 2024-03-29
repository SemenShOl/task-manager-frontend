import { FC } from "react";
import cl from "./AddTask.module.scss";
import { IoMdAdd } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { AddTaskProps } from "./AddTaskProps";

export const AddTask: FC<AddTaskProps> = ({ title, fontSize, onAddTask }) => {
  return (
    <div className={cl.wrapper} onClick={onAddTask}>
      <div className={cl.addIcon}>
        <IoMdAdd className={cl.plus} />
        <FaCircle className={cl.circle} />
      </div>

      <p style={{ fontSize: fontSize }}>{title}</p>
    </div>
  );
};
