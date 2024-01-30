import React from "react";
import { FaCircle } from "react-icons/fa";
import cl from "./PriorityCell.module.scss";
export const PriorityCell = ({ size, numberOfTasks, color }) => {
  return (
    <div className={cl.priority}>
      <FaCircle
        color={color}
        className={cl.circle}
        size={size / 4.5}
        style={{ marginBottom: size / 25 }}
      />
      <span style={{ fontSize: size / 5.5 }}>{numberOfTasks}</span>
    </div>
  );
};
