import React, { useState } from "react";
import cl from "./Task.module.scss";
import { Checkbox } from "../../UI/Checkbox/Checkbox";
import cn from "classnames";
import { RxCross2 } from "react-icons/rx";
import { IoMdMore } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import colors from "../../../styles/colors.module.scss";
const Task = ({ task, id, onToggleTask, onDeleteTask, onChangeTask }) => {
  // const [isCompleted, setIsCompleted] = useState(false);
  const priorityColor = {
    1: colors.aPriority,
    2: colors.bPriority,
    3: colors.cPriority,
  };
  return (
    <div className={task.is_completed ? cn(cl.wrapper, cl.active) : cl.wrapper}>
      <div className={cl.checkAndPWrapper}>
        <Checkbox
          circleSize={20}
          checkMarkSize={12}
          onClick={() => onToggleTask(id)}
          completed={task.is_completed}
        />
        <p className={cl.description}>{task.title}</p>
      </div>
      <div className={cl.moreAndDelete}>
        <FaCircle
          className={cl.circle}
          size={16}
          color={priorityColor[task.priority]}
        />
        <IoMdMore className={cl.more} onClick={() => onChangeTask(task)} />
        <RxCross2 className={cl.cross} onClick={() => onDeleteTask(id)} />
      </div>
    </div>
  );
};

export default Task;
