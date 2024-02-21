import { useState } from "react";
import { PageWrapper } from "../../wrappers";
import cl from "./NodePage.module.scss";
import { NoteMenuButtons } from "../../components/NoteMenuButtons/NoteMenuButtons";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { Input } from "../../components/UI";

export const NotePage = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
  });

  const [title, setTitle] = useState<string>("");

  return (
    <PageWrapper>
      <div className={cl.wrapper}>
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
        <NoteMenuButtons editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </PageWrapper>
  );
};
