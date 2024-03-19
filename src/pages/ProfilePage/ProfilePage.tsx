import cl from "./ProfilePage.module.scss";
import { useEffect, useRef, useState } from "react";
import { Button, Input, Dropdown } from "../../components/UI";
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
    <PageWrapper onClick={() => setIsDropdownOpen(false)}>
      <div className={cl.wrapper}>
        <div className={cl.window}>
          <ProfileInfoPart title="Ваш логин:">{login}</ProfileInfoPart>
          <ProfileInfoPart title="Ваш пароль:">
            <Input
              value={password}
              onInputChange={passwordChangeHandler}
              placeholder="password"
              ref={passwordRef}
            />
          </ProfileInfoPart>
          <ProfileInfoPart title="Ваша группа:">
            <Dropdown
              isOpen={isDropdownOpen}
              options={groupOptions}
              setIsOpen={setIsDropdownOpen}
              chosenOption={chosenOption}
              setChosenOption={changeGroupHandler}
            />
          </ProfileInfoPart>

          <Button onClick={logoutHandler} className={cl.submit}>
            Выйти из профиля
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};
