import React, { useState } from "react";
import { Button } from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";
import style from "./ModalWindowForm.module.scss";
import schemaContactForm from "../../helpers/yup/yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function ModalWindowForm(props) {
  const [isSuccessful, setSuccess] = useState(false);
  const {
    setSuccessful = setSuccess,
    submitForm = setSuccess,
    subData = {},
  } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaContactForm) });
  const onSubmit = (data) => submitForm({ ...data, ...subData });

  return (
    <div className={style["dealer-form"]}>
      <h2 className={style["dealer-form__title"]}>Оставить заявку дилеру</h2>
      <form
        className={style["dealer-form__inner"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          id="user_name"
          {...register("user_name")}
          type="text"
          isValid={!errors.user_name}
          placeholder="Имя"
        />
        <Input
          id="phone"
          {...register("phone")}
          type="text"
          isValid={!errors.phone}
          placeholder="Телефон"
        />
        <Button mode="button--width-232" type="submit">
          Отправить
        </Button>
      </form>
      <p className={style["dealer-form__text"]}>
        Обработка сведений о Пользователях осуществляется в соответствии{" "}
        <a href="">
          с Политикой в области обработки и обеспечения безопасности
          персональных данных.
        </a>
      </p>
    </div>
  );
}

export { ModalWindowForm };
