import { FC } from "react";
import cl from "./PriorityList.module.scss";
import { PriorityCell } from "../PriorityCell/PriorityCell";
import { priorities } from "../../utilites/priorityUtilites";
import { PriorityListProps } from "./PriorityListProps";

export const PriorityList: FC<PriorityListProps> = ({ priorityList, size }) => {
  return (
    <div className={cl.priorityList} style={{ width: size }}>
      <PriorityCell
        size={size}
        numberOfTasks={priorityList.high}
        color={priorities.high.color}
      />
      <PriorityCell
        size={size}
        numberOfTasks={priorityList.medium}
        color={priorities.medium.color}
      />
      <PriorityCell
        size={size}
        numberOfTasks={priorityList.low}
        color={priorities.low.color}
      />
    </div>
  );
};
