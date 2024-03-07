import React, { FC } from "react";
import cl from "./Lesson.module.scss";
import { TLesson } from "../../types/globalTypes";
type LessonProps = {
  lesson: TLesson;
};

export const Lesson: FC<LessonProps> = ({ lesson }) => {
  return (
    <div className={cl.lesson}>
      <p className={cl.time}>{lesson.time}</p>
      <div className={cl.info}>
        <span className={cl.name}>{lesson.name}</span>
        <span className={cl.audience}>{lesson.audience}</span>
        <span className={cl.type}>{lesson.type}</span>
      </div>
    </div>
  );
};
