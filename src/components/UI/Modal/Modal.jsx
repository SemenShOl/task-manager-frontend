import React from "react";
import cl from "./Modal.module.scss";
import cn from "classnames";
import { IoCloseSharp } from "react-icons/io5";
import { TaskParameters } from "../../TaskListComponents/TaskParameters/TaskParameters";
import { useState } from "react";
export const Modal = ({
  typeOfModal,
  widthPercent,
  heightPercent,
  isActive,
  onClose,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className={
        isActive
          ? cl.modalBackground
          : cn(cl.modalBackground, cl.unActiveBackground)
      }
      onClick={() => {
        onClose();
        setIsDropdownOpen(false);
      }}
    >
      <div
        className={isActive ? cl.modalWindow : cl.unActiveContent}
        style={{ width: widthPercent + "%", height: heightPercent + "%" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cl.header}>
          <p className={cl.title}>Изменить задачу</p>
          <IoCloseSharp
            className={cl.closeButton}
            size={30}
            onClick={onClose}
          />
        </div>
        {typeOfModal === "TaskParametrs" ? (
          <TaskParameters
            setIsDropdownOpen={setIsDropdownOpen}
            isDropdownOpen={isDropdownOpen}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
