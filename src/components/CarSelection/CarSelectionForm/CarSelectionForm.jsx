import React, { useState } from "react";
import style from "./CarSelectionForm.module.scss";
import { Input } from "../../UI/Input/Input";
import { Loading } from "../../UI/Loader/Loading";
import { InputNumber } from "../../UI/InputNumber/InputNumber";
import { RangeUI } from "../../UI/Range/Range";
import { Textarea } from "../../UI/Textarea/Textarea";
import { SentenceLink } from "../../SentenceLink/SentenceLink";
import { Button } from "../../UI/Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaContactForm from "../../../helpers/yup/yup";
import { usePostData } from "../../../hooks/usePostData";
function CarSelectionForm() {
  const [initialPrize, setInitialPrize] = useState(4140000);
  const [text, setText] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schemaContactForm) });
  const onSubmit = (data) =>
    submitForm({ ...data, description: text, initial_fee: initialPrize });
  const { error, loading, postingData } = usePostData();
  function submitForm(data) {
    postingData("declaration_сar_selection", data);
    !error && reset();
  }

  return (
    <>
      {loading ? (
        <Loading height={30} width={500} />
      ) : (
        <form
          className={style["selected-form"]}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h4 className={style["selected-form__title"]}>Ваши контакты</h4>
          <div className={style["input-section"]}>
            <Input
              id="user_name"
              {...register("user_name")}
              isValid={!errors.user_name}
              placeholder="Имя"
              mode="input--light-gray"
            />
            <Input
              id="phone"
              {...register("phone")}
              isValid={!errors.phone}
              placeholder="Телефон"
              mode="input--light-gray"
            />
          </div>
          <h4 className={style["selected-form__title"]}>
            Первоночальный взнос
          </h4>
          <div className={style["input-section-bottom"]}>
            <RangeUI
              MIN={150000}
              MAX={6000000}
              center={4140000}
              currency="₽"
              setRange={setInitialPrize}
            />
            <InputNumber
              mode="--light-gray"
              currency="₽"
              value={initialPrize}
            />
          </div>
          <h4 className={style["selected-form__title"]}>Ваш комментарий</h4>
          <Textarea onChange={(e) => setText(e.target.value)} />
          <SentenceLink />
          <Button type="submit">Отправить заявку</Button>
        </form>
      )}
    </>
  );
}

export { CarSelectionForm };
