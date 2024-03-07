import React, { FC } from "react";
import cl from "./LessonList.module.scss";
import { TLesson } from "../../types/globalTypes";
import { Lesson } from "../Lesson/Lesson";

type LessonListProps = {
  lessons: TLesson[];
};

const LessonList: FC<LessonListProps> = ({ lessons }) => {
  return (
    <div className={cl.schedulelist}>
      {lessons.map((lesson) => (
        <Lesson lesson={lesson} />
      ))}
    </div>
  );
};
