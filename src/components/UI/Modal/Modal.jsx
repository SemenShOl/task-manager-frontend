import React from "react";
import cl from "./Modal.module.scss";
import cn from "classnames";
import { IoCloseSharp } from "react-icons/io5";
export const Modal = ({
  widthPercent,
  heightPercent,
  isActive,
  onClose,
  children,
}) => {
  return (
    <div
      className={
        isActive
          ? cl.modalBackground
          : cn(cl.modalBackground, cl.unActiveBackground)
      }
      onClick={onClose}
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
        {children}
      </div>
    </div>
  );
};
