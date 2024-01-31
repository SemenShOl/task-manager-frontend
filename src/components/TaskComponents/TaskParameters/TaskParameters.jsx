import React, { useEffect, useState } from "react";
import cl from "./TaskParameters.module.scss";
import { Input, TextArea } from "../../UI";
import { Dropdown } from "./../../Dropdown/Dropdown";
import { useDispatch } from "react-redux";
import { ModalContentWrapper, ModalBackgroundWrapper } from "../../../wrappers";
import { ModalHeader } from "../../ModalHeader/ModalHeader";
import { appInfo } from "../../../utilites/appInfo";
import {
  addUpdatedTaskToStore,
  fetchAddTask,
} from "../../../redux/slices/tasks";
export const TaskParametrs = ({
  isActive,
  onClose,
  task,
  activeDay,
  userID,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(() => {
    setTitle(task?.title || "");
    setDescription(task?.description || "");
    setPriority(task?.priority || 1);
  }, [isActive]);

  const onBackgroundClickHandler = () => {
    setIsDropdownOpen(false);
  };
  const dispatch = useDispatch();
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task?.description);
  const [priority, setPriority] = useState(task?.priority || 1);

  const closeModalHandler = () => {
    onClose();
    setIsDropdownOpen(false);
    if (task && title) {
      dispatch(
        addUpdatedTaskToStore({
          id: task.id,
          updatedTask: { ...task, title, description, priority },
        })
      );
    } else if (title) {
      dispatch(
        fetchAddTask({
          deadline: activeDay,
          userID,
          title,
          description,
          priority,
        })
      );
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
            options={appInfo.priorities}
            setChosenOption={setPriority}
            chosenOption={appInfo.priorities[priority]}
          />
        </div>
      </ModalContentWrapper>
    </ModalBackgroundWrapper>
  );
};
