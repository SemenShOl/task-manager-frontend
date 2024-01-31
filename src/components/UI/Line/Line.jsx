import React from "react";
import cl from "./Line.module.scss";
export const Line = ({ width }) => {
  return <div className={cl.line} style={{ width: width }} />;
};
