import React, { FC } from "react";
import cl from "./Task.module.scss";
import { Checkbox } from "../../UI/Checkbox/Checkbox";
import cn from "classnames";
import { RxCross2 } from "react-icons/rx";
import { IoMdMore } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { priorities } from "../../../utilites/priorityUtilites";
import { Line } from "../../UI/Line/Line";
import { TaskProps } from "./TaskProps";

export const Task: FC<TaskProps> = ({
  task,
  id,
  onToggleTask,
  onDeleteTask,
  onChangeTask,
}) => {
  console.log(task);
  const deleteTaskHandler = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();
    onDeleteTask(id);
  };

  const toggleTaskHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    onToggleTask(id);
  };
  return (
    <div className={cl.wrapper}>
      {/* <Line /> */}
      <div
        className={
          task.is_completed ? cn(cl.taskBody, cl.completed) : cl.taskBody
        }
        onClick={() => onChangeTask(task)}
      >
        <div className={cl.checkAndPWrapper}>
          <Checkbox
            circleSize={20}
            checkMarkSize={12}
            onClick={toggleTaskHandler}
            completed={task.is_completed}
          />
          <p className={cl.title}>{task.title}</p>
        </div>
        <div className={cl.moreAndDelete}>
          <FaCircle
            className={cl.circle}
            size={16}
            color={priorities[task.priority].color}
          />
          <IoMdMore className={cl.more} onClick={() => onChangeTask(task)} />
          <RxCross2 className={cl.cross} onClick={deleteTaskHandler} />
        </div>
      </div>
    </div>
  );
};
