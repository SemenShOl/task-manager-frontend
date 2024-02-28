import React, { useEffect, useState } from "react";
import { PageWrapper } from "../../wrappers";
import { AddTask, TaskPageHeader } from "../../components";
import { TaskList } from "../../components/TaskList/TaskList";
import { useCheckAuth } from "../../hooks";
import { TTask } from "../../types/globalTypes";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchDeleteTask, fetchToggleTask } from "../../redux/slices/tasks";

type Props = {};
type TModalParamsTask = {
  isActive: boolean;
  task: TTask | undefined;
};

export const AllTasksPage = (props: Props) => {
  useCheckAuth();
  const tasks: TTask[] = useAppSelector((state) => state.tasks.items);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch();
  }, []);

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
    <PageWrapper>
      <div>
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
    </PageWrapper>
  );
};
