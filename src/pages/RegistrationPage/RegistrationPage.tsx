import cl from "./RegistrationPage.module.scss";
import { useForm } from "react-hook-form";
import { FormInput, SubmitButton } from "../../components/UI";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchUserRegistration } from "../../redux/slices/currentUser";
import { NavLink, Navigate } from "react-router-dom";
import { AuthPageWrapper } from "../../wrappers";
import { useTheme } from "../../hooks";

type TFormLogin = {
  login: string;
  password: string;
};
export const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormLogin>();

  const dispatch = useAppDispatch();
  useTheme();
  const handleRegistration = (login: string, password: string) => {
    dispatch(fetchUserRegistration({ login, password, groupName: "ПИН-36" }));
  };
  const errorMessage = useAppSelector(
    (state) => state.user.authInfo.errorMessage
  );
  const isAuth =
    useAppSelector((state) => state.user.authInfo.isAuth) ||
    localStorage.getItem("token");

  return isAuth ? (
    <Navigate to="/" />
  ) : (
    <AuthPageWrapper>
      <form
        onSubmit={handleSubmit((data) =>
          handleRegistration(data.login, data.password)
        )}
      >
        <FormInput
          className={cl.inp}
          formObject={register("login", {
            required: "Пожалуйста, введите уникальный логин",
          })}
          placeholder={"login"}
          errorMessage={errorMessage || errors.login?.message}
        />
        <FormInput
          className={cl.inp}
          formObject={register("password", {
            required: "Пожалуйста, введите пароль",
            minLength: {
              value: 5,
              message: "Пароль должен быть больше 4-х символов",
            },
          })}
          placeholder={"password"}
          errorMessage={errors.password?.message}
        />

        <SubmitButton stringValue="Register" className={cl.submit} />
      </form>
      <NavLink to="/login" className={cl.notRegisterLink}>
        Уже есть аккаунт?
      </NavLink>
    </AuthPageWrapper>
  );
};
