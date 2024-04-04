import { FC } from "react";
import cn from "classnames";
import cl from "./CalendarCell.module.scss";
import { PriorityList } from "../PriorityList/PriorityList";
import { useNavigate } from "react-router-dom";
import { getCalendarCellDayInfo } from "../../utilites/dateUtilites";
import { CalendarCellProps } from "./CalendarCellProps";
import { MdOutlineWeekend } from "react-icons/md";
import { LuBookMarked } from "react-icons/lu";
import { motion } from "framer-motion";
import { cellVariants } from "../../styles/animations";
export const CalendarCell: FC<CalendarCellProps> = ({
  thisCellDay,
  activeDay,
  priorityList,
  isStudyDay,
  index,
}) => {
  const navigate = useNavigate();
  const { isWeeknd, isCurrentDay, isActiveMonth, isFreeFromStudy } =
    getCalendarCellDayInfo(thisCellDay, activeDay, isStudyDay);
  const clickCellHandler = () => {
    navigate(`/${thisCellDay.format("YYYY-MM-DD")}`);
  };

  return (
    <motion.div
      variants={cellVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      key={thisCellDay.format("DD.MM.YYYY")}
      className={cn(
        cl.cell,
        cl[isWeeknd],
        cl[isActiveMonth],
        cl[isCurrentDay],
        cl[isFreeFromStudy]
      )}
      onClick={clickCellHandler}
    >
      <PriorityList priorityList={priorityList} size={60} />
      <div className={cl.dayNumber}>{thisCellDay.date()}</div>
      {isStudyDay ? (
        <LuBookMarked className={cl.workIcon} />
      ) : (
        <MdOutlineWeekend className={cl.restIcon} />
      )}
    </motion.div>
  );
};
