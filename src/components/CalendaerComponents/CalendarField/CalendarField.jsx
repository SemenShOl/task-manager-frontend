import React, { useEffect } from "react";
import cl from "./CalendarField.module.scss";
import { CalendarCell } from "../Cell/CalendarCell";
import { fetchGetBusyDays } from "../../../redux/slices/tasks";
import { useDispatch, useSelector } from "react-redux";
import { createCalendar } from "../../../utilites/dateUtilites";
import { convertBDBusyDayInfoToPriorityList } from "../../../utilites/priorityUtilites";
export const CalendarField = ({ startDay, activeDay }) => {
  const calendar = createCalendar(startDay);
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
  return (
    <div className={cl.wrapper}>
      <div className={cl.calendarWrapper}>
        {calendar.map((day) => {
          const priorityList = convertBDBusyDayInfoToPriorityList(
            busyDays,
            day
          );
          return (
            <CalendarCell
              thisCellDay={day}
              activeDay={activeDay}
              priorityList={priorityList}
              key={day}
            />
          );
        })}
      </div>
    </div>
  );
};
