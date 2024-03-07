import React, { ReactNode, FC } from "react";
import cl from "./PageWrapper.module.scss";
import { NavBar } from "../../components";
import { useCheckAuth } from "../../hooks";
type PageWrapperProps = {
  children: ReactNode;
};
export const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  useCheckAuth();
  return (
    <div className={cl.wrapper}>
     <NavBar />
      <div className={cl.pageContent} >{children}</div>
    </div>
  );
};
