import React from "react";
import cl from "./TaskPageHeader.module.scss";
import { PriorityList } from "../../PriorityList/PriorityList";
import { addNumberFrontNull } from "../../../utilites/dateUtilites";
export const TaskPageHeader = ({ month, dayOfWeek, dayOfMonth, color }) => {
  return (
    <div className={cl.header}>
      <div className={cl.date}>
        <p className={cl.dayOfWeek} style={{ color: color }}>
          {dayOfWeek.toUpperCase()}
        </p>
        <p className={cl.dayOfMonth} style={{ color: color }}>
          {addNumberFrontNull(dayOfMonth)}
        </p>
        <p className={cl.month} style={{ color: color }}>
          {month}
        </p>
      </div>
      <div className={cl.priorityList}>
        <PriorityList size={75} tasksForDay={{ a: 5, b: 4, c: 3 }} />
      </div>
    </div>
  );
};
