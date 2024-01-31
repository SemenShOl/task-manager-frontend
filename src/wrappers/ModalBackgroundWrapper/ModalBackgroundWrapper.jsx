import React from "react";
import cn from "classnames";
import cl from "./ModalBackgroundWrapper.module.scss";
export const ModalBackgroundWrapper = ({
  children,
  isActive,
  onBackgroundClick,
}) => {
  return (
    <div
      className={
        isActive
          ? cl.modalBackground
          : cn(cl.modalBackground, cl.unActiveBackground)
      }
      onClick={onBackgroundClick}
    >
      {children}
    </div>
  );
};
