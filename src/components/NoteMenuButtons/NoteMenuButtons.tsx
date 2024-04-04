import { FC } from "react";
import { FaBold, FaItalic, FaStrikethrough, FaCode } from "react-icons/fa";
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";
import { MdFormatListBulleted } from "react-icons/md";
import { AiOutlineOrderedList } from "react-icons/ai";
import { TextTypeButton } from "../UI";
import "./editorStyles.scss";
import cl from "./NoteMenuButtons.module.scss";
import { NoteMenuButtonsProps } from "./NoteMenuButtonsProps";

export const NoteMenuButtons: FC<NoteMenuButtonsProps> = ({ editor }) => {
  return (
    <div className={cl.btns}>
      <TextTypeButton
        onClick={() => editor?.chain().focus().toggleBold().run()}
        disabled={!editor?.can().chain().focus().toggleBold().run()}
        className={editor?.isActive("bold") ? "is-active" : ""}
      >
        <FaBold />
      </TextTypeButton>
      <TextTypeButton
        onClick={() => editor?.chain().focus().toggleItalic().run()}
        disabled={!editor?.can().chain().focus().toggleItalic().run()}
        className={editor?.isActive("italic") ? "is-active" : ""}
      >
        <FaItalic />
      </TextTypeButton>
      <TextTypeButton
        onClick={() => editor?.chain().focus().toggleStrike().run()}
        disabled={!editor?.can().chain().focus().toggleStrike().run()}
        className={editor?.isActive("strike") ? "is-active" : ""}
      >
        <FaStrikethrough />
      </TextTypeButton>
      <TextTypeButton
        onClick={() => editor?.chain().focus().toggleCode().run()}
        disabled={!editor?.can().chain().focus().toggleCode().run()}
        className={editor?.isActive("code") ? "is-active" : ""}
      >
        <FaCode />
      </TextTypeButton>

      <TextTypeButton
        onClick={() =>
          editor?.chain().focus().toggleHeading({ level: 1 }).run()
        }
        className={editor?.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        <LuHeading1 size={15} />
      </TextTypeButton>
      <TextTypeButton
        onClick={() =>
          editor?.chain().focus().toggleHeading({ level: 2 }).run()
        }
        className={editor?.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        <LuHeading2 size={15} />
      </TextTypeButton>
      <TextTypeButton
        onClick={() =>
          editor?.chain().focus().toggleHeading({ level: 3 }).run()
        }
        className={editor?.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        <LuHeading3 size={15} />
      </TextTypeButton>

      <TextTypeButton
        onClick={() => editor?.chain().focus().toggleBulletList().run()}
        className={editor?.isActive("bulletList") ? "is-active" : ""}
      >
        <MdFormatListBulleted size={15} />
      </TextTypeButton>
      <TextTypeButton
        onClick={() => editor?.chain().focus().toggleOrderedList().run()}
        className={editor?.isActive("orderedList") ? "is-active" : ""}
      >
        <AiOutlineOrderedList size={15} />
      </TextTypeButton>
    </div>
  );
};
