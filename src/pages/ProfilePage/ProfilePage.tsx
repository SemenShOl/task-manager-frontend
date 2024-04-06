import cl from "./ProfilePage.module.scss";
import { useTheme } from "../../hooks";
import { useEffect, useRef, useState } from "react";
import { Button, Input, Dropdown, Toggle } from "../../components/UI";
import { PageWrapper } from "../../wrappers";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  fetchUserChangeData,
  userLogout,
} from "../../redux/slices/currentUser";
import { useNavigate } from "react-router-dom";
import { ProfileInfoPart } from "../../components";
import { fetchGetStudyGroups } from "../../redux/slices/study";
import { TOption } from "../../types/globalTypes";

export const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const { setTheme } = useTheme();

  const [password, setPassword] = useState<string>(
    localStorage.getItem("password") || ""
  );
  const [login, setLogin] = useState<string>(
    localStorage.getItem("login") || ""
  );

  const loginRef = useRef<string>();
  const passwordRef = useRef<string>();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchGetStudyGroups());
    loginRef.current = localStorage.getItem("login") || "";
    passwordRef.current = localStorage.getItem("password") || "";
    return () => {
      if (
        (loginRef.current !== localStorage.getItem("login") ||
          passwordRef.current !== localStorage.getItem("password")) &&
        localStorage.getItem("token")
      ) {
        const isSave = window.confirm("Сохранить измения?");
        if (isSave)
          dispatch(
            fetchUserChangeData({
              login: loginRef.current || "",
              password: passwordRef.current || "",
            })
          );
      }
    };
  }, []);

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    passwordRef.current = e.target.value;
  };

  const logoutHandler = () => {
    dispatch(userLogout());
    navigate("/login");
  };

  const [groupName, setGroupName] = useState<string>(
    localStorage.getItem("groupName") || ""
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [chosenOption, setChosenOption] = useState<TOption>();

  const { groups } = useAppSelector((state) => state.study);

  const groupOptions = new Map<string, TOption>(
    groups.map(({ id, name }) => [id, { name }])
  );
  useEffect(() => {
    groupOptions.forEach((value) => {
      if (groupName === value.name) {
        setChosenOption(value);
      }
    });
  }, [groups]);

  const changeGroupHandler = (optionKey: string) => {
    dispatch(
      fetchUserChangeData({
        login: login,
        password: password,
        groupName: groupOptions.get(optionKey)?.name || "",
      })
    );
    localStorage.setItem("groupName", groupOptions.get(optionKey)?.name || "");
    setChosenOption(groupOptions.get(optionKey));
  };

  return (
    <div className={cl.wrapper} onClick={() => setIsDropdownOpen(false)}>
      <div className={cl.window}>
        <div className={cl.settings}>
        <ProfileInfoPart title="Логин">{login}</ProfileInfoPart>
        <ProfileInfoPart title="Пароль">
          <Input
            value={password}
            onInputChange={passwordChangeHandler}
            placeholder="password"
            ref={passwordRef}
          />
        </ProfileInfoPart>
        <ProfileInfoPart title="Цветовая тема">
          <Toggle
            onChange={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
          />
        </ProfileInfoPart>
        <ProfileInfoPart title="Учебная группа">
          <Dropdown
            isOpen={isDropdownOpen}
            options={groupOptions}
            setIsOpen={setIsDropdownOpen}
            chosenOption={chosenOption}
            setChosenOption={changeGroupHandler}
          />
        </ProfileInfoPart>
        </div>
       

        <Button onClick={logoutHandler} className={cl.submit}>
          Выйти из профиля
        </Button>
      </div>
    </div>
  );
};
