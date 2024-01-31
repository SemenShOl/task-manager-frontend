import React from "react";

import "./TextArea.module.scss";
export const TextArea = ({
  style,
  className,
  value,
  setValue,
  onKeyDownClick,
  placeholder,
}) => {
  const onInputChange = (e) => {
    const currentValue = e.target.value;
    // if(currentValue.match(/\n/g))
    setValue(currentValue);
  };
  //   const onKeyDown = (e) => (e.key === "Enter" ? onKeyDownClick() : undefined);

  return (
    <textarea
      style={style}
      className={className}
      value={value}
      onChange={onInputChange}
      //   onKeyDown={onKeyDown}
      placeholder={placeholder}
    ></textarea>
  );
};
