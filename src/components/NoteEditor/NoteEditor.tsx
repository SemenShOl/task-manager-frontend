import { FC, useRef, RefObject, useState, useEffect } from "react";
import cl from "./NoteEditor.module.scss";
import "./editorStyles.scss";
import { NoteMenuButtons } from "./../NoteMenuButtons/NoteMenuButtons";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { NoteTitle } from "../NoteTitle/NoteTitle";

// type TextEditorProps = {};

export const NoteEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
  });

  return (
    <div className={cl.wrapper}>
      <div className={cl.areaWrapper}>
        {/* <EditorProvider
          slotBefore={<NoteMenuButtons />}
          extensions={extensions}
          content={content}
        >
          sdfsd
        </EditorProvider> */}
        {/* <NoteField />
         */}
        <NoteTitle />
        <NoteMenuButtons editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

// const Menu = () => {
//   const { editor } = useCurrentEditor();
//   console.log(editor?.getHTML());
//   return (
//     <div className={cl.btns}>
//       <ToggleButton
//         onClick={() => editor?.chain().focus().toggleBold().run()}
//         disabled={!editor?.can().chain().focus().toggleBold().run()}
//         className={editor?.isActive("bold") ? "is-active" : ""}
//       >
//         <FaBold />
//       </ToggleButton>
//       <ToggleButton
//         onClick={() => editor?.chain().focus().toggleItalic().run()}
//         disabled={!editor?.can().chain().focus().toggleItalic().run()}
//         className={editor?.isActive("italic") ? "is-active" : ""}
//       >
//         <FaItalic />
//       </ToggleButton>
//       <ToggleButton
//         onClick={() => editor?.chain().focus().toggleStrike().run()}
//         disabled={!editor?.can().chain().focus().toggleStrike().run()}
//         className={editor?.isActive("strike") ? "is-active" : ""}
//       >
//         <FaStrikethrough />
//       </ToggleButton>
//       <ToggleButton
//         onClick={() => editor?.chain().focus().toggleCode().run()}
//         disabled={!editor?.can().chain().focus().toggleCode().run()}
//         className={editor?.isActive("code") ? "is-active" : ""}
//       >
//         <FaCode />
//       </ToggleButton>

//       <ToggleButton
//         onClick={() =>
//           editor?.chain().focus().toggleHeading({ level: 1 }).run()
//         }
//         className={editor?.isActive("heading", { level: 1 }) ? "is-active" : ""}
//       >
//         <LuHeading1 size={15} />
//       </ToggleButton>
//       <ToggleButton
//         onClick={() =>
//           editor?.chain().focus().toggleHeading({ level: 2 }).run()
//         }
//         className={editor?.isActive("heading", { level: 2 }) ? "is-active" : ""}
//       >
//         <LuHeading2 size={15} />
//       </ToggleButton>
//       <ToggleButton
//         onClick={() =>
//           editor?.chain().focus().toggleHeading({ level: 3 }).run()
//         }
//         className={editor?.isActive("heading", { level: 3 }) ? "is-active" : ""}
//       >
//         <LuHeading3 size={15} />
//       </ToggleButton>

//       <ToggleButton
//         onClick={() => editor?.chain().focus().toggleBulletList().run()}
//         className={editor?.isActive("bulletList") ? "is-active" : ""}
//       >
//         <MdFormatListBulleted size={15} />
//       </ToggleButton>
//       <ToggleButton
//         onClick={() => editor?.chain().focus().toggleOrderedList().run()}
//         className={editor?.isActive("orderedList") ? "is-active" : ""}
//       >
//         <AiOutlineOrderedList size={15} />
//       </ToggleButton>
//     </div>
//   );
// };
