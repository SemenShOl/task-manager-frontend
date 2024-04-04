import React, { useEffect, FC } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import cl from "./CalendarField.module.scss";
import { CalendarCell } from "../CalendarCell/CalendarCell";
import { fetchGetBusyDays } from "../../redux/slices/busyDays";
import { createCalendar } from "../../utilites/dateUtilites";
import { findCertainBusyDay } from "../../utilites/priorityUtilites";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { CalendarFieldProps } from "./CalendarFieldProps";
import { fetchGetScheduleForCurrent42Days } from "../../redux/slices/study";

export const CalendarField: FC<CalendarFieldProps> = ({
  startDay,
  activeDay,
}) => {
  const calendar = createCalendar(startDay);
  const [parent] = useAutoAnimate();

  const dispatch = useAppDispatch();
  const busyDays = useAppSelector((state) => state.busyDays.items);
  const studyDays = useAppSelector(
    (state) => state.study.scheduleForCurrent42Days
  );
  console.log(studyDays);
  useEffect(() => {
    dispatch(
      fetchGetBusyDays({
        from: startDay.format("YYYY-MM-DD"),
        to: calendar[41].format("YYYY-MM-DD"),
      })
    );
    dispatch(fetchGetScheduleForCurrent42Days(startDay.format("YYYY-MM-DD")));
  }, [startDay]);

  return (
    <div className={cl.wrapper}>
      <div className={cl.calendarWrapper} ref={parent}>
        {calendar.map((day, index) => {
          const priorityList = findCertainBusyDay(busyDays, day);
          return (
            <CalendarCell
              isStudyDay={studyDays[index]}
              thisCellDay={day}
              activeDay={activeDay}
              priorityList={priorityList}
              key={day.format("YYYY-MM-DD")}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};
