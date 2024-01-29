import React, { useState } from "react";
import moment from "moment";
import cl from "./Calendar.module.scss";
import { CalendarHeader } from "../CalendarHeader/CalendarHeader";
import { CalendarField } from "../CalendarField/CalendarField";
export const Calendar = () => {
  const today = moment();
  const [activeDay, setActiveDay] = useState(today);
  const dayToStart = activeDay
    .clone()
    .startOf("month")
    .startOf("week")
    .add(1, "day");

  const addActiveDayHandler = () => {
    setActiveDay((activeDay) => activeDay.clone().add(1, "month"));
  };
  const subtractActiveDayHandler = () => {
    setActiveDay((activeDay) => activeDay.clone().subtract(1, "month"));
  };
  const resetActiveDayHandler = () => {
    setActiveDay(() => today.clone());
  };

  return (
    <div className={cl.wrapper}>
      <CalendarHeader
        activeDay={activeDay}
        onAdd={addActiveDayHandler}
        onSubtract={subtractActiveDayHandler}
        onReset={resetActiveDayHandler}
      />
      <CalendarField activeDay={activeDay} startDay={dayToStart} />
    </div>
  );
};
