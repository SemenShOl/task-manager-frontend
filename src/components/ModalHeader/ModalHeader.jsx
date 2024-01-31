import React from "react";
import cl from "./ModalHeader.module.scss";
import { IoCloseSharp } from "react-icons/io5";

export const ModalHeader = ({ title, onClose }) => {
  return (
    <div className={cl.header}>
      {title}
      <IoCloseSharp className={cl.closeButton} size={30} onClick={onClose} />
    </div>
  );
};
