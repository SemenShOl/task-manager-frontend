import React, { useEffect, useState } from "react";
import cl from "./TaskParameters.module.scss";
import { Input } from "../../UI/Input/Input";
import { DropdownUI } from "../../Dropdown/Dropdown";
export const TaskParameters = ({ setIsDropdownOpen, isDropdownOpen }) => {
  // console.log("taskparams rerenders with ", isActiveModal);

  // useEffect(() => {
  //   if (isActiveModal) setIsOpen(false);
  // }, [isActiveModal]);

  const onBackgroundClickHandler = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className={cl.wrapper} onClick={onBackgroundClickHandler}>
      <Input
        style={{ width: "100%", height: 40, fontSize: 30 }}
        placeholder={"Название задачи"}
      />
      <Input
        style={{ width: "100%", height: 20, fontSize: 15, marginLeft: 2 }}
        placeholder={"Описание"}
      />
      <DropdownUI isOpen={isDropdownOpen} setIsOpen={setIsDropdownOpen} />
    </div>
  );
};
