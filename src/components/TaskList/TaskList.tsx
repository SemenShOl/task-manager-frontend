import React, { FC } from "react";
import cl from "./TaskList.module.scss";
import { Task } from "../Task/Task";
import { TaskListProps } from "./TaskListProps";

export const TaskList: FC<TaskListProps> = ({
  tasks,
  deleteTaskHandler,
  toggleTaskHandler,
  openModalToChangeTaskHandler,
}) => {
  return (
    <div className={cl.wrapper}>
      {tasks.map((task) => (
        <Task
          task={task}
          id={task.id || 0}
          onDeleteTask={deleteTaskHandler}
          onToggleTask={toggleTaskHandler}
          onChangeTask={openModalToChangeTaskHandler}
          key={task.id}
        />
      ))}
    </div>
  );
};
