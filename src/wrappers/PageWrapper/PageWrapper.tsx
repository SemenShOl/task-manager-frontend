import React, { ReactNode, FC } from "react";
import cl from "./PageWrapper.module.scss";
import { NavBar } from "../../components";
type PageWrapperProps = {
  children: ReactNode;
};
export const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className={cl.wrapper}>
      <NavBar />
      <div className={cl.pageContent}>{children}</div>
    </div>
  );
};
