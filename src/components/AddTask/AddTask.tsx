import { FC } from "react";
import cl from "./AddTask.module.scss";
import { IoMdAdd } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { AddTaskProps } from "./AddTaskProps";
import { motion } from "framer-motion";
import { duration } from "moment";

export const AddTask: FC<AddTaskProps> = ({ title, fontSize, onAddTask }) => {
  return (
    <motion.div
      className={cl.wrapper}
      onClick={onAddTask}
      initial={{ opacity: 0, scaleX: 0.4 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={cl.addIcon}>
        <IoMdAdd className={cl.plus} />
        <FaCircle className={cl.circle} />
      </div>

      <p style={{ fontSize: fontSize }}>{title}</p>
    </motion.div>
  );
};
