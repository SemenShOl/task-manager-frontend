import { FC } from "react";
import cl from "./CalendarHeader.module.scss";
import {
  daysOfWeekInRussian,
  monthsInRussian,
} from "../../utilites/dateUtilites";
import { Button } from "../UI";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CalendarHeaderProps } from "./CalendarHeaderProps";
import { CalendarDaysOfWeek } from "../CalendarDaysOfWeek/CalendarDaysOfWeek";

export const CalendarHeader: FC<CalendarHeaderProps> = ({
  activeDay,
  onAdd,
  onSubtract,
  onReset,
}) => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.header}>
        <h2>
          <span>{monthsInRussian[+activeDay.format("M")]}</span>{" "}
          {activeDay.format("YYYY")}
        </h2>

        <div className={cl.btns}>
          <Button onClick={onSubtract}>
            <IoIosArrowBack size={15} />
          </Button>
          <Button onClick={onReset}>сегодня</Button>
          <Button onClick={onAdd}>
            <IoIosArrowForward size={15} />
          </Button>
        </div>
      </div>
      <CalendarDaysOfWeek days={daysOfWeekInRussian} />
    </div>
  );
};
