export type TMomentDay = moment.Moment;
export type TNewTask = {
  user_id: number;
  title: string;
  description: string;
  deadline: string;
  priority: "low" | "medium" | "high";
};
export type TTask = {
  id: number;
  user_id: number;
  title: string;
  description: string;
  deadline: string;
  date_of_creation: string;
  is_completed: boolean;
  priority: "low" | "medium" | "high";
};