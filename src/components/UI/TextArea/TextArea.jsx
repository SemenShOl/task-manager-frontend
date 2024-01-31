import React, { useState } from "react";

import "./TextArea.module.scss";
export const TextArea = ({
  style,
  className,
  value,
  setValue,
  onKeyDownClick,
  placeholder,
}) => {
  const [pressedKey, setPressedKey] = useState("");

  const onInputChange = (e) => {
    const currentValue = e.target.value;
    if (height < 60 || pressedKey !== "Enter") {
      setValue(currentValue);
    }
  };
  const [height, setHeight] = useState(20);

  const onKeyDown = (e) => {
    setPressedKey(e.key);
    if (e.key === "Enter" && height < 60) {
      setHeight((height) => height + 20);
    }
    if (e.key === "Backspace" && height > 20) {
      setHeight((height) => height - 20);
    }
  };
  return (
    <textarea
      style={{ height: height }}
      className={className}
      value={value}
      onChange={onInputChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    ></textarea>
  );
};
