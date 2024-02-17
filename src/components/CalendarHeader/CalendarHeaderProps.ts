import { TMomentDay } from "../../types/globalTypes";

export type CalendarHeaderProps = {
  activeDay: TMomentDay;
  onAdd: () => void;
  onSubtract: () => void;
  onReset: () => void;
};
