import React from "react";
import cl from "./LoginPage.module.scss";
import { useForm } from "react-hook-form";
// import { Input } from "./../../components/UI";
export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className={cl.wrapper}>
      <div className={cl.window}>
        <div className={cl.content}>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <div className={cl.inputPart}>
              <input
                className={cl.inp}
                {...register("login", {
                  required: "Пожалуйста, введите уникальный логин",
                })}
                placeholder={"login"}
              />
              <p className={cl.errorMessage}>{errors.login?.message}</p>
            </div>
            <div className={cl.inputPart}>
              <input
                className={cl.inp}
                {...register("password", {
                  required: "Пожалуйста, введите пароль",
                  minLength: {
                    value: 5,
                    message: "Пароль должен быть больше 4-х символов",
                  },
                })}
                placeholder={"password"}
              />
              <p className={cl.errorMessage}>{errors.password?.message}</p>
            </div>

            <input className={cl.submit} type="submit" value={"Login"} />
          </form>
        </div>
      </div>
    </div>
  );
};
