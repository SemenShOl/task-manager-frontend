import React from "react";
import { Button } from "../UI/Button/Button";
import cl from "./TodoFilter.module.scss";
import cn from "classnames";

export const TodoFilters = ({ setFilter, filter }) => {
  return (
    <div className={cl.wrapper}>
      <Button
        className={filter == "active" ? cn(cl.btn, cl.active) : cl.btn}
        onClick={() => setFilter("active")}
      >
        active
      </Button>
      <Button
        className={filter == "completed" ? cn(cl.btn, cl.active) : cl.btn}
        onClick={() => setFilter("completed")}
      >
        completed
      </Button>
      <Button
        className={filter == "all" ? cn(cl.btn, cl.active) : cl.btn}
        onClick={() => setFilter("all")}
      >
        all
      </Button>
    </div>
  );
};
