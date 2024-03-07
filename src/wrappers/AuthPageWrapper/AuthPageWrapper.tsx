import React, { ReactNode, FC } from "react";
import cl from "./AuthPageWrapper.module.scss";

type AuthPageWrapperProps = {
  children: ReactNode;
};
export const AuthPageWrapper: FC<AuthPageWrapperProps> = ({children}) => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.window}>{children}</div>
    </div>
  );
};
