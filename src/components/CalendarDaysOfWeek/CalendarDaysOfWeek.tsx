import { FC } from "react";
import cl from "./CalendarDaysOfWeek.module.scss";
import { CalendarDaysOfWeekProps } from "./CalendarDaysOfWeekProps";

export const CalendarDaysOfWeek: FC<CalendarDaysOfWeekProps> = ({ days }) => {
  return (
    <div className={cl.days}>
      {days.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );
};
