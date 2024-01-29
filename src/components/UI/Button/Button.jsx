import cl from "./Button.module.scss";
import cn from "classnames";

export const Button = ({ children, className, onClick, disabled }) => {
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
