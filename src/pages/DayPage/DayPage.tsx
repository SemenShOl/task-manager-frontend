import React, { useEffect, useState } from "react";
import cl from "./DayPage.module.scss";
import {
  fetchDeleteTask,
  fetchGetTasksForDeadline,
  fetchToggleTask,
} from "../../redux/slices/tasks";
import { AddTask, TaskParametrs, Task, TaskPageHeader } from "../../components";
import { getDayInfo } from "../../utilites/dateUtilites";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { TTask } from "../../types/globalTypes";
type TModalParams = {
  isActive: boolean;
  task: TTask | undefined;
};

export const DayPage = () => {
  console.log("day page renders");
  useCheckAuth();
  const tasks: TTask[] = useAppSelector((state) => state.tasks.items);

  const { activeDate, priorityList } = useAppSelector(
    (state) => state.chosenDayInfo
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetTasksForDeadline(activeDate));
  }, []);

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
  } as TModalParams);

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
      <div className={cl.back}>
        <div className={cl.taskPart}>
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
          <div className={cl.taskList}>
            {tasks.map((task) => (
              <Task
                task={task}
                id={task.id || 0}
                onDeleteTask={deleteTaskHandler}
                onToggleTask={toggleTaskHandler}
                onChangeTask={openModalToChangeTaskHandler}
                key={task.id}
              />
            ))}
          </div>
        </div>
        <TaskParametrs
          activeDay={activeDate}
          user_id={1}
          task={modalParams.task}
          isActive={modalParams.isActive}
          onClose={closeModalParamsHandler}
        />
      </div>
    </div>
  );
};
