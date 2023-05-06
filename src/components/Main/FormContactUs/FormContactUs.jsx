import React, { useState, useCallback } from "react";
import { SentenceLink } from "../../SentenceLink/SentenceLink";
import style from "./FormContactUs.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaContactForm from "../../../helpers/yup/yup";
import { Form } from "./Form";
import { usePostData } from "../../../hooks/usePostData";
import { Loading } from "../../UI/Loader/Loading";

function FormContactUs() {
  const [connectType, setConnectType] = useState({});
  const [isEmpty, setEmpty] = useState(false);
  const { error, loading, postingData } = usePostData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schemaContactForm) });
  const onSubmit = (data) => submitForm({ ...data, ...connectType });

  function submitForm(data) {
    if (Object.keys(data).length < 3) {
      return setEmpty(true);
    }
    postingData("call_me", data);
    !error && reset();
  }
  const addType = useCallback(
    (field, fieldValue) => {
      let data = {};
      data[field] = fieldValue;
      setConnectType(data);
    },
    [connectType]
  );
  return (
    <section className={style.contact} id="contact">
      <h2 className={style.contact__title}>Есть вопросы? Мы свяжемся с вами</h2>
      {loading && <Loading  height={10} />}
      {!loading && (
        <Form
          style={style}
          addType={addType}
          onSubmit={onSubmit}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          isEmpty={isEmpty}
        />
      )}

      <SentenceLink mode="contact" />
    </section>
  );
}

export { FormContactUs };
