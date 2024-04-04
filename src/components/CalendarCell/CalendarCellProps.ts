import { TMomentDay } from "../../types/globalTypes";
import { TPriorityList } from "../../utilites/priorityUtilites";
export type CalendarCellProps = {
  priorityList: TPriorityList;
  thisCellDay: TMomentDay;
  activeDay: TMomentDay;
  isStudyDay: boolean;
  index: number;
};
