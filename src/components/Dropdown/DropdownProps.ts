import { TOption } from "../../types/globalTypes";

export type DropdownProps<T> = {
  isOpen: boolean;
  setIsOpen: Function;
  options: Map<T, TOption>;
  chosenOption: TOption | undefined;
  setChosenOption: (optionKey: T) => void;
};
