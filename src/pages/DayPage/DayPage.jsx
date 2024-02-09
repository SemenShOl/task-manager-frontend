import React, { useEffect, useState } from "react";
import cl from "./DayPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
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
import { useParams, useSearchParams } from "react-router-dom";
import { useCheckAuth } from "../../hooks/useCheckAuth";

export const DayPage = () => {
  console.log("day page renders");
  const activeDate = useParams().date;
  useCheckAuth();
  const tasks = useSelector((state) => state.tasks.tasks);
  const priorityList = [0, 0, 0];
  tasks.items.forEach((task) => priorityList[task.priority]++);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetTasksForDeadline(activeDate));
  }, []);

  const dateDate = new Date(activeDate);
  const dayOfWeek = shortDaysOfWeekinRussian[dateDate.getDay()];
  const month = monthsInRussian[dateDate.getMonth()];
  const dayOfMonth = dateDate.getDate();
  const deleteTaskHandler = (id) => {
    dispatch(fetchDeleteTask(id));
  };

  const toggleTaskHandler = (id) => {
    dispatch(fetchToggleTask(id));
  };

  const [modalParams, setModalParams] = useState({
    isActive: false,
    taskObject: undefined,
  });

  const closeModalParamsHandler = () => {
    setModalParams((previous) => ({
      ...previous,
      isActive: false,
    }));
  };

  const openModalToCreateNewTaskHandler = () => {
    setModalParams({
      isActive: true,
      taskObject: undefined,
    });
  };

  const openModalToChangeTaskHandler = (task) => {
    setModalParams({
      isActive: true,
      taskObject: task,
    });
  };

  return (
    <div className={cl.wrapper}>
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
          {tasks.items.map((task) => (
            <Task
              task={task}
              id={task.id}
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
        userID={1}
        task={modalParams.taskObject}
        isActive={modalParams.isActive}
        onClose={closeModalParamsHandler}
      />
    </div>
  );
};
