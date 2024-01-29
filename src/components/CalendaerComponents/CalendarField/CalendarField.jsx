import React, { useEffect, useState } from "react";
import cl from "./CalendarField.module.scss";
import { CalendarCell } from "../Cell/CalendarCell";
import { fetchGetBusyDays } from "../../../redux/slices/tasks";
import { useDispatch, useSelector } from "react-redux";
export const CalendarField = ({ startDay, activeDay }) => {
  const day = startDay.clone();
  const calendar = [...Array(41)].map(() => day.add(1, "day").clone());
  calendar.unshift(startDay.clone());
  const dispatch = useDispatch();
  const busyDays = useSelector((state) => state.tasks.busyDays);
  useEffect(() => {
    dispatch(
      fetchGetBusyDays({
        from: startDay.format("YYYY-MM-DD"),
        to: calendar[41].format("YYYY-MM-DD"),
      })
    );
  }, [startDay]);
  console.log("busyDays: ", busyDays);
  return (
    <div className={cl.wrapper}>
      <div className={cl.calendarWrapper}>
        {calendar.map((day) => {
          const doesDayHaveTasks = busyDays.items.find(
            (busyDay) => busyDay.deadline === day.format("YYYY-MM-DD")
          );

          const tasksForDay = doesDayHaveTasks
            ? {
                a: doesDayHaveTasks.a,
                b: doesDayHaveTasks.b,
                c: doesDayHaveTasks.c,
              }
            : { a: 0, b: 0, c: 0 };

          return (
            <CalendarCell
              day={day}
              activeDay={activeDay}
              tasksForDay={tasksForDay}
            />
          );
        })}
      </div>
    </div>
  );
};
