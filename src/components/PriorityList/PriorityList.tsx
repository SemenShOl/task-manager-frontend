import { FC } from "react";
import cl from "./PriorityList.module.scss";
import { PriorityCell } from "../PriorityCell/PriorityCell";
import { priorities } from "../../utilites/priorityUtilites";
import { PriorityListProps } from "./PriorityListProps";
import cn from "classnames";
export const PriorityList: FC<PriorityListProps> = ({
  priorityList,
  size,
  isVertical,
  className,
}) => {
  return (
    <div className={cn(cl.priorityList, className)}>
      <PriorityCell
        className={cl.priorityCell}
        size={size}
        numberOfTasks={priorityList.high}
        color={priorities.get("high")?.color || ""}
      />
      <PriorityCell
        className={cl.priorityCell}
        size={size}
        numberOfTasks={priorityList.medium}
        color={priorities.get("medium")?.color || ""}
      />
      <PriorityCell
        className={cl.priorityCell} 
        size={size}
        numberOfTasks={priorityList.low}
        color={priorities.get("low")?.color || ""}
      />
    </div>
  );
};
