import React from "react";
import { Loading } from "../../UI/Loader/Loading";
import { Input } from "../../UI/Input/Input";
import { useBiddingForm } from "./useBiddingForm";
import { Button } from "../../UI/Button/Button";
import style from "./BiddingForm.module.scss";
function BiddingForm({ car, onClose }) {
  const {
    models: { errors, register, loading },
    commands: { onSubmit, handleSubmit },
  } = useBiddingForm(car, onClose);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <h2 className={style.form__title}>Принять участия торгах</h2>
          <Input
            id="user_name"
            {...register("user_name")}
            isValid={!errors.user_name}
            mode="input--gray"
            placeholder="Имя"
          />
          <Input
            id="phone"
            {...register("phone")}
            isValid={!errors.phone}
            mode="input--gray"
            placeholder="Телефон"
          />
          <Input
            id="user_email"
            {...register("user_email")}
            isValid={!errors.phone}
            mode="input--gray"
            placeholder="Email"
          />
          <Button type="submit">Отправить</Button>
        </form>
      )}
    </>
  );
}

export { BiddingForm };
