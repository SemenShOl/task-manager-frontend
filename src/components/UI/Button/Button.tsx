import cl from "./Button.module.scss";
import cn from "classnames";
import { FC } from "react";
type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
};
export const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={
        disabled ? cn(cl.btn, className, cl.disabled) : cn(cl.btn, className)
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};
