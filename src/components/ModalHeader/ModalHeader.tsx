import React, { FC } from "react";
import cl from "./ModalHeader.module.scss";
import { IoCloseSharp } from "react-icons/io5";
import { ModalHeaderProps } from "./ModalHeaderProps";

export const ModalHeader: FC<ModalHeaderProps> = ({
  title,
  onClose,
  style,
}) => {
  return (
    <div className={cl.header} style={style}>
      {title}
      <IoCloseSharp className={cl.closeButton} size={30} onClick={onClose} />
    </div>
  );
};
