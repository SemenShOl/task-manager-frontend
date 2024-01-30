import React, { useEffect, useState } from "react";
import { PriorityList } from "../../components/PriorityList/PriorityList";
import cl from "./DayPage.module.scss";
import Task from "../../components/TaskListComponents/Task/Task";
import { Modal } from "../../components/UI/Modal/Modal";
import { TaskInput } from "./../../components/TaskListComponents/TaskInput/TaskInput";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAddTask,
  fetchDeleteTask,
  fetchGetTasksForDeadline,
  fetchToggleTask,
} from "../../redux/slices/tasks";
import { addNumberFrontNull } from "../../utilites/dateUtilites";
import { IoMdAdd } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { TaskParameters } from "../../components/TaskListComponents/TaskParameters/TaskParameters";

export const DayPage = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetTasksForDeadline("2023-02-28"));
  }, []);
  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const shortDaysOfWeek = ["Вc", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const months = [
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
  const stringDate = "2023-02-28";
  const dateDate = new Date(stringDate);
  const dayOfWeek = shortDaysOfWeek[dateDate.getDay()];
  const month = months[dateDate.getMonth()];
  const dayOfMonth = dateDate.getDay();
  const deleteTaskHandler = (id) => {
    dispatch(fetchDeleteTask(id));
  };
  const addTaskHandler = (title) => {
    const newTask = {
      title,
      description: "dsfsfsd",
      deadline: "2023-02-28",
      userID: 1,
      priority: 2,
    };
    dispatch(fetchAddTask(newTask));
  };

  const toggleTaskHandler = (id) => {
    dispatch(fetchToggleTask(id));
  };
  const [isActiveModal, setIsActiveModal] = useState(false);

  const openChangeTaskModalHandler = (id) => {
    setIsActiveModal(true);
  };

  console.log(isActiveModal);
  return (
    <div className={cl.wrapper}>
      <div className={cl.sidePart}></div>
      <div className={cl.taskPart}>
        {" "}
        {/* <h2>29.01.2024</h2> */}
        <div className={cl.header}>
          <div className={cl.date}>
            <p className={cl.dayOfWeek}>{dayOfWeek.toUpperCase()}</p>
            <p className={cl.dayOfMonth}>{addNumberFrontNull(dayOfMonth)}</p>
            <p className={cl.month}>{month}</p>
          </div>
          <div className={cl.priorityList}>
            <PriorityList size={75} tasksForDay={{ a: 5, b: 4, c: 3 }} />
          </div>
        </div>
        <div className={cl.taskList}>
          {tasks.items.map((task) => (
            <Task
              title={task.title}
              id={task.id}
              isCompleted={task.is_completed}
              prioirty={task.priority}
              onDeleteTask={deleteTaskHandler}
              onToggleTask={toggleTaskHandler}
              onChangeTask={openChangeTaskModalHandler}
            />
          ))}
        </div>
        <div className={cl.addNewTaskPart}>
          <div className={cl.addIcon}>
            <IoMdAdd size={20} className={cl.plus} />
            <FaCircle size={26} className={cl.circle} />
          </div>

          <p>Добавить задачу</p>
        </div>
      </div>
      <Modal
        widthPercent={40}
        heightPercent={80}
        isActive={isActiveModal}
        onClose={() => setIsActiveModal(false)}
        typeOfModal={"TaskParametrs"}
      ></Modal>
    </div>
  );
};
