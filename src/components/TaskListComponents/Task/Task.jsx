import React, { useState } from "react";
import cl from "./Task.module.scss";
import { Checkbox } from "../../UI/Checkbox/Checkbox";
import cn from "classnames";
import { RxCross2 } from "react-icons/rx";
import { IoMdMore } from "react-icons/io";
const Task = ({ title, id, isCompleted, onToggleTask, onDeleteTask }) => {
  // const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className={isCompleted ? cn(cl.wrapper, cl.active) : cl.wrapper}>
      <div className={cl.checkAndPWrapper}>
        <Checkbox
          circleSize={20}
          checkMarkSize={12}
          onClick={() => onToggleTask(id)}
          completed={isCompleted}
        />
        <p className={cl.description}>{title}</p>
      </div>
      <div className={cl.moreAndDelete}>
        <IoMdMore className={cl.more} />
        <RxCross2 className={cl.cross} onClick={() => onDeleteTask(id)} />
      </div>
    </div>
  );
};

export default Task;
