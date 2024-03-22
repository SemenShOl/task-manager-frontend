import { FC } from "react";
import cl from "./DropdownOption.module.scss";
import { FaCircle } from "react-icons/fa";
import { DropDownOptionProps } from "./DropDownOptionProps";
import { TOption } from "../../types/globalTypes";

export const DropdownOption: FC<DropDownOptionProps> = ({ option }) => {
  return (
    <div className={cl.option}>
      {"color" in option ? (
        <FaCircle color={option?.color as string} size={15} />
      ) : null}
      <p>{option?.name}</p>
    </div>
  );
};
