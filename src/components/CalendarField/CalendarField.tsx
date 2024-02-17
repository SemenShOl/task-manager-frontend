import React, { useEffect, FC } from "react";
import cl from "./CalendarField.module.scss";
import { CalendarCell } from "../CalendarCell/CalendarCell";
import { fetchGetBusyDays } from "../../redux/slices/busyDays";
import { createCalendar } from "../../utilites/dateUtilites";
import { findCertainBusyDay } from "../../utilites/priorityUtilites";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { CalendarFieldProps } from "./CalendarFieldProps";

export const CalendarField: FC<CalendarFieldProps> = ({
  startDay,
  activeDay,
}) => {
  const calendar = createCalendar(startDay);

  const dispatch = useAppDispatch();
  const busyDays = useAppSelector((state) => state.busyDays.items);
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
          const priorityList = findCertainBusyDay(busyDays, day);
          return (
            <CalendarCell
              thisCellDay={day}
              activeDay={activeDay}
              priorityList={priorityList}
              key={day.format("YYYY-MM-DD")}
            />
          );
        })}
      </div>
    </div>
  );
};
