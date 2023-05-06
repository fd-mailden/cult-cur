import React from "react";
import style from "./FormCredit.module.scss";
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaContactForm from "../../../helpers/yup/yup";
import { Loading } from "../../UI/Loader/Loading";
import { usePostData } from "../../../hooks/usePostData";
function FormCredit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schemaContactForm) });
  const onSubmit = (data) => submitForm(data);
  const { error, loading, postingData } = usePostData();
  function submitForm(data) {
    postingData("call-me", data);
    !error && reset();
  }
  return (
    <>
      {loading ? (
        <Loading width="250" height="10" />
      ) : (
        <form
          className={style["credit-form"]}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            id="user_name"
            {...register("user_name")}
            isValid={!errors.user_name}
            mode="input--dark-gray"
            placeholder="Имя"
          />
          <Input
            id="phone"
            {...register("phone")}
            isValid={!errors.phone}
            mode="input--dark-gray"
            placeholder="Телефон"
          />
          <Button type="submit" mode="button--height">
            Получить консультацию
          </Button>
        </form>
      )}{" "}
    </>
  );
}

export { FormCredit };
