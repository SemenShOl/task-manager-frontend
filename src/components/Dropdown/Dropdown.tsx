import { FC } from "react";
import cl from "./Dropdown.module.scss";
import cn from "classnames";
import { DropdownOption } from "../DropdownOption/DropdownOption";
import { MdDone } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa6";
import { DropdownProps } from "./DropdownProps";

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
  return (
    <div className={cl.dropdown}>
      <div className={cl.select} onClick={selectClickHandler}>
        <DropdownOption option={chosenOption} />
        <FaCaretDown className={isOpen ? cn(cl.caret, cl.rotate) : cl.caret} />
      </div>
      <ul className={isOpen ? cn(cl.menu, cl.open) : cl.menu}>
        <li
          key={options.low.title}
          className={
            chosenOption.title === options.low.title
              ? cn(cl.option, cl.active)
              : cl.option
          }
          onClick={() => setChosenOption("low")}
        >
          <DropdownOption option={options.low} />
          <MdDone className={cl.done} />
        </li>
        <li
          key={options.medium.title}
          className={
            chosenOption.title === options.medium.title
              ? cn(cl.option, cl.active)
              : cl.option
          }
          onClick={() => setChosenOption("medium")}
        >
          <DropdownOption option={options.medium} />
          <MdDone className={cl.done} />
        </li>
        <li
          key={options.high.title}
          className={
            chosenOption.title === options.high.title
              ? cn(cl.option, cl.active)
              : cl.option
          }
          onClick={() => setChosenOption("high")}
        >
          <DropdownOption option={options.high} />
          <MdDone className={cl.done} />
        </li>
      </ul>
    </div>
  );
};
