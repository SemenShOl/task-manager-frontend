import React, { FC } from "react";
import cl from "./Lesson.module.scss";
// import { TLesson } from "../../types/globalTypes";
import { TLesson } from "../../redux/slices/study";
import Color from "../../styles/colors.module.scss";
type LessonProps = {
  lesson: TLesson;
};

export const Lesson: FC<LessonProps> = ({ lesson }) => {
  const isLecture = lesson.type === "Лек";
  return (
    <div className={cl.lesson}>
      <span className={cl.time}>{lesson.startOfLesson}</span>
      <div className={cl.info}>
        <span className={cl.name}>{lesson.name}</span>
        <span className={cl.audience}>{lesson.location}</span>
        {!!lesson.type ? (
          <span
            className={cl.type}
            style={{
              backgroundColor: isLecture ? Color.purple : Color.purple2,
            }}
          >
            {lesson.type}
          </span>
        ) : null}
      </div>
    </div>
  );
};
