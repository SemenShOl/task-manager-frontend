import React from "react";
import cl from "./PriorityList.module.scss";
import { PriorityCell } from "../PriorityCell/PriorityCell";
import colors from "../../styles/colors.module.scss";

export const PriorityList = ({ tasksForDay, size }) => {
  return (
    <div className={cl.priorityList} style={{ width: size }}>
      <PriorityCell
        size={size}
        numberOfTasks={tasksForDay.a}
        color={colors.aPriority}
      />
      <PriorityCell
        size={size}
        numberOfTasks={tasksForDay.b}
        color={colors.bPriority}
      />
      <PriorityCell
        size={size}
        numberOfTasks={tasksForDay.c}
        color={colors.cPriority}
      />
    </div>
  );
};
