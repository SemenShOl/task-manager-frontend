import { FC } from "react";
import cl from "./DropdownOption.module.scss";
import { FaCircle } from "react-icons/fa";
import { DropDownOptionProps } from "./DropDownOptionProps";

export const DropdownOption: FC<DropDownOptionProps> = ({ option }) => {
  return (
    <div className={cl.option}>
      <FaCircle color={option.color} size={15} />
      <p>{option.title}</p>
    </div>
  );
};
