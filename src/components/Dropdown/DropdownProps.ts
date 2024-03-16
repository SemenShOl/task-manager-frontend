import { ReactNode } from "react";
import {
  TPriorityList,
  TPriorityType,
  TViewOfPriority,
  TViewOfPriorityList,
} from "../../utilites/priorityUtilites";

export type DropdownProps = {
  isOpen: boolean;
  setIsOpen: Function;
  options: ReactNode[];
  chosenOption: ReactNode;
  setChosenOption: (option: TPriorityType) => void;
};
