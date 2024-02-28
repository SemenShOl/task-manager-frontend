import cl from "./SubmitButton.module.scss";
import cn from "classnames";
import { FC } from "react";
type SubmitButtonProps = {
  className?: string;
  disabled?: boolean;
  stringValue: string;
};
export const SubmitButton: FC<SubmitButtonProps> = ({
  className,
  disabled,
  stringValue,
}) => {
  return (
    <input
      type="submit"
      className={
        disabled ? cn(cl.btn, className, cl.disabled) : cn(cl.btn, className)
      }
      value={stringValue}
    />
  );
};
