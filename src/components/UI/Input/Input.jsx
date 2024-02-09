import cl from "./Input.module.scss";
export const Input = ({ params, setValue, onKeyDownClick }) => {
  const onInputChange = (e) => {
    setValue(e.target.value);
  };
  const onKeyDown = (e) => (e.key === "Enter" ? onKeyDownClick() : undefined);

  return (
    <input
      onChange={onInputChange}
      onKeyDown={onKeyDown}
      {...params}
      type="text"
    />
  );
};
