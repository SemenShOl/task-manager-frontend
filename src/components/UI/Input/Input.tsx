import { CSSProperties, FC } from "react";
import cl from "./Input.module.scss";
import classNames from "classnames";

type InputProps = {
  setValue: (str: string) => void;
  onKeyDownClick: () => void;
  style?: CSSProperties;
  value: string | undefined;
  className?: string;
  placeholder?: string;
};

export const Input: FC<InputProps> = ({
  setValue,
  onKeyDownClick,
  style,
  value,
  placeholder,
  className,
}) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>
    e.key === "Enter" ? onKeyDownClick() : undefined;

  return (
    <input
      className={className}
      style={style}
      onChange={onInputChange}
      value={value}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      type="text"
    />
  );
};
