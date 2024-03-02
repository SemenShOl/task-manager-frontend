import React from "react";
import cl from "./NotFoundPage.module.scss";
import { NavLink } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.window}>
        <div className={cl.infoString}>
          <h1>{"Страница не найдена..."}</h1>
        </div>
        <NavLink to="/" className={cl.toMainLink}>
          На главную
        </NavLink>
      </div>
    </div>
  );
};
