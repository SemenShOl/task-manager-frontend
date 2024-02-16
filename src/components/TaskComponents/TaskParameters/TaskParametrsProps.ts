import { TTask } from "../../../redux/slices/tasks";

export type TaskParametrsProps = {
  isActive: boolean;
  onClose: () => void;
  task: TTask | undefined;
  activeDay: any;
  user_id: number;
};
