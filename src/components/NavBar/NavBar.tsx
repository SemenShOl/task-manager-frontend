import { FaNoteSticky } from "react-icons/fa6";
import { IoCalendarNumber } from "react-icons/io5";
import { MdCalendarToday } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineCalendarToday } from "react-icons/md";
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
          <FaNoteSticky /> Конспекты
        </NavLink>
        <NavLink to="/">
          <IoCalendarNumber /> Календарь
        </NavLink>

        <NavLink to={`/${today}`}>
          <MdCalendarToday /> Сегодня
        </NavLink>
        <NavLink to={`/${tomorrow}`}>
          <MdOutlineCalendarToday /> Завтра
        </NavLink>
      </div>
    </div>
  );
};
