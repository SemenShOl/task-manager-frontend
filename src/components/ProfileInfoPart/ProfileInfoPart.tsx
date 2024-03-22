import React, { FC } from "react";
import cl from "./ProfileInfoPart.module.scss";
type ProfileInfoPartProps = {
  title: string;
  children: React.ReactNode;
};

export const ProfileInfoPart: FC<ProfileInfoPartProps> = ({
  title,
  children,
}) => {
  return (
    <div className={cl.infoPart}>
      <p className={cl.title}>{title}</p>
      <div className={cl.info}>{children}</div>
    </div>
  );
};
