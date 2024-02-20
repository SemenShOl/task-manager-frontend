import React, { useState } from "react";
import { Input } from "../UI";

type NoteTitleProps = {};

export const NoteTitle = () => {
  const [title, setTitle] = useState<string>("");
  return (
    <div>
      <Input
        style={{
          width: "100%",
          height: 40,
          fontSize: 34,
          fontWeight: "bold",
        }}
        value={title}
        setValue={setTitle}
        onKeyDownClick={() => {}}
        placeholder="Название "
      />
    </div>
  );
};
