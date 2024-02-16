import { FC } from "react";
import cn from "classnames";
import cl from "./CalendarCell.module.scss";
import { PriorityList } from "../PriorityList/PriorityList";
import { useNavigate } from "react-router-dom";
import { getCalendarCellDayInfo } from "../../utilites/dateUtilites";
import { CalendarCellProps } from "./CalendarCellProps";

export const CalendarCell: FC<CalendarCellProps> = ({
  thisCellDay,
  activeDay,
  priorityList,
}) => {
  const navigate = useNavigate();
  const { isWeeknd, isCurrentDay, isActiveMonth } = getCalendarCellDayInfo(
    thisCellDay,
    activeDay
  );
  const clickCellHandler = () => {
    navigate(`/calendar/${thisCellDay.format("YYYY-MM-DD")}`);
  };

  return (
    <div
      key={thisCellDay.format("DD.MM.YYYY")}
      className={cn(cl.cell, cl[isWeeknd], cl[isActiveMonth], cl[isCurrentDay])}
      onClick={clickCellHandler}
    >
      <PriorityList priorityList={priorityList} size={60} />
      <div className={cl.dayNumber}>{thisCellDay.date()}</div>
    </div>
  );
};
