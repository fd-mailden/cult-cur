import React from "react";
import style from "./StatementsFilter.module.scss";
import { Input } from "../../../UI/Input/Input";
import { Button } from "../../../UI/Button/Button";
import { BrandModelSelect } from "../../../Helpers/BrandModelSelect/BrandModelSelect";
import { RangeFilter } from "../../../Helpers/RangeFilter/RangeFilter";
import { SentenceLink } from "../../../SentenceLink/SentenceLink";
import { Loading } from "../../../UI/Loader/Loading";
import { useStatementsFilter } from "./useStatementsFilter";
function StatementsFilter({ loanOffers = {} }) {
  const {
    models: { register, errors, isLoad, formData },
    commands: { addToForm, handleSubmit, onSubmit, setFormData },
  } = useStatementsFilter(loanOffers);
  return (
    <form className={style["st-filter"]} onSubmit={handleSubmit(onSubmit)}>
      {isLoad ? (
        <Loading />
      ) : (
        <>
          <h3 className={style["st-filter__title"]}>Выбрать автомобиль</h3>
          <div className={style["st-filter__line"]}>
            <BrandModelSelect
              setOptions={setFormData}
              propsOptions={formData}
            />
          </div>
          <RangeFilter addToForm={addToForm} />
          <h3 className={style["st-filter__title"]}>Контактные данные</h3>
          <div className={style["st-filter__line"]}>
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
          </div>
          <SentenceLink mode="white" />
          <Button mode="button--height" type="submit">
            Получить предложение
          </Button>
        </>
      )}
    </form>
  );
}

export { StatementsFilter };
