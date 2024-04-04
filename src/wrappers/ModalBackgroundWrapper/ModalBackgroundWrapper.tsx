import React, { ReactNode, FC } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
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
  const [parent] = useAutoAnimate();
  return (
    <div
      ref={parent}
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
