import cl from "./Input.module.scss";

export const Input = ({
  style,
  value,
  setValue,
  onKeyDownClick,
  placeholder,
}) => {
  const onInputChange = (e) => {
    setValue(e.target.value);
  };
  const onKeyDown = (e) => (e.key === "Enter" ? onKeyDownClick() : undefined);

  return (
    <input
      onChange={onInputChange}
      onKeyDown={onKeyDown}
      style={style}
      value={value}
      placeholder={placeholder}
      type="text"
    />
  );
};
