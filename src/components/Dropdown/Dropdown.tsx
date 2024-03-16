import { FC, ReactNode } from "react";
import cl from "./Dropdown.module.scss";
import cn from "classnames";
import { DropdownOption } from "../DropdownOption/DropdownOption";
import { MdDone } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa6";
import { DropdownProps } from "./DropdownProps";

import { TOption } from "../../types/globalTypes";

export const Dropdown = <T extends string>({
  isOpen,
  setIsOpen,
  options,
  chosenOption,
  setChosenOption,
}: DropdownProps<T>) => {
  const selectClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsOpen((previousState: boolean) => !previousState);
    e.stopPropagation();
  };

  const optionsArray: ReactNode[] = [];
  options.forEach((value, key) => {
    optionsArray.push(
      <li
        className={
          chosenOption?.title === value.title
            ? cn(cl.option, cl.active)
            : cl.option
        }
        onClick={() => setChosenOption(key)}
      >
        <DropdownOption option={value as TOption} />
        <MdDone className={cl.done} />
      </li>
    );
  });

  return (
    <div className={cl.dropdown}>
      <div className={cl.select} onClick={selectClickHandler}>
        <DropdownOption option={chosenOption as TOption} />
        <FaCaretDown className={isOpen ? cn(cl.caret, cl.rotate) : cl.caret} />
      </div>
      <ul className={isOpen ? cn(cl.menu, cl.open) : cl.menu}>
        {optionsArray}
      </ul>
    </div>
  );
};
