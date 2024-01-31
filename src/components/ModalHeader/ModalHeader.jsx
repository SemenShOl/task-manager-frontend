import React from "react";
import cl from "./ModalHeader.module.scss";
import { IoCloseSharp } from "react-icons/io5";

export const ModalHeader = ({ title, onClose, style }) => {
  return (
    <div className={cl.header} style={style}>
      {title}
      <IoCloseSharp className={cl.closeButton} size={30} onClick={onClose} />
    </div>
  );
};
