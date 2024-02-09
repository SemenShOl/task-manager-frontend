import React from "react";
import cl from "./PriorityList.module.scss";
import { PriorityCell } from "../PriorityCell/PriorityCell";
import { priorities } from "../../utilites/appInfo";
export const PriorityList = ({ priorityList, size }) => {
  return (
    <div className={cl.priorityList} style={{ width: size }}>
      <PriorityCell
        size={size}
        numberOfTasks={priorityList[2]}
        color={priorities[2].color}
      />
      <PriorityCell
        size={size}
        numberOfTasks={priorityList[1]}
        color={priorities[1].color}
      />
      <PriorityCell
        size={size}
        numberOfTasks={priorityList[0]}
        color={priorities[0].color}
      />
    </div>
  );
};
