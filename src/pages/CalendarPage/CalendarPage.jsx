import React, { useEffect, useState } from "react";
import moment from "moment";
import cl from "./CalendarPage.module.scss";
import { CalendarHeader, CalendarField } from "../../components";
import { useCheckAuth } from "../../hooks/useCheckAuth";
export const CalendarPage = () => {
  console.log("CalendarPage rerenders");
  useCheckAuth();
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
