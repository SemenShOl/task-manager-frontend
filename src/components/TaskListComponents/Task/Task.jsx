import React, { useState } from "react";
import cl from "./Task.module.scss";
import { Checkbox } from "../../UI/Checkbox/Checkbox";
import cn from "classnames";
import { RxCross2 } from "react-icons/rx";
const Task = ({ title, id, isCompleted, onToggleTask, onDeleteTask }) => {
  // const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className={isCompleted ? cn(cl.wrapper, cl.active) : cl.wrapper}>
      <div className={cl.checkAndPWrapper}>
        <Checkbox onClick={() => onToggleTask(id)} completed={isCompleted} />
        <p className={cl.description}>{title}</p>
      </div>
      <RxCross2 className={cl.cross} onClick={() => onDeleteTask(id)} />
    </div>
  );
};

export default Task;
