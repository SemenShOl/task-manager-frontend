import React, { ReactNode, FC } from "react";
import cn from "classnames";
import cl from "./ModalBackgroundWrapper.module.scss";
type ModalBackgroundWrapperProps = {
  children: ReactNode;
  isActive: boolean;
  onBackgroundClick?: () => void;
};
export const ModalBackgroundWrapper: FC<ModalBackgroundWrapperProps> = ({
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
