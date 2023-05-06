import React from "react";
import style from "./TestThisCarForm.module.scss";
import { Title } from "../../UI/Title/Title";
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
import { Subtitle } from "../../UI/Subtitle/Subtitle";
import { CardAutoForTest } from "../CardAutoForTest/CardAutoForTest";
import { SentenceLink } from "../../SentenceLink/SentenceLink";
import { useTestThisCarForm } from "./useTestThisCarForm";
import { Loading } from "../../UI/Loader/Loading";
import { LoaderWrapper } from "../../UI/LoaderWrapper/LoaderWrapper";
function TestThisCarForm({ car }) {
  const {
    models: { error, loading, register, errors },
    commands: { onSubmit, handleSubmit },
  } = useTestThisCarForm(car);
  return (
    <LoaderWrapper isLoading={loading} height="30" width="500">
      <form className={style["drive-form "]} onSubmit={handleSubmit(onSubmit)}>
        <Title>Записаться на тест-драйв</Title>
        <Subtitle>{`${car.brand} ${car.model} ${car.year} С пробегом ${car.mileage} км `}</Subtitle>
        <CardAutoForTest car={car} />
        <div className={style["input-section"]}>
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
        <h3 className={style.salon}>{car.salon}</h3>
        <SentenceLink mode="white" />
        <Button type="submit" mode="button--width-232">
          Записаться
        </Button>
      </form>
    </LoaderWrapper>
  );
}

export { TestThisCarForm };
