import React, { useEffect, useState } from "react";
// import cl from "./DayPage.module.scss";
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
type TModalParamsTask = {
  isActive: boolean;
  task: TTask | undefined;
};

export const DayPage = () => {
  console.log("day page rerenders");
  useCheckAuth();
  const tasks: TTask[] = useAppSelector((state) => state.tasks.items);
  const activeDate = useParams().date || "";

  const priorityList: TPriorityList = { low: 0, medium: 0, high: 0 };
  tasks.forEach((task) =>
    !task.is_completed ? priorityList[task.priority]++ : null
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetTasksForDeadline(activeDate));
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
    <PageWrapper >
      <div>
        <TaskPageHeader
          month={month}
          dayOfWeek={dayOfWeek}
          dayOfMonth={dayOfMonth}
          priorityList={priorityList}
        />
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
      <div>
        <TaskParametrs
          activeDay={activeDate}
          user_id={1}
          task={modalParams.task}
          isActive={modalParams.isActive}
          onClose={closeModalParamsHandler}
        />
      </div>
    </PageWrapper>
  );
};
