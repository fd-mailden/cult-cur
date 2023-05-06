import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaFormMail from "../../../helpers/yup/yupMailForm";
import { usePostData } from "../../../hooks/usePostData";
import { getDate } from "../../../helpers/getDate";
const checkBox = {
  anti_theft_device: false,
  installment_plan: false,
  auto_pledge: false,
};
export function useCarInsurance() {
  const { error, loading, postingData } = usePostData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schemaFormMail) });
  const [selectData, setSelectData] = useState(checkBox);
  const [isInvalid, onInvalid] = useState(false);
  const onSubmit = (data) => submitForm({ ...data, ...selectData });
  function submitForm(data) {
    if (Object.keys(data).length < 14) {
      return onInvalid(true);
    }
    data.date = getDate();
    postingData("car_insurance", data);
    onInvalid(false);
    setSelectData(checkBox);
    reset();
  }

  return {
    models: { errors, error, loading, register, isInvalid, selectData },
    commands: { handleSubmit, onSubmit , setSelectData},
  };
}
