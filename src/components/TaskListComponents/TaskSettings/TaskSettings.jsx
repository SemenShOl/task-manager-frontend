import React from "react";
import cl from "./TaskSettings.module.scss";
import { Input } from "../../UI/Input/Input";
import { DropdownUI } from "../../Dropdown/Dropdown";
export const TaskSettings = () => {
  return (
    <div className={cl.wrapper}>
      <Input
        style={{ width: "100%", height: 40, fontSize: 30 }}
        placeholder={"Название задачи"}
      />
      <Input
        style={{ width: "100%", height: 20, fontSize: 15, marginLeft: 2 }}
        placeholder={"Описание"}
      />
      <DropdownUI />
    </div>
  );
};
