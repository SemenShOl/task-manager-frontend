import cl from "./LoginPage.module.scss";
import { useForm } from "react-hook-form";
import { FormInput, SubmitButton } from "./../../components/UI";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchUserLogin } from "./../../redux/slices/currentUser";
import { NavLink, Navigate } from "react-router-dom";
import { AuthPageWrapper } from "../../wrappers";

type TFormLogin = {
  login: string;
  password: string;
};
export const LoginPage = () => {
  const { register, handleSubmit } = useForm<TFormLogin>();
  const dispatch = useAppDispatch();
  const isAuth =
    useAppSelector((state) => state.user.authInfo.isAuth) ||
    localStorage.getItem("token");
  const errorMessage = useAppSelector(
    (state) => state.user.authInfo.errorMessage
  );
  const handleLogin = (login: string, password: string) => {
    dispatch(fetchUserLogin({ login, password }));
  };

  return isAuth ? (
    <Navigate to="/" />
  ) : (
    <AuthPageWrapper>
      <form
        onSubmit={handleSubmit((data) =>
          handleLogin(data.login, data.password)
        )}
      >
        <FormInput
          formObject={register("login", {
            required: "Пожалуйста, введите логин",
          })}
          placeholder={"login"}
        />
        <FormInput
          formObject={register("password", {
            required: "Пожалуйста, введите пароль",
          })}
          placeholder={"password"}
          errorMessage={errorMessage}
        />

        <SubmitButton stringValue="Login" className={cl.submit} />
      </form>
      <NavLink to="/register" className={cl.notRegisterLink}>
        Еще не зарегистрированы?
      </NavLink>
    </AuthPageWrapper>
  );
};
