import { FC } from "react";
import cl from "./CalendarHeader.module.scss";
import { TMomentDay } from "../../types/globalTypes";

export type CalendarHeaderProps = {
  activeDay: TMomentDay;
  onAdd: () => void;
  onSubtract: () => void;
  onReset: () => void;
};
export const CalendarHeader: FC<CalendarHeaderProps> = ({
  activeDay,
  onAdd,
  onSubtract,
  onReset,
}) => {
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
          <div key={day}>{day}</div>
        ))}
      </div>
    </div>
  );
};
