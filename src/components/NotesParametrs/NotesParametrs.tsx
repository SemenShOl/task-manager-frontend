import React, { FC, useEffect, useState } from "react";
import { ModalBackgroundWrapper, ModalContentWrapper } from "../../wrappers";
import { TNote, TNewNote } from "../../types/globalTypes";
import { Input } from "../UI";
import { NoteMenuButtons, ModalHeader } from "../../components";
import { EditorContent, useEditor } from "@tiptap/react";
import { useAppDispatch } from "../../redux/store";
import { fetchAddNote, fetchChangeNote } from "../../redux/slices/notes";
import StarterKit from "@tiptap/starter-kit";
import cl from "./NotesParametrs.module.scss";
import { NotesParametrsProps } from "./NotesParametrsProps";

export const NotesParametrs: FC<NotesParametrsProps> = ({
  isActive,
  onClose,
  activeNote,
  user_id,
}) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const editor = useEditor(
    {
      extensions: [StarterKit],
      content: text,
    },
    [text]
  );

  useEffect(() => {
    setTitle(activeNote?.title || "");
    setText(activeNote?.text || "");
  }, [isActive]);

  const newNote: TNewNote = {
    title,
    text: editor?.getHTML() || "",
  };
  const changedNote: TNote = {
    id: activeNote?.id || 0,
    title,
    text: editor?.getHTML() || "",
  };

  const closeModalHandler = () => {
    onClose();
    if (activeNote && title) {
      dispatch(fetchChangeNote(changedNote));
    } else if (title) {
      dispatch(fetchAddNote(newNote));
    }
  };
  const headerTitle = activeNote ? "Изменить запись" : "Создать запись";
  return (
    <ModalBackgroundWrapper
      isActive={isActive}
      onBackgroundClick={closeModalHandler}
    >
      <ModalContentWrapper
        isActive={isActive}
        style={{ width: "45%", height: "85%" }}
      >
        <ModalHeader
          title={headerTitle}
          onClose={closeModalHandler}
          style={{ marginBottom: "10px", fontSize: "14px" }}
        />
        <div className={cl.main}>
          <Input
            style={{
              width: "100%",
              height: 40,
              fontSize: 34,
              fontWeight: "bold",
            }}
            value={title}
            onInputChange={(e) => setTitle(e.target.value)}
            onKeyDownClick={closeModalHandler}
            placeholder="Название"
          />
          <NoteMenuButtons editor={editor} />
          <EditorContent editor={editor} />
        </div>
      </ModalContentWrapper>
    </ModalBackgroundWrapper>
  );
};
