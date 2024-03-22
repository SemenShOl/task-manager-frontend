import { TMomentDay } from "../types/globalTypes";
import moment from "moment";
export const addNumberFrontNull = (number: number) =>
  number < 10 ? "0" + number : number;

export const daysOfWeekInRussian = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
export const shortDaysOfWeekinRussian = [
  "Вс",
  "Пн",
  "Вт",
  "Ср",
  "Чт",
  "Пт",
  "Сб",
  // "Вc",
];
export const monthsInRussian = [
  "",
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export const createCalendar = (startDay: TMomentDay): TMomentDay[] => {
  const day = startDay.clone();
  const calendar = [...Array(41)].map(() => day.add(1, "day").clone());
  calendar.unshift(startDay.clone());
  return calendar;
};

export const getCalendarCellDayInfo = (
  thisCellDay: TMomentDay,
  activeDay: TMomentDay,
  isStudyDay: boolean
) => {
  const isWeeknd =
    thisCellDay.day() === 6 || thisCellDay.day() === 0 ? "weeknd" : "";
  const isCurrentDay =
    moment().format("DD.MM.YYYY") === thisCellDay.format("DD.MM.YYYY")
      ? "currentDay"
      : "";
  const isActiveMonth =
    activeDay.format("MMMM") === thisCellDay.format("MMMM")
      ? ""
      : "unActiveMonth";
  const isFreeFromStudy = isStudyDay ? " " : "freeFromStudy";
  return {
    isWeeknd,
    isCurrentDay,
    isActiveMonth,
    isFreeFromStudy,
  };
};

export const getDayInfo = (activeDate: string) => {
  const dateDate = new Date(activeDate);
  const dayOfWeek = shortDaysOfWeekinRussian[dateDate.getDay()];
  const month = monthsInRussian[dateDate.getMonth()];
  const dayOfMonth = dateDate.getDate();
  return {
    dayOfMonth,
    dayOfWeek,
    month,
  };
};
