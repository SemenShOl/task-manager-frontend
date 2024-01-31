import React from "react";
import cl from "./Dropdown.module.scss";
import cn from "classnames";
import { DropdownOption } from "../DropdownOption/DropdownOption";
import { MdDone } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa6";
export const Dropdown = ({
  isOpen,
  setIsOpen,
  options,
  chosenOption,
  setChosenOption,
}) => {
  const selectClickHandler = (e) => {
    setIsOpen((previousState) => !previousState);
    e.stopPropagation();
  };
  return (
    <div class={cl.dropdown}>
      <div class={cl.select} onClick={selectClickHandler}>
        <DropdownOption option={chosenOption} />

        <FaCaretDown className={isOpen ? cn(cl.caret, cl.rotate) : cl.caret} />
      </div>
      <ul class={isOpen ? cn(cl.menu, cl.open) : cl.menu}>
        {options.map((option, index) => (
          <li
            className={
              chosenOption.title === option.title
                ? cn(cl.option, cl.active)
                : cl.option
            }
            onClick={() => setChosenOption(index)}
          >
            <DropdownOption option={option} />
            <MdDone className={cl.done} />
          </li>
        ))}
      </ul>
    </div>
  );
};
