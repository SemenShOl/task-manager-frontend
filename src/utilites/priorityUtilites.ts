//Ф-ия берет массив дней с задачами из БД и проверяет, есть ли переданный день (day) в этом списке, если да, создает для этого дня  priorityList
import colors from "../styles/colors.module.scss";
import { TMomentDay, TOption } from "../types/globalTypes";

export type TViewOfPriority = TOption & {
  key: TPriorityType;
  // title: string;
  color: string;
};
export type TViewOfPriorityList = {
  high: TViewOfPriority;
  medium: TViewOfPriority;
  low: TViewOfPriority;
};

export type TPriorityType = "low" | "medium" | "high";

export const priorities: TViewOfPriority[] = [
  { key: "low", title: "Низкий", color: colors.cPriority },
  { key: "medium", title: "Средний", color: colors.bPriority },
  { key: "high", title: "Высокий", color: colors.aPriority },
];

export type TPriorityList = {
  high: number;
  medium: number;
  low: number;
};
export type TBusyDay = {
  deadline: string;
  high: number;
  medium: number;
  low: number;
};

export const findCertainBusyDay = (
  busyDays: TBusyDay[],
  day: TMomentDay
): TPriorityList => {
  const tasksForDay = busyDays.find(
    (busyDay) => busyDay.deadline === day.format("YYYY-MM-DD")
  );

  const priorityList = tasksForDay
    ? tasksForDay
    : { high: 0, medium: 0, low: 0 };
  return priorityList;
};

// export const;
