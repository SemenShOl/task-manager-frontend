import { FaNoteSticky } from "react-icons/fa6";
import { IoCalendarNumber } from "react-icons/io5";
import {
  MdCalendarToday,
  MdOutlineCalendarToday,
  MdAvTimer,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import cl from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import moment from "moment";

export const NavBar = () => {
  const today = moment().format("YYYY-MM-DD");
  const tomorrow = moment().add(1, "day").format("YYYY-MM-DD");

  return (
    <div className={cl.wrapper}>
      <NavLink className={cl.profile} to="/profile">
        <CgProfile size={45} />
      </NavLink>
      <div className={cl.pages}>
        <NavLink to="/notes">
          <FaNoteSticky /> <p>Конспекты</p>
        </NavLink>
        <NavLink to="/">
          <IoCalendarNumber /> <p>Календарь</p>
        </NavLink>
        <NavLink to="/pomodoro">
          <MdAvTimer /> <p>Помодоро-таймер</p>
        </NavLink>
        <NavLink to={`/${today}`}>
          <MdCalendarToday /> <p>Сегодня</p>
        </NavLink>
        <NavLink to={`/${tomorrow}`}>
          <MdOutlineCalendarToday /> <p>Завтра</p>
        </NavLink>
      </div>
    </div>
  );
};
