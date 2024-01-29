import React from "react";
import moment from "moment";
import cn from "classnames";
import cl from "./CalendarCell.module.scss";
import { PriorityList } from "../../PriorityList/PriorityList";
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
      <PriorityList tasksForDay={tasksForDay} size={60} />

      <div className={cl.dayNumber}>
        <span>{day.date().valueOf("day")}</span>
        {isCurrentDay && <div className={cl.currentDay}></div>}
      </div>
    </div>
  );
};
