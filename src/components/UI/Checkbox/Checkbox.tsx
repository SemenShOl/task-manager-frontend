import cl from "./Checkbox.module.scss";
import cn from "classnames";
import { IoMdCheckmark } from "react-icons/io";
import { FC } from "react";
type CheckboxProps = {
  circleSize: number;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  completed: boolean;
  checkMarkSize: number;
};
export const Checkbox: FC<CheckboxProps> = ({
  circleSize,
  onClick,
  completed,
  checkMarkSize,
}) => {
  return (
    <div className={cl.wrapper} onClick={onClick}>
      <div
        className={cl.square}
        style={{ width: circleSize, height: circleSize }}
      >
        <IoMdCheckmark
          size={checkMarkSize}
          className={completed ? cn(cl.checkMark, cl.active) : cl.checkMark}
        />
      </div>
    </div>
  );
};
