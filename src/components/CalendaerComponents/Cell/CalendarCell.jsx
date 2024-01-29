import React from "react";
import moment from "moment";
import cn from "classnames";
import cl from "./CalendarCell.module.scss";
export const CalendarCell = ({ day, activeDay, tasksForDay }) => {
  const isWeeknd = day.day() === 6 || day.day() === 0 ? cl.weeknd : null;
  const isCurrentDay =
    moment().format("DD.MM.YYYY") === day.format("DD.MM.YYYY");
  const isActiveMonth =
    activeDay.format("MMMM") === day.format("MMMM") ? null : cl.unActiveMonth;
  return (
    <div
      key={day.format("DD.MM.YYYY")}
      className={cn(cl.cell, isWeeknd, isActiveMonth)}
      onClick={() => {
        // navigate(`/todos/${day.format("DD.MM.YYYY")}`)
        console.log("Click");
      }}
    >
      <div className={cl.taskPriorityList}>
        <div className={cl.priority}>
          <span>{tasksForDay.b}</span>
        </div>
        <div className={cl.priority}>
          <span>{tasksForDay.b}</span>
        </div>
        <div className={cl.priority}>
          <span>{tasksForDay.a}</span>
        </div>
      </div>
      <div className={cl.dayNumber}>
        <span>{day.date().valueOf("day")}</span>
        {isCurrentDay && <div className={cl.currentDay}></div>}
      </div>
    </div>
  );
};
