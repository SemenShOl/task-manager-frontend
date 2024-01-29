import React, { useEffect } from "react";
import { PriorityList } from "../../components/PriorityList/PriorityList";
import cl from "./DayPage.module.scss";
import Task from "../../components/TaskListComponents/Task/Task";
import { TaskInput } from "./../../components/TaskListComponents/TaskInput/TaskInput";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAddTask,
  fetchDeleteTask,
  fetchGetTasksForDeadline,
  fetchToggleTask,
} from "../../redux/slices/tasks";
export const DayPage = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetTasksForDeadline("2024-02-08"));
  }, []);
  console.log(tasks);

  const deleteTaskHandler = (id) => {
    dispatch(fetchDeleteTask(id));
  };

  const addTaskHandler = (title) => {
    const newTask = {
      title,
      description: "dsfsfsd",
      deadline: "2024-02-08",
      userID: 1,
      priority: 2,
    };
    dispatch(fetchAddTask(newTask));
  };

  const toggleTaskHandler = (id) => {
    dispatch(fetchToggleTask(id));
  };

  return (
    <div className={cl.wrapper}>
      <h2>29.01.2024</h2>
      <div>
        <PriorityList size={80} tasksForDay={{ a: 5, b: 4, c: 3 }} />
      </div>

      <div>
        <TaskInput addTask={addTaskHandler} />
      </div>
      <div>
        {tasks.items.map((task) => (
          <Task
            title={task.title}
            id={task.id}
            isCompleted={task.is_completed}
            onDeleteTask={deleteTaskHandler}
            onToggleTask={toggleTaskHandler}
          />
        ))}
      </div>
    </div>
  );
};
