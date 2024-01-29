import React from "react";
import cl from "./CalendarHeader.module.scss";
import moment from "moment";

export const CalendarHeader = ({ activeDay, onAdd, onSubtract, onReset }) => {
  const daysOfWeek = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];

  return (
    <div className={cl.wrapper}>
      <div className={cl.header}>
        <h2>
          <span>{activeDay.format("MMMM")}</span> {activeDay.format("YYYY")}
        </h2>

        <div className={cl.btns}>
          <button onClick={onSubtract}>-</button>
          <button onClick={onReset}>сегодня</button>
          <button onClick={onAdd}>+</button>
        </div>
      </div>
      <div className={cl.days}>
        {daysOfWeek.map((day) => (
          <div>{day}</div>
        ))}
      </div>
    </div>
  );
};
