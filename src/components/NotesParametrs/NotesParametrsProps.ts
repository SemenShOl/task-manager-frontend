import { TNote } from "../../types/globalTypes";

export type NotesParametrsProps = {
  isActive: boolean;
  onClose: () => void;
  activeNote: TNote | undefined;
  user_id: number;
};
