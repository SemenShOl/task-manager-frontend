//Ф-ия берет массив дней с задачами из БД и проверяет, есть ли переданный день (day) в этом списке, если да, создает для этого дня  priorityList
export const convertBDBusyDayInfoToPriorityList = (busyDays, day) => {
  const doesDayHaveTasks = busyDays.items.find(
    (busyDay) => busyDay.deadline === day.format("YYYY-MM-DD")
  );

  const priorityList = doesDayHaveTasks
    ? [doesDayHaveTasks.c, doesDayHaveTasks.b, doesDayHaveTasks.a]
    : [0, 0, 0];
  return priorityList;
};
