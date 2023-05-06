import React from "react";
import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input";
import classNames from "classnames";
import { Select } from "../../UI/Select/Select";
import { connectionType } from "./connectionType";
function Form({
  style,
  addType,
  register,
  onSubmit,
  errors,
  handleSubmit,
  isEmpty,
}) {
  return (
    <form
      className={classNames(style.contact__form, "row")}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        id="user_name"
        {...register("user_name")}
        isValid={!errors.user_name}
        placeholder="Имя"
        mode="input--gray"
      />
      <Input
        id="phone"
        {...register("phone")}
        type="text"
        isValid={!errors.phone}
        placeholder="Телефон"
        mode="input--gray"
      />
      <Select
        selectData={connectionType}
        mode="--gray"
        field={connectionType.field}
        setDataField={addType}
        isEmpty={isEmpty}
      />
      <Button mode="button--width" type="submit">
        Заказать звонок
      </Button>
    </form>
  );
}

export { Form };
