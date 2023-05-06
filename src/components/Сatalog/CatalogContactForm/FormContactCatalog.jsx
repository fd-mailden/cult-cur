import React from "react";
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
import { Loading } from "../../UI/Loader/Loading";
import { useSubmitContactForm } from "../../../hooks/useSubmitContactForm";
function FormContactCatalog({ style }) {
  const {
    models: { errors, register, loading },
    commands: { onSubmit, handleSubmit },
  } = useSubmitContactForm();
  return (
    <>
      {loading ? (
        <Loading height={10} />
      ) : (
        <form
          action=""
          className={style["catalog-form__form"]}
          onSubmit={handleSubmit(onSubmit)}
        >
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
          <Button mode="button--width" type="submit">
            Подобрать авто
          </Button>
        </form>
      )}
    </>
  );
}

export { FormContactCatalog };
