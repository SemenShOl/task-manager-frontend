import { TTask } from "../../../redux/slices/tasks";

export type TaskProps = {
  task: TTask;
  id: number;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onChangeTask: (task: TTask) => void;
};
