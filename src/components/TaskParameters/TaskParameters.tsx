import { useEffect, useState, FC } from "react";
import cl from "./TaskParameters.module.scss";
import { TaskParametrsProps } from "./TaskParametrsProps";
import { useAppDispatch } from "../../redux/store";
import {
  TPriorityType,
  TViewOfPriority,
  priorities,
} from "../../utilites/priorityUtilites";
import { TNewTask, TTask } from "../../types/globalTypes";
import {
  addUpdatedTaskToStore,
  fetchAddTask,
  fetchChangeTask,
} from "../../redux/slices/tasks";
import { ModalBackgroundWrapper, ModalContentWrapper } from "../../wrappers";
import { ModalHeader } from "../ModalHeader/ModalHeader";
import { Input } from "../UI";
import { Dropdown } from "../Dropdown/Dropdown";

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
              fontWeight: "bold",
            }}
            value={title}
            onInputChange={(e) => setTitle(e.target.value)}
            placeholder={"Название задачи"}
            onKeyDownClick={closeModalHandler}
          />

          <Input
            style={{ width: "100%", height: 20, fontSize: 15 }}
            value={description}
            onInputChange={(e) => setDescription(e.target.value)}
            placeholder={"Описание"}
            onKeyDownClick={closeModalHandler}
          />

          <Dropdown<TPriorityType>
            isOpen={isDropdownOpen}
            setIsOpen={setIsDropdownOpen}
            options={priorities}
            setChosenOption={(optionKey: string) =>
              setPriority(optionKey as TPriorityType)
            }
            chosenOption={priorities.get(priority)}
          />
        </div>
      </ModalContentWrapper>
    </ModalBackgroundWrapper>
  );
};
