// import { useEffect, useRef, useState } from "react";
// import { PageWrapper } from "../../wrappers";
// import cl from "./NotePage.module.scss";
// import { NoteMenuButtons } from "../../components/NoteMenuButtons/NoteMenuButtons";
// import { EditorContent, useEditor } from "@tiptap/react";
// import { StarterKit } from "@tiptap/starter-kit";
// import { Input } from "../../components/UI";
// import { useAppDispatch, useAppSelector } from "../../redux/store";
// import { fetchChangeNote, fetchGetNoteByID } from "../../redux/slices/notes";
// import { useNavigate, useParams } from "react-router-dom";
// import { TNewNote, TNote } from "../../types/globalTypes";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// const NotePage = () => {
//   const noteID = +(useParams().id || -1);
//   const dispatch = useAppDispatch();
//   const [title, setTitle] = useState<string>("");
//   const [text, setText] = useState<string>("");
//   const titleRef = useRef<string>();
//   const textRef = useRef<string>();
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (noteID !== -1) dispatch(fetchGetNoteByID(noteID));
//     return () => {
//       saveOnCloselHandler(titleRef.current || "", textRef.current || "");
//     };
//   }, []);
//   const activeNote = useAppSelector((state) => state.notes.activeNote.item);
//   const editor = useEditor(
//     {
//       extensions: [StarterKit],
//       content: text,
//     },
//     [text]
//   );

//   useEffect(() => {
//     setTitle(activeNote?.title || "");
//     setText(activeNote?.text || "");
//     titleRef.current = activeNote?.title;
//     textRef.current = editor?.getHTML();
//   }, [activeNote]);

//   const newNote: TNewNote = {
//     title,
//     text: editor?.getHTML() || "",
//   };

//   const saveOnCloselHandler = (title: string, text: string) => {
//     const changedNote: TNote = {
//       id: noteID,
//       title,
//       text,
//     };
//     if (title) {
//       dispatch(fetchChangeNote(changedNote));
//     }
//   };
//   console.log("textRef: ", textRef.current);
//   console.log("titleRef ", titleRef.current);

//   const handleSetTitle = (newValue: string) => {
//     setTitle(newValue);
//     titleRef.current = newValue;
//   };
//   return (
//     <PageWrapper>
//       <div className={cl.wrapper}>
//         <Input
//           style={{
//             width: "100%",
//             height: 40,
//             fontSize: 34,
//             fontWeight: "bold",
//           }}
//           value={title}
//           setValue={handleSetTitle}
//           onKeyDownClick={() => {}}
//           placeholder="Название "
//         />
//         <NoteMenuButtons editor={editor} />
//         <EditorContent editor={editor} />
//         <div className={cl.closeBtn}>
//           <MdKeyboardDoubleArrowRight onClick={() => navigate("/notes")} />
//         </div>
//       </div>
//       {/* <SaveChangesModal
//         isActive={isActiveModal}
//         onSaveClose={saveOnCloselHandler}
//         onCancelClose={cancelOnCloseHandler}
//       /> */}
//     </PageWrapper>
//   );
// };
