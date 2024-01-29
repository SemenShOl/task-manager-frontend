import cl from "./Checkbox.module.scss";
import cn from "classnames";
import { IoMdCheckmark } from "react-icons/io";
export const Checkbox = ({ style, onClick, completed }) => {
  return (
    <div style={style} className={cl.wrapper} onClick={onClick}>
      <div className={cl.square}>
        <IoMdCheckmark
          className={completed ? cn(cl.checkMark, cl.active) : cl.checkMark}
        />
      </div>
    </div>
  );
};
