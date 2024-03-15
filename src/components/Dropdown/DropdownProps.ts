import {
  TPriorityList,
  TPriorityType,
  TViewOfPriority,
  TViewOfPriorityList,
} from "../../utilites/priorityUtilites";

export type DropdownProps = {
  isOpen: boolean;
  setIsOpen: Function;
  options: TViewOfPriority[];
  chosenOption: TViewOfPriority;
  setChosenOption: (option: TPriorityType) => void;
};
