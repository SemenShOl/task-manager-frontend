import { TNote } from "../../types/globalTypes";

export type NoteProps = {
  fontSize: number;
  note: TNote;
  onDeleteNote: (id: number) => void;
  onClick: () => void;
};
