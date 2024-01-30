import React from "react";
import Dropdown from "react-dropdown";
import cl from "./Dropdown.module.scss";
export const DropdownUI = () => {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <div>
      <Dropdown
        options={options}
        // onChange={this._onSelect}
        value={defaultOption}
        placeholder="Select an option"
        className={cl.wrapper}
        controlClassName={cl.controlClassName}
        placeholderClassName={cl.placeholderClassName}
        menuClassName={cl.menuClassName}
        arrowClassName={cl.arrowClassName}
      />
    </div>
  );
};
