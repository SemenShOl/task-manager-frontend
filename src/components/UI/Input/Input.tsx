import { CSSProperties, FC } from "react";
import cl from "./Input.module.scss";
import cn from "classnames";

type InputProps = {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDownClick?: () => void;
  style?: CSSProperties;
  value: string | undefined;
  className?: string;
  placeholder?: string;
  ref?: any;
};

export const Input: FC<InputProps> = ({
  onInputChange,
  onKeyDownClick = () => {},
  style,
  value,
  placeholder,
  className,
  ref,
}) => {
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>
    e.key === "Enter" ? onKeyDownClick() : undefined;

  return (
    <input
      className={cn(className, cl.input)}
      style={style}
      onChange={onInputChange}
      value={value}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      type="text"
      ref={ref}
    />
  );
};
