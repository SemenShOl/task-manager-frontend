import cl from "./TextTypeButton.module.scss";
import cn from "classnames";
import { FC, useState } from "react";
type TextTypeButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
};
export const TextTypeButton: FC<TextTypeButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleToggleButton = () => {
    onClick();
    setIsActive((isActive) => !isActive);
  };
  return (
    <button
      className={
        isActive ? cn(cl.btn, className, cl.isActive) : cn(cl.btn, className)
      }
      onClick={handleToggleButton}
    >
      {children}
    </button>
  );
};
