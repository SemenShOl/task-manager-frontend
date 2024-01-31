import React from "react";
import cl from "./ModalContentWrapper.module.scss";
export const ModalContentWrapper = ({ children, isActive }) => {
  return (
    <div
      className={isActive ? cl.contentWindow : cl.unActiveContentWindow}
      style={{ width: "40%", height: "80%" }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};
