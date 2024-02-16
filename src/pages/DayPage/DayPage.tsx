import React, { useEffect, useState } from "react";
import cl from "./DayPage.module.scss";
// import { useSelector, useDispatch } from "react-redux";
import {
  TTask,
  fetchDeleteTask,
  fetchGetTasksForDeadline,
  fetchToggleTask,
} from "../../redux/slices/tasks";
import { AddTask, TaskParametrs, Task, TaskPageHeader } from "../../components";
import colors from "../../styles/colors.module.scss";
import {
  monthsInRussian,
  shortDaysOfWeekinRussian,
} from "../../utilites/dateUtilites";
import { useParams } from "react-router-dom";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { TPriorityList } from "../../utilites/priorityUtilites";

export const DayPage = () => {
  console.log("day page renders");
  const activeDate = useParams().date || "";
  useCheckAuth();
  const tasks: TTask[] = useAppSelector((state) => state.tasks.tasks.items);

  //Составление priorityList для данного дня, с учетом существующих и еще не выполненных заданий
  const priorityList: TPriorityList = { low: 0, medium: 0, high: 0 };
  tasks.forEach((task) =>
    !task.is_completed ? priorityList[task.priority]++ : null
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetTasksForDeadline(activeDate));
  }, []);

  const dateDate = new Date(activeDate);
  const dayOfWeek = shortDaysOfWeekinRussian[dateDate.getDay()];
  const month = monthsInRussian[dateDate.getMonth()];
  const dayOfMonth = dateDate.getDate();
  const deleteTaskHandler = (id: number) => {
    dispatch(fetchDeleteTask(id));
  };

  const toggleTaskHandler = (id: number) => {
    dispatch(fetchToggleTask(id));
  };

  type TModalParams = {
    isActive: boolean;
    task: TTask | undefined;
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
            color={colors.right}
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
