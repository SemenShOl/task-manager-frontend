import { CSSProperties } from "react";

export type ModalHeaderProps = {
  title: string;
  onClose: () => void;
  style: CSSProperties;
};
