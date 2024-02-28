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
  return (
    <PageWrapper>
      <div className={cl.wrapper}>
        <div className={cl.window}>
          <div>
            <p>Ваш логин:</p>
            <Input
              value={login}
              onInputChange={loginChangeHandler}
              placeholder="login"
              ref={loginRef}
            />
          </div>
          <div>
            <p>Ваш пароль:</p>
            <Input
              value={password}
              onInputChange={passwordChangeHandler}
              placeholder="password"
              ref={passwordRef}
            />
          </div>
          <Button onClick={logoutHandler} className={cl.submit}>
            Выйти из профиля
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};
