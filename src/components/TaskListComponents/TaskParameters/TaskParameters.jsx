import React, { useEffect, useState } from "react";
import cl from "./TaskParameters.module.scss";
import { Input, TextArea } from "../../UI";
import { Dropdown } from "./../../Dropdown/Dropdown";
import { useDispatch } from "react-redux";
import { ModalContentWrapper, ModalBackgroundWrapper } from "../../../wrappers";
import { ModalHeader } from "../../ModalHeader/ModalHeader";
import { appInfo } from "../../../utilites/appInfo";
import { addTaskToStore, fetchAddTask } from "../../../redux/slices/tasks";
export const TaskParametrs = ({ isActive, onClose, task }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setTitle(task?.title || "");
    setDescription(task?.description || "");
    setPriority(appInfo.priorities[task ? task.priority - 1 : 1]);
  }, [task]);
  const onBackgroundClickHandler = () => {
    setIsDropdownOpen(false);
  };
  const dispatch = useDispatch();
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task?.description);
  const [priority, setPriority] = useState(
    appInfo.priorities[task ? task.priority - 1 : 1]
  );
  // console.log("title: ", title);
  // console.log("description: ", description);
  // console.log("priority: ", priority.title);

  // const saveResults = (task) => task ? fetchAddTask : fet
  const closeModalHandler = () => {
    onClose();
    setIsDropdownOpen(false);
    dispatch(
      addTaskToStore({
        id: task.id,
        updatedTask: { ...task, title, description, priority },
      })
    );

    // dispatch(fetchAddTask(task.id, { ...task, title, description, priority }));
  };

  const headerTitle = task ? "Изменить задачу" : "Создать задачу";
  console.log("priority: ", priority);
  return (
    <ModalBackgroundWrapper
      isActive={isActive}
      onBackgroundClick={closeModalHandler}
    >
      <ModalContentWrapper isActive={isActive}>
        <ModalHeader title={headerTitle} onClose={closeModalHandler} />
        <div className={cl.main} onClick={onBackgroundClickHandler}>
          <Input
            style={{ width: "100%", height: 40, fontSize: 30 }}
            value={title}
            setValue={setTitle}
            placeholder={"Название задачи"}
          />
          <TextArea
            style={{ width: "100%", height: 20, fontSize: 15, marginLeft: 2 }}
            value={description}
            setValue={setDescription}
            placeholder={"Описание"}
          />
          <Dropdown
            isOpen={isDropdownOpen}
            setIsOpen={setIsDropdownOpen}
            options={appInfo.priorities}
            setChosenOption={setPriority}
            chosenOption={priority}
          />
        </div>
      </ModalContentWrapper>
    </ModalBackgroundWrapper>
  );
};
