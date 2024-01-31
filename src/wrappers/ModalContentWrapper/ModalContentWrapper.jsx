import React from "react";
import cl from "./ModalContentWrapper.module.scss";
export const ModalContentWrapper = ({ children, isActive, style }) => {
  return (
    <div
      className={isActive ? cl.contentWindow : cl.unActiveContentWindow}
      style={style}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};
