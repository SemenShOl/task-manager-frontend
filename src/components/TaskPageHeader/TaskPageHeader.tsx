import { FC } from "react";
import cl from "./TaskPageHeader.module.scss";
import { PriorityList } from "../PriorityList/PriorityList";
import { addNumberFrontNull } from "../../utilites/dateUtilites";
import { TPriorityList } from "../../utilites/priorityUtilites";

type TaskPageHeaderProps = {
  month: string;
  dayOfWeek: string;
  dayOfMonth: number;
  priorityList: TPriorityList;
};

export const TaskPageHeader: FC<TaskPageHeaderProps> = ({
  month,
  dayOfWeek,
  dayOfMonth,
  priorityList,
}) => {
  return (
    <div className={cl.header}>
      <div className={cl.date}>
        <p className={cl.dayOfWeek}>{dayOfWeek.toUpperCase()}</p>
        <p className={cl.dayOfMonth}>{addNumberFrontNull(dayOfMonth)}</p>
        <p className={cl.month}>{month}</p>
      </div>
      <div className={cl.priorityList}>
        <PriorityList size={75} priorityList={priorityList} />
      </div>
    </div>
  );
};
