import React from "react";
import cl from "./AddButton.module.scss";
import { IoMdAdd } from "react-icons/io";
export const AddButton = ({ size }) => {
  return (
    <div
      className={cl.addIcon}
      style={{ width: size * 1.3, height: size * 1.3 }}
    >
      <IoMdAdd size={size} className={cl.plus} />
    </div>
  );
};
