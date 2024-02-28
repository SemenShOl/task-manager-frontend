import { CSSProperties, FC } from "react";
import cl from "./FormInput.module.scss";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";

type FormInputProps = {
  onKeyDownClick?: () => void;
  style?: CSSProperties;
  className?: string;
  placeholder?: string;
  formObject: UseFormRegisterReturn<any>;
  errorMessage?: string | undefined;
};

export const FormInput: FC<FormInputProps> = ({
  onKeyDownClick = () => {},
  style,
  placeholder,
  className,
  formObject,
  errorMessage,
}) => {
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>
    e.key === "Enter" ? onKeyDownClick() : undefined;
  return (
    <div className={cl.inputPart}>
      <input
        className={className}
        style={style}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        type="text"
        {...formObject}
      />
      <p className={cl.errorMessage}>{errorMessage}</p>
    </div>
  );
};
