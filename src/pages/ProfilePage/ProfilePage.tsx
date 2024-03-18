import { useEffect, useRef, useState } from "react";
import { Button, Input } from "../../components/UI";
import { PageWrapper } from "../../wrappers";
import cl from "./ProfilePage.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  fetchUserChangeData,
  userLogout,
} from "../../redux/slices/currentUser";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "../../components";
import { fetchStudyGroups } from "../../redux/slices/study";
import { TOption } from "../../types/globalTypes";

export const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const [password, setPassword] = useState<string>(
    localStorage.getItem("password") || ""
  );
  const [login, setLogin] = useState<string>(
    localStorage.getItem("login") || ""
  );

  const { groups } = useAppSelector((state) => state.study);
  // const groupName = useAppSelector((state) => state.user.userInfo.groupName);
  const [groupName, setGroupName] = useState<string>(
    localStorage.getItem("groupName") || ""
  );
  const loginRef = useRef<string>();
  const passwordRef = useRef<string>();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchStudyGroups());
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
              // groupName: localStorage.getItem("groupName") || "ПИН-36",
            })
          );
      }
    };
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const loginChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
    loginRef.current = e.target.value;
  };
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    passwordRef.current = e.target.value;
  };

  const logoutHandler = () => {
    dispatch(userLogout());
    navigate("/login");
  };
  const groupOptions = new Map(groups.map(({ id, name }) => [id, { name }]));
  const [chosenOption, setChosenOption] = useState<TOption>();

  useEffect(() => {
    groupOptions.forEach((value, key) => {
      if (groupName === value.name) {
        setChosenOption(value);
      }
    });
  }, [groups]);

  console.log("profile page rerenders: ", chosenOption);
  return (
    <PageWrapper onClick={() => setIsDropdownOpen(false)}>
      <div className={cl.wrapper}>
        <div className={cl.window}>
          <div className={cl.infoPart}>
            <p>Ваш логин: </p>
            <div className={cl.info}> {login}</div>
          </div>
          <div className={cl.infoPart}>
            <p>Ваш пароль:</p>
            <div className={cl.info}>
              <Input
                value={password}
                onInputChange={passwordChangeHandler}
                placeholder="password"
                ref={passwordRef}
              />
            </div>
          </div>
          <div className={cl.infoPart}>
            <p>Ваша группа:</p>
            <div className={cl.info}>
              <Dropdown
                isOpen={isDropdownOpen}
                options={groupOptions}
                setIsOpen={setIsDropdownOpen}
                chosenOption={chosenOption}
                setChosenOption={(optionKey: string) => {
                  console.log(optionKey);
                  dispatch(
                    fetchUserChangeData({
                      login: login,
                      password: password,
                      groupName: groupOptions.get(optionKey)?.name || "",
                    })
                  );
                  localStorage.setItem(
                    "groupName",
                    groupOptions.get(optionKey)?.name || ""
                  );
                  setChosenOption(groupOptions.get(optionKey));
                }}
              />
            </div>
          </div>

          <Button onClick={logoutHandler} className={cl.submit}>
            Выйти из профиля
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};
