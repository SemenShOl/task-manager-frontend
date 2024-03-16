import { TOption } from "../../types/globalTypes";
import {
  TPriorityList,
  TPriorityOption,
  TPriorityType,
  TViewOfPriority,
  TViewOfPriorityList,
} from "../../utilites/priorityUtilites";

// export type DropdownProps = {
//   isOpen: boolean;
//   setIsOpen: Function;
//   options: TViewOfPriorityList;
//   chosenOption: TViewOfPriority;
//   setChosenOption: (option: TPriorityType) => void;
// };

// export interface TPriorityOption extends TOption {
//   color: string;
//   key: TPriorityType;
// }

export type DropdownProps<T> = {
  isOpen: boolean;
  setIsOpen: Function;
  options: Map<T, TOption>;
  chosenOption: TOption | undefined;
  setChosenOption: (optionKey: T) => void;
};
