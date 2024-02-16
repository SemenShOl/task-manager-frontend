import { FC } from "react";
import cl from "./Line.module.scss";
type LineProps = {
  width?: number;
};
export const Line: FC<LineProps> = ({ width }) => {
  return <div className={cl.line} style={{ width: width }} />;
};
