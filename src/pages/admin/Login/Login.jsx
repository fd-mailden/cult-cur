import React, { useState } from "react";
import style from "./Login.module.scss";
import { Title } from "../../../components/UI/Title/Title";
import { MainWrapper } from "../../../components/UI/MainWrapper/MainWrapper";
import { Input } from "../../../components/UI/Input/Input";
import { Button } from "../../../components/UI/Button/Button";
import { Checkbox } from "../../../components/UI/Checkbox/Checkbox";
import { useLogin } from "./useLogin";
import { MAIN_ROUTES } from "../../../settings/routes";
import { Link } from "react-router-dom";
import { Loading } from "../../../components/UI/Loader/Loading";
function Login() {
  const [isShowPassword, onShowPassword] = useState(false);
  const { register, errors, isLoading, handleSubmit } = useLogin();
  return (
    <div className={style.login}>
      {isLoading ? (
        <Loading />
      ) : (
        <form className={style.form} onSubmit={handleSubmit}>
          <Title>Log in</Title>
          <Input
            id="login"
            {...register("login")}
            isValid={!errors.login}
            placeholder="Login"
          />
          <Input
            id="password"
            {...register("password")}
            isValid={!errors.password}
            placeholder="password"
            type={!isShowPassword ? "password" : "text"}
          />
          <Checkbox label="Show password ?" setCheck={onShowPassword} />
          <Button type="submit">Login</Button>
        </form>
      )}

      <Link to={MAIN_ROUTES.MAIN.path} className={style.link}>
        Back to shop page
      </Link>
    </div>
  );
}

export { Login };
