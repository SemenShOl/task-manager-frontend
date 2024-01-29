import { useState } from "react";
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
import cl from "./TaskInput.module.scss";

export const TaskInput = ({ addTask }) => {
  const [value, setValue] = useState("");
  const onAddTask = () => {
    addTask(value);
    setValue("");
  };

  return (
    <div className={cl.wrapper}>
      <Input
        style={{ marginBottom: 10 }}
        value={value}
        setValue={setValue}
        onKeyDownClick={onAddTask}
      />
      <Button
        disabled={value.trim() === ""}
        className={cl.btn}
        onClick={onAddTask}
      >
        Добавить задачу
      </Button>
    </div>
  );
};
