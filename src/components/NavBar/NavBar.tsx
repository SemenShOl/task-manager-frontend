import { FaNoteSticky } from "react-icons/fa6";
import { IoCalendarNumber } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import cl from "./NavBar.module.scss";
import { useNavigate } from "react-router-dom";
export const NavBar = () => {
  const navigate = useNavigate();

  const toCalendar = () => navigate("/calendar");
  const toNotes = () => navigate("/notes");
  const toPomodoro = () => navigate("/pomdoro");
  const toAllTasks = () => navigate("/tasks");

  return (
    <div className={cl.wrapper}>
      <div className={cl.profile}>
        <CgProfile size={40} />
      </div>
      <div className={cl.pages}>
        <div onClick={toNotes}>
          <FaNoteSticky /> Конспекты
        </div>
        <div onClick={toCalendar}>
          <IoCalendarNumber /> Календарь
        </div>
        <div onClick={toAllTasks}>
          <FaTasks /> Задачи
        </div>
        <div onClick={toPomodoro}>
          <MdOutlineTimer /> Помодоро
        </div>
      </div>
    </div>
  );
};
