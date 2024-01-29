import cl from "./Checkbox.module.scss";
import cn from "classnames";
import { IoMdCheckmark } from "react-icons/io";
export const Checkbox = ({ circleSize, onClick, completed, checkMarkSize }) => {
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
