import { useEffect, useState } from "react";
import { PageWrapper } from "../../wrappers";
import cl from "./NodePage.module.scss";
import { NoteMenuButtons } from "../../components/NoteMenuButtons/NoteMenuButtons";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { Input } from "../../components/UI";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchChangeNote, fetchGetNoteByID } from "../../redux/slices/notes";
import { useParams } from "react-router-dom";
import { SaveChangesModal } from "../../components/SaveChangesModal/SaveChangesModal";
import { TNote } from "../../types/globalTypes";
import { IoMdCheckmark } from "react-icons/io";

export const NotePage = () => {
  const noteID = +(useParams().id || 0);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGetNoteByID(noteID));
    return () => {
      setIsActiveModal(true);
    };
  }, []);
  const activeNote = useAppSelector((state) => state.notes.activeNote.item);
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const editor = useEditor(
    {
      extensions: [StarterKit],
      content: text,
    },
    [text]
  );
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);

  useEffect(() => {
    setTitle(activeNote?.title || "");
    setText(activeNote?.text || "");
  }, [activeNote]);

  const changedNote: TNote = {
    id: noteID,
    user_id: activeNote?.user_id || 0,
    title,
    text,
  };
  const saveOnCloselHandler = () => {
    setIsActiveModal(false);
    if (title) {
      dispatch(fetchChangeNote(changedNote));
    }
  };
  // const cancelOnCloseHandler = () => setIsActiveModal(false);

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
        <div className={cl.saveBtn}>
          <IoMdCheckmark onClick={saveOnCloselHandler} />
        </div>
      </div>
      {/* <SaveChangesModal
        isActive={isActiveModal}
        onSaveClose={saveOnCloselHandler}
        onCancelClose={cancelOnCloseHandler}
      /> */}
    </PageWrapper>
  );
};
