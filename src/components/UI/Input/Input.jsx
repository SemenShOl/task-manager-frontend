import cl from "./Input.module.scss";
export const Input = ({
  setValue,
  onKeyDownClick,
  style,
  value,
  placeholder,
}) => {
  const onInputChange = (e) => {
    setValue(e.target.value);
  };
  const onKeyDown = (e) => (e.key === "Enter" ? onKeyDownClick() : undefined);

  return (
    <input
      style={style}
      onChange={onInputChange}
      value={value}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      type="text"
    />
  );
};
