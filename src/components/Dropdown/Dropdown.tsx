import { FC } from "react";
import cl from "./Dropdown.module.scss";
import cn from "classnames";
import { DropdownOption } from "../DropdownOption/DropdownOption";
import { MdDone } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa6";
import { DropdownProps } from "./DropdownProps";
import {
  TPriorityType,
  TViewOfPriority,
  TViewOfPriorityList,
} from "../../utilites/priorityUtilites";

export const Dropdown: FC<DropdownProps> = ({
  isOpen,
  setIsOpen,
  options,
  chosenOption,
  setChosenOption,
}) => {
  const selectClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsOpen((previousState: boolean) => !previousState);
    e.stopPropagation();
  };

  const optionsArray = getOptionsArray(options, chosenOption, setChosenOption);
  return (
    <div className={cl.dropdown}>
      <div className={cl.select} onClick={selectClickHandler}>
        <DropdownOption option={chosenOption} />
        <FaCaretDown className={isOpen ? cn(cl.caret, cl.rotate) : cl.caret} />
      </div>
      <ul className={isOpen ? cn(cl.menu, cl.open) : cl.menu}>
        {optionsArray}
      </ul>
    </div>
  );
};

function getOptionsArray(
  options: TViewOfPriorityList,
  chosenOption: TViewOfPriority,
  setChosenOption: (option: TPriorityType) => void
) {
  const optionsArray = [];
  for (let key in options) {
    const typeKey = key as TPriorityType;
    optionsArray.push(
      <li
        className={
          chosenOption.title === options[typeKey].title
            ? cn(cl.option, cl.active)
            : cl.option
        }
        onClick={() => setChosenOption(typeKey)}
      >
        <DropdownOption option={options[typeKey]} />
        <MdDone className={cl.done} />
      </li>
    );
  }

  return optionsArray;
}
