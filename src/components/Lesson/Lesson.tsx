import React, { FC } from "react";
import cl from "./Lesson.module.scss";
import { TLesson } from "../../types/globalTypes";
import { TStudySchedule } from "../../redux/slices/study";
type LessonProps = {
  lesson: TStudySchedule;
};

export const Lesson: FC<LessonProps> = ({ lesson }) => {
  return (
    <div className={cl.lesson}>
      <span className={cl.time}>{lesson.startOfLesson}</span>
      <div className={cl.info}>
        <span className={cl.name}>{lesson.name}</span>
        <span className={cl.audience}>{lesson.location}</span>
        {!!lesson.type ? <span className={cl.type}>{lesson.type}</span> : null}
      </div>
    </div>
  );
};
