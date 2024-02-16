import React, { useEffect, useState, FC } from "react";
import cl from "./TaskParameters.module.scss";
import { Input, TextArea } from "../../UI";
import { Dropdown } from "../../Dropdown/Dropdown";
import { ModalContentWrapper, ModalBackgroundWrapper } from "../../../wrappers";
import { ModalHeader } from "../../ModalHeader/ModalHeader";
import { TPriorityType, priorities } from "../../../utilites/priorityUtilites";
import {
  TTask,
  addUpdatedTaskToStore,
  fetchAddTask,
  fetchChangeTask,
} from "../../../redux/slices/tasks";
import { useAppDispatch } from "../../../redux/store";
import { TaskParametrsProps } from "./TaskParametrsProps";
import { TNewTask } from "../../../redux/slices/tasks";

export const TaskParametrs: FC<TaskParametrsProps> = ({
  isActive,
  onClose,
  task,
  activeDay,
  user_id,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(() => {
    setTitle(task?.title || "");
    setDescription(task?.description || "");
    setPriority(task?.priority || "medium");
  }, [isActive]);

  const onBackgroundClickHandler = () => {
    setIsDropdownOpen(false);
  };
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task?.description);
  const [priority, setPriority] = useState<TPriorityType>(
    task?.priority || "medium"
  );

  const updatedTask: TTask = {
    id: task?.id || 0,
    is_completed: task?.is_completed || false,
    date_of_creation: task?.date_of_creation || "",
    deadline: activeDay,
    user_id,
    title,
    description: description || "",
    priority,
  };

  const newTask: TNewTask = {
    user_id,
    deadline: activeDay,
    title,
    description: description || "",
    priority,
  };

  const closeModalHandler = () => {
    onClose();
    setIsDropdownOpen(false);
    if (task && title) {
      dispatch(addUpdatedTaskToStore(updatedTask));
      dispatch(fetchChangeTask(updatedTask));
    } else if (title) {
      dispatch(fetchAddTask(newTask));
    }
  };

  const headerTitle = task ? "Изменить задачу" : "Создать задачу";
  return (
    <ModalBackgroundWrapper
      isActive={isActive}
      onBackgroundClick={closeModalHandler}
    >
      <ModalContentWrapper
        isActive={isActive}
        style={{ width: "35%", height: "55%" }}
      >
        <ModalHeader
          title={headerTitle}
          onClose={closeModalHandler}
          style={{ marginBottom: "10px", fontSize: "14px" }}
        />
        <div className={cl.main} onClick={onBackgroundClickHandler}>
          <Input
            style={{
              width: "100%",
              height: 40,
              fontSize: 30,
              fontWeight: "bold",
            }}
            value={title}
            setValue={setTitle}
            placeholder={"Название задачи"}
            onKeyDownClick={closeModalHandler}
          />
          {/* <TextArea
            style={{ width: "100%", height: 20, fontSize: 15, marginLeft: 2 }}
            value={description}
            setValue={setDescription}
            placeholder={"Описание"}
          /> */}

          <Input
            style={{ width: "100%", height: 20, fontSize: 15 }}
            value={description}
            setValue={setDescription}
            placeholder={"Описание"}
            onKeyDownClick={closeModalHandler}
          />

          <Dropdown
            isOpen={isDropdownOpen}
            setIsOpen={setIsDropdownOpen}
            options={priorities}
            setChosenOption={setPriority}
            chosenOption={priorities[priority]}
          />
        </div>
      </ModalContentWrapper>
    </ModalBackgroundWrapper>
  );
};
