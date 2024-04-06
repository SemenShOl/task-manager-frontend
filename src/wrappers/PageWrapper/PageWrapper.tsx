import React, { ReactNode, FC, useState } from "react";
import cl from "./PageWrapper.module.scss";
import { NavBar } from "../../components";
import { useCheckAuth, useTheme } from "../../hooks";
import { Outlet } from "react-router-dom";
type PageWrapperProps = {
  children: ReactNode;
  onClick?: () => void;
};
export const PageWrapper: FC<PageWrapperProps> = ({ children, onClick }) => {
  useCheckAuth();
  useTheme();

  return (
    <div className={cl.wrapper} onClick={onClick}>
      <div className={cl.navBarBody}>
        <NavBar />
      </div>
      <div className={cl.pageContent}>
        <Outlet />
      </div>
    </div>
  );
};
