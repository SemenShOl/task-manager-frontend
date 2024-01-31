import React, { useEffect, useState } from "react";
import cl from "./DayPage.module.scss";
import Task from "../../components/TaskListComponents/Task/Task";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAddTask,
  fetchDeleteTask,
  fetchGetTasksForDeadline,
  fetchToggleTask,
} from "../../redux/slices/tasks";
import { AddTask } from "../../components/AddTask/AddTask";
import { TaskParametrs } from "../../components/TaskListComponents/TaskParameters/TaskParameters";
import moment from "moment";
import { TaskPageHeader } from "../../components/TaskListComponents/TaskPageHeader/TaskPageHeader";
import colors from "../../styles/colors.module.scss";
import {
  monthsInRussian,
  shortDaysOfWeekinRussian,
} from "../../utilites/dateUtilites";
export const DayPage = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetTasksForDeadline("2023-02-28"));
  }, []);

  const stringDate = "2023-02-28";
  const dateDate = new Date(stringDate);
  const dayOfWeek = shortDaysOfWeekinRussian[dateDate.getDay()];
  const month = monthsInRussian[dateDate.getMonth()];
  const dayOfMonth = dateDate.getDay();
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
            />
          ))}
        </div>
      </div>
      <TaskParametrs
        activeDay={stringDate}
        userID={1}
        task={modalParams.taskObject}
        isActive={modalParams.isActive}
        onClose={closeModalParamsHandler}
      />
    </div>
  );
};
