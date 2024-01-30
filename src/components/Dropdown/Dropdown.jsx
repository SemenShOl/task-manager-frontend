import React, { useEffect, useState } from "react";
import cl from "./Dropdown.module.scss";
import cn from "classnames";
import { FaCircle } from "react-icons/fa";
import colors from "../../styles/colors.module.scss";

export const DropdownUI = ({ isOpen, setIsOpen }) => {
  const options = [
    { title: "Высокая важность", color: colors.aPriority },
    { title: "Среднея важность", color: colors.bPriority },
    { title: "Низкая важность", color: colors.cPriority },
  ];
  const [chosenOption, setChosenOption] = useState(options[0]);

  // useEffect(() => {
  //   if (!dropDownCanBeOpen) setIsOpen(false);
  // }, [dropDownCanBeOpen]);

  const selectClickHandler = (e) => {
    setIsOpen((previousState) => !previousState);
    e.stopPropagation();
  };
  return (
    <div class={cl.dropdown}>
      <div class={cl.select} onClick={selectClickHandler}>
        <div class={cl.selected}>{chosenOption}</div>
        <div class={isOpen ? cn(cl.caret, cl.rotate) : cl.caret}></div>
      </div>
      <ul class={isOpen ? cn(cl.menu, cl.open) : cl.menu}>
        {options.map((option) => (
          <li
            className={
              chosenOption.title === option.title
                ? cn(cl.option, cl.active)
                : cl.option
            }
            onClick={() => setChosenOption(option)}
          >
            {/* <p>{option.title}</p> */}
            <FaCircle color={option.color} size={18} />
          </li>
        ))}
      </ul>
    </div>
  );
};
