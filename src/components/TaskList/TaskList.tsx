import React, { FC } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import cl from "./TaskList.module.scss";
import { Task } from "../Task/Task";
import { TaskListProps } from "./TaskListProps";
import { motion } from "framer-motion";
import { listVariants } from "../../styles/animations";
export const TaskList: FC<TaskListProps> = ({
  tasks,
  deleteTaskHandler,
  toggleTaskHandler,
  openModalToChangeTaskHandler,
}) => {
  const [parent] = useAutoAnimate();

  return (
    <div className={cl.wrapper} ref={parent}>
      {tasks.map((task, i) => (
        <Task
          task={task}
          id={task.id || 0}
          onDeleteTask={deleteTaskHandler}
          onToggleTask={toggleTaskHandler}
          onChangeTask={openModalToChangeTaskHandler}
          key={task.id}
          index={i}
        />
      ))}
    </div>
  );
};
{
  /* </motion.div> */
}
{
  /* <motion.div
            variants={listVariants}
            initial="hidden"
            animate="visible"
            custom={i}
          > */
}
