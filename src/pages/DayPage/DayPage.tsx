import React, { useEffect, useState } from "react";
import cl from "./DayPage.module.scss";
import {
  fetchDeleteTask,
  fetchGetTasksForDeadline,
  fetchToggleTask,
} from "../../redux/slices/tasks";
import { AddTask, TaskParametrs, TaskPageHeader } from "../../components";
import { getDayInfo } from "../../utilites/dateUtilites";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { TTask } from "../../types/globalTypes";
import { useParams } from "react-router-dom";
import { TPriorityList } from "../../utilites/priorityUtilites";
import { PageWrapper } from "../../wrappers";
import { TaskList } from "../../components/TaskList/TaskList";
import { Lesson } from "../../components/Lesson/Lesson";
import { TLesson, fetchGetLessonsForDate } from "../../redux/slices/study";
import { useTheme } from "../../hooks/useTheme";
type TModalParamsTask = {
  isActive: boolean;
  task: TTask | undefined;
};

export const DayPage = () => {
  console.log("day page rerenders");
  const { theme, setTheme } = useTheme();

  useCheckAuth();
  const tasks: TTask[] = useAppSelector((state) => state.tasks.items);
  const schedule: TLesson[] = useAppSelector(
    (state) => state.study.studyScheduleDay
  );
  const activeDate = useParams().date || "";

  const priorityList: TPriorityList = { low: 0, medium: 0, high: 0 };
  tasks.forEach((task) =>
    !task.is_completed ? priorityList[task.priority]++ : null
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetTasksForDeadline(activeDate));
    dispatch(fetchGetLessonsForDate(activeDate));
  }, [activeDate]);

  const { dayOfMonth, dayOfWeek, month } = getDayInfo(activeDate);

  const deleteTaskHandler = (id: number) => {
    dispatch(fetchDeleteTask(id));
  };

  const toggleTaskHandler = (id: number) => {
    dispatch(fetchToggleTask(id));
    setTheme("light");
  };

  const [modalParams, setModalParams] = useState({
    isActive: false,
    task: undefined,
  } as TModalParamsTask);

  const closeModalParamsHandler = () => {
    setModalParams((previous) => ({
      ...previous,
      isActive: false,
    }));
  };

  const openModalToCreateNewTaskHandler = () => {
    setModalParams({
      isActive: true,
      task: undefined,
    });
  };

  const openModalToChangeTaskHandler = (task: TTask) => {
    if (task) {
      setModalParams({
        isActive: true,
        task: task,
      });
    }
  };

  console.log(schedule);
  return (
    <PageWrapper>
      <div className={cl.wrapper}>
        <div className={cl.header}>
          <TaskPageHeader
            month={month}
            dayOfWeek={dayOfWeek}
            dayOfMonth={dayOfMonth}
            priorityList={priorityList}
          />
        </div>
        <div className={cl.tasksAndLessons}>
          <div className={cl.taskPart}>
            <AddTask
              title={"Добавить задачу"}
              fontSize={15}
              onAddTask={openModalToCreateNewTaskHandler}
            />
            <TaskList
              tasks={tasks}
              deleteTaskHandler={deleteTaskHandler}
              toggleTaskHandler={toggleTaskHandler}
              openModalToChangeTaskHandler={openModalToChangeTaskHandler}
            />
          </div>
          {schedule.length ? (
            <div className={cl.schedulePart}>
              {schedule.map((lesson) => (
                <Lesson lesson={lesson} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <TaskParametrs
        activeDay={activeDate}
        user_id={1}
        task={modalParams.task}
        isActive={modalParams.isActive}
        onClose={closeModalParamsHandler}
      />
    </PageWrapper>
  );
};
