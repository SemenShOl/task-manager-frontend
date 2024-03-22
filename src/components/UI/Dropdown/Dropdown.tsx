import { FC, ReactNode } from "react";
import cl from "./Dropdown.module.scss";
import cn from "classnames";
import { MdDone } from "react-icons/md";
import { FaCaretDown, FaCircle } from "react-icons/fa6";
import { DropdownProps } from "./DropdownProps";
import { TOption } from "../../../types/globalTypes";
// import { DropdownOption } from "../DropdownOption/DropdownOption";

export const Dropdown = <T extends string>({
  style,
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
          chosenOption?.name === value.name
            ? cn(cl.optionWrapper, cl.active)
            : cl.optionWrapper
        }
        onClick={() => setChosenOption(key)}
      >
        <DropdownOption option={value as TOption} />
        <MdDone className={cl.done} />
      </li>
    );
  });

  return (
    <div className={cl.dropdown} style={style}>
      <div className={cl.select} onClick={selectClickHandler}>
        {chosenOption ? (
          <DropdownOption option={chosenOption as TOption} />
        ) : null}
        <FaCaretDown className={isOpen ? cn(cl.caret, cl.rotate) : cl.caret} />
      </div>
      <ul className={isOpen ? cn(cl.menu, cl.open) : cl.menu}>
        {optionsArray}
      </ul>
    </div>
  );
};

const DropdownOption = ({ option }: { option: TOption }) => {
  return (
    <div className={cl.option}>
      {"color" in option ? (
        <FaCircle color={option?.color as string} size={15} />
      ) : null}
      <p>{option?.name}</p>
    </div>
  );
};
