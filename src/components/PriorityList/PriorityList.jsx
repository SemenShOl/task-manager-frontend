import React from "react";
import cl from "./PriorityList.module.scss";
import { PriorityCell } from "../PriorityCell/PriorityCell";
export const PriorityList = ({ tasksForDay, size }) => {
  return (
    <div className={cl.priorityList} style={{ width: size }}>
      <PriorityCell size={size} numberOfTasks={tasksForDay.a} />
      <PriorityCell size={size} numberOfTasks={tasksForDay.b} />
      <PriorityCell size={size} numberOfTasks={tasksForDay.c} />
    </div>
  );
};
