import moment from "moment";

export const addNumberFrontNull = (number) =>
  number < 10 ? "0" + number : number;

export const daysOfWeekInRussian = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
export const shortDaysOfWeekinRussian = [
  "Вc",
  "Пн",
  "Вт",
  "Ср",
  "Чт",
  "Пт",
  "Сб",
];
export const monthsInRussian = [
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

export const createCalendar = (startDay) => {
  const day = startDay.clone();
  const calendar = [...Array(41)].map(() => day.add(1, "day").clone());
  calendar.unshift(startDay.clone());
  return calendar;
};

export const getCalendarCellDayInfo = (thisCellDay, activeDay) => {
  const isWeeknd =
    thisCellDay.day() === 6 || thisCellDay.day() === 0 ? "weeknd" : null;
  const isCurrentDay =
    moment().format("DD.MM.YYYY") === thisCellDay.format("DD.MM.YYYY")
      ? "currentDay"
      : null;
  const isActiveMonth =
    activeDay.format("MMMM") === thisCellDay.format("MMMM")
      ? null
      : "unActiveMonth";
  return {
    isWeeknd,
    isCurrentDay,
    isActiveMonth,
  };
};
