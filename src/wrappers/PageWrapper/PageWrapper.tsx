import React, { ReactNode, FC } from "react";
import cl from "./PageWrapper.module.scss";
import { NavBar } from "../../components";
import { useCheckAuth } from "../../hooks";
type PageWrapperProps = {
  children: ReactNode;
  onClick?: () => void;
};
export const PageWrapper: FC<PageWrapperProps> = ({ children, onClick }) => {
  useCheckAuth();
  return (
    <div className={cl.wrapper} onClick={onClick}>
      <div className={cl.navBarBody}>
        <NavBar />
      </div>
      <div className={cl.pageContent}>{children}</div>
    </div>
  );
};
