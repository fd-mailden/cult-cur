import React from "react";
import style from "./FeedbackWindow.module.scss";
import { Input } from "../../UI/Input/Input";
import { SentenceLink } from "../../SentenceLink/SentenceLink";
import { Button } from "../../UI/Button/Button";
import { useSubmitContactForm } from "../../../hooks/useSubmitContactForm";
import { Loading } from "../../UI/Loader/Loading";
function FeedbackWindow() {
  const {
    models: { errors, register, loading },
    commands: { onSubmit, handleSubmit },
  } = useSubmitContactForm();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <form className={style.feedback} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={style.feedback__title}>Оставить отзыв</h2>
          <div className={style["input-wrapper"]}>
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
          </div>

          <textarea
            className={style.feedback__textarea}
            placeholder="Отзыв"
            name="feedback"
            {...register("feedback")}
          />
          <SentenceLink mode="white" />
          <Button type="submit" mode="button--width">
            Отправить
          </Button>
        </form>
      )}
    </>
  );
}

export { FeedbackWindow };
