import { FC } from "react";
import cl from "./ToggleButton.module.scss";
import cn from "classnames";
type ToggleButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  isActive?: boolean;
};
export const ToggleButton: FC<ToggleButtonProps> = ({
  children,
  className,
  onClick,
  isActive,
}) => {
  return (
    <button
      className={
        isActive ? cn(cl.btn, className, cl.isActive) : cn(cl.btn, className)
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};
