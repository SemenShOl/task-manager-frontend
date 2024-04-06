import React, { FC } from "react";
import cl from "./Toggle.module.scss";
type ToggleProps = {
  onChange: () => void;
};

export const Toggle: FC<ToggleProps> = ({ onChange }) => {
  return (
    <div className={cl.wrapper}>
      <label>
        <input type="checkbox" onClick={onChange} />
        <span className={cl.slider}></span>
      </label>
    </div>
  );
};
