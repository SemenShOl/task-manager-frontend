import {
  TPriorityList,
  TPriorityType,
  TViewOfPriority,
  TViewOfPriorityList,
} from "../../utilites/priorityUtilites";

export type DropdownProps = {
  isOpen: boolean;
  setIsOpen: Function;
  options: TViewOfPriorityList;
  chosenOption: TViewOfPriority;
  setChosenOption: (option: TPriorityType) => void;
};
