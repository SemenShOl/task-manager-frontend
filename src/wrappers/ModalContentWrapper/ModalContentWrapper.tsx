import React, { ReactNode, FC, CSSProperties } from "react";
import cl from "./ModalContentWrapper.module.scss";
type ModalContentWrapperProps = {
  children: ReactNode;
  isActive: boolean;
  style: CSSProperties;
};
export const ModalContentWrapper: FC<ModalContentWrapperProps> = ({
  children,
  isActive,
  style,
}) => {
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
