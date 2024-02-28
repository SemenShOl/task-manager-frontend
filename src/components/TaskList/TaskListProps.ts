import { TTask } from "../../types/globalTypes";

export type TaskListProps = {
  tasks: TTask[];
  deleteTaskHandler: (id: number) => void;
  toggleTaskHandler: (id: number) => void;
  openModalToChangeTaskHandler: (task: TTask) => void;
};
