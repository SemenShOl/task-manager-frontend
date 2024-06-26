import React, { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import cl from "./DayPage.module.scss";
import { listVariants } from "../../styles/animations";
import {
  fetchDeleteTask,
  fetchGetTasksForDeadline,
  fetchToggleTask,
} from "../../redux/slices/tasks";
import {
  AddTask,
  TaskParametrs,
  TaskPageHeader,
  Lesson,
  TaskList,
} from "../../components";
import { getDayInfo } from "../../utilites/dateUtilites";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { TTask } from "../../types/globalTypes";
import { useParams } from "react-router-dom";
import { TPriorityList } from "../../utilites/priorityUtilites";
import { PageWrapper } from "../../wrappers";
import { TLesson, fetchGetLessonsForDate } from "../../redux/slices/study";
import { motion } from "framer-motion";
type TModalParamsTask = {
  isActive: boolean;
  task: TTask | undefined;
};

export const DayPage = () => {
  const [parent] = useAutoAnimate();
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

  return (
    <div className={cl.wrapper}>
      {/* <div className={cl.container}> */}
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
            <div className={cl.addButton}>
              <AddTask
                title={"Добавить задачу"}
                fontSize={15}
                onAddTask={openModalToCreateNewTaskHandler}
              />
            </div>
            <TaskList
              tasks={tasks}
              deleteTaskHandler={deleteTaskHandler}
              toggleTaskHandler={toggleTaskHandler}
              openModalToChangeTaskHandler={openModalToChangeTaskHandler}
            />
          </div>
          {schedule.length ? (
            <div className={cl.schedulePart} ref={parent}>
              {schedule.map((lesson, i) => (
                <motion.div
                  variants={listVariants}
                  key={lesson.startOfLesson}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  <Lesson lesson={lesson} />
                </motion.div>
              ))}
            </div>
          ) : null}
        </div>
      {/* </div> */}
      <TaskParametrs
        activeDay={activeDate}
        user_id={1}
        task={modalParams.task}
        isActive={modalParams.isActive}
        onClose={closeModalParamsHandler}
      />
    </div>
  );
};
