import { TTask } from "../../types/globalTypes";

export type TaskParametrsProps = {
  isActive: boolean;
  onClose: () => void;
  task: TTask | undefined;
  activeDay: any;
  user_id: number;
};
