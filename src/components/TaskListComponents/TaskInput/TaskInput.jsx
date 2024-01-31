import { useState } from "react";
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
import cl from "./TaskInput.module.scss";
import { AddButton } from "../../AddButton/AddButton";

export const TaskInput = ({ addTask, fontSize, btnSize, placeholder }) => {
  const [value, setValue] = useState("");
  const onAddTask = () => {
    addTask(value);
    setValue("");
  };

  return (
    <div className={cl.wrapper}>
      <AddButton size={btnSize} />

      <Input
        style={{ fontSize: fontSize }}
        value={value}
        setValue={setValue}
        onKeyDownClick={onAddTask}
        placeholder={placeholder}
      />
    </div>
  );
};
