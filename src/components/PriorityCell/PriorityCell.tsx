import React, { FC } from "react";
import { FaCircle } from "react-icons/fa";
import cl from "./PriorityCell.module.scss";
import cn from "classnames";
import { PriorityCellProps } from "./PriorityCellProps";
export const PriorityCell: FC<PriorityCellProps> = ({
  size,
  numberOfTasks,
  color,
  className
}) => {
  return (
    <div className={cn(cl.priority, className)}>
      <FaCircle
        color={color}
        className={cl.circle}
      />
      <span >{numberOfTasks}</span>
    </div>
  );
};
