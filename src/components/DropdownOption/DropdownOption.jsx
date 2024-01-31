import React from "react";
import cl from "./DropdownOption.module.scss";
import { FaCircle } from "react-icons/fa";

export const DropdownOption = ({ option }) => {
  return (
    <div className={cl.option}>
      <FaCircle color={option.color} size={15} />

      <p>{option.title}</p>
    </div>
  );
};
