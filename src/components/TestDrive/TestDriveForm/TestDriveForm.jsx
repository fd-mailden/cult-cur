import React from "react";
import { BrandModelSelect } from "../../Helpers/BrandModelSelect/BrandModelSelect";
import { Title } from "../../UI/Title/Title";
import { Select } from "../../UI/Select/Select";
import { Input } from "../../UI/Input/Input";
import { SentenceLink } from "../../SentenceLink/SentenceLink";
import { Button } from "../../UI/Button/Button";
import style from "./TestDriveForm.module.scss";
import { Loading } from "../../UI/Loader/Loading";
import { ErrorText } from "../../UI/ErrorText/ErrorText";
import { useTestDriveForm } from "./useTestDriveForm";
function TestDriveForm() {
  const {
    onSubmit,
    handleSubmit,
    register,
    errors,
    marketState,
    setFormData,
    formData,
    isChoosingSalon,
    loading,
    addToForm,
  } = useTestDriveForm();

  return (
    <form className={style["drive-form"]} onSubmit={handleSubmit(onSubmit)}>
      <Title>Записаться на тест-драйв</Title>

      {loading ? (
        <Loading height="20" width="500" />
      ) : (
        <>
          <p className={style["drive-form__subtitle"]}>Выбрать автомобиль</p>
          <div className={style["drive-form__section"]}>
            <BrandModelSelect
              setOptions={setFormData}
              propsOptions={formData}
            />
          </div>
          <p className={style["drive-form__subtitle"]}>Контактные данные</p>
          <div className={style["drive-form__section"]}>
            <Input
              id="user_name"
              {...register("user_name")}
              isValid={!errors.user_name}
              placeholder="Имя"
            />
            <Input
              id="phone"
              {...register("phone")}
              isValid={!errors.phone}
              placeholder="Телефон"
            />
          </div>
          <p className={style["drive-form__subtitle"]}>Где пройти тест-драйв</p>
          <Select
            mode="--max-width-484"
            selectData={marketState}
            setDataField={addToForm}
            field={marketState.field}
            isEmpty={isChoosingSalon}
          />
          <SentenceLink mode="white" />
          <Button type="submit" mode="button--width-232">
            Записаться
          </Button>
        </>
      )}
      {isChoosingSalon && <ErrorText text="Не все поля заполнены" />}
    </form>
  );
}

export { TestDriveForm };
